window.MATRIZ_CONTENT = window.MATRIZ_CONTENT || {};

window.MATRIZ_CONTENT.algebra = [
  {
    id: "letras-e-expressoes",
    title: "Letras que representam números",
    goal: "Montar uma expressão a partir de um preço fixo e outro que varia.",
    theory: [
      "Uma letra pode ocupar o lugar de um número. Se c conta as cópias de um cartaz, c pode valer 1 em um pedido e 5 no seguinte. A letra que pode assumir valores diferentes recebe o nome de variável.",
      "Uma expressão combina números, letras e operações. Em 3c, o 3 multiplica o valor de c. Para calcular o valor da expressão, substitua cada letra pelo número do problema e respeite a ordem das operações."
    ],
    problem: "Uma gráfica cobra R$ 8 pelo preparo de um cartaz e R$ 3 por cópia. Quanto custa um pedido com 5 cópias?",
    steps: [
      ["Escolha a quantidade que varia", "c = número de cópias", "O cliente escolhe quantas cópias quer. A taxa de preparo permanece em R$ 8 para todo o pedido."],
      ["Conte o custo das cópias", "3 × c = 3c", "Cada cópia acrescenta R$ 3. Multiplicar o preço unitário pela quantidade conta todas de uma vez."],
      ["Inclua o preparo", "Custo = 8 + 3c", "O pedido inteiro recebe uma única taxa. O 8 fica fora da multiplicação."],
      ["Substitua e calcule", "8 + 3 × 5 = 8 + 15 = 23", "As cinco cópias custam R$ 15. Com o preparo, o cliente paga R$ 23."]
    ],
    check: "Some diretamente as parcelas da cobrança. R$ 8 + R$ 3 + R$ 3 + R$ 3 + R$ 3 + R$ 3 = R$ 23.",
    pitfall: "Escrever (8 + 3)c cobraria o preparo de cada cópia. Decida quais quantias se repetem antes de usar parênteses.",
    exercises: [
      {q: "Quanto vale 4x + 2 quando x = 3?", a: 14, hint: "Troque x por 3 e faça a multiplicação primeiro.", solution: "4 × 3 + 2 = 12 + 2 = 14."},
      {q: "Se x = −2, qual é o valor de x² − 2x?", a: 8, hint: "Coloque o −2 entre parênteses em cada substituição.", solution: "(−2)² = 4 e 2 × (−2) = −4. Assim, 4 − (−4) = 8."},
      {q: "Um clube de jogos cobra R$ 7 de acesso e R$ 2,50 por dia usado. Quanto se paga, em reais, por 6 dias?", a: 22, hint: "Separe o valor cobrado uma vez do valor cobrado seis vezes.", solution: "Se d é o número de dias, o custo é 7 + 2,50d. Para 6 dias, 7 + 2,50 × 6 = 7 + 15 = 22 reais."}
    ]
  },
  {
    id: "agrupar-termos-semelhantes",
    title: "Como juntar termos semelhantes",
    goal: "Simplificar uma soma mantendo a quantidade representada.",
    theory: [
      "Em uma soma algébrica, cada parcela, com seu sinal, é um termo. Em 5x − 2x + 4, os termos são 5x, −2x e 4. O número que multiplica a parte com letras é o coeficiente. Em x ele vale 1.",
      "Termos semelhantes têm a mesma parte com letras e os mesmos expoentes. Cinco pacotes com x peças e dois pacotes com x peças somam sete pacotes com x peças. Uma peça avulsa continua sendo contada separadamente."
    ],
    problem: "Uma gaveta tem 3 caixas com c clipes cada e 2 clipes soltos. Você põe mais 4 caixas iguais e tira 1 clipe solto. Quantos clipes ficam se cada caixa contém 10?",
    steps: [
      ["Traduza cada movimento", "3c + 2 + 4c − 1", "As caixas contêm a mesma quantidade c. Os dois números sem letra contam os clipes soltos."],
      ["Agrupe por tipo", "(3c + 4c) + (2 − 1)", "A ordem das parcelas pode mudar. O sinal de cada parcela acompanha o número."],
      ["Some os coeficientes", "(3 + 4)c + 1 = 7c + 1", "São sete caixas iguais, além do único clipe avulso. A expressão ficou mais curta e vale para qualquer tamanho de caixa."],
      ["Avalie para a caixa dada", "7 × 10 + 1 = 71", "Substitua c por 10 depois de reunir os termos. Restam 71 clipes."]
    ],
    check: "Conte com os valores originais. Havia 32 clipes, entraram 40 e saiu 1. O saldo 32 + 40 − 1 também é 71.",
    pitfall: "x e x² descrevem quantidades diferentes. Para x = 3, x + x² vale 3 + 9 = 12. A troca por 2x² daria 18.",
    exercises: [
      {q: "Ao escrever 3x + 2x como um único termo, qual é o coeficiente de x?", a: 5, hint: "Pense em três grupos de x mais dois grupos de x.", solution: "3x + 2x = (3 + 2)x = 5x. O coeficiente é 5."},
      {q: "Calcule 6a − 2a + 3 − 8 para a = 3.", a: 7, hint: "Agrupe os termos com a e, depois, os termos numéricos.", solution: "6a − 2a = 4a e 3 − 8 = −5. Para a = 3, a expressão 4a − 5 vale 12 − 5 = 7."},
      {q: "Um diagrama usa 2t + 5 metros de fio no primeiro trecho e 3t − 2 no segundo. Se t = 4, quantos metros usa ao todo?", a: 23, hint: "Some as duas expressões antes de trocar t por 4.", solution: "(2t + 5) + (3t − 2) = 5t + 3. Com t = 4, o total é 5 × 4 + 3 = 23 metros."}
    ]
  },
  {
    id: "propriedade-distributiva",
    title: "Abrindo parênteses com a distributiva",
    goal: "Distribuir um fator por todas as parcelas e acompanhar os sinais.",
    theory: [
      "Quando três caixas contêm uma caneta e um caderno cada, há três canetas e três cadernos. A identidade a(b + c) = ab + ac expressa essa contagem para qualquer quantidade a.",
      "A mesma regra vale com subtração. Em a(b − c), aparecem o produto de a por b e o produto de a por −c. Um sinal de menos antes de parênteses equivale a multiplicar todos os termos internos por −1."
    ],
    problem: "Uma loja vende três kits iguais. Cada kit contém dois cartões de x reais e uma embalagem de R$ 4. Um cupom abate R$ 5 do pedido. Quanto se paga se x = 2?",
    steps: [
      ["Calcule um kit", "2x + 4", "Dois cartões custam 2x. A embalagem de R$ 4 entra uma vez em cada kit."],
      ["Represente o pedido", "3(2x + 4) − 5", "O fator 3 multiplica tudo que está em um kit. O desconto aparece uma única vez, depois dos três kits."],
      ["Distribua o fator", "3 × 2x + 3 × 4 − 5 = 6x + 12 − 5", "Agora é possível enxergar seis cartões e três embalagens. Cada termo dentro do parêntese recebeu o fator 3."],
      ["Reúna e substitua", "6x + 7 = 6 × 2 + 7 = 19", "As embalagens menos o desconto custam R$ 7. Com R$ 12 em cartões, o pedido sai por R$ 19."]
    ],
    check: "Com x = 2, um kit custa 2 × 2 + 4 = 8 reais. Três kits custam 24 reais. O cupom reduz o total a 19.",
    pitfall: "Em −(x − 4), a segunda parcela já é negativa. Multiplicar as duas parcelas por −1 produz −x + 4.",
    exercises: [
      {q: "Ao distribuir o 5 em 5(x + 3), qual é o termo sem x?", a: 15, hint: "Multiplique o 5 também pelo 3.", solution: "5 × x + 5 × 3 = 5x + 15. O termo sem x é 15."},
      {q: "Calcule −2(3x − 4) + x quando x = 3.", a: -7, hint: "O produto de −2 por −4 é positivo.", solution: "−2(3x − 4) + x = −6x + 8 + x = −5x + 8. Para x = 3, −15 + 8 = −7."},
      {q: "Um teatro tem 4 fileiras de 12 lugares. Em cada fileira, 2 lugares ficam reservados. Quantos lugares sobram para venda?", a: 40, hint: "Retire os dois lugares de cada uma das quatro fileiras.", solution: "Em cada fileira há 12 − 2 lugares à venda. A distributiva dá 4(12 − 2) = 4 × 12 − 4 × 2 = 48 − 8 = 40."}
    ]
  },
  {
    id: "quadrados-da-soma-e-diferenca",
    title: "O quadrado de uma soma",
    goal: "Construir os produtos notáveis de uma soma e de uma diferença.",
    theory: [
      "Elevar uma soma ao quadrado é multiplicar essa soma por ela mesma. Ao separar os dois lados de um quadrado em trechos a e b, sua área se divide em quatro peças com áreas a², ab, ab e b².",
      "As duas peças de área ab explicam o termo 2ab em (a + b)² = a² + 2ab + b². Ao trocar b por −b, os produtos mistos ficam negativos e o último quadrado fica positivo. Assim, (a − b)² = a² − 2ab + b²."
    ],
    problem: "Um mural quadrado mede 23 cm de lado. Como calcular a área mentalmente usando 20 cm e 3 cm?",
    steps: [
      ["Decomponha o lado", "23² = (20 + 3)(20 + 3)", "A área em centímetros quadrados é o produto da largura pela altura. As duas medidas têm a mesma decomposição."],
      ["Multiplique os quatro pares", "20 × 20 + 20 × 3 + 3 × 20 + 3 × 3", "O primeiro trecho da largura encontra os dois trechos da altura. O segundo trecho também encontra os dois."],
      ["Calcule as áreas", "400 + 60 + 60 + 9", "A peça maior é um quadrado de 20 cm de lado. Há dois retângulos de 20 por 3 e um quadrado menor de 3 por 3."],
      ["Junte as peças", "400 + 120 + 9 = 529 cm²", "Como as peças preenchem o mural sem sobreposição, a soma das áreas fornece a área inteira."]
    ],
    check: "Faça a multiplicação por outro caminho. 23 × 23 = 23 × 20 + 23 × 3 = 460 + 69 = 529.",
    pitfall: "Somar somente os quadrados dos trechos daria 400 + 9. Faltariam os dois retângulos de 60 cm².",
    exercises: [
      {q: "Em (x + 5)² = x² + kx + 25, quanto vale k?", a: 10, hint: "O produto misto aparece duas vezes.", solution: "(x + 5)² = x² + 2 × x × 5 + 25 = x² + 10x + 25. Logo, k vale 10."},
      {q: "Qual é o valor de 19² usando a decomposição 19 = 20 − 1?", a: 361, hint: "Em (a − b)², apenas o termo misto aparece com sinal negativo.", solution: "(20 − 1)² = 20² − 2 × 20 × 1 + 1² = 400 − 40 + 1 = 361."},
      {q: "Um jardim quadrado de 10 m de lado passa a ter 12 m de lado. Quantos metros quadrados de área foram acrescentados?", a: 44, hint: "Expanda (10 + 2)² e retire a área antiga.", solution: "(10 + 2)² = 100 + 2 × 10 × 2 + 4 = 144. A diferença entre as áreas é 144 − 100 = 44 m²."}
    ]
  },
  {
    id: "fator-comum",
    title: "Fatoração por fator comum",
    goal: "Reescrever uma soma como produto para recuperar uma medida.",
    theory: [
      "Fatorar é expressar uma quantidade como um produto. A distributiva pode ser percorrida de volta. Se cada parcela contém um fator k, então ka + kb = k(a + b).",
      "Busque primeiro um divisor comum dos números. Depois, procure letras presentes em todas as parcelas e use o menor expoente que elas compartilham. Para descobrir o que sobra no parêntese, decomponha cada termo em um produto."
    ],
    problem: "Duas faixas retangulares lado a lado têm a mesma altura de 6x metros, com x positivo. As áreas são 12x² e 18x metros quadrados. Qual é o comprimento total quando x = 2?",
    steps: [
      ["Some as duas áreas", "A = 12x² + 18x", "As faixas são adjacentes e ocupam partes distintas. A área reunida é a soma das áreas."],
      ["Localize a altura nas parcelas", "12x² = 6x × 2x     e     18x = 6x × 3", "Escreva cada área como altura vezes comprimento. A altura 6x aparece nas duas medidas."],
      ["Coloque o fator em evidência", "A = 6x(2x + 3)", "Como a altura é a mesma, 2x e 3 são os dois comprimentos. A soma 2x + 3 mede a faixa inteira."],
      ["Calcule o comprimento pedido", "2 × 2 + 3 = 7 m", "A pergunta pede o segundo fator da área, que representa o comprimento. Substitua x por 2 nesse fator."]
    ],
    check: "Para x = 2, as áreas valem 48 e 36 m², totalizando 84 m². A altura de 12 m multiplicada pelo comprimento de 7 m também dá 84 m².",
    pitfall: "Em 6x + 6, a segunda parcela vira 1 dentro do parêntese quando o 6 sai. A forma correta é 6(x + 1), pois 6 × 1 recupera o segundo 6.",
    exercises: [
      {q: "Em 8x + 12 = 4(2x + k), qual é o valor de k?", a: 3, hint: "Qual número multiplicado por 4 recupera o 12?", solution: "8x = 4 × 2x e 12 = 4 × 3. O parêntese é 2x + 3, portanto k = 3."},
      {q: "Na fatoração 15x² − 10x = 5x(kx − 2), quanto vale k?", a: 3, hint: "Compare o produto 5x × kx com 15x².", solution: "15x² = 5x × 3x e −10x = 5x × (−2). Logo, 15x² − 10x = 5x(3x − 2) e k = 3."},
      {q: "Uma oficina faz 34 peças de manhã e 66 à tarde, em cada um de 9 dias. Quantas peças faz no período?", a: 900, hint: "O fator 9 aparece no total de cada turno.", solution: "O total é 9 × 34 + 9 × 66. Extraia o 9 para obter 9(34 + 66) = 9 × 100 = 900 peças."}
    ]
  },
  {
    id: "diferenca-de-quadrados",
    title: "Diferença de dois quadrados",
    goal: "Reconhecer a identidade a² − b² e usá-la em um cálculo mental.",
    theory: [
      "Os fatores (a + b) e (a − b) têm as mesmas parcelas, com sinais opostos para b. Ao multiplicá-los, aparecem a², −ab, +ab e −b². As duas parcelas do meio se anulam.",
      "A identidade a² − b² = (a − b)(a + b) funciona nos dois sentidos. Ela permite fatorar uma diferença de áreas quadradas ou calcular o produto de números igualmente afastados de um valor conveniente."
    ],
    problem: "A borda de uma moldura vai de um quadrado interno de lado 29 cm a um quadrado externo de lado 31 cm. Qual é a área da borda?",
    steps: [
      ["Retire a área do centro", "Área da borda = 31² − 29²", "A região da moldura é o que resta da área externa depois de descontar a abertura interna."],
      ["Identifique os quadrados", "a = 31     e     b = 29", "As duas parcelas da diferença já são quadrados. Isso permite usar a identidade diretamente."],
      ["Escreva os fatores", "31² − 29² = (31 − 29)(31 + 29)", "A diferença entre os lados é 2. A soma deles é 60. O produto desses números conserva a diferença entre as áreas."],
      ["Multiplique", "2 × 60 = 120 cm²", "A unidade é quadrada porque a pergunta trata da superfície ocupada pela borda."]
    ],
    check: "Calcule os quadrados separadamente. 31² = 961 e 29² = 841. A diferença 961 − 841 é 120.",
    pitfall: "A expressão (a − b)² produz a² − 2ab + b². Na diferença de quadrados, é preciso um fator com soma e outro com diferença.",
    exercises: [
      {q: "Em x² − 49 = (x − 7)(x + k), quanto vale k?", a: 7, hint: "Escreva 49 como um quadrado.", solution: "49 = 7². Então x² − 7² = (x − 7)(x + 7), de onde k = 7."},
      {q: "Use a identidade para calcular 99 × 101.", a: 9999, hint: "Os dois números estão a uma unidade de 100.", solution: "(100 − 1)(100 + 1) = 100² − 1² = 10 000 − 1 = 9 999."},
      {q: "Duas telas quadradas têm lados de 52 cm e 48 cm. Quantos centímetros quadrados de área a maior tem a mais?", a: 400, hint: "Transforme 52² − 48² em um produto simples.", solution: "A diferença das áreas é (52 − 48)(52 + 48) = 4 × 100 = 400 cm²."}
    ]
  },
  {
    id: "fracoes-com-letras",
    title: "Frações algébricas e valores permitidos",
    goal: "Simplificar fatores sem perder a restrição do denominador.",
    theory: [
      "Uma fração algébrica tem uma expressão com letras no numerador, no denominador ou em ambos. Dividir por zero é indefinido. Identifique primeiro os valores que tornam o denominador zero.",
      "Quando o numerador e o denominador têm um mesmo fator diferente de zero, dividir os dois por esse fator preserva a fração. A forma simplificada ainda descreve a expressão original somente para os valores permitidos desde o início."
    ],
    problem: "Um cálculo de área fornece (x² − 9) ÷ (x − 3). Como simplificar essa expressão, e qual é seu valor quando x = 7?",
    steps: [
      ["Anote a condição", "x − 3 ≠ 0, logo x ≠ 3", "O denominador precisa ter valor diferente de zero. Guarde essa condição durante toda a simplificação."],
      ["Fatore o numerador", "x² − 9 = (x − 3)(x + 3)", "O número 9 é o quadrado de 3. A identidade da diferença de quadrados revela dois fatores."],
      ["Divida pelo fator comum", "[(x − 3)(x + 3)] ÷ (x − 3) = x + 3", "Para x ≠ 3, o quociente (x − 3) ÷ (x − 3) vale 1. Sobra o fator x + 3."],
      ["Avalie em um ponto permitido", "7 + 3 = 10", "Como 7 é diferente de 3, as duas expressões têm o mesmo valor nesse ponto."]
    ],
    check: "Na expressão original, (7² − 9) ÷ (7 − 3) = (49 − 9) ÷ 4 = 40 ÷ 4 = 10.",
    pitfall: "Cancelar parcelas dentro de uma soma muda a conta. Em (x + 4) ÷ x, o x do denominador não é fator comum de todas as parcelas do numerador.",
    exercises: [
      {q: "Qual valor de x deve ser excluído de 1 ÷ (x + 5)?", a: -5, hint: "Faça o denominador ser igual a zero.", solution: "x + 5 = 0 quando x = −5. Esse valor produziria divisão por zero."},
      {q: "Depois de fatorar, quanto vale (t² − 16) ÷ (t − 4) em t = 9?", a: 13, hint: "Escreva t² − 16 como (t − 4)(t + 4).", solution: "Para t ≠ 4, a fração se reduz a t + 4. Como 9 é permitido, o resultado é 9 + 4 = 13."},
      {q: "Um lote com n kits, n maior que zero, contém 2n² + 6n peças distribuídas igualmente. Quantas peças há por kit quando n = 5?", a: 16, hint: "Divida o total por n depois de escrever o numerador como produto.", solution: "2n² + 6n = n(2n + 6). Dividir por n deixa 2n + 6 peças por kit. Para n = 5, são 10 + 6 = 16 peças."}
    ]
  }
];

