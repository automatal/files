"use strict";
window.MATRIZ_MODULES = [
  { id:"aritmetica", name:"Aritmética", icon:"calc", color:"#55e6aa", rgb:"85,230,170", level:"Básico", desc:"Entenda os números e domine as quatro operações.", intro:"Descubra como os números são construídos e o que cada operação faz. Aprenda a conferir uma conta com a operação inversa." },
  { id:"fracoes", name:"Frações e proporções", icon:"pie", color:"#bd9bfd", rgb:"189,155,253", level:"Básico", desc:"Compare partes de um todo, razões e porcentagens.", intro:"Passe de partes de uma unidade a receitas, escalas e descontos. Escolher o inteiro de referência é o primeiro passo." },
  { id:"potencias", name:"Potências e raízes", icon:"power", color:"#f6ba72", rgb:"246,186,114", level:"Básico", desc:"Explore multiplicações repetidas e suas inversas.", intro:"Use expoentes para escrever produtos de fatores iguais e raízes para recuperar medidas. Estime o tamanho de um resultado antes de fazer a conta." },
  { id:"algebra", name:"Álgebra", icon:"variable", color:"#76c1fa", rgb:"118,193,250", level:"Básico", desc:"Use letras para descrever padrões e simplificar contas.", intro:"Dê nome às quantidades. Escreva regras que funcionam para vários valores e use a distributiva para expandir e fatorar expressões." },
  { id:"equacoes", name:"Equações", icon:"balance", color:"#fa929c", rgb:"250,146,156", level:"Intermediário", desc:"Descubra incógnitas e traduza problemas em equações.", intro:"Trabalhe com a igualdade como uma balança. Traduza situações em equações e teste cada solução no problema original." },
  { id:"funcoes", name:"Funções", icon:"graph", color:"#64d9dc", rgb:"100,217,220", level:"Intermediário", desc:"Ligue entradas e saídas por tabelas, regras e gráficos.", intro:"Investigue como duas quantidades variam juntas. Construa gráficos e reconheça o comportamento de retas, parábolas e exponenciais." },
  { id:"geometria", name:"Geometria", icon:"cube", color:"#9fd888", rgb:"159,216,136", level:"Básico", desc:"Meça ângulos, contornos, superfícies e volumes.", intro:"Escolha a unidade adequada, decomponha figuras e descubra de onde vêm as fórmulas de medida." },
  { id:"trigonometria", name:"Trigonometria", icon:"triangle", color:"#a7abff", rgb:"167,171,255", level:"Intermediário", desc:"Relacione ângulos, distâncias e movimentos periódicos.", intro:"Comece por um triângulo retângulo, escolha um ângulo de referência e leve as razões entre lados até o círculo trigonométrico." },
  { id:"estatistica", name:"Estatística e probabilidade", short:"Estatística", icon:"bars", color:"#e5a0d0", rgb:"229,160,208", level:"Intermediário", desc:"Interprete dados e calcule as chances de um evento.", intro:"Organize dados, escolha uma medida de centro e conte os resultados possíveis antes de calcular probabilidades." }
];
window.MATRIZ_ICON = (() => {
  const paths={
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
    flask:'<path d="M9 3h6m-5 0v6.5l-6 9.1A1.5 1.5 0 0 0 5.3 21h13.4a1.5 1.5 0 0 0 1.3-2.4l-6-9.1V3M7.6 15h8.8"/>',
    chart:'<path d="M4 4v16h17M8 16v-3m5 3V9m5 7V5"/>',
    calc:'<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 7h8M8 11h1m5 0h1m-7 4h1m5 0h1m-7 3h1m5 0h1"/>',
    pie:'<path d="M11 3a9 9 0 1 0 10 10H11Z"/><path d="M14.3 2.8v7h7a8 8 0 0 0-7-7Z"/>',
    power:'<path d="m3 10 7.2 10m.1-10L3.2 20m10.5-14a3.2 3.2 0 0 1 6.2 1c0 1.7-1.4 2.5-2.8 3.6l-3.2 2.7h6.4"/>',
    variable:'<path d="M7 5H6c-2 0-2 1-2 3v2l-2 2 2 2v2c0 2 0 3 2 3h1M17 5h1c2 0 2 1 2 3v2l2 2-2 2v2c0 2 0 3-2 3h-1M9 9l6 6m0-6-6 6"/>',
    balance:'<path d="M12 3v17m-6 1h12M3 7l9-2 9 2M5 7l-3 7h6L5 7Zm14 0-3 7h6l-3-7Z"/><path d="M2 14q3 5 6 0m8 0q3 5 6 0"/>',
    graph:'<path d="M3 3v17h18M5 15c4 0 3-8 6-8s4 9 7 8q2-1 3-4"/>',
    cube:'<path d="m12 2.5 9 5v9L12 22l-9-5.5v-9Z"/><path d="m3 7.5 9 5 9-5m-9 5V22M7.5 5l9 5"/>',
    triangle:'<path d="M3 20 21 4v16Z"/><path d="M17 20v-4h4M7.5 16a5 5 0 0 1 2.4 4"/>',
    bars:'<path d="M3 21h18M5 18v-6h3v6m3 0V5h3v13m3 0V9h3v9"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.4"/><path d="m15.8 15.8 4.6 4.6"/>',
    panel:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
    book:'<path d="M12 5.7C8.5 3.5 5.5 4 2.5 4.8v14c3-.8 6-1.3 9.5.9 3.5-2.2 6.5-1.7 9.5-.9v-14c-3-.8-6-1.3-9.5.9ZM12 5.7v14"/>',
    layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-9.5 9.3L12 17l9.5-4.7M2.5 16.4 12 21l9.5-4.6"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    code:'<path d="m7 6-5 6 5 6m10-12 5 6-5 6m-3-16-4 20"/>',
    terminal:'<path d="m4 6 6 6-6 6m9 0h7"/>', play:'<path d="m7 4.5 12 7.5-12 7.5z" fill="currentColor"/>',
    pause:'<path d="M8 5v14m8-14v14" stroke-width="3"/>',
    motion:'<path d="M2 13h4l2.5-8 4 15L16 9l2 4h4"/>',
    list:'<path d="M8 6h12M8 12h12M8 18h12M3.5 6h.1m-.1 6h.1m-.1 6h.1"/>',
    filter:'<path d="M3 7h4m6 0h8M3 17h9m6 0h3"/><circle cx="10" cy="7" r="2.7"/><circle cx="15" cy="17" r="2.7"/>',
    down:'<path d="m7 10 5 5 5-5"/>',crumb:'<path d="m9 6 6 6-6 6"/>',
    check:'<path d="m4.5 12.5 4.8 4.8L20 6.7"/>',circleCheck:'<circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.7L16 9"/>',x:'<path d="m6 6 12 12M18 6 6 18"/>',
    bulb:'<path d="M8.5 16c0-3-3.2-3.9-3.2-7.5a6.7 6.7 0 1 1 13.4 0c0 3.6-3.2 4.6-3.2 7.5Zm.8 3h5.4m-4.5 2h3.6"/>',
    pen:'<path d="m4 16-.7 4.7 4.8-.8L20 8l-4-4Zm9.4-9.4 4 4"/>',sum:'<path d="M18 5H6l7 7-7 7h12"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/>',
    point:'<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>',
    bookmark:'<path d="M6 4.5h12v16l-6-4-6 4z"/>',orbit:'<circle cx="12" cy="12" r="9"/><path d="m12 12 6-6"/>'
  };
  return (name,size=20)=>'<svg aria-hidden="true" focusable="false" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">'+(paths[name]||'')+'</svg>';
})();
