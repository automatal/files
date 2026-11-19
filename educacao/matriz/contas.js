"use strict";
(() => {
  const fmt = n => n.toLocaleString("pt-BR").replace("-", "−");
  const positions = ["Unidades", "Dezenas", "Centenas", "Milhares", "Dezenas de milhar"];
  const ops = {
    adicionar: {word:"Adição", symbol:"+", a:278, b:156},
    subtrair: {word:"Subtração", symbol:"−", a:402, b:178},
    multiplicar: {word:"Multiplicação", symbol:"×", a:23, b:14},
    dividir: {word:"Divisão inteira", symbol:"÷", a:95, b:8}
  };
  function reversedDigits(n) {
    return Array.from(String(n), Number).reverse();
  }
  function placeValues(n) {
    return reversedDigits(n).map((digit, i) => digit * 10 ** i).filter(Boolean).reverse();
  }
  function explain(op, a, b) {
    const steps = [];
    const add = (title, eq, why, column) => steps.push({title, eq, why, column});
    let layout = null;
    if (op === "adicionar") {
      const left = reversedDigits(a), right = reversedDigits(b);
      const width = Math.max(left.length, right.length);
      layout = {a, b, symbol:"+", value:a+b};
      let carry = 0;
      for (let i = 0; i < width || carry; i++) {
        const x = left[i] || 0, y = right[i] || 0, sum = x + y + carry;
        const digit = sum % 10, next = Math.floor(sum / 10);
        const note = carry ? "Inclua o grupo de dez formado na coluna anterior. " : "";
        add(positions[i], x+" + "+y+(carry ? " + "+carry : "")+" = "+sum,
          note+"Registre "+digit+" na resposta desta coluna. "+(next ? "Troque dez unidades desta posição por uma na posição seguinte." : "O resultado desta coluna cabe em um único algarismo."), i);
        carry = next;
      }
      add("Leia e confira", fmt(a)+" + "+fmt(b)+" = "+fmt(a+b),
        "Junte os algarismos, do maior valor posicional para o menor. Para conferir, retire "+fmt(b)+" do total. "+fmt(a+b)+" − "+fmt(b)+" = "+fmt(a)+".");
    } else if (op === "subtrair") {
      const larger = Math.max(a,b), smaller = Math.min(a,b);
      const top = reversedDigits(larger), bottom = reversedDigits(smaller);
      layout = {a:larger, b:smaller, symbol:"−", value:larger-smaller};
      if (a < b) add("Preveja o sinal", fmt(a)+" − "+fmt(b)+" = −("+fmt(b)+" − "+fmt(a)+")",
        "O primeiro número é menor. Calcule a distância começando pelo maior. No fim, atribua o sinal negativo a essa distância.");
      for (let i = 0; i < top.length; i++) {
        const sub = bottom[i] || 0, before = top[i];
        let note = "";
        if (before < sub) {
          let j = i + 1;
          while (top[j] === 0) j++;
          top[j]--;
          for (let k = j-1; k > i; k--) top[k] = 9;
          top[i] += 10;
          note = "Para retirar "+sub+", abra um grupo na coluna de "+positions[j].toLowerCase()+". "+
            (j>i+1 ? "Cada coluna zero no caminho recebe dez grupos, repassa um e fica com nove. " : "O grupo se transforma em dez grupos da coluna à direita. ")+
            "O "+before+" desta coluna passa a "+top[i]+". ";
        }
        add(positions[i], top[i]+" − "+sub+" = "+(top[i]-sub),
          note+"A diferença nesta posição é "+(top[i]-sub)+". Registre esse algarismo na resposta.", i);
      }
      add("Leia e confira",fmt(a)+" − "+fmt(b)+" = "+fmt(a-b),
        (a<b ? "A distância recebe o sinal negativo. " : "")+"Adicione o valor que foi retirado. "+fmt(a-b)+" + "+fmt(b)+" = "+fmt(a)+".");
    } else if (op === "multiplicar") {
      const terms = placeValues(b), pieces = placeValues(a);
      if (!terms.length || !pieces.length) {
        add("Identifique o zero", fmt(a)+" × "+fmt(b)+" = 0",
          "Com zero grupos ou com zero objetos em cada grupo, o total de objetos é zero.");
        add("Confira pela soma", "Total = 0",
          "Você pode tomar grupo algum ou somar grupos vazios. A contagem permanece em zero.");
      } else {
        add("Separe o segundo fator",fmt(b)+" = "+terms.map(fmt).join(" + "),
          "Decomponha o número pelo valor de cada algarismo. A distributiva permite multiplicar cada parte pelo mesmo primeiro fator e juntar os produtos.");
        for (const term of terms) {
          const products = pieces.map(p=>p*term);
          add("Calcule o produto por "+fmt(term),pieces.map(p=>fmt(p)+" × "+fmt(term)).join(" + ")+" = "+fmt(a*term),
            "O primeiro fator vale "+pieces.map(fmt).join(" + ")+". Ao multiplicar cada parte por "+fmt(term)+", as contribuições são "+products.map(fmt).join(" + ")+".");
        }
        add("Some e confira",terms.map(t=>fmt(a*t)).join(" + ")+" = "+fmt(a*b),
          "Esse é o total de "+fmt(b)+" grupos de "+fmt(a)+". Dividindo "+fmt(a*b)+" por "+fmt(b)+", voltamos a "+fmt(a)+".");
      }
    } else if (b === 0) {
      add("Examine o divisor",fmt(a)+" ÷ 0",
        a===0 ? "Todo número multiplicado por zero dá zero. Por isso, 0 ÷ 0 não determina um quociente único. A divisão por zero é indefinida." :
          "Um quociente teria de multiplicar zero e produzir "+fmt(a)+". Todo produto por zero é zero, portanto a divisão por zero é indefinida.");
    } else {
      let rest = 0, first = true;
      for (const digit of String(a)) {
        const part = rest*10 + Number(digit), q = Math.floor(part / b), r = part % b;
        add("Baixe o algarismo "+digit,fmt(part)+" = "+fmt(b)+" × "+q+" + "+fmt(r),
          (first ? "Comece pelo algarismo mais à esquerda. " : "O resto anterior passa à próxima posição. "+rest+" × 10 + "+digit+" = "+part+". ")+
          "Cabem "+q+" grupos inteiros de "+fmt(b)+" em "+fmt(part)+". Guarde o algarismo "+q+" no quociente e "+fmt(r)+" no resto.");
        first = false; rest = r;
      }
      const quotient = Math.floor(a/b);
      add("Leia o quociente e confira",fmt(a)+" = "+fmt(b)+" × "+fmt(quotient)+" + "+fmt(rest),
        "Junte os algarismos do quociente pela ordem em que apareceram. Zeros à esquerda não mudam o valor. O quociente é "+fmt(quotient)+" e o resto é "+fmt(rest)+". Como "+fmt(rest)+" é menor que "+fmt(b)+", não cabe mais um grupo inteiro.");
    }
    return {equation:fmt(a)+" "+ops[op].symbol+" "+fmt(b), steps, layout};
  }
  function columnTable(layout, steps) {
    if (!layout) return "";
    const width = Math.max(...[layout.a,layout.b,layout.value].map(v=>String(v).length));
    const visible = new Set(steps.map(s=>s.column).filter(Number.isInteger));
    const displayRow = (num, answer) => String(num).padStart(width, " ").split("").map((digit,i)=>{
      const column = width-i-1, revealed = visible.has(column), active = steps.at(-1).column === column;
      return '<td'+(active?' style="background:rgba(90,239,166,.12)"':'')+'>'+(answer&&!revealed?"·":digit===" "?"&nbsp;":digit)+'</td>';
    }).join("");
    const headings = positions.slice(0,width).reverse().map(n=>'<th scope="col" title="'+n+'">'+({Unidades:"U", Dezenas:"D", Centenas:"C", Milhares:"M", "Dezenas de milhar":"DM"})[n]+'</th>').join("");
    return '<figure class="place-demo"><figcaption>Conta alinhada por posição</figcaption><table class="place-table"><thead><tr><th aria-label="Operação"></th>'+headings+'</tr></thead><tbody><tr><th scope="row" aria-label="Primeiro número"></th>'+displayRow(layout.a,false)+'</tr><tr><th scope="row">'+layout.symbol+'</th>'+displayRow(layout.b,false)+'</tr><tr><th scope="row">=</th>'+displayRow(layout.value,true)+'</tr></tbody></table></figure>';
  }
  window.MatrizConta = function(container) {
    const icon = window.MATRIZ_ICON;
    container.innerHTML='<section class="lab-panel"><div class="lab-title"><h2>Quatro operações</h2><p>Escolha dois números inteiros de 0 a 9.999. Monte a conta e tente prever o próximo passo antes de revelá-lo.</p></div><form id="own-calc" class="own-calc"><label>Operação<select id="own-op">'+Object.entries(ops).map(([id,v])=>'<option value="'+id+'">'+v.word+'</option>').join("")+'</select></label><label>Primeiro número<input id="own-a" type="text" inputmode="numeric" value="278" autocomplete="off"></label><label>Segundo número<input id="own-b" type="text" inputmode="numeric" value="156" autocomplete="off"></label><button class="btn primary" type="submit">'+icon("terminal",16)+'Montar cálculo</button><p id="own-error" role="status"></p></form><div class="own-work"><div class="content-label">'+icon("calc",15)+' SUA CONTA</div><h3 id="own-equation"></h3><div id="own-columns"></div><div id="own-steps"></div><div class="own-actions"><button class="btn" type="button" id="own-next">Revelar próximo passo</button><button class="text-button" type="button" id="own-back">Voltar um passo</button><span id="own-count" role="status"></span></div></div></section><div class="lab-challenge"><div>'+icon("bulb",22)+'</div><section><h3>Experimente você</h3><p>Calcule 402 − 178 no papel. Na simulação, repare no que acontece com a casa das dezenas quando ela começa em zero.</p></section><a class="btn sm" href="#modulo/aritmetica">'+icon("book",15)+' Aulas do tema</a></div>';
    const find=s=>container.querySelector(s), op=find("#own-op"), inputA=find("#own-a"), inputB=find("#own-b");
    let result, shown;
    const draft = {};
    let lastOp=op.value;
    function paint() {
      const revealed = result.steps.slice(0,shown);
      find("#own-columns").innerHTML = columnTable(result.layout,revealed);
      find("#own-steps").innerHTML = revealed.map((s,i)=>'<div class="worked-step"><span class="step-num">'+String(i+1).padStart(2,"0")+'</span><div><h3>'+s.title+'</h3><div class="calc-line">'+s.eq+'</div><p>'+s.why+'</p></div></div>').join("");
      find("#own-next").hidden=shown>=result.steps.length;
      find("#own-back").hidden=shown===1;
      find("#own-count").textContent="Passo "+shown+" de "+result.steps.length;
    }
    function calculate() {
      const values=[];
      for (const input of [inputA,inputB]) {
        const raw = input.value.trim();
        if (!/^(?:[0-9]{1,4}|[1-9]\.[0-9]{3})$/.test(raw)) {
          find("#own-error").textContent="Use um inteiro de 0 a 9.999 em cada campo.";
          input.setAttribute("aria-invalid","true");input.focus();return;
        }
        input.removeAttribute("aria-invalid");values.push(Number(raw.replace(".","")));
      }
      find("#own-error").textContent="";
      result=explain(op.value,...values);shown=1;
      find("#own-equation").textContent=result.equation;paint();
    }
    find("#own-calc").addEventListener("submit", e=>{e.preventDefault();calculate();});
    find("#own-next").addEventListener("click",()=>{shown=Math.min(result.steps.length,shown+1);paint();});
    find("#own-back").addEventListener("click",()=>{shown=Math.max(1,shown-1);paint();});
    op.addEventListener("change",()=>{
      draft[lastOp]=[inputA.value,inputB.value]; lastOp=op.value;
      [inputA.value,inputB.value]=draft[lastOp] || [ops[lastOp].a,ops[lastOp].b];calculate();
    });
    [inputA,inputB].forEach(input=>input.addEventListener("input",()=>{input.removeAttribute("aria-invalid");find("#own-error").textContent="";}));
    calculate();
  };
})();
