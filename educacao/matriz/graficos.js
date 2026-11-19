"use strict";
(() => {
  let serial = 0;
  const tau = Math.PI * 2;
  const rd = x => x * Math.PI / 180;
  const n = x => Number(x.toFixed(2));
  const points = a => a.map(p => p.map(n).join(",")).join(" ");
  const poly = (p, fill, opacity = .85, width = 1.25) =>
    '<polygon points="'+points(p)+'" stroke="currentColor" stroke-opacity="'+opacity+'" fill="'+fill+'" stroke-width="'+width+'" stroke-linejoin="round"/>';
  const line = (x1,y1,x2,y2,opacity=.55,dashed=false,width=1) =>
    '<path d="M'+n(x1)+' '+n(y1)+'L'+n(x2)+' '+n(y2)+'" stroke="currentColor" opacity="'+opacity+'" stroke-width="'+width+'" '+(dashed?'stroke-dasharray="3 4"':'')+' fill="none"/>';
  const label = (x,y,s,size=10,opacity=.68) =>
    '<text x="'+x+'" y="'+y+'" fill="currentColor" opacity="'+opacity+'" font-family="ui-monospace,monospace" font-size="'+size+'">'+s+'</text>';

  function cube(x,y,s) {
    const dy=s*.48,h=s*.96;
    const p=[[x,y-h],[x+s,y+dy-h],[x,y+2*dy-h],[x-s,y+dy-h],[x+s,y+dy],[x,y+dy*2],[x-s,y+dy]];
    return poly([p[1],p[2],p[5],p[4]],"var(--face-r)")+
      poly([p[3],p[2],p[5],p[6]],"var(--face-l)")+
      poly(p.slice(0,4),"var(--face-t)");
  }
  function arithmetic() {
    let s=line(62,113,160,64,.35,true)+line(111,123,232,66,.27,true)+line(92,79,188,125,.26,true);
    for(let col=2;col>=0;col--)for(let lvl=0;lvl<=col;lvl++)s+=cube(111+col*24,95-col*11.52-lvl*23.04,24);
    return s+line(197,70,220,56,.45,true)+label(223,56,"1 + 2 + 3",10,.78);
  }
  function fractions() {
    const s=[],rx=56,ry=30,depth=11;
    for(const [start,ox,oy,lit] of [[180,-3,-3,true],[270,11,-9,false],[0,3,4,true],[90,-3,3,true]]){
      const x=155+ox,y=61+oy,ring=[];
      for(let a=start;a<=start+90;a+=5)ring.push([x+rx*Math.cos(rd(a)),y+ry*Math.sin(rd(a))]);
      const lower=ring.map(([a,b])=>[a,b+depth]);
      s.push(poly([[x,y+depth],...lower],lit?"var(--face-l)":"var(--face-r)",.6));
      s.push(poly([[x,y],ring[0],lower[0],[x,y+depth]],lit?"var(--face-l)":"var(--face-r)",.67));
      s.push(poly([[x,y],ring[ring.length-1],lower[lower.length-1],[x,y+depth]],lit?"var(--face-l)":"var(--face-r)",.67));
      if(start<180)s.push(poly([...ring,...lower.slice().reverse()],lit?"var(--face-l)":"var(--face-r)",.8));
      s.push(poly([[x,y],...ring],lit?"var(--face-t)":"var(--face-r)",.97));
    }
    return s.join("")+line(217,65,241,55,.48,true)+label(245,56,"¾",16,.82);
  }
  function powers() {
    const x=153,y=68,s=45,dy=s*.48,h=s*.96;
    let v=cube(x,y,s);
    v+=line(x-s/2,y-h+dy*.5,x+s/2,y-h+dy*1.5,.88)+line(x+s/2,y-h+dy*.5,x-s/2,y-h+dy*1.5,.88);
    v+=line(x-s/2,y-h+dy*1.5,x-s/2,y+dy*1.5,.8)+line(x+s/2,y-h+dy*1.5,x+s/2,y+dy*1.5,.8);
    v+=line(x-s,y+dy-h/2,x,y+2*dy-h/2,.88)+line(x,y+2*dy-h/2,x+s,y+dy-h/2,.88);
    return v+line(207,45,207,89,.6)+line(204,44,210,47,.6)+line(204,88,210,91,.6)+label(213,70,"2",11)+line(98,96,148,119,.45,true)+label(84,94,"2",10)+label(238,48,"2³",15,.78);
  }
  function algebra(){
    let s=poly([[102,45],[160,23],[205,46],[147,69]],"var(--face-t)")+
      poly([[102,45],[147,69],[147,103],[102,80]],"var(--face-l)")+
      poly([[147,69],[205,46],[205,80],[147,103]],"var(--face-r)");
    s+=line(127,36,172,59,.9)+line(172,59,172,93,.9)+line(126,57,185,34,.9)+line(126,57,126,92,.9);
    return s+line(102,87,145,110,.6,true)+label(103,106,"a",12)+label(184,103,"b",12)+label(218,52,"a + b",10);
  }
  function balance(){
    let s='<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M155 33v64m-21 6h43m-33-6h23M102 48l53-13 53 13"/></g>';
    for(const x of [107,203]){
      s+=line(x,48,x-17,78,.85)+line(x,48,x+17,78,.85);
      s+='<path d="M'+(x-19)+' 78h38q-5 18-19 18t-19-18Z" stroke="currentColor" fill="var(--face-t)"/>';
    }
    return s+'<circle cx="155" cy="35" r="5" fill="var(--face-t)" stroke="currentColor"/>'+label(230,71,"x = 4",11);
  }
  function graph(){
    const x=156,y=88;let s="";
    for(let i=x-60;i<x+73;i+=15)s+=line(i,25,i,111,.15);
    for(let i=y-60;i<=y+22;i+=15)s+=line(x-63,i,x+72,i,.15);
    s+=line(x-68,y,x+73,y,.68)+line(x,113,x,22,.68);
    return s+'<path d="M104 30 Q156 154 208 30" stroke="currentColor" stroke-width="2.4" fill="none"/><circle cx="156" cy="92" r="3" fill="currentColor"/>'+label(218,43,"f(x)",11);
  }
  function geometry(){
    const p=[[96,85],[152,55],[211,82],[157,109]],cap=[149,23];
    return poly(p,"var(--face-r)")+poly([p[0],p[3],cap],"var(--face-l)")+
      poly([p[3],p[2],cap],"var(--face-t)")+line(...p[1],...cap,.48,true)+line(149,23,151,81,.72,true)+line(151,81,160,86,.42)+label(158,69,"h",12);
  }
  function trig(){
    return poly([[93,96],[207,96],[207,34]],"var(--face-r)",1,1.8)+
      '<path d="M119 96a26 26 0 0 0-3-12M196 96V85h11" stroke="currentColor" fill="none"/>'+
      label(124,91,"θ",13,.94)+label(215,70,"a",12)+label(153,111,"b",12)+label(144,59,"c",12);
  }
  function stats(){
    let s=line(91,103,218,103,.7);
    [23,49,68,42,28].forEach((h,i)=>{
      const x=102+i*21;
      s+=poly([[x,101],[x,101-h],[x+13,101-h],[x+13,101]],"var(--face-t)",.88);
      s+=poly([[x+13,101],[x+17,98],[x+17,98-h],[x+13,101-h]],"var(--face-r)",.75);
    });
    return s+line(91,68,229,68,.75,true)+label(233,70,"μ",13);
  }
  const illustrations={aritmetica:arithmetic,fracoes:fractions,potencias:powers,algebra,equacoes:balance,funcoes:graph,geometria:geometry,trigonometria:trig,estatistica:stats};
  window.MatrizArt = function(id){
    const k=++serial;
    return '<svg class="module-art" viewBox="0 0 320 132" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><pattern id="grid'+k+'" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0H0V14" fill="none" stroke="currentColor" opacity=".15" stroke-width=".7"/></pattern><radialGradient id="light'+k+'"><stop stop-color="white" offset="18%"/><stop stop-color="white" stop-opacity="0" offset="100%"/></radialGradient><mask id="mask'+k+'"><ellipse cx="157" cy="82" rx="168" ry="87" fill="url(#light'+k+')"/></mask></defs><rect width="320" height="132" fill="url(#grid'+k+')" mask="url(#mask'+k+')"/><g transform="translate(0 5)">'+(illustrations[id]||graph)()+'</g></svg>';
  };

  const nu=68,nv=26,ring=[],faces=[];
  for(let i=0;i<nu;i++){
    const a=tau*i/nu,cu=Math.cos(a),su=Math.sin(a);
    for(let j=0;j<nv;j++){
      const b=tau*j/nv,cv=Math.cos(b),sv=Math.sin(b);
      ring.push([(1.49+.56*cv)*cu,(1.49+.56*cv)*su,.56*sv,cv*cu,cv*su,sv]);
      faces.push([i*nv+j,((i+1)%nu)*nv+j,((i+1)%nu)*nv+(j+1)%nv,i*nv+(j+1)%nv]);
    }
  }
  const equations=["x = (R + r cos v) cos u","y = (R + r cos v) sen u","z = r sen v"];
  const symbols="01<>+*/{}01∆λxπΣ#";
  const colorMap=Array.from({length:32},(_,i)=>{
    const l=i/31;
    return ['rgb('+Math.round(3+4*l)+','+Math.round(17+40*l)+','+Math.round(13+24*l)+')',
      'rgb('+Math.round(15+86*l)+','+Math.round(60+182*l)+','+Math.round(39+104*l)+')'];
  });
  function decode(text,ratio,phase){
    const show=Math.min(text.length,Math.floor(ratio*text.length));
    return Array.from(text,(c,i)=>c===" "||i<show?c:symbols[(i*19+Math.floor(phase*14)*7)%symbols.length]).join("");
  }
  window.MatrizTorus=function(canvas,caption,animationEnabled){
    const ctx=canvas.getContext("2d");
    if(!ctx){if(caption)caption.textContent=equations[0];return ()=>{};}
    const animated=typeof animationEnabled==="function"?animationEnabled:()=>true;
    const p=ring.map(()=>[0,0,0,0]),ordered=faces.map(f=>({f,z:0}));
    let w=0,h=0,frame=0,seen=true,alive=true,t=0,last=0,glow=null;
    function render(time){
      if(w<1||h<1||!glow)return;
      const cx=w*.51,cy=h*.49,scale=Math.min(w*.192,h*.251);
      ctx.clearRect(0,0,w,h);ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
      ctx.textAlign="center";ctx.font="10px ui-monospace, monospace";
      for(let c=0;c<Math.ceil(w/22);c++){
        const head=((c*71+time*(10+c%5))%(h+140))-48;
        for(let k=0;k<10;k++){
          const y=head-k*13;
          if(y<3||y>h-8)continue;
          ctx.fillStyle='rgba(93,238,154,'+((10-k)*.021+.015)+')';
          ctx.fillText(symbols[(c*13+k*5+Math.floor(time*.4))%symbols.length],c*22+4,y);
        }
      }
      const local=time%6,idx=Math.floor(time/6)%equations.length;
      const eq=equations[idx],equationText=animated()&&local<1.2?decode(eq,local/1.2,local):eq;
      if(caption&&caption.textContent!==equationText)caption.textContent=equationText;
      ctx.save();ctx.lineWidth=.7;ctx.strokeStyle="rgba(77,224,146,.19)";ctx.setLineDash([3,5]);
      ctx.beginPath();ctx.moveTo(cx-w*.46,cy+h*.20);ctx.lineTo(cx+w*.45,cy-h*.13);ctx.moveTo(cx-w*.37,cy-h*.11);ctx.lineTo(cx+w*.38,cy+h*.23);ctx.moveTo(cx,cy-h*.43);ctx.lineTo(cx,cy+h*.44);ctx.stroke();ctx.restore();
      ctx.fillStyle="rgba(153,240,184,.65)";ctx.textAlign="left";ctx.font="10px ui-monospace, monospace";
      ctx.fillText("x",cx+w*.44,cy-h*.15);ctx.fillText("y",cx+w*.38,cy+h*.26);ctx.fillText("z",cx+5,cy-h*.40);
      if(w>300){const examples=["f(x) = 2x + 1","a² + b² = c²","3/4 = 0,75"],phase=(time+1.1)%7;
        ctx.fillStyle='rgba(114,216,151,.53)';ctx.font="11px ui-monospace, monospace";
        const s=examples[Math.floor((time+1.1)/7)%examples.length];ctx.fillText(animated()&&phase<1.4?decode(s,phase/1.4,phase):s,w*.028,h*.26);}
      const roll=-.35+Math.sin(time*.115)*.04,tilt=.9+Math.sin(time*.17)*.09,rotate=time*.115+.36;
      const cr=Math.cos(roll),sr=Math.sin(roll),ct=Math.cos(tilt),st=Math.sin(tilt),ca=Math.cos(rotate),sa=Math.sin(rotate);
      for(let i=0;i<ring.length;i++){
        const q=ring[i],px=q[0]*ca-q[1]*sa,py=q[0]*sa+q[1]*ca,yp=py*ct-q[2]*st,z=py*st+q[2]*ct,ps=scale*(1+z*.035);
        const nx=q[3]*ca-q[4]*sa,ny=q[3]*sa+q[4]*ca,nyp=ny*ct-q[5]*st,nzp=ny*st+q[5]*ct;
        const dst=p[i];dst[0]=cx+(px*cr-yp*sr)*ps;dst[1]=cy+(px*sr+yp*cr)*ps;dst[2]=z;dst[3]=Math.max(.05,Math.min(1,.38-nx*.23-nyp*.61+nzp*.42));
      }
      for(const item of ordered)item.z=(p[item.f[0]][2]+p[item.f[2]][2])*.5;
      ordered.sort((a,b)=>a.z-b.z);
      ctx.lineJoin="round";ctx.lineWidth=.80;
      for(const item of ordered){
        const f=item.f,a=p[f[0]],b=p[f[1]],c=p[f[2]],d=p[f[3]];
        const colors=colorMap[Math.round((a[3]+c[3])*15.5)];
        ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.lineTo(c[0],c[1]);ctx.lineTo(d[0],d[1]);ctx.closePath();
        ctx.fillStyle=colors[0];ctx.fill();ctx.strokeStyle=colors[1];ctx.stroke();
      }
    }
    function resize(){
      const box=canvas.getBoundingClientRect();w=box.width;h=box.height;
      const dpr=Math.min(window.devicePixelRatio||1,1.65);
      canvas.width=Math.max(1,Math.round(w*dpr));canvas.height=Math.max(1,Math.round(h*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);
      glow=ctx.createRadialGradient(w*.5,h*.49,0,w*.5,h*.49,Math.max(1,w*.49));glow.addColorStop(0,"rgba(31,153,78,.15)");glow.addColorStop(1,"rgba(18,67,42,0)");render(t);
    }
    function wake(){if(alive&&seen&&!document.hidden&&animated()&&!frame)frame=requestAnimationFrame(tick);}
    function tick(ms){frame=0;if(!alive||!seen||document.hidden||!animated()){last=0;return;}if(!last)last=ms;if(ms-last>=50){t+=Math.min(.14,(ms-last)/1000);last=ms;render(t);}wake();}
    function onVisibility(){last=0;wake();}
    function onMotion(){last=0;render(t);wake();}
    const io=new IntersectionObserver(entries=>{seen=entries[0].isIntersecting;last=0;wake();});
    const ro=new ResizeObserver(resize);ro.observe(canvas);io.observe(canvas);resize();wake();
    document.addEventListener("visibilitychange",onVisibility);window.addEventListener("matriz-motion",onMotion);
    return ()=>{alive=false;cancelAnimationFrame(frame);ro.disconnect();io.disconnect();document.removeEventListener("visibilitychange",onVisibility);window.removeEventListener("matriz-motion",onMotion);};
  };
})();