window.MATRIZ_CONTENT.equacoes = [
  {
    id: "equilibrio-da-igualdade",
    title: "Equações como uma balança",
    goal: "Desfazer operações na ordem adequada para descobrir uma incógnita.",
    theory: [
      "Uma equação afirma que duas expressões têm o mesmo valor. A letra cujo valor queremos descobrir é a incógnita. Resolver a equação é encontrar todos os valores que tornam essa afirmação verdadeira.",
      "Imagine os dois lados em pratos de uma balança equilibrada. Somar ou subtrair a mesma quantidade dos dois lados preserva a igualdade. Multiplicar ou dividir ambos pelo mesmo número diferente de zero também preserva as soluções. Uma operação inversa desfaz a anterior."
    ],
    problem: "Três cadernos de mesmo preço e uma caneta de R$ 5 custam R$ 26. Qual é o preço de um caderno?",
    steps: [
      ["Dê um nome ao preço", "x = preço de um caderno, em reais", "Os três cadernos custam 3x. Como a caneta é comprada junto, seu preço se soma ao dos cadernos."],
      ["Monte a igualdade", "3x + 5 = 26", "O primeiro lado representa a soma dos itens. O segundo representa o total pago pela mesma compra."],
      ["Desfaça a adição", "3x + 5 − 5 = 26 − 5, logo 3x = 21", "Retirar R$ 5 dos dois lados conserva a igualdade e deixa apenas o valor dos três cadernos."],
      ["Desfaça a multiplicação", "3x ÷ 3 = 21 ÷ 3, logo x = 7", "Divida o valor dos três cadernos em três partes iguais. Cada caderno custa R$ 7."]
    ],
    check: "Substitua a resposta na primeira equação. 3 × 7 + 5 = 21 + 5 = 26. Os valores dos dois lados coincidem.",
    pitfall: "Dividir somente 3x por 3 em 3x + 5 = 26 quebra o equilíbrio. Se dividir antes de eliminar o 5, a divisão precisa alcançar o lado inteiro.",
    exercises: [
      {q: "Que número satisfaz x + 9 = 23?", a: 14, hint: "Desfaça a soma com 9 retirando 9 dos dois lados.", solution: "x + 9 − 9 = 23 − 9. Portanto x = 14, e 14 + 9 = 23."},
      {q: "Qual é x na equação 4x − 6 = 18?", a: 6, hint: "Primeiro some 6 aos dois lados. Depois, desfaça a multiplicação por 4.", solution: "4x − 6 + 6 = 18 + 6, então 4x = 24. Divida por 4 e obtenha x = 6. De fato, 4 × 6 − 6 = 18."},
      {q: "Após dividir igualmente um pacote de cartas entre 5 pessoas e dar 2 cartas extras a cada uma, cada pessoa ficou com 8. Quantas cartas havia no pacote original?", a: 30, hint: "Chame o tamanho do pacote de x. A parte retirada dele por pessoa é x ÷ 5.", solution: "x ÷ 5 + 2 = 8. Retire as duas cartas extras, obtendo x ÷ 5 = 6. Multiplique por 5 e encontre 30 cartas no pacote."}
    ]
  },
  {
    id: "primeiro-grau-dois-lados",
    title: "Parênteses e incógnita nos dois lados",
    goal: "Resolver uma equação de primeiro grau com distributiva e termos semelhantes.",
    theory: [
      "Uma equação de primeiro grau pode chegar à forma ax + b = 0, com a diferente de zero. A incógnita pode surgir inicialmente em ambos os lados. Trabalhe até conseguir reuni-la em um lado e os números no outro.",
      "Abra os parênteses, reduza os termos de cada membro e faça a mesma operação nos dois lados. Se todos os termos com x se cancelarem, observe a afirmação restante. Uma igualdade sempre verdadeira, como 4 = 4, permite todos os valores do domínio. Uma igualdade falsa, como 4 = 5, indica que nenhum valor serve."
    ],
    problem: "Um jogo calcula pontos pela regra 4(2x − 1) em um modo e pela regra 5x + 14 em outro. Para qual valor de x os modos dão a mesma pontuação?",
    steps: [
      ["Iguale as regras", "4(2x − 1) = 5x + 14", "O x deve ser o mesmo nos dois cálculos. Assim, a igualdade expressa o empate."],
      ["Distribua o fator", "8x − 4 = 5x + 14", "Multiplique 4 por 2x e depois por −1. O lado direito já está sem parênteses."],
      ["Reúna as incógnitas", "8x − 4 − 5x = 5x + 14 − 5x, logo 3x − 4 = 14", "Subtrair 5x de ambos os lados retira o termo variável do lado direito. No esquerdo, 8x − 5x dá 3x."],
      ["Isole uma unidade de x", "3x = 18, logo x = 6", "Some 4 aos dois lados para desfazer o −4. Divida os dois membros por 3 para encontrar x."]
    ],
    check: "Calcule cada modo em x = 6. O primeiro dá 4 × (12 − 1) = 44, e o segundo dá 5 × 6 + 14 = 44.",
    pitfall: "Em 4(2x − 1), multiplicar apenas 2x produz 8x − 1. O desconto de uma unidade se repete quatro vezes, chegando a −4.",
    exercises: [
      {q: "Para qual x vale 5x + 2 = 3x + 12?", a: 5, hint: "Retire 3x de ambos os membros e, depois, retire 2.", solution: "5x + 2 − 3x = 12 dá 2x + 2 = 12. Então 2x = 10 e x = 5. Com 5, ambos os lados valem 27."},
      {q: "Resolva 3(x − 2) + 5 = x + 7. Qual é x?", a: 4, hint: "Distribua o 3 e some os termos numéricos à esquerda.", solution: "3x − 6 + 5 = x + 7 se reduz a 3x − 1 = x + 7. Retirando x e somando 1, obtemos 2x = 8. Portanto x = 4."},
      {q: "Uma locadora cobra R$ 18 mais R$ 4 por hora. Outra cobra R$ 8 mais R$ 6 por hora. Em quantas horas os preços se igualam?", a: 5, hint: "Use a mesma letra para as horas em cada preço e iguale as expressões.", solution: "18 + 4h = 8 + 6h. Subtraia 4h e 8 dos dois membros. Restam 10 = 2h, portanto h = 5. Ambos os preços chegam a R$ 38."}
    ]
  },
  {
    id: "do-enunciado-a-equacao",
    title: "Do enunciado à equação",
    goal: "Transformar relações escritas em uma conta e interpretar a solução.",
    theory: [
      "Leia primeiro o que o problema pede e dê um nome à grandeza desconhecida. Em seguida, escreva as outras quantidades em função dela. A expressão “3 a mais que x” se escreve x + 3. O dobro de x se escreve 2x.",
      "Procure uma relação que represente o mesmo fato de duas maneiras. Uma soma pode ser igual a um total informado, por exemplo. Depois de resolver, volte ao texto e confira a unidade, as condições e a quantidade que foi perguntada."
    ],
    problem: "Um canteiro retangular tem 34 metros de contorno. O comprimento excede a largura em 3 metros. Qual é a largura?",
    steps: [
      ["Nomeie os lados", "largura = x     e     comprimento = x + 3", "Escolher a largura como incógnita permite escrever o comprimento usando a relação de três metros a mais."],
      ["Percorra o contorno", "x + (x + 3) + x + (x + 3) = 34", "O perímetro inclui duas larguras e dois comprimentos. A soma dessas quatro medidas é o contorno informado."],
      ["Reduza a expressão", "4x + 6 = 34", "As quatro ocorrências de x totalizam 4x. Os 3 metros extras aparecem em dois comprimentos, acrescentando 6."],
      ["Resolva e interprete", "4x = 34 − 6 = 28, logo x = 7 m", "Subtraia 6 dos dois membros e divida por 4. Como a letra representava a largura, a resposta é 7 metros."]
    ],
    check: "O comprimento é 7 + 3 = 10 m. Ao somar 7 + 10 + 7 + 10, recuperamos os 34 m do contorno.",
    pitfall: "Área e perímetro usam relações diferentes. A palavra contorno pede a soma dos quatro lados. Multiplicar largura por comprimento calcularia metros quadrados.",
    exercises: [
      {q: "Um número somado ao seu dobro vale 27. Qual é o número?", a: 9, hint: "Se o número é n, seu dobro é 2n.", solution: "Monte n + 2n = 27. Os termos com n somam 3n. Dividir 27 por 3 dá n = 9 e 9 + 18 = 27."},
      {q: "Um irmão tem 5 anos a mais que a irmã. Juntos eles têm 31 anos. Quantos anos tem a irmã?", a: 13, hint: "Use x para a idade da irmã e x + 5 para a idade do irmão.", solution: "x + (x + 5) = 31 se reduz a 2x + 5 = 31. Tire 5 e divida por 2. A irmã tem 13 anos, o irmão tem 18, e a soma é 31."},
      {q: "Uma fita de 64 cm foi cortada em três pedaços. O segundo mede o dobro do primeiro. O terceiro mede 4 cm a mais que o primeiro. Quantos centímetros mede o segundo?", a: 30, hint: "A incógnita mais conveniente é o primeiro pedaço. Lembre qual pedaço a pergunta pede.", solution: "Chame o primeiro de x. A soma é x + 2x + (x + 4) = 64. Daí 4x = 60 e x = 15. O segundo pedaço mede 2 × 15 = 30 cm."}
    ]
  },
  {
    id: "sistemas-por-substituicao",
    title: "Sistemas por substituição",
    goal: "Encontrar duas quantidades usando duas relações simultâneas.",
    theory: [
      "Uma equação com duas incógnitas pode aceitar muitos pares. A informação de que foram vendidos 14 ingressos, por exemplo, admite 8 inteiras e 6 promocionais, 7 de cada tipo ou outras combinações. Uma segunda relação ajuda a identificar o par que atende às duas exigências.",
      "Um sistema reúne essas relações. Na substituição, isole uma letra em uma equação e use a expressão obtida em todos os lugares dessa letra na outra equação. Depois, recupere a segunda incógnita e teste as duas relações."
    ],
    problem: "Um evento vendeu 14 ingressos. Cada inteira custou R$ 16 e cada ingresso promocional custou R$ 10. A receita foi de R$ 188. Quantas inteiras foram vendidas?",
    steps: [
      ["Separe quantidade e receita", "i + p = 14     e     16i + 10p = 188", "A primeira equação conta ingressos. A segunda soma reais. Escolhemos i para inteiras e p para promocionais."],
      ["Isole uma das letras", "p = 14 − i", "Dos 14 ingressos, os que sobram depois de descontar as inteiras são exatamente os promocionais."],
      ["Substitua na receita", "16i + 10(14 − i) = 188", "Qualquer solução precisa obedecer a p = 14 − i. Colocar essa expressão no lugar de p deixa uma única incógnita."],
      ["Resolva para as inteiras", "16i + 140 − 10i = 188, logo 6i = 48 e i = 8", "Distribua 10 pelo parêntese, reúna os termos com i e retire 140 dos dois lados."],
      ["Recupere a outra quantidade", "p = 14 − 8 = 6", "O sistema tem a solução de 8 inteiras e 6 promocionais. A pergunta pede as 8 inteiras."]
    ],
    check: "Teste ambas as informações. São 8 + 6 = 14 ingressos, e 16 × 8 + 10 × 6 = 128 + 60 = 188 reais.",
    pitfall: "Misturar unidades na mesma relação, como i + 10p = 188, soma quantidade de ingressos com reais. Multiplique cada tipo por seu próprio preço antes de somar receitas.",
    exercises: [
      {q: "Se x + y = 9 e y = x + 1, quanto vale x?", a: 4, hint: "Substitua y por x + 1 na soma.", solution: "x + (x + 1) = 9 leva a 2x = 8 e x = 4. Então y = 5, e a soma é 9."},
      {q: "No sistema a + b = 13 e 3a + b = 27, qual é b?", a: 6, hint: "Escreva b = 13 − a e use isso na equação que contém 3a.", solution: "3a + (13 − a) = 27 leva a 2a = 14 e a = 7. Então b = 13 − 7 = 6. A segunda soma vale 21 + 6 = 27."},
      {q: "Há 10 veículos entre bicicletas, de duas rodas, e triciclos, de três. Juntos eles têm 24 rodas. Quantos são triciclos?", a: 4, hint: "Com t triciclos, restam 10 − t bicicletas.", solution: "A contagem das rodas dá 3t + 2(10 − t) = 24. Logo 3t + 20 − 2t = 24, de onde t = 4. Seis bicicletas e quatro triciclos têm 12 + 12 rodas."}
    ]
  },
  {
    id: "sistemas-por-eliminacao",
    title: "Sistemas por eliminação",
    goal: "Combinar equações para fazer uma incógnita desaparecer.",
    theory: [
      "Somar quantidades iguais a quantidades iguais preserva a igualdade. Por isso podemos somar ou subtrair os lados correspondentes de duas equações verdadeiras. Se uma letra tem o mesmo coeficiente nas duas equações, a subtração elimina essa letra.",
      "Quando os coeficientes são diferentes, multiplique uma ou ambas as equações inteiras por números apropriados antes de combinar. Mantenha uma das relações originais para recuperar a segunda incógnita depois da eliminação."
    ],
    problem: "Em uma cantina, 2 cafés e 3 bolachas custam R$ 21. Outros 3 cafés e 2 bolachas custam R$ 24. Qual é o preço de um café?",
    steps: [
      ["Escreva os dois pedidos", "2c + 3b = 21     e     3c + 2b = 24", "c representa o preço do café e b o da bolacha. Cada coeficiente indica quantas unidades entram em um pedido."],
      ["Iguale os coeficientes de c", "6c + 9b = 63     e     6c + 4b = 48", "Multiplique a primeira equação por 3 e a segunda por 2. Nos dois lados, todas as parcelas recebem o multiplicador."],
      ["Faça a diferença", "(6c + 9b) − (6c + 4b) = 63 − 48", "Retirar a segunda igualdade da primeira cancela os seis cafés. O que se compara agora são cinco bolachas."],
      ["Resolva a primeira incógnita", "5b = 15, logo b = 3", "Os R$ 15 de diferença correspondem a cinco bolachas. Cada bolacha custa R$ 3."],
      ["Ache o preço do café", "2c + 3 × 3 = 21, logo 2c = 12 e c = 6", "Volte ao primeiro pedido. Após descontar as bolachas, sobram R$ 12 para dois cafés."]
    ],
    check: "O primeiro pedido custa 2 × 6 + 3 × 3 = 21 reais. O segundo custa 3 × 6 + 2 × 3 = 24 reais.",
    pitfall: "Ao subtrair uma equação, use parênteses em torno de cada lado inteiro. Em (6c + 9b) − (6c + 4b), o termo 4b também deve ser subtraído.",
    exercises: [
      {q: "Se x + y = 11 e x − y = 3, quanto vale x?", a: 7, hint: "Some as duas igualdades. Os termos y e −y se cancelam.", solution: "A soma dos lados leva a 2x = 14. Divida por 2 e obtenha x = 7. Pela primeira equação, y = 4."},
      {q: "Se 2p + q = 9 e p + 2q = 12, quanto vale q?", a: 5, hint: "Multiplique a segunda equação por 2 e subtraia a primeira.", solution: "A segunda equação se torna 2p + 4q = 24. Subtraia 2p + q = 9 e encontre 3q = 15. Assim, q = 5 e p = 2."},
      {q: "Duas caixas e três envelopes pesam 19 kg. Quatro caixas iguais e um envelope igual pesam 23 kg. Quantos quilogramas pesa cada envelope?", a: 3, hint: "Dobre a primeira pesagem para que as duas tenham quatro caixas.", solution: "Com c e e como pesos, 2c + 3e = 19 vira 4c + 6e = 38. Subtraia 4c + e = 23 para obter 5e = 15. Cada envelope pesa 3 kg."}
    ]
  },
  {
    id: "equacao-quadratica-por-fatores",
    title: "Segundo grau por fatoração",
    goal: "Obter as raízes de uma equação usando um produto igual a zero.",
    theory: [
      "Uma equação de segundo grau tem a forma ax² + bx + c = 0, com a diferente de zero. O maior expoente da incógnita é 2. Cada valor que torna verdadeira a igualdade é uma raiz da equação.",
      "Nos números reais, quando o produto de dois fatores é zero, pelo menos um deles vale zero. Se a equação puder ser escrita como um produto igual a zero, resolva uma pequena equação para cada fator. Depois, use o contexto para escolher entre as raízes quando for preciso."
    ],
    problem: "Um painel retangular tem 48 m² de área. O comprimento mede 2 m a mais que a largura. Qual é a largura?",
    steps: [
      ["Escreva a expressão da área", "x(x + 2) = 48", "Use x para a largura, em metros. O comprimento é x + 2. Multiplicar as medidas dos lados fornece a área."],
      ["Faça aparecer o zero", "x² + 2x − 48 = 0", "Distribua o x e retire 48 de ambos os lados. O critério do produto nulo exige que um lado da igualdade seja zero."],
      ["Procure dois fatores", "8 × (−6) = −48     e     8 + (−6) = 2", "Ao abrir (x + m)(x + n), surgem x², (m + n)x e mn. Precisamos de dois números de produto −48 e soma 2."],
      ["Separe as possibilidades", "(x + 8)(x − 6) = 0, logo x = −8 ou x = 6", "Se o primeiro fator for zero, x vale −8. Se o segundo for zero, x vale 6. As duas alternativas satisfazem a equação algébrica."],
      ["Interprete a medida", "largura = 6 m     e     comprimento = 8 m", "A medida de um lado do painel precisa ser positiva. Entre as duas raízes, apenas 6 m serve como largura."]
    ],
    check: "O painel de 6 m por 8 m tem 48 m² e o comprimento supera a largura em 2 m.",
    pitfall: "Dividir (x + 8)(x − 6) por x − 6 descartaria x = 6 justamente quando esse fator fosse zero. Examine cada fator de forma independente.",
    exercises: [
      {q: "Qual é a maior raiz de (x − 4)(x + 2) = 0?", a: 4, hint: "Resolva x − 4 = 0 e x + 2 = 0.", solution: "O primeiro fator zera em x = 4 e o segundo em x = −2. Entre −2 e 4, o maior valor é 4."},
      {q: "Qual é a menor raiz de x² − 5x + 6 = 0?", a: 2, hint: "Procure dois números de soma −5 e produto 6.", solution: "Os números são −2 e −3. A equação vira (x − 2)(x − 3) = 0. As raízes são 2 e 3. A menor é 2."},
      {q: "Um tapete tem área de 35 m². Seu comprimento é 2 m maior que sua largura. Qual é a largura, em metros?", a: 5, hint: "Monte x(x + 2) = 35 e escreva a equação como um produto igual a zero.", solution: "x² + 2x − 35 = (x + 7)(x − 5) = 0. A largura exige um valor positivo, então x = 5. O tapete mede 5 m por 7 m."}
    ]
  },
  {
    id: "formula-e-discriminante",
    title: "Fórmula do segundo grau e discriminante",
    goal: "Usar os coeficientes e o discriminante para encontrar e interpretar raízes reais.",
    theory: [
      "Na forma ax² + bx + c = 0, a, b e c incluem seus sinais e a é diferente de zero. Quando a fatoração é difícil de enxergar, a fórmula x = (−b ± √Δ) ÷ (2a), conhecida como fórmula de Bhaskara, dá as raízes. O símbolo ± pede duas contas, uma com soma e outra com subtração.",
      "O discriminante é Δ = b² − 4ac. Se Δ é positivo, sua raiz quadrada produz duas respostas reais distintas. Se Δ é zero, as duas contas chegam à mesma raiz. Se Δ é negativo, a raiz quadrada de Δ não existe entre os números reais."
    ],
    problem: "A distância vertical, com sinal, entre um ponto animado e uma linha é d(t) = 2t² − 7t + 3. Em que instantes o ponto toca a linha?",
    steps: [
      ["Relacione o encontro ao zero", "d(t) = 0, logo 2t² − 7t + 3 = 0", "Na linha, a distância vertical com sinal vale zero. Precisamos encontrar todos os tempos t que satisfazem a igualdade."],
      ["Leia os coeficientes", "a = 2, b = −7, c = 3", "A parcela de primeiro grau é −7t. Guarde o sinal do −7 para as duas substituições na fórmula."],
      ["Calcule o discriminante", "Δ = (−7)² − 4 × 2 × 3 = 49 − 24 = 25", "Eleve o coeficiente inteiro ao quadrado antes de subtrair. Como Δ é positivo, haverá dois instantes distintos."],
      ["Monte as duas contas", "t = [−(−7) ± √25] ÷ (2 × 2) = (7 ± 5) ÷ 4", "O sinal oposto de −7 é +7. A raiz quadrada principal de 25 é 5. O denominador 4 divide o numerador completo."],
      ["Interprete cada resultado", "(7 − 5) ÷ 4 = 0,5     e     (7 + 5) ÷ 4 = 3", "O ponto toca a linha em 0,5 s e em 3 s, considerando t em segundos a partir do início da animação."]
    ],
    check: "Nos dois instantes, a distância zera. d(0,5) = 2 × 0,25 − 3,5 + 3 = 0. Já d(3) = 18 − 21 + 3 = 0.",
    pitfall: "O denominador 2a divide a soma ou a diferença inteira. Preservar os parênteses em (−b ± √Δ) ÷ (2a) evita dividir apenas o último termo.",
    exercises: [
      {q: "Qual é o discriminante de x² − 6x + 9 = 0?", a: 0, hint: "Identifique b = −6 e use Δ = b² − 4ac.", solution: "Δ = (−6)² − 4 × 1 × 9 = 36 − 36 = 0. A equação possui uma raiz real distinta, x = 3."},
      {q: "Qual é a maior raiz de 2x² − 5x + 2 = 0?", a: 2, hint: "Calcule Δ e faça as duas operações indicadas por ±.", solution: "Δ = 25 − 16 = 9, logo x = (5 ± 3) ÷ 4. As raízes são 2 e 0,5. A maior é 2."},
      {q: "Um sensor simulado registra d(t) = t² + 2t + 5. Quantos valores reais de t fazem a leitura valer zero?", a: 0, hint: "O sinal do discriminante basta para contar as raízes reais.", solution: "Para d(t) = 0, Δ = 2² − 4 × 1 × 5 = −16. Como Δ é negativo, existem zero instantes reais que dão leitura zero."}
    ]
  },
  {
    id: "inequacoes-e-intervalos",
    title: "Inequações e limites de uma quantidade",
    goal: "Resolver uma desigualdade e interpretar um conjunto de respostas.",
    theory: [
      "Inequações usam relações de ordem. O símbolo ≥ significa maior ou igual, e ≤ significa menor ou igual. A expressão x ≤ 7 reúne 7 e todos os números menores que 7 dentro do domínio do problema.",
      "Somar a mesma quantidade aos dois lados mantém a ordem. Multiplicar ou dividir ambos por um número negativo inverte a ordem. Por exemplo, 2 < 5, enquanto −2 > −5. Isso acontece porque os números trocam de posição relativa quando são refletidos em torno do zero."
    ],
    problem: "A bateria de um robô começa com 76% e perde 8 pontos percentuais por rodada. Ela precisa terminar com pelo menos 20%. Quantas rodadas completas pode fazer no máximo?",
    steps: [
      ["Traduza o limite", "76 − 8r ≥ 20", "Depois de r rodadas, a carga caiu 8r pontos percentuais. Pelo menos 20% admite o próprio 20% e qualquer valor maior."],
      ["Isole o termo variável", "−8r ≥ 20 − 76, logo −8r ≥ −56", "Subtraia 76 dos dois lados. Uma subtração igual preserva a direção da desigualdade."],
      ["Divida e inverta o sinal", "r ≤ (−56) ÷ (−8), logo r ≤ 7", "O divisor é negativo. A regra de ordem transforma ≥ em ≤ ao dividir ambos os membros por −8."],
      ["Considere o que r representa", "r ∈ {0, 1, 2, 3, 4, 5, 6, 7}", "Contamos rodadas completas a partir de zero. O maior inteiro permitido pelo limite é 7."]
    ],
    check: "Após 7 rodadas restam 76 − 56 = 20%. Após 8 restariam 12%, abaixo da reserva. Isso confirma o ponto de corte.",
    pitfall: "A presença de um sinal negativo na expressão, sozinha, não inverte a desigualdade. A inversão ocorre quando os dois lados são multiplicados ou divididos por um número negativo.",
    exercises: [
      {q: "Qual é o maior inteiro que satisfaz 3x + 1 ≤ 13?", a: 4, hint: "Retire 1 dos dois lados e divida por 3.", solution: "3x ≤ 12 leva a x ≤ 4. Como a igualdade é permitida, 4 é o maior inteiro possível."},
      {q: "Qual é o menor inteiro que satisfaz −2x < 6?", a: -2, hint: "Dividir por −2 inverte < para >. O limite é estrito.", solution: "De −2x < 6 obtemos x > −3. Os inteiros permitidos começam em −2, pois o próprio −3 está excluído."},
      {q: "Um estúdio recebeu R$ 95 para pagar R$ 14 de taxa mais R$ 9 por hora inteira de gravação. Quantas horas pode contratar no máximo?", a: 9, hint: "O total gasto precisa ser menor ou igual ao orçamento.", solution: "14 + 9h ≤ 95 leva a 9h ≤ 81 e h ≤ 9. Nove horas custam R$ 95 exatamente, então o máximo é 9."}
    ]
  }
];

