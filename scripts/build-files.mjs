#!/usr/bin/env node
// Gera o files.json lendo as pastas de cada categoria.
// Uso: node scripts/build-files.mjs
//
// Regras:
// - Cada página é uma pasta <categoria>/<nome>/ com um index.html dentro.
// - Pastas que começam com "_" ou "." são ignoradas (ex.: _modelo).
// - project.json (opcional) na pasta da página: { "title", "description", "date", "icon" }.
//   Sem project.json, usa o <title> e a <meta name="description"> do index.html.
//   Sem data, usa a data do primeiro commit da pasta no git (ou hoje).
// - Itens escritos à mão no files.json com "manual": true são mantidos.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const CATEGORIAS = ['projects', 'tools', 'games', 'educacao']; // mesma lista de assets/app.js
const SAIDA = join(RAIZ, 'files.json');

const lerJSON = (f) => { try { return JSON.parse(readFileSync(f, 'utf8')); } catch (e) { if (existsSync(f)) console.warn(`⚠️  JSON inválido: ${f} (${e.message})`); return null; } };
const tag = (html, re) => (html.match(re)?.[1] || '').replace(/\s+/g, ' ').trim();
const bonito = (n) => n.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const hoje = () => new Date().toISOString().slice(0, 10);

function dataGit(pasta) {
  try {
    const out = execFileSync('git', ['log', '--diff-filter=A', '--follow', '--format=%as', '--', join(pasta, 'index.html')],
      { cwd: RAIZ, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim().split('\n').filter(Boolean);
    return out.at(-1) || '';
  } catch { return ''; }
}

const antigo = lerJSON(SAIDA)?.categories || {};
const categories = {};
let total = 0;

for (const cat of CATEGORIAS) {
  const dirCat = join(RAIZ, cat);
  const itens = [];
  if (existsSync(dirCat)) {
    for (const nome of readdirSync(dirCat).sort()) {
      if (nome.startsWith('_') || nome.startsWith('.')) continue;
      const pasta = join(dirCat, nome);
      if (!statSync(pasta).isDirectory()) continue;
      const index = join(pasta, 'index.html');
      if (!existsSync(index)) { console.warn(`⚠️  ${cat}/${nome}/ não tem index.html — ignorada`); continue; }
      const meta = lerJSON(join(pasta, 'project.json')) || {};
      const html = readFileSync(index, 'utf8');
      const item = {
        name: nome,
        title: meta.title || tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || bonito(nome),
        path: `${cat}/${nome}/`,
        description: meta.description || tag(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i),
        date: meta.date || dataGit(`${cat}/${nome}`) || hoje(),
      };
      if (meta.icon) item.icon = meta.icon;
      if (!item.description) delete item.description;
      itens.push(item);
    }
  }
  // mantém entradas manuais (ex.: links para fora do repositório)
  for (const m of antigo[cat] || []) if (m && m.manual && !itens.some((i) => i.name === m.name)) itens.push(m);
  itens.sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(a.title).localeCompare(String(b.title), 'pt-BR'));
  categories[cat] = itens;
  total += itens.length;
}

const json = JSON.stringify({ categories }, null, 2) + '\n';
const mudou = !existsSync(SAIDA) || readFileSync(SAIDA, 'utf8') !== json;
if (mudou) writeFileSync(SAIDA, json);
console.log(`files.json: ${total} arquivo(s) ${mudou ? '(atualizado)' : '(sem mudanças)'}`);
