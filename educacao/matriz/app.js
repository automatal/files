"use strict";
(() => {
  const modules=window.MATRIZ_MODULES, data=window.MATRIZ_CONTENT, icon=window.MATRIZ_ICON;
  const main=document.getElementById("main"), rail=document.getElementById("sidebar"), shade=document.getElementById("shade");
  const dialog=document.getElementById("search-dialog"),searchInput=document.getElementById("search-input");
  const $=(s,root=document)=>root.querySelector(s);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const pad=n=>String(n).padStart(2,"0");
  const norm=s=>String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  const style=m=>'--accent:'+m.color+';--accent-rgb:'+m.rgb;
  const url=(m,l)=>"#aula/"+m.id+"/"+l.id, keyFor=(m,l)=>m.id+"/"+l.id;
  const rows=modules.flatMap(m=>data[m.id].map((l,i)=>({m,l,i,key:keyFor(m,l)})));
  const lessonMap=new Map(rows.map(row=>[row.key,row]));
  const validExercises=new Set(rows.flatMap(r=>r.l.exercises.map((_,i)=>r.key+"/"+i)));
  const total=rows.length, exTotal=validExercises.size, storageKey="matriz-academia-estudo-v1";
  const motionQuery=matchMedia("(prefers-reduced-motion: reduce)"), mobileQuery=matchMedia("(max-width: 860px)");
  let filter="todos", stopTorus=null, previousRoute=null, currentPage="inicio", currentModule=null;
  function load(){
    try { const obj=JSON.parse(localStorage.getItem(storageKey)||"{}");return obj&&typeof obj==="object"&&!Array.isArray(obj)?obj:{}; }
    catch { return {}; }
  }
  const saved=load();
  const state={done:new Set(),correct:new Set(),last:saved.last,motion:saved.motion};
  function merge(obj){
    if(Array.isArray(obj.done))for(const k of obj.done)if(lessonMap.has(k)) state.done.add(k);
    if(Array.isArray(obj.correct))for(const k of obj.correct)if(validExercises.has(k))state.correct.add(k);
  }
  merge(saved);
  function save(){
    try{
      merge(load());
      localStorage.setItem(storageKey,JSON.stringify({last:state.last,motion:state.motion,done:[...state.done],correct:[...state.correct]}));
      return true;
    }catch{return false;}
  }
  const moving=()=>typeof state.motion==="boolean"?state.motion:!motionQuery.matches;
  function syncMotion(){
    const enabled=moving(),b=$("#motion-toggle");
    document.documentElement.classList.toggle("reduce-motion",!enabled);
    b.setAttribute("aria-pressed",String(enabled));b.title=enabled?"Pausar animações":"Ativar animações";b.setAttribute("aria-label",b.title);b.innerHTML=icon(enabled?"motion":"pause",16);
    window.dispatchEvent(new Event("matriz-motion"));
  }
  function next(){
    return (lessonMap.has(state.last)&&!state.done.has(state.last)?lessonMap.get(state.last):null)||rows.find(r=>!state.done.has(r.key))||rows[0];
  }
  const pct=(n,d)=>Math.round(100*n/d);
  const countDone=m=>data[m.id].filter(l=>state.done.has(keyFor(m,l))).length;
  const bar=(n,d)=>'<span class="progress-track" role="progressbar" aria-label="Aulas concluídas" aria-valuemin="0" aria-valuemax="'+d+'" aria-valuenow="'+n+'"><i style="width:'+pct(n,d)+'%"></i></span>';
  function railProgress(){
    const box=$(".rail-progress");if(box)box.innerHTML='<span class="progress-label">Seu progresso <b>'+pct(state.done.size,total)+'%</b></span>'+bar(state.done.size,total)+'<small>'+state.done.size+' de '+total+' aulas concluídas</small>';
  }
  function buildRail(){
    const nav=(id,text,ico)=>'<a href="#'+id+'" data-nav="'+id+'" class="nav-main">'+icon(ico,18)+text+'</a>';
    rail.innerHTML='<a class="brand" href="#inicio" aria-label="Matriz, início"><img src="./assets/matriz.svg" alt=""><span><span class="brand-name">Matriz<b>.</b></span><span class="brand-sub">MATEMÁTICA</span></span></a><button id="close-rail" type="button" class="icon-button close-rail" aria-label="Fechar menu">'+icon("x",20)+'</button><div class="sidebar-inner"><div class="nav-label">Plataforma</div><nav aria-label="Plataforma">'+nav("inicio","Visão geral","grid")+nav("laboratorio","Laboratório","flask")+nav("progresso","Meu progresso","chart")+'</nav><div class="rail-divider"></div><div class="nav-label">Módulos</div><nav aria-label="Módulos">'+modules.map(m=>'<a class="nav-module" data-module="'+m.id+'" style="'+style(m)+'" href="#modulo/'+m.id+'">'+icon(m.icon,17)+esc(m.short||m.name)+'</a>').join("")+'</nav></div><a class="rail-progress" href="#progresso"></a>';
    railProgress();
    $("#close-rail").addEventListener("click",()=>{setMenu(false);$("#menu-toggle").focus();});
  }
  function highlightRail(){
    for(const link of rail.querySelectorAll("[data-nav],[data-module]")){
      const active=link.dataset.nav===currentPage||link.dataset.module===currentModule;
      link.classList.toggle("active",active);
      if(active)link.setAttribute("aria-current",link.dataset.nav?"page":"location");else link.removeAttribute("aria-current");
    }
    railProgress();
  }
  function crumbs(items){
    $("#breadcrumbs").innerHTML=items.map(([name,href],i)=>(i?'<span class="slash" aria-hidden="true">/</span>':'')+(href?'<a href="'+href+'">'+esc(name)+'</a>':'<span class="current" aria-current="page">'+esc(name)+'</span>')).join("");
  }
  function setMenu(open,focus=false){
    if(mobileQuery.matches){
      document.body.classList.toggle("rail-open",open);shade.hidden=!open;
    }else{document.body.classList.toggle("rail-collapsed",!open);document.body.classList.remove("rail-open");shade.hidden=true;}
    rail.inert=!open;$("#menu-toggle").setAttribute("aria-expanded",String(open));
    if(focus&&open&&mobileQuery.matches)$("#close-rail").focus();
  }
  function syncNavigation(){setMenu(!mobileQuery.matches&&!document.body.classList.contains("rail-collapsed"));$("#menu-toggle").innerHTML=icon(mobileQuery.matches?"menu":"panel",18);}
  function levelMeta(level){return '<span class="badge-level"><span class="level-bars '+(level==="Básico"?"basic":"mid")+'" aria-hidden="true"><i></i><i></i><i></i></span>'+esc(level)+'</span>';}
  function moduleCard(m){
    return '<a class="module-card" href="#modulo/'+m.id+'" style="'+style(m)+'"><div class="card-figure"><span class="art-tag">MÓDULO '+pad(modules.indexOf(m)+1)+'</span>'+MatrizArt(m.id)+'</div><div class="card-copy"><h3>'+esc(m.name)+'</h3><p>'+esc(m.desc)+'</p></div><div class="card-meta"><span>'+icon("book",14)+data[m.id].length+' aulas</span>'+levelMeta(m.level)+'</div></a>';
  }
  function showCards(){$("#cards").innerHTML=modules.filter(m=>filter==="todos"||m.level===filter).map(moduleCard).join("");}
  const metric=(ico,n,word)=>'<span>'+icon(ico,16)+'<span><b>'+n+'</b> '+word+'</span></span>';
  function home(){
    const row=next(),cta=state.done.size===total?"Revisar a trilha":state.last?"Continuar a trilha":"Começar a trilha";
    main.innerHTML='<section class="hero" aria-labelledby="hero-title"><div class="hero-main"><div class="hero-copy"><span class="terminal-tag">'+icon("terminal",14)+' CURSO INTERATIVO</span><h1 id="hero-title">Decodifique a<br><span>matemática.</span></h1><p>Do primeiro cálculo à trigonometria, aprenda com exemplos passo a passo e desafios práticos.</p><div class="hero-actions"><a class="btn primary" href="'+url(row.m,row.l)+'">'+icon("play",15)+cta+'</a><a class="btn secondary" href="#laboratorio">'+icon("flask",16)+'Abrir laboratório</a></div></div><figure class="hero-visual" aria-label="Superfície toroidal gerada por equações paramétricas"><canvas id="torus-canvas" aria-hidden="true"></canvas><span class="figure-flag" aria-hidden="true">SUPERFÍCIE 3D</span><span class="equation-chip" aria-hidden="true"><b>ƒ</b><span id="torus-equation">x = (R + r cos v) cos u</span></span></figure></div><div class="hero-metrics">'+metric("layers",modules.length,"módulos")+metric("book",total,"aulas guiadas")+metric("pen",exTotal,"exercícios")+'</div></section><section id="trilha" class="study-section"><div class="section-heading"><div><h2>Trilha de aprendizagem</h2><p>Siga a sequência ou escolha um módulo para explorar.</p></div><label class="select-wrap">'+icon("filter",15)+'<select id="level-filter" aria-label="Filtrar módulos por nível"><option value="todos">Todos os níveis</option><option value="Básico">Básico</option><option value="Intermediário">Intermediário</option></select>'+icon("down",14)+'</label></div><div class="card-grid" id="cards"></div></section>';
    $("#level-filter").value=filter;$("#level-filter").addEventListener("change",e=>{filter=e.target.value;showCards();});showCards();
    stopTorus=MatrizTorus($("#torus-canvas"),$("#torus-equation"),moving);
  }
  function labFor(m,l){
    if(m.id==="aritmetica")return l&&/inteiro|negativ/.test(l.id)?"reta":"contas";
    if(m.id==="trigonometria")return l&&/radian|circulo|ondas/.test(l.id)?"circulo":"trigonometria";
    if(m.id==="fracoes")return "fracoes";
    if(m.id==="funcoes"||m.id==="equacoes"||m.id==="algebra")return l&&/quadrat|segundo|parabola|discriminante/.test(l.id)?"parabola":"funcoes";
    if(m.id==="geometria")return "trigonometria";
    return null;
  }
  function labShortcut(m,l,label){
    const lab=labFor(m,l);
    return lab?'<a class="lab-shortcut" href="#laboratorio/'+lab+'">'+icon("flask",20)+label+'</a>':"";
  }
  function modulePage(m){
    const ls=data[m.id],done=countDone(m);
    const current=ls.find(l=>keyFor(m,l)===state.last&&!state.done.has(state.last))||ls.find(l=>!state.done.has(keyFor(m,l)))||ls[0];
    const action=done===ls.length?"Revisar módulo":done||ls.some(l=>keyFor(m,l)===state.last)?"Continuar módulo":"Iniciar módulo";
    main.innerHTML='<section class="module-banner" style="'+style(m)+'"><div><div class="micro-label">'+icon("layers",15)+' MÓDULO '+pad(modules.indexOf(m)+1)+' DE '+pad(modules.length)+'</div><h1>'+esc(m.name)+'</h1><p>'+esc(m.intro)+'</p><div class="module-controls"><a class="btn primary" href="'+url(m,current)+'">'+icon("play",15)+action+'</a><span class="module-info">'+icon("book",16)+ls.length+' aulas</span>'+levelMeta(m.level)+'</div></div><div class="module-large-art">'+MatrizArt(m.id)+'</div></section><div class="module-body"><section class="content-panel lesson-index"><div class="panel-title"><h2>Aulas do módulo</h2><span>'+done+' / '+ls.length+' concluídas</span></div>'+ls.map((l,i)=>{const ready=state.done.has(keyFor(m,l));return '<a class="lesson-row" href="'+url(m,l)+'"><span class="row-num '+(ready?"complete":"")+'">'+(ready?icon("check",16):pad(i+1))+'</span><div><h3>'+esc(l.title)+'</h3><p>'+esc(l.goal)+'</p></div><span class="row-state">'+(ready?"Concluída":"Aula "+pad(i+1))+'</span></a>';}).join("")+'</section><aside class="module-side"><div class="content-panel side-panel"><span class="micro-label">'+icon("compass",15)+' NA TRILHA</span><h3>Seu percurso</h3><p>Estude o exemplo e tente refazer o cálculo antes de conferir os exercícios.</p>'+bar(done,ls.length)+'<small>'+done+' de '+ls.length+' aulas concluídas</small></div>'+labShortcut(m,null,"Abrir laboratório")+'</aside></div>';
  }
  function illustrative(m,l){
    if(m.id!=="aritmetica")return "";
    if(l.id==="valor-posicional"&&l.steps.some(s=>s[1].includes("4.073"))){
      return '<figure class="place-demo"><figcaption>O valor de cada casa em 4.073</figcaption><div class="place-cells">'+[["4","Milhares","4.000"],["0","Centenas","0"],["7","Dezenas","70"],["3","Unidades","3"]].map(([n,label,value])=>'<div><small>'+label+'</small><b>'+n+'</b><span>'+value+'</span></div>').join("")+'</div></figure>';
    }
    const add=l.id==="adicao"&&l.problem.includes("278")&&l.problem.includes("156");
    const sub=l.id==="subtracao"&&l.problem.includes("402")&&l.problem.includes("178");
    if(add||sub){
      const numbers=add?["278","156","434"]:["402","178","224"];
      return '<figure class="place-demo"><figcaption>Organize a conta por posição</figcaption><table class="place-table"><caption class="sr-only">Conta de '+(add?"adição":"subtração")+' alinhada por casas</caption><thead><tr><th></th><th>Centenas</th><th>Dezenas</th><th>Unidades</th></tr></thead><tbody>'+numbers.map((n,i)=>'<tr><th>'+(i===1?(add?"+":"−"):i===2?"=":"")+'</th>'+[...n].map(d=>'<td>'+d+'</td>').join("")+'</tr>').join("")+'</tbody></table></figure>';
    }
    return "";
  }
  const glyphs="01<>+−×/{}01∆xπΣ#";
  function decode(el,content){
    el.textContent=content;if(!moving()||!content)return;
    const start=performance.now();
    function frame(time){
      if(!el.isConnected)return;
      const ratio=Math.min(1,(time-start)/460);
      if(ratio===1||!moving()){el.textContent=content;return;}
      const reveal=Math.floor(ratio*content.length);
      el.textContent=Array.from(content,(c,i)=>i<reveal||c===" "?c:glyphs[(i*7+Math.floor(ratio*15))%glyphs.length]).join("");
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function numericAnswers(raw,question){
    let value=raw.trim().replace(/[−–]/g,"-").replace(/\s/g,""),factor=1;
    if(value.endsWith("%")){
      if(!/em porcentagem|que porcentagem|qual (?:é |foi )?a porcentagem|quantos por cento|qual o percentual/i.test(question))factor=.01;
      value=value.slice(0,-1);
    }
    value=value.replace(/(?:×|x|\*)10\^([+-]?\d+)$/i,"e$1").replace(/^([+-]?)10\^([+-]?\d+)$/,(_,s,n)=>s+"1e"+n);
    function options(s){
      if(!/^[+-]?(?:\d[\d.,]*|[.,]\d+)(?:e[+-]?\d+)?$/i.test(s))return [];
      const out=[];
      function push(n){if(Number.isFinite(n)&&!out.includes(n))out.push(n);}
      if(s.includes(",")){
        if(/^[+-]?(?:[1-9]\d{0,2}(?:\.\d{3})+|\d*),\d+(?:e[+-]?\d+)?$/i.test(s))push(Number(s.replace(/\./g,"").replace(",",".")));
      }else{
        push(Number(s));if(/^[+-]?[1-9]\d{0,2}(?:\.\d{3})+(?:e[+-]?\d+)?$/i.test(s))push(Number(s.replace(/\./g,"")));
      }
      return out;
    }
    const parts=value.split("/");
    if(parts.length===1)return options(parts[0]).map(n=>n*factor);
    if(parts.length!==2)return [];
    return options(parts[0]).flatMap(a=>options(parts[1]).filter(b=>b!==0).map(b=>(a/b)*factor)).filter(Number.isFinite);
  }
  function buildExample(m,l){
    let revealed=0;
    const list=$("#step-list");
    function reveal(end){
      for(let i=revealed;i<end;i++){
        const [title,equation,why]=l.steps[i],block=document.createElement("div");block.className="worked-step";
        block.innerHTML='<span class="step-num">'+pad(i+1)+'</span><div><h3>'+esc(title)+'</h3><div class="calc-line"><span class="sr-only">'+esc(equation)+'</span><span class="eq-visual" aria-hidden="true"></span></div><p>'+esc(why)+'</p></div>';
        list.append(block);decode($(".eq-visual",block),equation);
      }
      revealed=end;const full=end===l.steps.length;
      $("#step-count").textContent=full?"Exemplo completo · "+end+" passos":end+" de "+l.steps.length+" passos";
      $("#more-step").hidden=full;$("#all-steps").hidden=end>=l.steps.length-1;$("#check-example").hidden=!full;
    }
    $("#check-example").innerHTML=illustrative(m,l)+'<div class="check-note"><strong>'+icon("circleCheck",17)+' Como conferir</strong><p>'+esc(l.check)+'</p></div>';
    $("#more-step").addEventListener("click",()=>reveal(revealed+1));$("#all-steps").addEventListener("click",()=>reveal(l.steps.length));reveal(1);
  }
  function buildPractice(m,l){
    const key=keyFor(m,l),drafts=l.exercises.map(()=>({value:"",feedback:"",status:"",hint:false,solution:false}));
    let active=0;
    function tabs(){
      $("#exercise-tabs").innerHTML=l.exercises.map((_,i)=>'<button type="button" data-ex="'+i+'" aria-pressed="'+(i===active)+'" class="'+(i===active?"selected":"")+'">Exercício '+(i+1)+(state.correct.has(key+"/"+i)?icon("check",13):"")+'</button>').join("");
    }
    function show(i){
      active=i;const e=l.exercises[i],d=drafts[i],exKey=key+"/"+i;
      tabs();$("#exercise-body").innerHTML='<p class="exercise-question">'+esc(e.q)+'</p><form id="answer-form" novalidate><label for="answer">Sua resposta</label><div class="answer-row"><input id="answer" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Digite um número ou fração"><button class="btn primary" type="submit">Conferir</button></div></form><div class="answer-feedback" role="status" aria-live="polite"></div><div class="exercise-tools"><button type="button" class="text-button" id="hint-btn" aria-controls="exercise-hint"></button><button type="button" class="text-button" id="solution-btn" aria-controls="exercise-solution"></button></div><div id="exercise-hint" class="ex-note" hidden><strong>Dica</strong><p>'+esc(e.hint)+'</p></div><div id="exercise-solution" class="ex-note solution" hidden><strong>Resolução</strong><p>'+esc(e.solution)+'</p></div>'+(i<l.exercises.length-1?'<button id="next-exercise" class="btn sm next-exercise" type="button">Próximo exercício</button>':'');
      const input=$("#answer"),feedback=$(".answer-feedback"),h=$("#hint-btn"),s=$("#solution-btn");input.value=d.value;
      function apply(){
        const solved=state.correct.has(exKey);feedback.textContent=d.feedback||(solved?"Você já acertou este exercício.":"");
        feedback.className="answer-feedback "+(d.status||(solved?"right":""));
        $("#exercise-hint").hidden=!d.hint;$("#exercise-solution").hidden=!d.solution;
        h.innerHTML=icon("bulb",15)+(d.hint?"Ocultar dica":"Ver dica");h.setAttribute("aria-expanded",String(d.hint));
        s.textContent=d.solution?"Ocultar resolução":"Ver resolução";s.setAttribute("aria-expanded",String(d.solution));
      }
      h.onclick=()=>{d.hint=!d.hint;apply();};s.onclick=()=>{d.solution=!d.solution;apply();};
      input.oninput=()=>{d.value=input.value;};
      $("#answer-form").onsubmit=ev=>{
        ev.preventDefault();const numbers=numericAnswers(input.value,e.q);d.value=input.value;
        if(!numbers.length){d.status="warn";d.feedback="Digite um número, como 2,5, ou uma fração, como 3/4.";apply();input.focus();return;}
        if(numbers.some(n=>Math.abs(n-e.a)<=1e-9*Math.max(1,Math.abs(e.a)))){
          d.status="right";d.feedback="Resposta correta. Confira o raciocínio abaixo.";d.solution=true;state.correct.add(exKey);save();tabs();
        }else{d.status="warn";d.feedback="Ainda não chegou ao resultado. Use a dica e tente outra vez.";d.hint=true;}
        apply();
      };
      if($("#next-exercise"))$("#next-exercise").onclick=()=>{show(i+1);$("#answer").focus({preventScroll:true});};apply();
    }
    $("#exercise-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-ex]");if(b)show(Number(b.dataset.ex));});show(0);
  }
  function lessonPage(m,l){
    const ls=data[m.id],i=ls.indexOf(l),key=keyFor(m,l),n=rows.findIndex(r=>r.key===key),after=rows[n+1],before=rows[n-1];
    const wasDone=state.done.has(key),advance=after?"Próxima aula":"Ver progresso";
    state.last=key;save();
    const jumps='<button type="button" data-scroll="concept">Conceito</button><button type="button" data-scroll="example">Exemplo guiado</button><button type="button" data-scroll="practice">Exercícios</button>';
    main.innerHTML='<div class="reading" style="'+style(m)+'"><header class="inner-head lesson-head"><div class="micro-label"><a href="#modulo/'+m.id+'">'+esc(m.short||m.name)+'</a><span>/</span> AULA '+pad(i+1)+' DE '+pad(ls.length)+'</div><h1>'+esc(l.title)+'</h1><p>'+esc(l.goal)+'</p></header><nav class="lesson-jump-mobile" aria-label="Atalhos da aula">'+jumps+'</nav><div class="reading-layout"><div class="lesson-main"><section id="concept" class="content-panel reading-panel"><div class="content-label">'+icon("book",16)+' CONCEITO</div><h2>Entenda a ideia</h2>'+l.theory.map(t=>'<p>'+esc(t)+'</p>').join("")+'</section><section id="example" class="content-panel reading-panel"><div class="content-label">'+icon("terminal",16)+' EXEMPLO GUIADO</div><h2>Resolva passo a passo</h2><p class="problem">'+esc(l.problem)+'</p><div id="step-list"></div><div class="step-controls"><button type="button" class="btn" id="more-step">Próximo passo</button><button type="button" class="text-button" id="all-steps">Mostrar todos</button><span id="step-count" role="status"></span></div><div id="check-example" hidden></div><details class="pitfall"><summary>'+icon("bulb",16)+' Um erro comum '+icon("down",15)+'</summary><p>'+esc(l.pitfall)+'</p></details></section><section id="practice" class="content-panel reading-panel"><div class="content-label">'+icon("pen",16)+' PRÁTICA</div><h2>Agora é com você</h2><div id="exercise-tabs" class="exercise-tabs" role="group" aria-label="Escolher exercício"></div><div id="exercise-body"></div></section><div class="finish-panel"><div><h3 id="finish-title">'+(wasDone?"Aula concluída":"Terminou esta aula?")+'</h3><p id="finish-detail">'+(wasDone?"Você pode voltar aqui para revisar.":"Marque a aula quando conseguir explicar o cálculo com suas palavras.")+'</p></div><button type="button" class="btn primary" id="finish-lesson">'+icon(wasDone?"play":"check",16)+(wasDone?advance:"Concluir aula")+'</button></div><nav class="lesson-prev-next" aria-label="Outras aulas">'+(before?'<a href="'+url(before.m,before.l)+'">Aula anterior</a>':'<span></span>')+'<a href="#modulo/'+m.id+'">Todas as aulas do módulo</a></nav></div><aside class="lesson-toc"><div class="content-panel side-panel"><div class="content-label">'+icon("list",16)+' NESTA AULA</div><nav aria-label="Seções da aula">'+jumps+'</nav></div>'+labShortcut(m,l,"Testar no laboratório")+'</aside></div></div>';
    main.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:moving()?"smooth":"instant"})));
    buildExample(m,l);buildPractice(m,l);
    $("#finish-lesson").onclick=()=>{
      if(state.done.has(key)){location.hash=after?url(after.m,after.l):"#progresso";return;}
      state.done.add(key);const persisted=save();railProgress();
      $("#finish-title").textContent="Aula concluída";$("#finish-detail").textContent=persisted?"Seu progresso foi atualizado neste navegador.":"Seu progresso ficará disponível durante esta visita.";
      $("#finish-lesson").innerHTML=icon("play",15)+advance;
    };
  }
  function progress(){
    const d=state.done.size,row=next();
    const stats=[["book",d+" / "+total,"Aulas concluídas"],["pen",state.correct.size+" / "+exTotal,"Exercícios acertados"],["target",pct(d,total)+"%","Trilha concluída"]];
    main.innerHTML='<div class="inner-head"><div class="micro-label">'+icon("chart",16)+' ACOMPANHAMENTO</div><h1>Meu progresso</h1><p>Veja o que você já estudou e retome a trilha de onde parou.</p></div><div class="progress-stats">'+stats.map(([ico,n,label])=>'<div class="content-panel stat-item">'+icon(ico)+'<b>'+n+'</b><span>'+label+'</span></div>').join("")+'</div><section class="content-panel resume-panel"><div><div class="content-label">'+icon("bookmark",15)+(d===total?" REVISÃO":" PRÓXIMA AULA")+'</div><h2>'+esc(row.l.title)+'</h2><p>'+esc(row.m.name)+' · Aula '+pad(row.i+1)+'</p></div><a class="btn primary" href="'+url(row.m,row.l)+'">'+icon("play",15)+(d===total?"Revisar aula":state.last?"Retomar estudos":"Começar a trilha")+'</a></section><section class="content-panel progress-by"><h2>Progresso por módulo</h2>'+modules.map(m=>{
      const ls=data[m.id],n=countDone(m),ex=ls.reduce((a,l)=>a+l.exercises.filter((_,i)=>state.correct.has(keyFor(m,l)+"/"+i)).length,0);
      return '<a class="progress-row" href="#modulo/'+m.id+'" style="'+style(m)+'"><span class="progress-mod-icon">'+icon(m.icon,21)+'</span><div><h3>'+esc(m.name)+'</h3><small>'+n+' de '+ls.length+' aulas · '+ex+' exercícios acertados</small></div><div class="progress-numeric">'+bar(n,ls.length)+'<b>'+pct(n,ls.length)+'%</b></div></a>';
    }).join("")+'</section><p class="tip-foot">'+icon("panel",15)+' O progresso fica salvo neste navegador e dispositivo.</p>';
  }
  function go(){
    if(stopTorus){stopTorus();stopTorus=null;}
    if(dialog.open)dialog.close();if(mobileQuery.matches)setMenu(false);
    const hash=location.hash.slice(1),parts=hash.split("/"),kind=parts[0]||"inicio";
    const m=modules.find(x=>x.id===parts[1]),l=m&&data[m.id].find(x=>x.id===parts[2]);
    let label="Visão geral";currentPage=kind;currentModule=null;
    if(kind==="modulo"&&m){label=m.name;currentModule=m.id;crumbs([["Plataforma","#inicio"],["Módulos","#trilha"],[m.short||m.name]]);modulePage(m);}
    else if(kind==="aula"&&m&&l){label=l.title;currentModule=m.id;crumbs([["Plataforma","#inicio"],[m.short||m.name,"#modulo/"+m.id],["Aula "+pad(data[m.id].indexOf(l)+1)]]);lessonPage(m,l);}
    else if(kind==="laboratorio"){label="Laboratório";crumbs([["Plataforma","#inicio"],[label]]);MatrizLab(main,parts[1]);}
    else if(kind==="progresso"){label="Meu progresso";crumbs([["Plataforma","#inicio"],[label]]);progress();}
    else{currentPage="inicio";crumbs([["Plataforma","#inicio"],[label]]);home();}
    highlightRail();document.title=label+" · Matriz";
    if(hash==="trilha")requestAnimationFrame(()=>$("#trilha").scrollIntoView({behavior:"instant"}));else window.scrollTo({top:0,behavior:"instant"});
    if(previousRoute!==null&&hash!==previousRoute)main.focus({preventScroll:true});previousRoute=hash;
  }
  const searchIndex=rows.map(row=>({row,fields:[norm(row.l.title),norm(row.m.name),norm(row.l.goal),norm(row.l.theory.join(" ")+" "+row.l.problem)]}));
  function renderSearch(){
    const term=norm(searchInput.value.trim()),tokens=term.split(/\s+/).filter(Boolean);
    const mods=modules.filter(m=>tokens.every(t=>norm(m.name).includes(t)));
    const rank=term?searchIndex.map(({row,fields})=>{
      const score=tokens.map(t=>{const i=fields.findIndex(f=>f.includes(t));return i<0?0:[8,5,3,1][i];});
      return {row,score:score.every(Boolean)?score.reduce((a,b)=>a+b,0):0};
    }).filter(v=>v.score>0).sort((a,b)=>b.score-a.score).map(a=>a.row):[next()];
    const count=mods.length+rank.length;
    $("#search-summary").textContent=term?(count===0?"Nenhum resultado. Tente um termo como “fração” ou “ângulo”.":count+(count===1?" resultado encontrado.":" resultados encontrados.")):"Escolha um módulo ou pesquise por um assunto.";
    const group=(name,html)=>html?'<h3 class="search-group">'+name+'</h3>'+html:'';
    $("#search-results").innerHTML=group("Módulos",mods.map(m=>'<a class="search-result" href="#modulo/'+m.id+'" style="'+style(m)+'">'+icon(m.icon,17)+'<span>'+esc(m.name)+'</span><small>Módulo</small></a>').join(""))+group(term?"Aulas":"Próxima aula",rank.map(({m,l})=>'<a class="search-result" href="'+url(m,l)+'" style="'+style(m)+'">'+icon("book",16)+'<span>'+esc(l.title)+'</span><small>'+esc(m.short||m.name)+'</small></a>').join(""));
  }
  function openSearch(){if(dialog.open)return;searchInput.value="";renderSearch();dialog.showModal();document.body.classList.add("dialog-open");searchInput.focus();}
  $("#search-toggle").innerHTML=icon("search",16)+'<span>Buscar aula</span><kbd>Ctrl K</kbd>';$("#dialog-search-icon").innerHTML=icon("search",18);$("#close-search").innerHTML=icon("x",18);
  $("#menu-toggle").onclick=()=>setMenu(rail.inert,true);
  shade.onclick=()=>{setMenu(false);$("#menu-toggle").focus();};
  rail.addEventListener("click",e=>{if(mobileQuery.matches&&e.target.closest("a"))setMenu(false);});
  $("#search-toggle").onclick=openSearch;$("#close-search").onclick=()=>dialog.close();
  searchInput.oninput=renderSearch;$("#search-results").onclick=e=>{if(e.target.closest("a"))dialog.close();};
  dialog.addEventListener("close",()=>document.body.classList.remove("dialog-open"));
  dialog.addEventListener("click",e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
  searchInput.addEventListener("keydown",e=>{const first=$("#search-results a");if(first&&(e.key==="ArrowDown"||e.key==="Enter")){e.preventDefault();if(e.key==="Enter")first.click();else first.focus();}});
  $("#motion-toggle").onclick=()=>{state.motion=!moving();save();syncMotion();};
  $(".skip-link").onclick=e=>{e.preventDefault();main.focus();};
  window.addEventListener("keydown",e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();if(dialog.open)dialog.close();else openSearch();}
    if(document.body.classList.contains("rail-open")&&e.key==="Escape"){setMenu(false);$("#menu-toggle").focus();}
    if(document.body.classList.contains("rail-open")&&e.key==="Tab"){
      const links=rail.querySelectorAll("a,button"),first=links[0],last=links[links.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  window.addEventListener("storage",e=>{if(e.key===storageKey){const newer=load();merge(newer);if(newer.last)state.last=newer.last;state.motion=newer.motion;syncMotion();railProgress();if(currentPage==="progresso")progress();}});
  mobileQuery.addEventListener("change",syncNavigation);motionQuery.addEventListener("change",syncMotion);
  buildRail();syncNavigation();syncMotion();window.addEventListener("hashchange",go);go();
})();
