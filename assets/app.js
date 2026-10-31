/* ARQUIVOS.EXE — lê files.json e mostra as páginas como arquivos.
   Para criar uma categoria nova: adicione aqui E em scripts/build-files.mjs. */
(() => {
  'use strict';
  const PASTAS = [
    { id: 'projects', nome: 'Projetos', icone: '👾', cor: '#ff1f4b', tag: 'PRJ' },
    { id: 'tools',    nome: 'Tools',    icone: '🛠️', cor: '#a855f7', tag: 'TOOL' },
    { id: 'games',    nome: 'Games',    icone: '🎮', cor: '#ff4fa3', tag: 'GAME' },
    { id: 'educacao', nome: 'Educação', icone: '📚', cor: '#38bdf8', tag: 'EDU' },
  ];
  const TODOS = { id: 'todos', nome: 'Todos', icone: '🗂️' };
  const $ = (s) => document.querySelector(s);
  const el = {
    pastas: $('#lista-pastas'), arquivos: $('#arquivos'), vazio: $('#vazio'),
    caminho: $('#caminho'), contagem: $('#contagem'), detalhe: $('#detalhe'),
    busca: $('#busca'), modo: $('#modo'), subir: $('#subir'),
  };
  let dados = {};           // { projects: [...], tools: [...], ... }
  let atual = 'todos';

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Ícone genérico de arquivo (SVG) com a cor e a sigla da categoria
  function iconeArquivo(p) {
    return `<svg viewBox="0 0 24 28" aria-hidden="true" shape-rendering="crispEdges">
      <path d="M2 1h14l6 6v20H2z" fill="#0a0016" stroke="${p.cor}" stroke-width="2"/>
      <path d="M16 1v6h6" fill="none" stroke="${p.cor}" stroke-width="2"/>
      <rect x="5" y="11" width="11" height="2" fill="#b9a1d9"/><rect x="5" y="15" width="14" height="2" fill="#b9a1d9"/>
      <rect x="0" y="19" width="24" height="7" fill="${p.cor}"/>
      <text x="12" y="25" text-anchor="middle" font-family="monospace" font-size="5.5" font-weight="700" fill="#fff">${p.tag}</text>
    </svg>`;
  }

  // Caminho relativo (projects/x/) ou URL completa ("url": "https://...")
  const linkDe = (f, pasta) => f.url || f.path || `${pasta}/${f.name}/`;

  function itens(id) {
    const lista = id === 'todos'
      ? PASTAS.flatMap((p) => (dados[p.id] || []).map((f) => ({ ...f, _p: p })))
      : (dados[id] || []).map((f) => ({ ...f, _p: PASTAS.find((p) => p.id === id) }));
    if (id === 'todos') lista.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    const q = el.busca.value.trim().toLowerCase();
    return q ? lista.filter((f) => `${f.title} ${f.name} ${f.description || ''}`.toLowerCase().includes(q)) : lista;
  }

  function desenharPastas() {
    el.pastas.innerHTML = [TODOS, ...PASTAS].map((p) => {
      const qtd = p.id === 'todos' ? PASTAS.reduce((n, x) => n + (dados[x.id] || []).length, 0) : (dados[p.id] || []).length;
      return `<li><button type="button" class="pasta" data-id="${p.id}" aria-current="${p.id === atual}">
        <span aria-hidden="true">${p.icone}</span><span class="nome">${esc(p.nome)}</span><span class="qtd" aria-label="${qtd} arquivos">${qtd}</span></button></li>`;
    }).join('');
  }

  function desenhar() {
    const pasta = PASTAS.find((p) => p.id === atual);
    el.caminho.textContent = `ARQUIVOS\\${pasta ? pasta.nome.toUpperCase() + '\\' : ''}`;
    el.subir.disabled = !pasta;
    desenharPastas();
    const lista = itens(atual);
    el.arquivos.innerHTML = lista.map((f) => {
      const titulo = f.title || f.name;
      const dica = [titulo, f.description, f.date].filter(Boolean).join(' · ');
      return `<li><a class="arquivo" href="${esc(linkDe(f, f._p.id))}" target="_blank" rel="noopener"
          title="${esc(dica)}" data-detalhe="${esc(dica)}">
        ${iconeArquivo(f._p)}<span class="nome">${esc(titulo)}</span>
        <span class="extra">${esc(f._p.nome)}${f.date ? ' · ' + esc(f.date) : ''}</span></a></li>`;
    }).join('');
    const q = el.busca.value.trim();
    el.vazio.hidden = lista.length > 0;
    el.vazio.textContent = q ? `Nenhum arquivo encontrado para "${q}".` : 'Pasta vazia. Crie uma pasta com index.html aqui dentro (veja o README).';
    el.contagem.textContent = `${lista.length} ${lista.length === 1 ? 'arquivo' : 'arquivos'}`;
    el.detalhe.textContent = pasta ? `Pasta ${pasta.nome} · clique para abrir em nova aba` : 'Clique em um arquivo para abrir em nova aba';
  }

  function abrirPasta(id, foco) {
    atual = [TODOS, ...PASTAS].some((p) => p.id === id) ? id : 'todos';
    if (location.hash.slice(1) !== atual) history.replaceState(null, '', atual === 'todos' ? location.pathname + location.search : '#' + atual);
    desenhar();
    if (foco) el.pastas.querySelector(`[data-id="${atual}"]`)?.focus();
  }

  // Eventos
  el.pastas.addEventListener('click', (e) => { const b = e.target.closest('.pasta'); if (b) abrirPasta(b.dataset.id); });
  el.pastas.addEventListener('keydown', (e) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const ids = [TODOS, ...PASTAS].map((p) => p.id);
    const passo = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
    e.preventDefault();
    abrirPasta(ids[(ids.indexOf(atual) + passo + ids.length) % ids.length], true);
  });
  el.arquivos.addEventListener('keydown', (e) => {
    const links = [...el.arquivos.querySelectorAll('.arquivo')];
    const i = links.indexOf(document.activeElement);
    if (i < 0) return;
    const cols = el.arquivos.classList.contains('lista') ? 1
      : getComputedStyle(el.arquivos).gridTemplateColumns.split(' ').length;
    const mov = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols, Home: -i, End: links.length - 1 - i }[e.key];
    if (mov === undefined) return;
    e.preventDefault();
    links[Math.max(0, Math.min(links.length - 1, i + mov))].focus();
  });
  const mostrarDetalhe = (e) => { const a = e.target.closest?.('.arquivo'); if (a) el.detalhe.textContent = a.dataset.detalhe; };
  el.arquivos.addEventListener('mouseover', mostrarDetalhe);
  el.arquivos.addEventListener('focusin', mostrarDetalhe);
  el.busca.addEventListener('input', desenhar);
  el.subir.addEventListener('click', () => abrirPasta('todos'));
  el.modo.addEventListener('click', () => {
    const lista = el.arquivos.classList.toggle('lista');
    el.modo.setAttribute('aria-pressed', lista);
    el.modo.textContent = lista ? '▦' : '☰';
    el.modo.setAttribute('aria-label', lista ? 'Alternar visualização em grade' : 'Alternar visualização em lista');
    try { localStorage.setItem('explorador-modo', lista ? 'lista' : 'grade'); } catch {}
  });
  window.addEventListener('hashchange', () => abrirPasta(location.hash.slice(1)));
  try { if (localStorage.getItem('explorador-modo') === 'lista') el.modo.click(); } catch {}

  // Carrega o manifesto
  fetch('files.json', { cache: 'no-cache' })
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then((j) => { dados = j.categories || j; abrirPasta(location.hash.slice(1)); })
    .catch((err) => {
      console.warn('files.json não carregou:', err);
      abrirPasta(location.hash.slice(1));
      el.vazio.hidden = false;
      el.vazio.textContent = 'Não consegui ler o files.json. Abra o site por um servidor (GitHub Pages), não direto do arquivo.';
    });
})();
