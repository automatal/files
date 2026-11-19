"use strict";
(() => {
  const ico = window.MATRIZ_ICON;
  const fmt = (v, digits=2) => new Intl.NumberFormat("pt-BR", {maximumFractionDigits:digits})
    .format(Math.abs(v)<1e-10 ? 0 : v).replace("-", "−");
  const sign = v => (v < 0 ? " − " : " + ")+fmt(Math.abs(v));
  const formatValue = (n, unit) => fmt(n)+(unit==="°" ? "°" : unit ? " "+unit : "");
  const path = (d, color="var(--accent)", width=2, dash="") =>
    '<path d="'+d+'" stroke="'+color+'" stroke-width="'+width+'" fill="none" stroke-linecap="round" stroke-linejoin="round" '+(dash?'stroke-dasharray="'+dash+'"':'')+'/>';
  const dot = (x,y,color="var(--accent)") => '<circle cx="'+x+'" cy="'+y+'" r="5" fill="'+color+'" stroke="#0d1711" stroke-width="1.5"/>';
  const text = (x,y,s,attrs="") => '<text x="'+x+'" y="'+y+'" '+attrs+'>'+s+'</text>';
  const anchor = 'text-anchor="middle"', grid = 'class="grid-label"', mark = 'class="point-label"';
  const experiments = {
    contas:{title:"Quatro operações",icon:"calc"},
    reta:{title:"Reta numérica",icon:"sum",color:"#64e9a6",rgb:"100,233,166",intro:"Some números inteiros como deslocamentos. Cada passo para a direita aumenta o valor em uma unidade.",task:"Comece em 3 e escolha um deslocamento que termine em −2. Quantas unidades você percorreu?",params:[["a","Posição inicial",-6,6,1,3],["b","Deslocamento",-6,6,1,-5]],module:"aritmetica"},
    fracoes:{title:"Frações",icon:"pie",color:"#bd9bfd",rgb:"189,155,253",intro:"Escolha em quantas partes iguais dividir o círculo e quantas delas pintar. O círculo inteiro representa uma unidade.",task:"Monte 2/3. Depois, experimente 4/6. Compare a área pintada e a porcentagem.",params:[["d","Partes iguais",1,12,1,4],["n","Partes pintadas",0,12,1,3]],module:"fracoes"},
    funcoes:{title:"Função afim",icon:"graph",color:"#61e7ac",rgb:"97,231,172",intro:"A reta representa y = ax + b. O coeficiente a controla a inclinação, e b é a altura em que a reta cruza o eixo y.",task:"Escolha a = 2. Aumente x em uma unidade e observe quantas unidades y sobe. Depois, troque a por −2.",params:[["a","Inclinação (a)",-3,3,.5,2],["b","Valor inicial (b)",-5,5,1,1],["x","Entrada (x)",-4,4,1,2]],module:"funcoes"},
    parabola:{title:"Parábola",icon:"point",color:"#8bc4ff",rgb:"139,196,255",intro:"Na forma y = a(x − h)² + k, o ponto (h, k) é o vértice quando a é diferente de zero. Mova um parâmetro por vez.",task:"Comece com a = 1, h = 0 e k = 0. Mova o vértice para (2, −1) mantendo a abertura para cima.",params:[["a","Abertura (a)",-3,3,1,1],["h","Centro horizontal (h)",-3,3,1,0],["k","Altura central (k)",-4,4,1,0]],module:"funcoes"},
    trigonometria:{title:"Triângulo retângulo",icon:"triangle",color:"#afa8ff",rgb:"175,168,255",intro:"O ângulo destacado define os catetos oposto e adjacente. Use a hipotenusa como referência para calcular os dois.",task:"Fixe o ângulo em 30° e dobre a hipotenusa. Observe o que muda nos lados e o que acontece com o seno.",params:[["angle","Ângulo de referência",10,80,1,30,"°"],["hyp","Hipotenusa",2,12,1,8,"u"]],module:"trigonometria"},
    circulo:{title:"Círculo trigonométrico",icon:"compass",color:"#f6bb78",rgb:"246,187,120",intro:"O raio do círculo vale 1. Ao girar o ponto, sua coordenada horizontal dá o cosseno e a vertical dá o seno. O gráfico ao lado acompanha essa altura.",task:"Compare 30° e 150°. O que acontece com a altura do ponto no círculo? Agora compare 30° e 330° e observe o sinal do seno.",params:[["angle","Ângulo de rotação",0,360,1,45,"°"]],module:"trigonometria"}
  };
  function cartesian(fn, p, range) {
    const x0=48,x1=477,y0=28,y1=225;
    const X=x=>x0+(x+6)*(x1-x0)/12, Y=y=>y1-(y+range)*(y1-y0)/(2*range);
    let svg="";
    for(let x=-6;x<=6;x++){
      svg+=path("M"+X(x)+" "+y0+"V"+y1,"#284034",.85);
      if(x&&x%2===0)svg+=text(X(x),Y(0)+17,fmt(x),anchor+" "+grid);
    }
    const interval=range<=6?2:range<=12?4:5;
    for(let y=0;y<=range;y+=interval){
      for(const sy of (y===0?[0]:[y,-y])){
        svg+=path("M"+x0+" "+Y(sy)+"H"+x1,"#284034",.85);
        if(sy)svg+=text(X(0)-8,Y(sy)+4,fmt(sy),'text-anchor="end" '+grid);
      }
    }
    svg+=path("M"+x0+" "+Y(0)+"H"+x1,"#73917f",1.2)+path("M"+X(0)+" "+y0+"V"+y1,"#73917f",1.2);
    svg+=text(x1+9,Y(0)+4,"x")+text(X(0)+8,y0-9,"y")+text(X(0)-7,Y(0)+16,"0",'text-anchor="end" '+grid);
    let curve="";
    for(let i=0;i<=240;i++){const x=-6+i/20;curve+=(i?"L":"M")+X(x).toFixed(2)+" "+Y(fn(x)).toFixed(2);}
    svg+='<defs><clipPath id="lab-graph-clip"><rect x="'+x0+'" y="'+y0+'" width="'+(x1-x0)+'" height="'+(y1-y0)+'"/></clipPath></defs><g clip-path="url(#lab-graph-clip)">';
    if(p.x!==0&&p.y!==0)svg+=path("M"+X(p.x)+" "+Y(0)+"V"+Y(p.y)+"H"+X(0),"#88a798",1,"3 4");
    svg+=path(curve,"var(--accent)",2.8)+'</g>'+dot(X(p.x),Y(p.y));
    svg+=text(X(p.x)+(p.x>3?-10:9),Y(p.y)+(Y(p.y)<46?17:-9),"("+fmt(p.x)+"; "+fmt(p.y)+")",'text-anchor="'+(p.x>3?"end":"start")+'" '+mark);
    return svg;
  }
  function circlePlot(degrees) {
    const cx=115,cy=122,r=72,left=263,right=483,theta=degrees*Math.PI/180;
    const cos=Math.cos(theta),sin=Math.sin(theta), px=cx+r*cos,py=cy-r*sin, X=d=>left+(right-left)*d/360;
    let svg=path("M25 "+cy+"H206","#718a77",1.1)+path("M"+cx+" 34V211","#718a77",1.1)
      +'<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#759280" fill="none" stroke-width="1.6"/>';
    svg+=text(206,cy-7,"x")+text(cx+8,37,"y")+text(cx-7,cy+17,"0",'text-anchor="end" '+grid);
    svg+=text(cx+r+2,cy+15,"1",grid)+text(cx+6,cy-r-5,"1",grid)+text(cx+6,cy+r+15,"−1",grid);
    svg+=text(cx,21,"Círculo unitário",anchor+" "+grid)+text((left+right)/2,21,"y = sen θ",anchor+" "+grid);
    for(const y of [-1,0,1]){
      svg+=path("M"+left+" "+(cy-y*r)+"H"+right,y===0?"#718a77":"#2c4033",y===0?1.1:1)
        +text(left-7,cy-y*r+4,fmt(y),'text-anchor="end" '+grid);
    }
    for(const d of [0,90,180,270,360]){
      svg+=path("M"+X(d)+" "+(cy-r)+"V"+(cy+r),"#2c4033",1)
        +text(X(d),cy+r+20,d+"°",anchor+" "+grid);
    }
    let wave="",part="";
    for(let d=0;d<=360;d+=2)wave+=(d?"L":"M")+X(d).toFixed(2)+" "+(cy-r*Math.sin(d*Math.PI/180)).toFixed(2);
    for(let d=0;d<=degrees;d++)part+=(d?"L":"M")+X(d).toFixed(2)+" "+(cy-r*Math.sin(d*Math.PI/180)).toFixed(2);
    svg+=path(wave,"#6f8b77",1.5)+path(part,"var(--accent)",2.8);
    svg+=path("M"+px+" "+py+"H"+X(degrees),"#779587",.9,"3 5");
    svg+=path("M"+cx+" "+cy+"H"+px,"#73dcac",2.3)+path("M"+px+" "+cy+"V"+py,"#c0a7ff",2.3)+path("M"+cx+" "+cy+"L"+px+" "+py,"var(--accent)",2.1);
    svg+=dot(px,py)+dot(X(degrees),py)+text(cx,233,"("+fmt(cos,3)+"; "+fmt(sin,3)+")",anchor+" "+mark);
    return {svg,description:"Círculo unitário com ponto em ("+fmt(cos,3)+"; "+fmt(sin,3)+"). O gráfico do seno em "+degrees+" graus tem altura "+fmt(sin,3)+".",
      eq:"θ = "+degrees+"°",calc:"cos θ ≈ "+fmt(cos,3)+"  ·  sen θ ≈ "+fmt(sin,3),
      why:degrees===0||degrees===360?"Em 0° e em 360°, o ponto está em (1; 0). Uma volta completa devolve o ponto à posição inicial.":"Ao ler da esquerda para a direita, o ângulo cresce no gráfico. Sua altura acompanha a coordenada vertical do ponto no círculo."};
  }
  function plot(id,v){
    if(id==="circulo")return circlePlot(v.angle);
    if(id==="funcoes"){
      const y=v.a*v.x+v.b;
      const eq=v.a===0?fmt(v.b):(v.a===1?"x":v.a===-1?"−x":fmt(v.a)+"x")+(v.b?sign(v.b):"");
      const range=Math.max(6,Math.ceil((Math.abs(y)+1)/2)*2);
      return {svg:cartesian(x=>v.a*x+v.b,{x:v.x,y},range),description:"Reta y = "+eq+" com entrada "+fmt(v.x)+" e saída "+fmt(y)+".",eq:"f(x) = "+eq,calc:"f("+fmt(v.x)+") = ("+fmt(v.a)+") × ("+fmt(v.x)+")"+sign(v.b)+" = "+fmt(y),why:"Quando x aumenta 1, a saída varia "+fmt(v.a)+". Em x = 0, a saída é "+fmt(v.b)+"."};
    }
    if(id==="parabola"){
      const base=v.h===0?"x²":"(x"+sign(-v.h)+")²";
      const eq=v.a===0?fmt(v.k):(v.a===1?"":v.a===-1?"−":fmt(v.a))+base+(v.k?sign(v.k):"");
      return {svg:cartesian(x=>v.a*(x-v.h)**2+v.k,{x:v.h,y:v.k},8),description:v.a===0?"Reta horizontal na altura "+fmt(v.k):"Parábola de vértice ("+fmt(v.h)+"; "+fmt(v.k)+").",eq:"y = "+eq,calc:"Em x = "+fmt(v.h)+", o termo ao quadrado vale 0. Assim, y = "+fmt(v.k)+".",
        why:v.a===0?"Com a = 0, a função é constante. O gráfico é uma reta horizontal.":v.a>0?"A abertura é para cima. O vértice marca o menor valor de y.":"A abertura é para baixo. O vértice marca o maior valor de y."};
    }
    if(id==="reta"){
      const X=x=>41+(x+12)/24*438,from=X(v.a),to=X(v.a+v.b),sum=v.a+v.b;
      let svg=path("M30 155H490","#82998a",1.5);
      for(let x=-12;x<=12;x++){
        svg+=path("M"+X(x)+" 151v8","#708678",1.1);if(x%2===0)svg+=text(X(x),178,fmt(x),anchor+" "+grid);
      }
      if(v.b)svg+=path("M"+from+" 149V105H"+to+"V144","var(--accent)",2.8)+path("M"+(to-4)+" 137l4 8 4-8","var(--accent)",2);
      svg+=dot(from,155,"#f4c17d")+dot(to,155)+text((from+to)/2,84,(v.b>0?"+":"")+fmt(v.b),anchor+' class="large-label"');
      return {svg,description:"Partida em "+v.a+", deslocamento de "+v.b+" e chegada em "+sum+".",
        eq:fmt(v.a)+(v.b<0?" + ("+fmt(v.b)+")":" + "+fmt(v.b))+" = "+fmt(sum),
        calc:"Partida em "+fmt(v.a)+". Chegada em "+fmt(sum)+".",why:v.b===0?"Um deslocamento zero mantém a posição inicial.":"O sinal indica a direção. Percorra "+Math.abs(v.b)+(Math.abs(v.b)===1?" unidade":" unidades")+" para a "+(v.b>0?"direita.":"esquerda.")};
    }
    if(id==="fracoes"){
      const cx=190,cy=112,r=74,ratio=v.n/v.d;
      let svg='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="#211e2d" stroke="var(--accent)" stroke-width="2"/>';
      for(let i=0;i<v.d;i++){
        if(v.d===1){if(v.n)svg+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="var(--accent)" opacity=".69"/>';break;}
        const a=-Math.PI/2+2*Math.PI*i/v.d,b=-Math.PI/2+2*Math.PI*(i+1)/v.d;
        svg+='<path d="M'+cx+' '+cy+'L'+(cx+r*Math.cos(a))+' '+(cy+r*Math.sin(a))+'A'+r+' '+r+' 0 0 1 '+(cx+r*Math.cos(b))+' '+(cy+r*Math.sin(b))+'Z" fill="'+(i<v.n?"var(--accent)":"#282331")+'" fill-opacity="'+(i<v.n?.68:1)+'" stroke="#191821" stroke-width="1.7"/>';
      }
      svg+=text(340,104,fmt(v.n),anchor+' class="large-label"')+path("M313 118h54","var(--accent)",2)+text(340,154,fmt(v.d),anchor+' class="large-label"');
      for(let i=0;i<v.d;i++)svg+='<rect x="'+(100+i*320/v.d)+'" y="212" width="'+(320/v.d-1.5)+'" height="12" rx="2" fill="'+(i<v.n?"var(--accent)":"#393246")+'" opacity=".8"/>';
      const exact=Math.abs(ratio*10000-Math.round(ratio*10000))<1e-8;
      return {svg,description:v.n+" de "+v.d+" partes iguais pintadas.",eq:fmt(v.n)+" / "+fmt(v.d),
        calc:fmt(v.n)+" ÷ "+fmt(v.d)+(exact?" = ":" ≈ ")+fmt(ratio,4)+"  ·  "+fmt(ratio*100)+"% do inteiro",why:"O denominador define o tamanho de cada parte. O numerador conta as partes escolhidas."};
    }
    const t=v.angle*Math.PI/180,adj=v.hyp*Math.cos(t),opp=v.hyp*Math.sin(t);
    const scale=16,bx=118,by=216,rx=bx+adj*scale,ty=by-opp*scale;
    const radius=Math.min(30,adj*scale*.44),sq=Math.min(10,opp*scale*.35,adj*scale*.35);
    let svg='<path d="M'+bx+' '+by+'H'+rx+'V'+ty+'Z" fill="rgba(160,150,250,.1)" stroke="var(--accent)" stroke-width="2.6" stroke-linejoin="round"/>';
    svg+=path("M"+(rx-sq)+" "+by+"v-"+sq+"h"+sq,"#afc1b5",1.5)
      +path("M"+(bx+radius)+" "+by+"A"+radius+" "+radius+" 0 0 0 "+(bx+radius*Math.cos(t))+" "+(by-radius*Math.sin(t)),"#f7c784",2);
    svg+=text(bx-8,by+19,fmt(v.angle)+"°",'text-anchor="end" '+mark)+text((bx+rx)/2,by+21,fmt(adj),anchor)+text(rx+10,(by+ty)/2+4,fmt(opp))+text((bx+rx)/2-9,(by+ty)/2-7,fmt(v.hyp),'text-anchor="end"');
    return {svg,description:"Triângulo retângulo com ângulo de "+v.angle+" graus, hipotenusa "+v.hyp+", lado oposto "+fmt(opp)+" e adjacente "+fmt(adj)+".",eq:"sen "+fmt(v.angle)+"° ≈ "+fmt(Math.sin(t),3),calc:"Oposto ≈ "+fmt(opp)+" u  ·  Adjacente ≈ "+fmt(adj)+" u",why:"Oposto = hipotenusa × seno do ângulo. Adjacente = hipotenusa × cosseno do ângulo. Os valores exibidos são arredondados."};
  }
  window.MatrizLab = function(main, requested) {
    const id=Object.hasOwn(experiments,requested)?requested:"contas",exp=experiments[id];
    const links=Object.entries(experiments).map(([k,e])=>'<a class="lab-tab '+(k===id?"selected":"")+'" '+(k===id?'aria-current="page"':'')+' href="#laboratorio/'+k+'">'+ico(e.icon,16)+e.title+'</a>').join("");
    main.innerHTML='<div class="inner-head"><div class="micro-label">'+ico("flask",16)+' EXPLORAÇÃO VISUAL</div><h1>Laboratório</h1><p>Faça uma previsão, ajuste os valores e acompanhe o raciocínio com seus próprios exemplos.</p></div><nav class="lab-tabs" aria-label="Experimentos">'+links+'</nav><div id="lab-space"></div>';
    const area=main.querySelector("#lab-space");
    if(id==="contas"){window.MatrizConta(area);return;}
    const controls=exp.params.map(([k,label,min,max,step,val,unit])=>'<div class="range-row"><div><label for="range-'+k+'">'+label+'</label><output for="range-'+k+'" id="out-'+k+'">'+formatValue(val,unit)+'</output></div><input id="range-'+k+'" type="range" min="'+min+'" max="'+max+'" value="'+val+'" step="'+step+'"></div>').join("");
    area.innerHTML='<section class="lab-panel" style="--accent:'+exp.color+';--accent-rgb:'+exp.rgb+'"><div class="lab-title"><h2>'+exp.title+'</h2><p>'+exp.intro+'</p></div><div class="lab-layout"><div><svg id="lab-svg" class="lab-svg" viewBox="0 0 520 250" role="img"></svg><div class="lab-readout"><span id="lab-eq"></span><p id="lab-calc"></p></div></div><div class="lab-controls"><h3>Parâmetros</h3>'+controls+'<button class="btn sm" id="lab-reset" type="button">Restaurar valores</button></div></div><p class="lab-why" id="lab-why"></p></section><div class="lab-challenge"><div>'+ico("bulb",22)+'</div><section><h3>Experimente você</h3><p>'+exp.task+'</p></section><a class="btn sm" href="#modulo/'+exp.module+'">'+ico("book",15)+' Aulas do tema</a></div>';
    const v={};
    function update(){
      if(id==="fracoes"){v.n=Math.min(v.n,v.d);area.querySelector("#range-n").max=v.d;}
      for(const [key,,,,,,unit] of exp.params){
        const input=area.querySelector("#range-"+key);input.value=v[key];input.setAttribute("aria-valuetext",formatValue(v[key],unit));
        area.querySelector("#out-"+key).textContent=formatValue(v[key],unit);
      }
      const r=plot(id,v),svg=area.querySelector("#lab-svg");
      svg.innerHTML=r.svg;svg.setAttribute("aria-label",r.description);area.querySelector("#lab-eq").textContent=r.eq;
      area.querySelector("#lab-calc").textContent=r.calc;area.querySelector("#lab-why").textContent=r.why;
    }
    function reset(){for(const [k,,,,,val] of exp.params)v[k]=val;update();}
    for(const [key] of exp.params)area.querySelector("#range-"+key).addEventListener("input",e=>{v[key]=Number(e.target.value);update();});
    area.querySelector("#lab-reset").addEventListener("click",reset);reset();
  };
})();