window.MATRIZ_CONTENT.funcoes = [
  {
    id: "entradas-saidas-e-imagem",
    title: "Entradas, saídas e imagem",
    goal: "Ler a notação de função e descobrir as saídas de um domínio.",
    theory: [
      "Uma função associa a cada entrada permitida uma única saída. O domínio é o conjunto de entradas permitidas. Em f(x), a letra f dá nome à função e o x entre parênteses indica a entrada. Assim, f(2) se lê “f de dois” e representa a saída produzida a partir de 2.",
      "O contradomínio é o conjunto escolhido para receber as saídas. A imagem reúne apenas as saídas que a função realmente produz. Duas entradas podem chegar à mesma saída. O que precisa ser único é o resultado para cada entrada."
    ],
    problem: "Um sensor tem cinco posições de entrada, −2, −1, 0, 1 e 2. O visor aceita os inteiros de 0 a 4 e exibe f(x) = x². Quantos números diferentes aparecem no visor?",
    steps: [
      ["Separe entradas e destinos", "Domínio = {−2, −1, 0, 1, 2}     e     contradomínio = {0, 1, 2, 3, 4}", "As posições físicas definem as entradas. O visor tem espaço para cinco números possíveis, mas a regra decide quais deles ele mostra."],
      ["Aplique a regra às entradas negativas", "f(−2) = (−2)² = 4     e     f(−1) = (−1)² = 1", "O quadrado multiplica a entrada por ela mesma. O produto de dois números negativos é positivo."],
      ["Avalie as entradas restantes", "f(0) = 0, f(1) = 1, f(2) = 4", "Cada entrada tem uma saída. As entradas de sinais opostos e mesmo tamanho produzem o mesmo quadrado."],
      ["Conte apenas os resultados distintos", "Imagem = {0, 1, 4}", "Os resultados 1 e 4 aparecem mais de uma vez nas contas, mas cada valor pertence ao conjunto uma única vez. Há três números diferentes no visor."]
    ],
    check: "Percorra as cinco entradas na ordem. O visor mostra 4, 1, 0, 1 e 4. A lista usa exatamente os três valores indicados.",
    pitfall: "O número de entradas pode superar o número de saídas diferentes. Contar cada repetição faria a imagem deste sensor parecer maior do que ela é.",
    exercises: [
      {q: "Se f(x) = 3x − 1, quanto vale f(4)?", a: 11, hint: "Substitua o x por 4 dentro da regra.", solution: "f(4) = 3 × 4 − 1 = 12 − 1 = 11."},
      {q: "Para domínio {−1, 0, 1, 2} e g(x) = x² + 1, quantos valores distintos há na imagem?", a: 3, hint: "Faça uma lista com as quatro saídas e retire as repetidas.", solution: "As saídas são 2, 1, 2 e 5. Os valores distintos são {1, 2, 5}, portanto a imagem tem 3 elementos."},
      {q: "Uma máquina vende pacotes inteiros de 6 peças. O domínio do pedido é {1, 2, 3, 4} pacotes. Qual é a maior quantidade de peças que pode sair?", a: 24, hint: "A função p(n) = 6n cresce quando o número de pacotes aumenta.", solution: "Para 1, 2, 3 e 4 pacotes, a máquina entrega 6, 12, 18 e 24 peças. A maior saída dessa imagem é 24."}
    ]
  },
  {
    id: "tabela-e-plano-cartesiano",
    title: "Da tabela ao plano cartesiano",
    goal: "Transformar pares de entrada e saída em pontos de um gráfico.",
    theory: [
      "O plano cartesiano tem dois eixos que se cruzam na origem (0, 0). O eixo x é horizontal e cresce para a direita. O eixo y é vertical e cresce para cima. Em um par ordenado (x, y), leia primeiro o deslocamento horizontal a partir da origem e depois o vertical.",
      "No gráfico de uma função, cada ponto tem a forma (x, f(x)). Uma tabela organiza esses pares antes do desenho. Se o domínio admite todos os números reais e a regra é afim, o gráfico é uma reta contínua. Se a situação só admite entradas inteiras, represente os pontos correspondentes."
    ],
    problem: "Um programa desenha y = 2x − 1 para qualquer x real. Como marcar o gráfico perto da origem e localizar o ponto de entrada x = 2?",
    steps: [
      ["Escolha valores de entrada", "x = −1, 0, 1 e 2", "Uma entrada negativa, o zero e entradas positivas ajudam a prever o caminho do gráfico pelos diferentes lados do plano."],
      ["Calcule a coluna das saídas", "f(−1) = −3, f(0) = −1, f(1) = 1, f(2) = 3", "Dobre cada entrada e retire 1. Em particular, para x = −1 temos 2 × (−1) − 1 = −3."],
      ["Forme os pares", "(−1, −3), (0, −1), (1, 1), (2, 3)", "Emparelhe cada entrada somente com a saída calculada a partir dela. No ponto (0, −1), o deslocamento horizontal é zero."],
      ["Marque e interprete", "x = 2 → ponto (2, 3)", "Para o último ponto, ande duas unidades para a direita e três para cima a partir da origem. Como cada aumento de 1 em x acrescenta 2 a y, os pontos ficam alinhados. Com domínio real, a reta inclui também os valores entre eles."]
    ],
    check: "Escolha uma entrada entre as tabeladas. Em x = 1,5, y = 2 × 1,5 − 1 = 2. O ponto com x = 1,5 e y = 2 fica exatamente entre (1, 1) e (2, 3).",
    pitfall: "Trocar (2, 3) por (3, 2) muda o ponto. Pela própria regra, a entrada 3 precisaria da saída 5.",
    exercises: [
      {q: "No ponto (−4, 6), qual é a coordenada horizontal?", a: -4, hint: "A coordenada horizontal ocupa a primeira posição do par.", solution: "O primeiro valor é x = −4. Partindo da origem, isso significa quatro unidades à esquerda."},
      {q: "Na reta y = −2x + 3, qual é a coordenada vertical quando x = −1?", a: 5, hint: "O produto (−2) × (−1) é positivo.", solution: "y = (−2) × (−1) + 3 = 2 + 3 = 5. O ponto é (−1, 5)."},
      {q: "Um gráfico põe horas no eixo horizontal e litros no vertical. A regra é V(t) = 12 − 1,5t. Qual é a coordenada vertical após 4 horas?", a: 6, hint: "Substitua 4 em t e leia a quantidade que sobrou.", solution: "V(4) = 12 − 1,5 × 4 = 12 − 6 = 6. O ponto (4, 6) indica 6 litros após 4 horas."}
    ]
  },
  {
    id: "funcao-afim-taxa-e-intercepto",
    title: "Função afim e taxa de variação",
    goal: "Reconstruir uma regra de custo a partir de dois pontos.",
    theory: [
      "Uma função afim tem a forma f(x) = ax + b. O coeficiente a é a taxa de variação. Ele informa quanto a saída muda a cada aumento de uma unidade na entrada. Quando a é positivo a reta sobe, quando é negativo a reta desce e quando é zero a saída é constante.",
      "O termo b é a saída inicial f(0). Ele indica onde a reta encontra o eixo vertical. Para descobrir a taxa a partir de duas observações, calcule a variação das saídas dividida pela variação das entradas, usando a mesma ordem nas duas subtrações. As entradas precisam ser distintas."
    ],
    problem: "Um estúdio cobra uma taxa fixa e um mesmo preço por hora. Duas horas custam R$ 18 e cinco horas custam R$ 30. Quanto custam oito horas?",
    steps: [
      ["Monte os pares de observações", "(2, 18)     e     (5, 30)", "A primeira coordenada conta horas, a segunda informa o preço, em reais. A taxa por hora é constante pela descrição da cobrança."],
      ["Divida as variações", "a = (30 − 18) ÷ (5 − 2) = 12 ÷ 3 = 4", "Três horas adicionais custam R$ 12. Dividindo a diferença de preço pela diferença de horas, obtemos R$ 4 por hora."],
      ["Descubra a taxa fixa", "18 = 4 × 2 + b, logo b = 10", "Nas duas primeiras horas, R$ 8 correspondem à parte variável. O restante da conta de R$ 18 é a taxa fixa de R$ 10."],
      ["Use a regra completa", "C(h) = 4h + 10, logo C(8) = 32 + 10 = 42", "Multiplique R$ 4 pelas oito horas e some a taxa fixa uma vez. Oito horas custam R$ 42."]
    ],
    check: "Volte ao segundo valor, que ficou fora do cálculo de b. A regra prevê C(5) = 4 × 5 + 10 = 30 reais, igual ao preço informado.",
    pitfall: "Dividir 18 por 2 daria o preço médio das duas primeiras horas e incluiria a taxa fixa. Para obter a taxa por hora, use as diferenças entre duas observações.",
    exercises: [
      {q: "Em f(x) = −3x + 8, qual é a taxa de variação por unidade de x?", a: -3, hint: "Leia o coeficiente que multiplica x, com o sinal.", solution: "O coeficiente de x é −3. Por exemplo, de x = 0 a x = 1 a saída cai de 8 para 5. A variação é −3."},
      {q: "Uma reta passa por (1, 7) e (4, 13). Qual é a saída em x = 0?", a: 5, hint: "Encontre a taxa e depois use o ponto (1, 7) para calcular b.", solution: "a = (13 − 7) ÷ (4 − 1) = 2. Como 7 = 2 × 1 + b, b = 5. Por isso f(0) = 5."},
      {q: "Um reservatório esvazia a uma taxa constante. Após 2 horas restam 90 L e após 5 horas restam 60 L. Quantos litros restam após 7 horas?", a: 40, hint: "Calcule a perda por hora e avance duas horas a partir da segunda leitura.", solution: "A taxa é (60 − 90) ÷ (5 − 2) = −10 L/h. Entre a quinta e a sétima hora, o volume varia em −20 L. Restam 60 − 20 = 40 L."}
    ]
  },
  {
    id: "raiz-e-encontro-de-retas",
    title: "Raiz de uma função e encontro de retas",
    goal: "Relacionar o zero de uma diferença ao ponto de encontro de dois gráficos.",
    theory: [
      "Uma raiz, ou zero, de f é uma entrada x para a qual f(x) = 0. No gráfico ela aparece em um ponto (x, 0) sobre o eixo horizontal. Na função afim ax + b, com a diferente de zero, a raiz satisfaz ax = −b.",
      "Duas funções A e B se encontram onde A(x) = B(x). Podemos estudar a diferença D(x) = A(x) − B(x). Quando D é zero, os valores coincidem. Uma diferença positiva indica A acima de B. Uma diferença negativa indica A abaixo de B."
    ],
    problem: "O plano A de impressão cobra R$ 12 de adesão e R$ 2 por folha especial. O plano B cobra R$ 4 de adesão e R$ 4 por folha. Com quantas folhas os custos se igualam?",
    steps: [
      ["Escreva os dois custos", "A(x) = 12 + 2x     e     B(x) = 4 + 4x", "A entrada x conta folhas, então para a compra real usaremos números inteiros a partir de zero."],
      ["Calcule a diferença", "D(x) = (12 + 2x) − (4 + 4x) = 8 − 2x", "A começa R$ 8 acima. A cada folha extra, sua diferença em relação a B cai R$ 2."],
      ["Encontre a raiz da diferença", "8 − 2x = 0, logo 2x = 8 e x = 4", "Quando a diferença vale zero, os dois planos cobram o mesmo. Quatro é uma quantidade de folhas possível."],
      ["Localize o encontro", "A(4) = 20     e     B(4) = 20", "O par (4, 20) é comum aos gráficos dos custos. Já o ponto (4, 0) pertence ao gráfico da diferença D."]
    ],
    check: "Com 3 folhas, A custa R$ 18 e B custa R$ 16. Com 5 folhas, A custa R$ 22 e B custa R$ 24. A ordem dos preços se inverte ao passar pelas 4 folhas.",
    pitfall: "Encontrar a entrada do empate responde quantas folhas são compradas. Para responder o preço do empate, substitua essa entrada em um dos planos.",
    exercises: [
      {q: "Qual é a raiz de f(x) = 3x − 12?", a: 4, hint: "Resolva 3x − 12 = 0.", solution: "Some 12 aos dois lados e divida por 3. A raiz é x = 4, pois f(4) = 12 − 12 = 0."},
      {q: "Em que entrada as funções A(x) = 5x + 1 e B(x) = 2x + 10 têm a mesma saída?", a: 3, hint: "Forme A(x) − B(x) e procure o zero.", solution: "A − B = 5x + 1 − 2x − 10 = 3x − 9. Isso vale zero em x = 3. Os dois resultados são 16."},
      {q: "Um tanque começa com 80 litros e perde 5 litros por minuto. Após quantos minutos chega ao ponto do gráfico com altura zero?", a: 16, hint: "Escreva o volume V(t) e encontre o instante em que V(t) = 0.", solution: "V(t) = 80 − 5t. Igualando a zero, 5t = 80 e t = 16 minutos. O gráfico do volume chega ao ponto (16, 0)."}
    ]
  },
  {
    id: "parabola-e-vertice",
    title: "Parábola e vértice",
    goal: "Encontrar o valor máximo ou mínimo de uma função quadrática.",
    theory: [
      "O gráfico de f(x) = ax² + bx + c, com a diferente de zero, é uma parábola. Ela se abre para cima quando a é positivo e para baixo quando a é negativo. O vértice é o ponto mais baixo no primeiro caso e o mais alto no segundo.",
      "A entrada do vértice é xᵥ = −b ÷ (2a). Sua saída é f(xᵥ). Entradas igualmente afastadas de xᵥ têm saídas iguais. Se o problema restringe a entrada a um intervalo, verifique se o vértice pertence a ele antes de interpretar o máximo ou mínimo."
    ],
    problem: "Em uma animação, a altura de uma esfera é h(t) = −t² + 6t + 7 metros, de t = 0 a t = 7 segundos. Qual é a maior altura durante esse intervalo?",
    steps: [
      ["Identifique a orientação", "a = −1, b = 6, c = 7", "O coeficiente de t² é negativo. A parábola se abre para baixo e sua maior altura ocorre no vértice se ele estiver no intervalo."],
      ["Localize o instante do vértice", "tᵥ = −6 ÷ [2 × (−1)] = 3 s", "A fórmula da entrada dá o instante em segundos. O valor 3 está entre 0 e 7."],
      ["Calcule a altura", "h(3) = −(3²) + 6 × 3 + 7 = −9 + 18 + 7 = 16 m", "Substitua o instante na regra. O sinal de menos aparece fora do quadrado, pois o coeficiente do termo quadrático é −1."],
      ["Leia as duas coordenadas", "Vértice = (3, 16)", "A primeira coordenada informa quando se atinge o topo. A segunda informa a maior altura pedida, 16 metros."]
    ],
    check: "Reescreva a regra como h(t) = 16 − (t − 3)². O quadrado é sempre maior ou igual a zero, então a altura nunca ultrapassa 16 e chega a 16 quando t = 3.",
    pitfall: "Apenas calcular −b ÷ (2a) fornece a entrada do vértice, em segundos neste exemplo. O problema pede a saída, em metros.",
    exercises: [
      {q: "Qual é a entrada do vértice de f(x) = x² − 8x + 3?", a: 4, hint: "Use a = 1 e b = −8 na fórmula xᵥ = −b ÷ (2a).", solution: "xᵥ = −(−8) ÷ (2 × 1) = 8 ÷ 2 = 4. A parábola tem mínimo nessa entrada."},
      {q: "Qual é o menor valor de g(x) = x² − 4x + 9 para x real?", a: 5, hint: "Calcule a entrada do vértice e substitua na função.", solution: "A parábola abre para cima. xᵥ = 4 ÷ 2 = 2. O menor valor é g(2) = 4 − 8 + 9 = 5."},
      {q: "Uma animação usa h(t) = −2t² + 8t + 1 de t = 0 a t = 4. Qual é a altura máxima, em metros?", a: 9, hint: "O coeficiente negativo indica máximo. Encontre o instante e calcule a altura.", solution: "tᵥ = −8 ÷ [2 × (−2)] = 2, dentro do intervalo. h(2) = −2 × 4 + 16 + 1 = 9 m."}
    ]
  },
  {
    id: "exponenciais-e-juros-compostos",
    title: "Crescimento, decaimento e juros compostos",
    goal: "Construir um modelo exponencial a partir de uma variação percentual repetida.",
    theory: [
      "Em uma função exponencial da forma F(n) = C × qⁿ, o valor inicial é C e o fator q multiplica o total a cada período. Para C positivo, um fator q maior que 1 produz crescimento. Um fator entre 0 e 1 produz decaimento.",
      "Um aumento de r por cento preserva o total anterior e acrescenta r centésimos desse total. Por isso o fator é 1 + r ÷ 100. Para uma redução ele é 1 − r ÷ 100. Nos juros compostos, o percentual de cada período incide sobre o saldo já atualizado. A taxa e o número de períodos precisam usar a mesma unidade de tempo."
    ],
    problem: "Em uma simulação, um saldo de R$ 200 cresce 10% por mês, sem depósitos nem retiradas. Qual é o saldo após três meses completos?",
    steps: [
      ["Converta a taxa em fator", "10% = 0,10, logo q = 1 + 0,10 = 1,10", "Multiplicar por 1 preserva o saldo. A parcela adicional de 0,10 acrescenta os dez por cento do mês."],
      ["Siga os dois primeiros meses", "200 × 1,10 = 220     e     220 × 1,10 = 242", "No primeiro mês, o acréscimo é R$ 20. No segundo, é R$ 22 porque a base passou a R$ 220."],
      ["Generalize o padrão", "S(n) = 200 × 1,10ⁿ", "O saldo inicial recebe o fator de crescimento uma vez por mês. O expoente conta quantas multiplicações se repetem."],
      ["Calcule o terceiro mês", "S(3) = 242 × 1,10 = 266,20", "O terceiro acréscimo é 10% de R$ 242, ou R$ 24,20. O saldo chega a R$ 266,20."]
    ],
    check: "Divida o saldo final por 1,10. O resultado é R$ 242, exatamente o saldo ao fim do segundo mês. Em n = 0 a regra também recupera os R$ 200 iniciais.",
    pitfall: "Somar R$ 20 três vezes aplica o percentual sempre aos R$ 200 iniciais. Isso descreve juros simples e daria R$ 260, diferente do modelo composto.",
    exercises: [
      {q: "Uma coleção começa com 3 fichas e dobra a cada rodada. Quantas fichas há depois de 4 rodadas completas?", a: 48, hint: "Aplique o fator 2 quatro vezes ao valor inicial.", solution: "A quantidade é 3 × 2⁴ = 3 × 16 = 48. A sequência é 3, 6, 12, 24 e 48."},
      {q: "Um tanque contém 100 litros. Em cada ciclo ele perde 20% do que contém no início daquele ciclo. Quantos litros restam após dois ciclos?", a: 64, hint: "Perder 20% equivale a conservar um fator 0,80.", solution: "100 × 0,80 = 80 no primeiro ciclo. No segundo, 80 × 0,80 = 64 L. Diretamente, 100 × 0,80² = 64."},
      {q: "Um investimento simulado de R$ 800 rende 5% ao ano em juros compostos. Sem movimentações, quantos reais de juros acumulou em dois anos?", a: 82, hint: "Encontre o saldo final e retire o principal de R$ 800.", solution: "Após um ano, 800 × 1,05 = 840. Após dois, 840 × 1,05 = 882. Os juros acumulados são 882 − 800 = 82 reais."}
    ]
  },
  {
    id: "logaritmo-como-inversa",
    title: "Logaritmo como pergunta de expoente",
    goal: "Usar a relação inversa entre potência e logaritmo para descobrir um tempo.",
    theory: [
      "Quando conhecemos a base e o resultado de uma potência, o logaritmo dá o expoente. A escrita log₂(8) = 3 comunica que 2³ = 8. O número pequeno é a base do logaritmo e o número entre parênteses é seu argumento.",
      "Nos números reais, a base precisa ser positiva e diferente de 1, e o argumento precisa ser positivo. Com uma base válida, há um único expoente para cada resultado positivo. Esse expoente também pode ser zero, negativo ou não inteiro."
    ],
    problem: "Um desenho começa com 5 pontos e dobra essa quantidade a cada etapa. Depois de quantas etapas o desenho terá 80 pontos?",
    steps: [
      ["Descreva a repetição", "5 × 2ⁿ = 80", "O desenho começa com 5 pontos. O fator 2 entra uma vez em cada uma das n etapas completas."],
      ["Isole a potência", "2ⁿ = 80 ÷ 5 = 16", "Dividir os dois lados por 5 separa a parte que depende de n. O desenho precisa multiplicar a quantidade inicial por 16."],
      ["Faça a pergunta inversa", "n = log₂(16)", "Agora procuramos o expoente ao qual 2 deve ser elevado para produzir 16. Essa pergunta é o significado da escrita com logaritmo."],
      ["Reconheça a potência", "2⁴ = 2 × 2 × 2 × 2 = 16, logo n = 4", "Quatro duplicações produzem o fator necessário. São quatro etapas depois do estado inicial."]
    ],
    check: "Conte os pontos por etapa, começando na etapa zero. Aparecem 5, 10, 20, 40 e 80 pontos. As quatro transições confirmam n = 4.",
    pitfall: "Dividir 16 por 2 mede quantos grupos de 2 cabem em 16. O logaritmo conta o expoente necessário na multiplicação repetida.",
    exercises: [
      {q: "Quanto vale log₁₀(1 000)?", a: 3, hint: "Escreva 1 000 como potência de 10.", solution: "10 × 10 × 10 = 1 000, então 10³ = 1 000. O logaritmo de 1 000 na base 10 vale 3."},
      {q: "Que expoente é log₂(1/8)?", a: -3, hint: "Um expoente negativo produz o inverso da potência de expoente positivo.", solution: "2³ = 8, logo 2⁻³ = 1/8. Portanto log₂(1/8) = −3."},
      {q: "Um sinal começa com intensidade 160 e a cada segundo cai à metade. Após quantos segundos a intensidade chega a 10?", a: 4, hint: "Isole (1/2)ⁿ e expresse 10/160 como uma potência de 1/2.", solution: "160 × (1/2)ⁿ = 10 dá (1/2)ⁿ = 1/16. Como (1/2)⁴ = 1/16, são necessários 4 segundos."}
    ]
  },
  {
    id: "composicao-e-funcao-inversa",
    title: "Composição e função inversa",
    goal: "Encadear duas transformações e desfazê-las em ordem inversa.",
    theory: [
      "Compor funções é usar a saída de uma como entrada de outra. A escrita g(f(x)) indica que f age primeiro e g age depois. O resultado de f precisa pertencer ao domínio de g. Inverter a ordem pode mudar a saída.",
      "Uma transformação admite uma função inversa sobre sua imagem quando cada saída vem de uma única entrada. Nesse caso, a inversa recupera a entrada original a partir da saída. Para desfazer uma sequência de operações reversíveis, comece pela última que foi feita."
    ],
    problem: "Um editor amplia uma coordenada x pelo fator 2 e desloca o resultado 6 pixels para a direita. Um ponto terminou na coordenada 20. Em que coordenada começou?",
    steps: [
      ["Nomeie as transformações", "f(x) = 2x     e     g(u) = u + 6", "A ampliação recebe a coordenada de origem. O deslocamento recebe a coordenada que já saiu da ampliação."],
      ["Componha na ordem do editor", "T(x) = g(f(x)) = 2x + 6", "A saída 2x entra no lugar de u na regra g. Deslocar antes de ampliar daria 2(x + 6), que representa outra configuração."],
      ["Desfaça a última operação", "20 − 6 = 14", "O editor somou 6 por último. Subtrair 6 recupera a posição imediatamente depois da ampliação."],
      ["Desfaça a primeira operação", "14 ÷ 2 = 7", "A ampliação duplicou a coordenada. Dividir por 2 recupera os 7 pixels originais. Para qualquer saída y, a inversa é (y − 6) ÷ 2."]
    ],
    check: "Envie a coordenada recuperada pelo editor. T(7) = 2 × 7 + 6 = 20. A ida seguida da volta devolve o valor de partida.",
    pitfall: "Desfazer as transformações na mesma ordem em que foram aplicadas produziria 20 ÷ 2 − 6 = 4. Aplicar a regra ao 4 termina em 14, o que revela a troca de ordem.",
    exercises: [
      {q: "Se f(x) = x + 3 e g(x) = 2x, quanto vale g(f(4))?", a: 14, hint: "Calcule primeiro a função escrita dentro dos parênteses.", solution: "f(4) = 4 + 3 = 7. Em seguida g(7) = 2 × 7 = 14."},
      {q: "Uma função T(x) = 3x − 5 devolveu 16. Qual foi a entrada?", a: 7, hint: "Desfaça a subtração e depois a multiplicação.", solution: "Some 5 à saída para obter 21. Divida 21 por 3 e encontre a entrada 7. De fato, 3 × 7 − 5 = 16."},
      {q: "Um visor converte temperatura por F = 1,8C + 32. Se ele marcou 68 °F, qual era a temperatura em graus Celsius?", a: 20, hint: "O 32 entrou depois da multiplicação e deve ser retirado primeiro.", solution: "68 − 32 = 36. Depois, 36 ÷ 1,8 = 20. Substituindo C = 20 na transformação original, 1,8 × 20 + 32 = 68."}
    ]
  }
];
