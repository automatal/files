window.MATRIZ_CONTENT = window.MATRIZ_CONTENT || {};

(() => {
  const course = window.MATRIZ_CONTENT;

  function lesson(id, title, goal, theory, problem, steps, check, pitfall, questions) {
    const exercises = questions.map(([q, a, hint, solution]) => ({ q, a, hint, solution }));
    return { id, title, goal, theory, problem, steps, check, pitfall, exercises };
  }

  course.aritmetica = [
    lesson('valor-posicional', 'Unidades, dezenas e centenas',
      'Ler e montar um número a partir da quantidade que cada algarismo representa.',
      [
        'Pegue dez fichas e troque-as por um pacote. Essa troca ajuda a entender o sistema decimal. Dez unidades formam uma dezena, dez dezenas formam uma centena e dez centenas formam um milhar. A quantidade de fichas continua igual depois de cada troca.',
        'Conte as posições da direita para a esquerda para descobrir o valor de cada algarismo. Em 507, o 7 vale sete unidades e o 5 vale cinco centenas. O zero guarda a posição das dezenas. Ao escrever 57, colocamos o 5 na casa das dezenas e passamos a representar outra quantidade.'
      ],
      'Um depósito tem 4 caixas de mil fichas, 7 pacotes de dez e 3 fichas soltas. Quantas fichas há no total?',
      [
        ['Conte os milhares', '4 × 1.000 = 4.000', 'Cada caixa reúne mil fichas. Contar quatro caixas é contar quatro grupos de mil.'],
        ['Reserve a casa das centenas', '0 × 100 = 0', 'Depois das caixas de mil, sobraram apenas pacotes de dez e fichas soltas. A casa das centenas recebe zero.'],
        ['Converta os grupos menores', '7 × 10 = 70     |     3 × 1 = 3', 'Sete pacotes dão setenta fichas, às quais acrescentamos as três soltas.'],
        ['Monte e leia o número', '4.000 + 0 + 70 + 3 = 4.073', 'Os algarismos ocupam as casas do milhar, da centena, da dezena e da unidade. Lemos quatro mil e setenta e três.']
      ],
      'Tire mentalmente as quatro caixas. Das 73 fichas restantes, dá para montar exatamente sete pacotes de dez e ainda deixar três fichas sobre a mesa.',
      'Concatenar só as quantidades visíveis produz 473. Nesse número, o 4 vale quatrocentos, embora as quatro caixas guardem quatro mil fichas.',
      [
        ['Em 684, quantas unidades vale o algarismo 8?', 80, 'Conte as casas a partir da direita. A segunda é a das dezenas.', 'Em 684, o 4 ocupa as unidades e o 8 ocupa as dezenas. Oito dezenas equivalem a 8 × 10 = 80 unidades.'],
        ['Qual número tem 3 milhares, 0 centenas, 5 dezenas e 2 unidades?', 3052, 'Converta cada grupo para unidades antes de somar.', 'Três milhares valem 3.000, cinco dezenas valem 50 e as unidades valem 2. Somando 3.000 + 0 + 50 + 2, obtemos 3.052.'],
        ['Uma escola recebeu 38 pacotes de 10 lápis e mais 12 lápis soltos. Quantos lápis recebeu?', 392, 'Cada pacote vale dez lápis, mesmo quando o número de pacotes passa de nove.', 'Os pacotes somam 38 × 10 = 380 lápis. Das 12 unidades soltas, dez formam outra dezena. Ao todo são 39 dezenas e 2 unidades, ou 392 lápis.']
      ]),
    lesson('adicao', 'Adição com reagrupamento',
      'Somar por posição e explicar de onde vem o “vai um”.',
      [
        'A adição reúne quantidades. Para somar 23 a 14, junte três unidades a quatro unidades e duas dezenas a uma dezena. O resultado tem três dezenas e sete unidades, ou 37. Alinhar as casas no papel deixa visível quais quantidades podem ser agrupadas.',
        'Se uma coluna chega a dez, podemos trocar dez unidades dessa coluna por uma unidade da coluna seguinte. Começamos pela direita para incluir cada troca antes de finalizar a coluna vizinha.'
      ],
      'Uma biblioteca tinha 278 livros e recebeu mais 156. Quantos livros há agora?',
      [
        ['Separe as posições', '278 = 200 + 70 + 8     |     156 = 100 + 50 + 6', 'Some unidades com unidades, dezenas com dezenas e centenas com centenas.'],
        ['Reagrupe as unidades', '8 + 6 = 14 = 1 dezena + 4 unidades', 'Escreva 4 na casa das unidades. Leve uma dezena para a próxima casa.'],
        ['Reagrupe as dezenas', '7 + 5 + 1 = 13 dezenas', 'A dezena levada entra nesta soma. Das treze dezenas, dez formam uma centena e três ficam na casa das dezenas.'],
        ['Complete as centenas', '2 + 1 + 1 = 4 centenas', 'A nova centena se junta às duas centenas iniciais e à centena da doação.'],
        ['Reconstrua o total', '400 + 30 + 4 = 434', 'Quatro centenas, três dezenas e quatro unidades representam os 434 livros da biblioteca.']
      ],
      'Separe a doação novamente. Tirar 100 de 434 deixa 334. Tirar 50 deixa 284 e tirar as últimas 6 unidades devolve os 278 livros iniciais.',
      'O 1 levado na primeira troca vale uma dezena. Se entrar novamente como uma unidade, a conta fica nove livros abaixo do total correto.',
      [
        ['Quanto é 58 + 27?', 85, 'As unidades dão 15. Quantas dezenas essa soma forma?', '8 + 7 = 15. Ficam 5 unidades e sobe 1 dezena. Nas dezenas, 5 + 2 + 1 = 8. O total é 85.'],
        ['Quanto é 386 + 247?', 633, 'Nesta soma há troca nas unidades e outra nas dezenas.', '6 + 7 = 13 deixa 3 unidades e leva 1 dezena. Depois, 8 + 4 + 1 = 13 dezenas deixa 3 dezenas e leva 1 centena. Nas centenas, 3 + 2 + 1 = 6. Juntando as três casas, obtemos 633.'],
        ['Três sessões receberam 297, 186 e 14 visitantes. Qual foi o público total?', 497, 'Experimente somar primeiro os dois números que completam uma centena.', 'Juntar 186 e 14 produz 200. Acrescente esse grupo aos 297 da primeira sessão. Como 297 + 200 = 497, houve 497 visitantes.']
      ]),
    lesson('subtracao', 'Subtração com troca',
      'Calcular o que sobra ou quanto falta, inclusive quando há um zero no meio.',
      [
        'A subtração pode medir uma retirada ou a distância entre dois números. Se você tinha 15 fichas e entregou 9, ficaram 6. A mesma conta responde quantas fichas faltam para passar de 9 a 15.',
        'Quando a posição das unidades tem menos do que precisamos retirar, abrimos uma dezena e a trocamos por dez unidades. Se a casa das dezenas está zerada, podemos abrir primeiro uma centena. As trocas mudam a forma de escrever a quantidade inicial e conservam seu valor.'
      ],
      'Um jogo começou com 402 moedas no cofre e distribuiu 178. Quantas permaneceram no cofre?',
      [
        ['Identifique a retirada', '402 − 178', 'Conhecemos o estoque inicial e a quantidade entregue. A diferença será a quantidade que ficou.'],
        ['Abra uma centena', '402 = 3 centenas + 10 dezenas + 2 unidades', 'Para retirar oito unidades, precisamos de uma dezena. Como a casa estava zerada, trocamos uma das quatro centenas por dez dezenas.'],
        ['Abra uma das dezenas', '402 = 3 centenas + 9 dezenas + 12 unidades', 'Uma das dez dezenas virou dez unidades. Juntando com as duas existentes, ficam doze unidades disponíveis.'],
        ['Faça as três retiradas', '12 − 8 = 4     |     9 − 7 = 2     |     3 − 1 = 2', 'Primeiro retiramos unidades, depois dezenas e finalmente centenas. Cada diferença continua na posição de origem.'],
        ['Leia o que restou', '2 × 100 + 2 × 10 + 4 = 224', 'As duas centenas, duas dezenas e quatro unidades restantes representam 224 moedas.']
      ],
      'Reponha as moedas entregues. 224 + 178 = 224 + 100 + 70 + 8 = 402.',
      'Ao abrir uma centena e depois uma dezena, restam nove dezenas. Usar dez dezenas na subtração depois de já ter retirado uma delas conta dez moedas duas vezes.',
      [
        ['Quanto é 72 − 46?', 26, 'Transforme as sete dezenas e duas unidades em seis dezenas e doze unidades.', 'Das 12 unidades, retire 6 e ficam 6. Das 6 dezenas, retire 4 e ficam 2. Logo, 72 − 46 = 26.'],
        ['Quanto é 503 − 267?', 236, 'Abra uma centena e depois abra uma das dez dezenas obtidas.', '503 passa a ser 4 centenas, 9 dezenas e 13 unidades. As diferenças são 13 − 7 = 6, 9 − 6 = 3 e 4 − 2 = 2. Lendo das centenas às unidades, obtemos 236.'],
        ['Uma campanha pretende arrecadar 1.000 brinquedos e já reuniu 638. Quantos ainda faltam?', 362, 'Conte quanto falta de 638 a 640, de 640 a 700 e de 700 a 1.000.', 'De 638 a 640 faltam 2. De 640 a 700 faltam 60 e de 700 a 1.000 faltam 300. Somando os intervalos, 2 + 60 + 300 = 362 brinquedos.']
      ]),
    lesson('multiplicacao', 'Multiplicação por partes',
      'Multiplicar grupos iguais e quebrar fatores grandes em contas menores.',
      [
        'Multiplicar 3 por 5 pode representar três sacos com cinco peças em cada um. Repetir a soma 5 + 5 + 5 dá 15 peças. Também podemos organizar as peças em três linhas de cinco e girar o desenho para enxergar cinco linhas de três.',
        'Quando há muitos grupos, separe-os em dois lotes. Se cada grupo mantém o mesmo tamanho, multiplicar cada lote e juntar os resultados preserva o total. Essa é a propriedade distributiva da multiplicação sobre a adição.'
      ],
      'Uma fábrica separou 14 caixas com 23 peças em cada uma. Quantas peças seguirão no caminhão?',
      [
        ['Modele os grupos', '14 × 23', 'O primeiro número conta caixas e o segundo conta peças em cada caixa. O produto conta peças.'],
        ['Escolha uma divisão conveniente', '14 = 10 + 4', 'Dez caixas formam um lote fácil de calcular. As quatro restantes formam o segundo lote.'],
        ['Calcule os dois lotes', '10 × 23 = 230     |     4 × 23 = 92', 'Para achar quatro vezes 23, dobre 23 para chegar a 46 e dobre novamente para chegar a 92.'],
        ['Reúna os lotes', '(10 + 4) × 23 = 230 + 92 = 322', 'As mesmas quatorze caixas foram contadas exatamente uma vez. O caminhão levará 322 peças.']
      ],
      'Separe as peças dentro de cada caixa em 20 e 3. Os novos subtotais são 14 × 20 = 280 e 14 × 3 = 42. A soma também dá 322.',
      'As quatro caixas do segundo lote também contêm 23 peças cada. Somar apenas 4 a 230 esqueceria o conteúdo dessas caixas.',
      [
        ['Há 8 envelopes com 7 adesivos cada. Quantos adesivos há?', 56, 'Pense em dois lotes de quatro envelopes.', 'Quatro envelopes contêm 4 × 7 = 28 adesivos. Oito envelopes são o dobro desse lote. 28 + 28 = 56.'],
        ['Quanto é 15 × 12?', 180, 'Separe o 12 em dez mais dois.', 'Distribua o 15 pelos dois termos. 15 × 10 = 150 e 15 × 2 = 30. O resultado é 150 + 30 = 180.'],
        ['Uma horta tem 18 bandejas com 24 mudas cada e mais 6 mudas avulsas. Quantas mudas há?', 438, 'Calcule primeiro as mudas nas bandejas e acrescente as avulsas uma vez.', 'Dez bandejas têm 240 mudas e oito têm 8 × 24 = 192. As bandejas somam 432 mudas. Incluindo as 6 avulsas, são 438.']
      ]),
    lesson('divisao', 'Divisão, quociente e resto',
      'Dividir em grupos e interpretar o que fazer com a sobra em cada problema.',
      [
        'A divisão responde a duas perguntas próximas. Repartir 20 cartas igualmente entre 4 pessoas dá 5 cartas por pessoa. Montar pacotes de 4 cartas usando as mesmas 20 dá 5 pacotes. A conta é 20 ÷ 4 nos dois casos, mas a unidade da resposta muda.',
        'Ao dividir uma quantidade inteira em grupos completos, o quociente conta os grupos e o resto conta os itens que sobraram. Com um divisor inteiro positivo, o resto vai de zero até um a menos que o divisor. Se o resto comportasse mais um grupo, ainda haveria trabalho a fazer.'
      ],
      'Uma gráfica vai guardar 157 cartões em envelopes com 12 cartões cada. Quantos envelopes ficam completos e quantos cartões sobram?',
      [
        ['Comece por dez grupos', '10 × 12 = 120', 'Dez envelopes cheios consomem 120 cartões. Podemos reservar esse lote porque há 157 disponíveis.'],
        ['Encontre o que ainda cabe', '157 − 120 = 37     |     3 × 12 = 36', 'Sobram 37 cartões depois dos dez envelopes. Cabem outros três grupos de doze.'],
        ['Separe a sobra final', '37 − 36 = 1', 'Um cartão é insuficiente para encher outro envelope. Encerramos a divisão em grupos inteiros.'],
        ['Interprete a resposta', '157 = 12 × 13 + 1', 'Dez envelopes mais três dão treze envelopes completos. Um cartão fica solto.']
      ],
      'Abra os treze envelopes e conte 13 × 12 = 156 cartões. Colocando o cartão solto ao lado, você recupera os 157 iniciais.',
      'A resposta depende da pergunta. São 13 envelopes completos, mas para guardar todos os cartões é preciso um 14º envelope, que ficará quase vazio.',
      [
        ['Se 42 sementes forem repartidas igualmente em 6 vasos, quantas sementes cada vaso receberá?', 7, 'Procure o número que, multiplicado por 6, dá 42.', 'Cada vaso recebe 7 sementes, pois 6 vasos × 7 sementes = 42. O resto é zero.'],
        ['Com 95 balas, quantas ficam soltas depois de montar todos os pacotes completos de 8?', 7, 'Compare 8 × 11 e 8 × 12 com 95.', 'Onze pacotes usam 88 balas e doze exigiriam 96. Subtraindo 95 − 88, restam 7 balas.'],
        ['Uma excursão leva 74 pessoas em vans com 12 lugares para passageiros. Qual é o menor número de vans necessário?', 7, 'Um grupo incompleto de passageiros também precisa de transporte.', 'Seis vans levam 6 × 12 = 72 pessoas. Restam 2 pessoas, que precisam da sétima van. A resposta é 7.']
      ]),
    lesson('inteiros', 'Números negativos e sinais',
      'Usar a reta numérica para interpretar saldos, temperaturas e operações com sinais.',
      [
        'Na reta numérica, zero é a referência. Um número à direita de outro é maior. Assim, −2 é maior que −7, pois fica cinco unidades à direita dele. A distância de −7 ao zero é 7, embora o número seja negativo.',
        'Somar uma variação positiva move o ponto para a direita. Somar uma variação negativa o move para a esquerda. Subtrair uma variação desfaz seu efeito. Nos produtos e quocientes de dois números diferentes de zero, sinais iguais dão resultado positivo e sinais diferentes dão resultado negativo.'
      ],
      'Às seis da manhã fazia −4 °C. A temperatura subiu 7 °C e depois caiu 6 °C. Qual foi a temperatura final?',
      [
        ['Escolha o ponto inicial', 'início = −4', 'Comece quatro marcas à esquerda do zero. O sinal descreve a posição inicial no termômetro.'],
        ['Separe a travessia pelo zero', '−4 + 4 = 0     |     7 − 4 = 3', 'Dos sete graus da subida, quatro levam a temperatura até zero. Ainda faltam três graus de subida.'],
        ['Termine a subida', '0 + 3 = 3', 'Agora a temperatura está três graus acima de zero. Este é o ponto inicial da descida.'],
        ['Faça a descida', '3 − 6 = −3', 'Três graus de queda chegam a zero e os outros três nos levam a três graus abaixo dele. A temperatura final é −3 °C.']
      ],
      'A variação total foi +7 − 6 = +1 grau. Partir de −4 e terminar um grau acima leva novamente a −3.',
      'Em 6 − (−4), o segundo sinal pertence ao número retirado. Desfazer uma queda de quatro equivale a subir quatro. Por isso o resultado é 10.',
      [
        ['Partindo de −8 e andando três unidades para a direita, a que número você chega?', -5, 'Conte os próximos números à direita na reta.', 'De −8, um passo leva a −7, outro a −6 e o terceiro a −5. Assim, −8 + 3 = −5.'],
        ['Qual é o valor de 6 − (−4)?', 10, 'Subtrair o número que representa uma queda desfaz essa queda.', 'O oposto de −4 é +4. Subtrair −4 equivale a somar +4, logo 6 + 4 = 10. A conferência é 10 + (−4) = 6.'],
        ['Uma conta está em −18 reais. São cobradas 4 tarifas de 3 reais e entram 17 reais. Qual é o saldo final em reais?', -13, 'Represente cada tarifa por −3 e o depósito por +17.', 'As quatro tarifas variam o saldo em 4 × (−3) = −12. Depois delas, o saldo é −18 − 12 = −30. O depósito leva o saldo a −30 + 17 = −13 reais.']
      ]),
    lesson('ordem-operacoes', 'Ordem das operações',
      'Ler uma expressão inteira e decidir qual cálculo vem primeiro.',
      [
        'Os parênteses agrupam uma parte da expressão como se fosse uma caixa. Resolva primeiro o grupo mais interno. Em cada grupo, calcule potências e raízes antes de multiplicações e divisões. Deixe adições e subtrações para o final.',
        'Multiplicação e divisão ocupam o mesmo nível e são resolvidas da esquerda para a direita. Adição e subtração também dividem um nível. Assim, em 18 ÷ 3 × 2, divida 18 por 3 e só depois multiplique por 2.'
      ],
      'Um jogo calcula a pontuação pela expressão 48 ÷ (3 + 1) × 2 + 3². Quantos pontos entram no placar?',
      [
        ['Abra a caixa dos parênteses', '48 ÷ (3 + 1) × 2 + 3² = 48 ÷ 4 × 2 + 3²', 'A soma forma um único divisor. Substitua apenas o grupo que acabou de resolver.'],
        ['Resolva a potência', '3² = 3 × 3 = 9', 'O pequeno 2 indica duas cópias do 3 como fatores. A expressão vira 48 ÷ 4 × 2 + 9.'],
        ['Siga da esquerda para a direita', '48 ÷ 4 × 2 = 12 × 2 = 24', 'Divisão e multiplicação têm a mesma prioridade. A divisão é encontrada primeiro quando lemos da esquerda.'],
        ['Some os termos finais', '24 + 9 = 33', 'Agora resta uma adição. O jogo registra 33 pontos.']
      ],
      'Interprete os termos. Primeiro, 48 dividido por quatro é 12. Dobrar esses pontos dá 24 e o bônus quadrado acrescenta 9. Os 33 pontos batem.',
      'Fazer 4 × 2 antes da divisão mudaria a expressão para 48 ÷ (4 × 2). Esses parênteses extras alteram o divisor e, por consequência, o resultado.',
      [
        ['Quanto vale 4 + 3 × 5?', 19, 'O 3 e o 5 são os fatores de um produto.', 'Calcule o produto 3 × 5 = 15. Em seguida, some os quatro que ficaram fora do produto. 4 + 15 = 19.'],
        ['Quanto vale 32 ÷ 4 × 2?', 16, 'Divisão e multiplicação têm a mesma prioridade.', 'Leia os operadores da esquerda para a direita. 32 ÷ 4 = 8 e 8 × 2 = 16.'],
        ['Você compra 3 ingressos de R$ 12 com desconto de R$ 2 em cada um e paga metade de uma taxa de R$ 8. Qual é seu gasto em reais?', 34, 'O desconto entra no preço de cada ingresso. Só a taxa é dividida por dois.', 'Cada ingresso custa 12 − 2 = 10. Os três custam 30. Sua parcela da taxa é 8 ÷ 2 = 4. O gasto é 3 × (12 − 2) + 8 ÷ 2 = 34 reais.']
      ])
  ];

  course.fracoes = [
    lesson('fracao-equivalencia', 'O que uma fração mede',
      'Ler numerador e denominador e reconhecer duas escritas da mesma parte.',
      [
        'Escolha primeiro o que vale um inteiro. Pode ser uma barra de chocolate, uma hora ou a distância de uma viagem. Em 3/4, o denominador 4 pede que esse inteiro seja dividido em quatro partes iguais. O numerador 3 conta quantas dessas partes tomamos.',
        'Se cada parte ganha novas divisões, o pedaço original continua do mesmo tamanho. Cortar todas as quatro partes ao meio transforma três quartos em seis oitavos. Multiplicar numerador e denominador pelo mesmo número inteiro positivo produz uma fração equivalente.'
      ],
      'Uma barra tem 12 quadradinhos iguais. Você come três quartos da barra. Quantos quadradinhos comeu?',
      [
        ['Fixe o inteiro', '1 barra = 12 quadradinhos', 'A fração se refere à barra inteira. Doze é a quantidade de quadradinhos na referência escolhida.'],
        ['Construa um quarto', '1/4 da barra = 12 ÷ 4 = 3 quadradinhos', 'Reparta os doze quadradinhos em quatro grupos do mesmo tamanho. Um grupo contém três quadradinhos.'],
        ['Tome três desses grupos', '3 × 3 = 9 quadradinhos', 'O numerador diz quantos quartos foram comidos. Três grupos de três contêm nove quadradinhos.'],
        ['Compare as duas escritas', '3/4 = (3 × 3)/(4 × 3) = 9/12', 'No primeiro desenho, cada parte é um grupo de três. No segundo, cada parte é um quadradinho. Ambos descrevem a mesma quantidade de chocolate.']
      ],
      'Depois de comer nove, restam três quadradinhos. Eles formam o quarto que faltava, pois 3/4 + 1/4 = 1 barra.',
      'Metade de uma barra pequena pode pesar menos que um terço de uma barra grande. Compare frações de objetos diferentes só depois de conhecer o tamanho de cada inteiro.',
      [
        ['Uma hora tem 60 minutos. Quantos minutos correspondem a 1/4 de hora?', 15, 'Divida os 60 minutos em quatro grupos iguais.', 'Cada quarto tem 60 ÷ 4 = 15 minutos. Quatro grupos de 15 reconstroem os 60 minutos.'],
        ['Complete 2/5 = n/20. Qual é o valor de n?', 8, 'Descubra por qual número o denominador 5 foi multiplicado.', 'Como 5 × 4 = 20, cada quinto virou quatro vigésimos. Os dois quintos viram 2 × 4 = 8 vigésimos. Logo, n = 8.'],
        ['Um rolo tem 35 m de fita. Costurar uma fantasia consome 3/5 do rolo. Quantos metros restam?', 14, 'Depois de usar três dos cinco grupos iguais, quantos grupos continuam no rolo?', 'Cada quinto mede 35 ÷ 5 = 7 m. Foram usados três quintos e restaram dois. A fita que sobrou mede 2 × 7 = 14 m.']
      ]),
    lesson('simplificar-comparar', 'Simplificar e comparar frações',
      'Reduzir uma fração e decidir qual das duas representa a maior parte.',
      [
        'Simplificar uma fração significa dividir numerador e denominador por um divisor comum. Por exemplo, podemos agrupar as seis partes marcadas de 6/8 em pares. O inteiro passa a ter quatro pares e três estão marcados, logo 6/8 = 3/4. A forma é irredutível quando só 1 ainda divide ambos.',
        'Duas frações com o mesmo denominador já usam pedaços do mesmo tamanho, desde que o inteiro seja o mesmo. Nesse caso, compare os numeradores. Para denominadores diferentes, reescreva as frações sobre um denominador comum antes de comparar.'
      ],
      'Duas garrafas iguais estavam cheias. Sobrou 18/24 da primeira e 10/16 da segunda. Qual tem mais água e de quanto é a diferença?',
      [
        ['Simplifique a primeira parte', '18/24 = (18 ÷ 6)/(24 ÷ 6) = 3/4', 'O 6 divide as duas quantidades exatamente. Passamos a contar grupos de seis partes antigas.'],
        ['Simplifique a segunda parte', '10/16 = (10 ÷ 2)/(16 ÷ 2) = 5/8', 'Agrupar as partes de duas em duas reduz a segunda fração a cinco oitavos.'],
        ['Adote uma mesma unidade', '3/4 = 6/8', 'Cada quarto é formado por dois oitavos. Escrevemos as duas quantidades em oitavos de uma garrafa.'],
        ['Compare e meça a diferença', '6/8 > 5/8     |     6/8 − 5/8 = 1/8', 'A primeira garrafa tem mais água. Ela tem um oitavo da capacidade da garrafa a mais que a segunda.']
      ],
      'Imagine garrafas de 800 mL. Cada oitavo vale 100 mL. Os volumes seriam 600 e 500 mL, separados exatamente por um oitavo.',
      'Um denominador maior significa partes menores para um mesmo inteiro. Comparar apenas 24 com 16 ignora quantas partes de cada tamanho foram tomadas.',
      [
        ['Ao escrever 20/28 na forma irredutível, qual é o denominador?', 7, 'Procure um número maior que 1 que divida 20 e 28.', 'Os dois números são divisíveis por 4. Dividir ambos por 4 dá 5/7. Só 1 divide 5 e 7, então o denominador final é 7.'],
        ['Escreva 3/5 e 7/10 em vigésimos. Qual é o numerador da maior das duas frações?', 14, 'Para passar de quintos a vigésimos, multiplique por 4. Para passar de décimos, multiplique por 2.', '3/5 = 12/20 e 7/10 = 14/20. Como quatorze vigésimos superam doze vigésimos, o numerador pedido é 14.'],
        ['Duas garrafas de 900 mL contêm, respectivamente, 5/6 e 7/9 da capacidade. Qual é a diferença de volume em mL?', 50, 'Use dezoitavos. Há três dezoitavos em cada sexto e dois em cada nono.', '5/6 = 15/18 e 7/9 = 14/18. A diferença é 1/18 da capacidade. Como 900 ÷ 18 = 50, a primeira tem 50 mL a mais.']
      ]),
    lesson('soma-fracoes', 'Somar e subtrair frações',
      'Encontrar um denominador comum e combinar partes do mesmo tamanho.',
      [
        'Somar dois terços a um quarto exige uma unidade que caiba exatamente no terço e no quarto. Podemos dividir o inteiro em doze partes, pois doze é múltiplo de três e de quatro. Qualquer múltiplo comum positivo funciona. O menor deles, abreviado como MMC, costuma deixar a conta mais curta.',
        'Escreva o novo denominador e descubra quantas vezes o antigo cabe nele. Multiplique o numerador pelo mesmo fator. Depois de converter todas as frações, some ou subtraia os numeradores e conserve o denominador. Ele indica o tamanho de cada parcela.'
      ],
      'Para uma receita, você junta 2/3 de litro de água com 1/4 de litro. Depois retira 1/6 de litro dessa mistura. Quanto resta?',
      [
        ['Escolha os pedaços', '3, 6, 9, 12 …     |     4, 8, 12 …     |     6, 12 …', 'As listas mostram os múltiplos positivos de três, quatro e seis. O primeiro que aparece nas três é 12. Vamos medir tudo em doze avos de litro.'],
        ['Reescreva as parcelas', '2/3 = 8/12     |     1/4 = 3/12     |     1/6 = 2/12', 'Para chegar a 12, multiplique 3 por 4, 4 por 3 e 6 por 2. Faça a mesma multiplicação no numerador de cada fração.'],
        ['Junte e depois retire', '8/12 + 3/12 − 2/12 = 9/12', 'Junte oito e três partes iguais para ter onze. Retirar duas deixa nove partes do mesmo tamanho.'],
        ['Simplifique a medida', '9/12 = (9 ÷ 3)/(12 ÷ 3) = 3/4 L', 'Agrupando os doze avos de três em três, sobram três quartos de litro.']
      ],
      'Desfaça a retirada. Os 9/12 restantes mais os 2/12 removidos perfazem 11/12 L, exatamente a soma inicial de 8/12 e 3/12.',
      'Somar os denominadores mudaria a régua durante a conta. Um quarto mais um quarto dá dois quartos, que correspondem à metade do inteiro.',
      [
        ['Quanto é 1/5 + 2/5 em número decimal?', 0.6, 'Some os quintos e converta-os em décimos multiplicando numerador e denominador por 2.', 'Um quinto mais dois quintos são três quintos. Como 3/5 = 6/10, o valor decimal é 0,6.'],
        ['Ao calcular 2/3 − 1/4 usando denominador 12, qual numerador sobra?', 5, 'Conte quantos doze avos há em cada parcela.', 'Dois terços são 8/12 e um quarto são 3/12. Retirando três dos oito doze avos, sobram 5/12. O numerador é 5.'],
        ['Duas turmas usaram, respectivamente, 1/3 e 1/4 do comprimento original de um rolo de 120 m. Quantos metros sobraram?', 50, 'Descubra primeiro a fração usada e retire-a de um inteiro.', 'O consumo foi 4/12 + 3/12 = 7/12 do rolo. Restaram 12/12 − 7/12 = 5/12. Cada uma das doze partes mede 120 ÷ 12 = 10 m, então sobraram 50 m.']
      ]),
    lesson('produto-fracoes', 'Uma fração de outra fração',
      'Calcular uma parte de uma parte e ligar o desenho à multiplicação de frações.',
      [
        'Tomar metade de uma quantidade a divide em dois grupos iguais e seleciona um deles. Isso também funciona quando a quantidade já é uma fração. Metade de três quartos é um dos dois grupos em que repartimos os três quartos.',
        'Um retângulo dividido primeiro em colunas e depois em linhas mostra a regra. Para 2/3 de 3/4, faça quatro colunas e marque três. Depois faça três linhas e escolha duas. A interseção tem 2 × 3 partes dentro de um total de 3 × 4 partes. Assim, podemos multiplicar os numeradores entre si e os denominadores entre si.'
      ],
      'Uma bandeja tem 24 morangos. Três quartos foram reservados para doces. Uma torta usará dois terços dessa reserva. Quantos morangos vão na torta?',
      [
        ['Descubra a primeira reserva', '24 ÷ 4 = 6     |     3 × 6 = 18', 'Um quarto da bandeja tem seis morangos. Os três quartos reservados totalizam dezoito.'],
        ['Mude a referência', '1/3 da reserva = 18 ÷ 3 = 6', 'Agora a palavra “terço” se refere aos dezoito morangos já reservados. Divida esse novo grupo em três.'],
        ['Pegue duas partes', '2 × 6 = 12 morangos', 'A torta recebe duas das três partes da reserva, portanto usará doze morangos.'],
        ['Resuma as duas escolhas', '(2/3) × (3/4) = 6/12 = 1/2', 'As duas seleções em sequência equivalem a tomar metade da bandeja inicial. Metade de 24 confirma os doze morangos.']
      ],
      'Dos 18 morangos reservados, 12 vão para a torta e 6 ficam para outros doces. A torta usou duas partes de seis, e o que ficou corresponde à terceira parte.',
      'O segundo corte acontece só na reserva. Aplicar os dois terços aos 24 morangos daria 16 e trocaria o inteiro de referência no meio do problema.',
      [
        ['Quanto é metade de 3/4, em número decimal?', 0.375, 'Multiplique 1/2 por 3/4 e depois divida o numerador pelo denominador.', 'O produto é (1 × 3)/(2 × 4) = 3/8. Dividir 3 por 8 dá 0,375.'],
        ['Quanto vale 4/5 de 35?', 28, 'Encontre primeiro um quinto de 35.', 'Divida 35 por 5 para obter 7 em cada quinto. Quatro quintos valem 4 × 7 = 28.'],
        ['Um jardim tem 90 m². Dois terços são canteiros e 3/5 da área dos canteiros recebe alface. Quantos m² recebem alface?', 36, 'Faça a segunda partilha sobre a área dos canteiros.', 'Os canteiros ocupam 90 ÷ 3 × 2 = 60 m². Um quinto dessa área é 12 m². Três quintos ocupam 3 × 12 = 36 m².']
      ]),
    lesson('quociente-fracoes', 'Dividir por uma fração',
      'Entender a inversão do divisor perguntando quantas porções cabem em uma quantidade.',
      [
        'Perguntar quanto é 3 ÷ 1/2 equivale a perguntar quantas meias unidades cabem em três unidades. Como cada unidade contém duas metades, cabem seis. Dividir pode aumentar o resultado quando o divisor é positivo e menor que um.',
        'Uma divisão permanece igual quando multiplicamos a quantidade disponível e o tamanho da porção pelo mesmo fator diferente de zero. Para dividir por 2/3, multiplique ambos por 3/2. O tamanho da porção vira 1 e o resultado é a quantidade inicial multiplicada por 3/2. Essa é a origem da regra de multiplicar pelo inverso do divisor.'
      ],
      'Há 5/6 de litro de suco e cada copo comporta 1/4 de litro. Quantos copos ficam cheios e quanto suco sobra?',
      [
        ['Adote uma régua comum', '5/6 L = 10/12 L     |     1/4 L = 3/12 L', 'A jarra tem dez porções de 1/12 de litro. Cada copo comporta três dessas porções.'],
        ['Conte medidas de copo', '(5/6) ÷ (1/4) = 10 ÷ 3 = 3 + 1/3', 'Dez porções formam três copos completos e ainda sobra uma das três porções necessárias para outro copo.'],
        ['Refaça pela regra', '(5/6) ÷ (1/4) = (5/6) × (4/1) = 20/6 = 10/3', 'Um quarto de litro cabe quatro vezes em cada litro. Multiplicar o volume em litros por quatro o converte em quantidades de copo.'],
        ['Dê a sobra na unidade pedida', '5/6 L − 3 × (1/4 L) = 10/12 L − 9/12 L = 1/12 L', 'Podemos servir três copos cheios. O terço de copo restante corresponde a um duodécimo de litro.']
      ],
      'Junte três copos cheios e a sobra. O volume é 3/4 + 1/12 = 9/12 + 1/12 = 10/12 = 5/6 de litro.',
      'O resto de um terço de copo e o resto de um terço de litro teriam volumes diferentes. Mantenha a unidade ao interpretar a parte fracionária do quociente.',
      [
        ['Quantas porções de 1/2 kg cabem em 5 kg?', 10, 'Conte duas meias porções em cada quilo.', 'Dividir 5 por 1/2 equivale a multiplicar 5 por 2. Os 5 kg enchem 10 porções de meio quilo.'],
        ['Qual é o valor de (3/4) ÷ (1/8)?', 6, 'Escreva três quartos em oitavos.', 'Como 3/4 = 6/8, há seis porções de um oitavo em três quartos. Pela regra, (3/4) × 8 = 24/4 = 6.'],
        ['Uma costureira tem 2,25 m de fita e precisa de 2/3 de metro para cada laço. Quantos laços completos consegue fazer?', 3, 'Converta 2,25 para quartos e interprete a parte inteira do quociente.', '2,25 = 9/4. Dividindo por 2/3, temos (9/4) × (3/2) = 27/8 = 3 + 3/8 laços. Três laços completos gastam 2 m e um quarto laço exigiria mais fita.']
      ]),
    lesson('numeros-decimais', 'Contas com números decimais',
      'Calcular com vírgulas e verificar a ordem de grandeza de uma medida ou preço.',
      [
        'À direita da vírgula, as casas valem décimos, centésimos, milésimos e assim por diante. Em 2,40, temos duas unidades, quatro décimos e zero centésimo. Por isso 2,40 e 2,4 são a mesma quantidade. Para somar e subtrair, alinhe as vírgulas e complete as casas vazias com zeros.',
        'Para multiplicar, transforme temporariamente os fatores em inteiros. Se um fator foi multiplicado por 10 e o outro por 100, o produto dos inteiros ficou mil vezes maior. Divida-o por 1.000 no fim. Na divisão, deslocar a vírgula igualmente no dividendo e no divisor preserva a quantidade de grupos.'
      ],
      'Uma compra tem 2,4 kg de arroz a R$ 3,75 por kg e uma embalagem de R$ 1,50. Pagando com R$ 20, quanto você recebe de troco?',
      [
        ['Encontre a conta do peso', '2,4 × 3,75 = (24 × 375)/1.000', 'Convertemos 2,4 em 24 multiplicando por dez e 3,75 em 375 multiplicando por cem. A compensação total é dividir por mil.'],
        ['Faça o produto inteiro', '375 × 24 = 375 × 20 + 375 × 4 = 9.000', 'As vinte parcelas de 375 dão 7.500. As quatro restantes dão 1.500. Juntamos os dois subtotais para obter 9.000.'],
        ['Devolva a escala e some', '9.000 ÷ 1.000 = 9,00     |     9,00 + 1,50 = 10,50', 'O arroz custa nove reais. Alinhando reais e centavos, a embalagem leva o total a dez reais e cinquenta centavos.'],
        ['Calcule o troco', '20,00 − 10,50 = 9,50', 'De R$ 10,50 até R$ 11,00 faltam R$ 0,50. Até R$ 20,00 faltam mais R$ 9,00. Juntas, essas parcelas dão o troco.']
      ],
      'Separe o arroz em 2 kg e 0,4 kg. Os custos são R$ 7,50 e R$ 1,50, totalizando R$ 9,00. A compra de R$ 10,50 mais R$ 9,50 de troco recompõe a nota de R$ 20.',
      'Em 0,7 + 0,08, alinhe as vírgulas. O 7 está na casa dos décimos e o 8 na dos centésimos. A escrita 0,70 + 0,08 deixa a diferença visível.',
      [
        ['Qual é o valor decimal de 0,7 + 0,08?', 0.78, 'Reescreva 0,7 como 0,70.', '0,70 tem setenta centésimos e 0,08 tem oito. No total são 78 centésimos, ou 0,78.'],
        ['Quantos pedaços de 0,15 m cabem exatamente em 4,5 m?', 30, 'Converta as duas medidas para centímetros e faça a divisão inteira.', '4,5 m = 450 cm e 0,15 m = 15 cm. O quociente 450 ÷ 15 é 30, pois 15 × 30 = 450.'],
        ['Duas pessoas dividem igualmente o custo de 1,5 kg de maçãs a R$ 8,40 por kg. Quanto cada uma paga em reais?', 6.3, 'Some o preço de um quilo ao de meio quilo antes de dividir a compra.', 'Um quilo custa R$ 8,40, então meio quilo custa R$ 4,20. As maçãs custam R$ 12,60. Dividindo por dois, cada pessoa paga R$ 6,30.']
      ]),
    lesson('proporcao-direta', 'Razões e proporção direta',
      'Escalar uma receita ou uma medida conservando a relação entre as quantidades.',
      [
        'Uma razão compara duas quantidades por divisão. Na mistura com três partes azuis para duas partes brancas, a razão entre azul e branco é 3/2. Já a parte azul do total é 3/5, pois o total reúne três partes azuis e duas brancas.',
        'Duas grandezas são diretamente proporcionais quando uma é sempre a outra multiplicada pelo mesmo número. Se cada caderno custa R$ 7, dobrar a quantidade dobra o preço. Podemos encontrar o valor de uma unidade e multiplicá-lo pela nova quantidade.'
      ],
      'Uma tinta usa 3 partes de azul para 2 de branco. Quantos mililitros de cada cor são necessários para produzir 750 mL da mesma mistura?',
      [
        ['Conte todas as partes', '3 + 2 = 5 partes', 'Os 750 mL são o volume completo da mistura. As cinco partes iguais representam esse total.'],
        ['Descubra o volume unitário', '750 ÷ 5 = 150 mL por parte', 'Todas as partes precisam ter o mesmo volume para conservar a receita.'],
        ['Calcule o azul', '3 × 150 = 450 mL', 'As três partes azuis ocupam 450 mL do total.'],
        ['Calcule o branco', '2 × 150 = 300 mL', 'As duas partes brancas ocupam 300 mL. A mistura completa usa os dois volumes encontrados.']
      ],
      'Primeiro confira 450 + 300 = 750 mL. Depois divida ambos os volumes por 150. Voltamos à razão original de três para dois.',
      'Multiplicar 750 por 3/2 trataria o volume total como se fosse a quantidade de branco. Quando a referência é a mistura toda, o azul ocupa três de cinco partes.',
      [
        ['Se três cadernos iguais custam R$ 21, quanto custam oito, em reais, mantendo o preço unitário?', 56, 'Calcule primeiro o preço de um só caderno.', 'Cada caderno custa 21 ÷ 3 = 7 reais. Oito cadernos custam 8 × 7 = 56 reais.'],
        ['Um pigmento usa 2 partes de amarelo para 5 de azul. Em 420 mL da mistura, quantos mL são amarelos?', 120, 'A receita inteira reúne sete partes do mesmo volume.', 'Uma parte mede 420 ÷ 7 = 60 mL. As duas partes amarelas totalizam 2 × 60 = 120 mL.'],
        ['Em um mapa na escala 1 para 25.000, um caminho mede 6 cm. Quantos quilômetros ele mede na realidade?', 1.5, 'Cada centímetro no mapa representa 25.000 cm reais. Um quilômetro mede 100.000 cm.', 'Seis centímetros no mapa representam 6 × 25.000 = 150.000 cm. Divida por 100.000 para converter centímetros em quilômetros. O caminho tem 1,5 km.']
      ]),
    lesson('proporcao-inversa', 'Proporção inversa',
      'Reconhecer quando o total de trabalho permanece constante e calcular um novo tempo.',
      [
        'Dois valores são inversamente proporcionais quando seu produto permanece constante. Em uma viagem de distância fixa, velocidade × tempo = distância. Dobrar a velocidade média reduz o tempo à metade.',
        'Em um trabalho dividido igualmente entre máquinas idênticas, uma máquina trabalhando por uma hora entrega uma máquina-hora de serviço. Se a quantidade de serviço permanece a mesma e as máquinas mantêm o ritmo, podemos trocar mais máquinas por menos tempo.'
      ],
      'Quatro impressoras idênticas concluem uma encomenda em 9 horas. Com seis impressoras do mesmo ritmo trabalhando juntas desde o início, quanto tempo será necessário?',
      [
        ['Identifique o que fica fixo', '1 encomenda = 4 impressoras × 9 horas', 'A encomenda permanece a mesma. Só mudam o número de impressoras e o tempo de funcionamento.'],
        ['Meça o serviço total', '4 × 9 = 36 impressora-horas', 'É o trabalho equivalente a uma impressora ligada durante 36 horas.'],
        ['Distribua o serviço', '36 ÷ 6 = 6 horas', 'A cada hora, as seis impressoras entregam seis impressora-horas de serviço. São necessárias seis dessas horas.'],
        ['Compare as variações', '6/4 = 1,5     |     9 ÷ 1,5 = 6', 'O número de impressoras aumentou pelo fator 1,5. Para manter o mesmo serviço, o tempo foi dividido por esse fator.']
      ],
      'No plano inicial o serviço soma 4 × 9 = 36 impressora-horas. No novo, 6 × 6 também dá 36.',
      'Só observar que um valor cresce enquanto outro diminui não garante proporção inversa. Verifique qual produto a situação mantém constante e se o ritmo individual continua igual.',
      [
        ['Três torneiras iguais enchem um tanque em 8 horas. Partindo do mesmo tanque vazio, quantas horas seis torneiras iguais levariam?', 4, 'Encontre a quantidade de torneira-horas necessária para esse tanque.', 'O tanque exige 3 × 8 = 24 torneira-horas. Com seis torneiras abertas, o tempo é 24 ÷ 6 = 4 horas.'],
        ['Uma estrada tem 90 km. Viajando a 60 km/h de velocidade média, quantas horas o percurso leva?', 1.5, 'A distância fixa é o produto da velocidade média pelo tempo.', 'Como 60 × tempo = 90, dividimos 90 por 60 e achamos 1,5 hora. Uma hora percorre 60 km e a outra meia hora acrescenta 30 km.'],
        ['Oito máquinas iguais fariam um lote em 6 horas. Depois de 2 horas com todas, quatro param. Quantas horas o lote leva no total?', 10, 'Tire do serviço total a quantidade feita antes da parada. Divida só o serviço restante entre as quatro máquinas ativas.', 'O lote exige 8 × 6 = 48 máquina-horas. Nas primeiras 2 horas foram feitas 16. Restam 32 máquina-horas. Quatro máquinas precisam de 8 horas para o restante, então o tempo total é 2 + 8 = 10 horas.']
      ]),
    lesson('porcentagens', 'Porcentagens e descontos',
      'Calcular percentuais e acompanhar o valor que serve de base a cada mudança.',
      [
        'Por cento significa por cem. Assim, 20% = 20/100 = 0,20. Para achar 20% de um valor, multiplique esse valor por 0,20. Para aplicar um desconto de 20%, também podemos calcular diretamente os 80% que continuam no preço, multiplicando-o por 0,80.',
        'Depois de uma mudança, o novo preço passa a servir de base à próxima. Em dois descontos sucessivos, os fatores de permanência se multiplicam. Para um aumento, some a taxa decimal a 1. Um aumento de 12%, por exemplo, transforma o preço em 1,12 vez seu valor anterior.'
      ],
      'Um fone de R$ 150 recebe 20% de desconto. No caixa, há mais 10% sobre o preço já reduzido. Qual é o preço final e qual foi o desconto total em porcentagem?',
      [
        ['Encontre o primeiro fator', '100% − 20% = 80% = 0,80', 'A loja cobra oitenta centavos de cada real do preço inicial.'],
        ['Atualize a base', '150 × 0,80 = 120', 'Depois do primeiro desconto, o preço é R$ 120. O desconto seguinte será calculado sobre esse valor.'],
        ['Aplique o segundo desconto', '10% de 120 = 12     |     120 − 12 = 108', 'Dez por cento correspondem à décima parte do preço atualizado. O fone passa a custar R$ 108.'],
        ['Meça o desconto no preço inicial', '(150 − 108)/150 = 42/150 = 0,28 = 28%', 'A economia foi de 42 reais sobre uma base inicial de 150. Em cada cem reais originais, a economia equivaleu a 28 reais.']
      ],
      'Multiplique os fatores de permanência. 0,80 × 0,90 = 0,72. O preço final é 72% de R$ 150, ou R$ 108. Até 100% faltam 28 pontos percentuais.',
      'Somar 20 e 10 para anunciar 30% ignora a mudança da base. O segundo desconto vale R$ 12, enquanto 10% sobre os R$ 150 iniciais valeriam R$ 15.',
      [
        ['Qual é o valor de 15% de 180?', 27, 'Separe 15% em 10% e 5%.', 'Dez por cento de 180 são 18. Cinco por cento são metade disso, ou 9. Somando 18 + 9, encontramos 27.'],
        ['Um serviço custava R$ 250 e aumentou 12%. Qual é o novo preço em reais?', 280, 'Depois do aumento, o preço corresponde a 112% da base.', 'O aumento é 250 × 0,12 = 30 reais. Some-o ao valor inicial para obter 250 + 30 = 280 reais.'],
        ['Depois de um desconto de 15%, uma peça custa R$ 204. Qual era o preço original em reais?', 240, 'Os 204 reais correspondem a 85% de um preço que ainda precisa ser descoberto.', 'O preço original multiplicado por 0,85 produz 204. Desfazendo a multiplicação, temos 204 ÷ 0,85 = 240. A prova é retirar 15% de 240, ou 36 reais, obtendo 204.']
      ])
  ];

  course.potencias = [
    lesson('significado-potencia', 'Potências e multiplicação repetida',
      'Ler base e expoente e reconhecer uma potência em uma contagem por camadas.',
      [
        'Uma potência com expoente inteiro positivo encurta um produto de fatores iguais. Em 5³, o 5 é a base e o 3 é o expoente. Escreva três fatores iguais a 5 para obter 5 × 5 × 5. Os nomes “ao quadrado” e “ao cubo” vêm das contagens em áreas e volumes.',
        'Os parênteses mostram exatamente o que está elevado. Em (−3)², os dois fatores são −3 e o produto é 9. Em −3², primeiro calculamos 3² e depois aplicamos o sinal negativo, obtendo −9.'
      ],
      'Um cubo é formado por cubinhos iguais. Em cada aresta cabem 4 cubinhos. Quantos cubinhos formam o cubo inteiro?',
      [
        ['Conte uma fileira', '1 fileira = 4 cubinhos', 'Olhe só a primeira fileira da camada de baixo. Ela percorre uma aresta do cubo.'],
        ['Complete a camada', '4 fileiras × 4 cubinhos = 4² = 16 cubinhos', 'A camada de baixo é um quadrado. Ela tem quatro fileiras, cada uma com os mesmos quatro cubinhos.'],
        ['Empilhe as camadas', '4 camadas × 16 cubinhos = 64 cubinhos', 'A altura também comporta quatro cubinhos. Há quatro cópias da camada quadrada, inclusive as que ficam escondidas.'],
        ['Escreva o produto como potência', '4 × 4 × 4 = 4³ = 64', 'A base 4 aparece uma vez para cada direção medida. O expoente 3 conta esses três fatores.']
      ],
      'Retire uma das quatro camadas. Restarão 64 − 16 = 48 cubinhos, que de fato formam 3 × 16. Colocar a camada de volta recompõe o cubo.',
      'O produto 4 × 3 conta três grupos de quatro e vale 12. Na potência 4³, os três elementos contados são fatores, então o cálculo é 4 × 4 × 4.',
      [
        ['Qual é o valor de 5³?', 125, 'Escreva três fatores iguais a 5.', '5³ = 5 × 5 × 5. Os dois primeiros fatores dão 25 e 25 × 5 = 125.'],
        ['Quanto vale (−2)⁴?', 16, 'Agrupe quatro fatores negativos em dois pares.', 'Cada par (−2) × (−2) vale 4. Os dois pares juntos produzem 4 × 4 = 16.'],
        ['Um arquivo começa com uma única cópia. Em cada rodada, cada cópia gera uma nova e a antiga permanece. Quantas cópias existem após cinco rodadas?', 32, 'As cópias dobram em cada rodada. Uma cópia já existia antes da primeira.', 'As quantidades após cada rodada são 2, 4, 8, 16 e 32. O cálculo compacto é 1 × 2⁵ = 32 cópias.']
      ]),
    lesson('propriedades-potencias', 'Regras das potências',
      'Escolher quando somar, subtrair ou multiplicar expoentes e justificar a regra pelos fatores.',
      [
        'No produto de potências com a mesma base, juntamos as listas de fatores. Por isso 2³ × 2² = 2⁵. No quociente com mesma base diferente de zero, podemos cancelar fatores iguais do numerador e do denominador. Assim, 2⁵ ÷ 2² = 2³. A regra de cancelar exige um denominador diferente de zero.',
        'Elevar uma potência a outra repete o grupo inteiro de fatores. Por exemplo, (2³)² = 2³ × 2³ tem seis fatores iguais a dois, logo (2³)² = 2⁶. Elevar um produto também permite elevar cada fator, pois (3 × 4)² = 3 × 4 × 3 × 4 = 3² × 4².'
      ],
      'Um painel tem 4 blocos. Cada bloco é quadrado, com 2³ pixels de lado. Dividindo todos os pixels igualmente entre 8 setores, quantos pixels ficam por setor?',
      [
        ['Conte um bloco', '(2³)² = 2³ × 2³ = 2⁶', 'O quadrado tem o mesmo número de linhas e colunas. Dois grupos de três fatores dão seis fatores iguais a 2.'],
        ['Represente os quatro blocos', '4 × 2⁶ = 2² × 2⁶ = 2⁸', 'Como quatro é 2², todos os fatores têm a mesma base. O número de fatores passa de seis para oito.'],
        ['Divida nos oito setores', '2⁸ ÷ 8 = 2⁸ ÷ 2³ = 2⁵', 'O divisor contém três fatores iguais a 2. Cancelar três dos oito fatores do numerador deixa cinco.'],
        ['Converta para uma contagem', '2⁵ = 2 × 2 × 2 × 2 × 2 = 32', 'Cada setor recebe 32 pixels.']
      ],
      'Use apenas números comuns. Cada bloco tem 8 × 8 = 64 pixels. Quatro blocos têm 256 pixels e 256 ÷ 8 = 32 pixels por setor.',
      'A soma de expoentes depende de multiplicar potências com a mesma base. Em 2³ + 2², calcule 8 + 4 = 12. Trocar a adição por 2⁵ daria 32.',
      [
        ['Em 3⁴ × 3² = 3 elevado a n, quanto vale n?', 6, 'Conte os fatores 3 que aparecem nos dois produtos.', 'O primeiro grupo tem quatro fatores 3 e o segundo tem dois. Juntos são seis fatores, então n = 4 + 2 = 6.'],
        ['Quanto vale (5²)³ ÷ 5⁴?', 25, 'Multiplique os expoentes da potência de potência e depois desconte os fatores do divisor.', '(5²)³ = 5⁶. Dividindo por 5⁴, sobram dois fatores 5. O resultado é 5² = 25.'],
        ['Um arquivo com 2¹⁰ registros será dividido igualmente em 2⁵ blocos. Quantos registros ficarão em cada bloco?', 32, 'Há uma divisão de potências com a mesma base diferente de zero.', '2¹⁰ ÷ 2⁵ é 2 elevado a (10 − 5), ou 2⁵. Como 2⁵ = 32, cada bloco recebe 32 registros.']
      ]),
    lesson('expoentes-zero-negativos', 'Expoentes zero e negativos',
      'Seguir uma sequência de potências até zero e interpretar um expoente negativo como um inverso.',
      [
        'Na sequência 2³, 2², 2¹, os valores são 8, 4 e 2. Cada vez que o expoente diminui uma unidade, dividimos o valor por 2. Continuar o mesmo padrão produz 2⁰ = 1 e 2⁻¹ = 1/2.',
        'Para qualquer base a diferente de zero, a⁰ = 1. Para n inteiro positivo, a elevado a −n vale 1 dividido por a elevado a n. Essas condições evitam divisões por zero. Um expoente negativo descreve a operação de tomar o inverso. O sinal do resultado ainda depende da base e de o expoente ser par ou ímpar.'
      ],
      'Uma régua digital começa com marcas espaçadas de 1 mm no nível zero. A cada nível de ampliação, a distância real entre marcas consecutivas cai pela metade. Quanto mede esse intervalo no nível 3?',
      [
        ['Defina a unidade inicial', 'nível 0 → 1 mm = 2⁰ mm', 'A régua ainda está na sua escala de referência. Uma unidade multiplicada por 1 mantém seu tamanho.'],
        ['Reduza o intervalo uma vez', 'nível 1 → 1 ÷ 2 = 1/2 mm = 2⁻¹ mm', 'Dividir uma vez por dois reduz o expoente de zero para menos um.'],
        ['Repita a divisão', 'nível 2 → 1/4 mm     |     nível 3 → 1/8 mm', 'Divida o meio milímetro por dois para obter um quarto. Divida esse quarto por dois para chegar a um oitavo. Três reduções fazem a unidade original caber em oito intervalos.'],
        ['Converta a potência', '2⁻³ mm = (1/2³) mm = 1/8 mm = 0,125 mm', 'O espaçamento real no nível 3 é um oitavo de milímetro.']
      ],
      'Oito intervalos de 0,125 mm somam 1 mm. Voltar pelas três ampliações é dobrar três vezes, e 0,125 × 2 × 2 × 2 = 1.',
      '2⁻³ representa 1/8. Já −2³ é o oposto de 8. O lugar do sinal muda a operação.',
      [
        ['Quanto vale 7⁰?', 1, 'Comece em 7¹ e divida por 7 para reduzir o expoente em uma unidade.', '7¹ = 7. Reduzindo o expoente para zero, dividimos 7 por 7 e obtemos 1.'],
        ['Qual é o valor decimal de 4⁻²?', 0.0625, 'Calcule 4² e tome o inverso.', '4² = 16, então 4⁻² = 1/16. A divisão 1 ÷ 16 dá 0,0625.'],
        ['Uma amostra de 192 mL passa por três etapas. Em cada uma, conserva-se metade do volume anterior. Quantos mL restam?', 24, 'A fração conservada ao fim corresponde a 2 elevado a −3.', 'Três metades sucessivas conservam (1/2)³ = 1/8 do volume. Dividir 192 por 8 dá 24 mL. Pela sequência, 192 passa a 96, depois a 48 e por fim a 24.']
      ]),
    lesson('raizes-estimativas', 'Raízes exatas e estimativas',
      'Desfazer uma potência e aproximar uma raiz quando não há resposta inteira.',
      [
        'A raiz quadrada de uma quantidade real não negativa é o número não negativo que, ao quadrado, produz a quantidade inicial. Escrevemos √81 = 9 porque 9 × 9 = 81. Já a equação x² = 81 admite tanto 9 como −9. O símbolo √ escolhe a raiz não negativa.',
        'Para estimar uma raiz, encontre dois quadrados conhecidos, um abaixo e outro acima do valor. Depois teste números entre os extremos. A raiz cúbica desfaz o cubo da mesma maneira. Ela também admite números negativos, pois o cubo de um número negativo é negativo.'
      ],
      'Um canteiro quadrado tem 50 m² de área. Quanto mede seu lado, arredondado ao décimo de metro mais próximo?',
      [
        ['Escreva o que se sabe', 'lado × lado = 50 m²     |     lado = √50 m', 'Como todos os lados do quadrado são iguais e o comprimento é positivo, buscamos o valor positivo cujo quadrado é 50.'],
        ['Cerque a raiz com inteiros', '7² = 49 < 50 < 64 = 8²', 'O lado precisa ser maior que sete e menor que oito. Os quadrados aumentam à medida que os números positivos crescem.'],
        ['Teste décimos', '7,0² = 49     |     7,1² = 50,41', 'A raiz fica entre 7,0 e 7,1. Para arredondar ao décimo mais próximo, descubra de que lado do ponto médio ela cai.'],
        ['Use o ponto médio', '7,05² = 49,7025 < 50', 'A raiz é maior que 7,05 e menor que 7,1. Portanto, seu décimo mais próximo é 7,1.'],
        ['Registre a aproximação', '√50 ≈ 7,1     |     lado ≈ 7,1 m', 'O símbolo ≈ indica arredondamento. A área exata continua sendo 50 m².']
      ],
      'Com lado de 7 m teríamos só 49 m². Com 7,1 m teríamos 50,41 m². O lado verdadeiro precisa mesmo estar entre as duas medidas.',
      'Em √(9 + 16), some dentro da raiz e obtenha √25 = 5. Somar √9 e √16 produziria 7, cujo quadrado é 49.',
      [
        ['Quanto vale √144?', 12, 'Qual número positivo multiplicado por ele mesmo produz 144?', 'Como 12 × 12 = 144 e 12 é positivo, √144 = 12.'],
        ['Qual é a raiz cúbica de −27?', -3, 'Faça três fatores iguais cujo produto seja negativo.', '(−3) × (−3) = 9 e 9 × (−3) = −27. Portanto, a raiz cúbica é −3.'],
        ['Um piso quadrado tem 70 m². Qual é o seu lado em metros, arredondado ao décimo mais próximo?', 8.4, 'Compare 70 com os quadrados de 8,3 e 8,4. Para arredondar, teste também 8,35.', '8,3² = 68,89 e 8,4² = 70,56, então √70 está entre os dois. O ponto médio 8,35 tem quadrado 69,7225, abaixo de 70. A raiz passa do ponto médio e arredonda para 8,4 m.']
      ]),
    lesson('notacao-cientifica', 'Notação científica',
      'Ler, montar e operar com números muito grandes ou pequenos por meio de potências de dez.',
      [
        'A escrita científica de um número positivo tem a forma a × 10ⁿ, com 1 ≤ a < 10 e n inteiro. O número 48.000 vira 4,8 × 10⁴, pois multiplicar 4,8 por 10.000 devolve 48.000. Para números negativos, escreva o sinal na frente e aplique a mesma regra ao valor absoluto.',
        'Um expoente negativo de dez desloca a vírgula para a esquerda durante a reconstrução. Assim, 3,2 × 10⁻³ = 0,0032. Para multiplicar números em notação científica, multiplique os coeficientes e use a regra de potências de mesma base para os fatores de dez. No final, ajuste o coeficiente à faixa de 1 a menos de 10.'
      ],
      'Cada camada de um material tem 0,0000045 m de espessura. Se 200.000 camadas forem empilhadas sem espaços, qual será a altura em metros?',
      [
        ['Escreva a espessura de uma camada', '0,0000045 m = 4,5 × 10⁻⁶ m', 'Para voltar de 4,5 a 0,0000045, a vírgula anda seis casas para a esquerda. O expoente é menos seis.'],
        ['Escreva o número de camadas', '200.000 = 2 × 10⁵', 'O 2 precisa ser multiplicado por cem mil. Temos cinco fatores iguais a dez.'],
        ['Agrupe fatores semelhantes', '(4,5 × 10⁻⁶) × (2 × 10⁵) = (4,5 × 2) × 10⁽⁻⁶⁺⁵⁾', 'O coeficiente é 4,5 vezes 2. Como as potências se multiplicam e têm a mesma base, seus expoentes se somam.'],
        ['Leia o resultado', '9 × 10⁻¹ m = 9 ÷ 10 m = 0,9 m', 'O total das camadas mede nove décimos de metro, ou 90 cm.']
      ],
      'Com mil camadas, a pilha mediria 0,0045 m. Multiplicando essa espessura por 200, chegamos às 200.000 camadas e novamente a 0,9 m.',
      'O sinal do expoente indica como reconstruir o número. Em 4,5 × 10⁻⁶, a potência encolhe 4,5. Reconstruir o número antes de aceitar o expoente evita trocar o sinal.',
      [
        ['Em 65.000.000 = 6,5 × 10ⁿ, qual é n?', 7, 'Conte quantas casas a vírgula de 6,5 precisa avançar para formar sessenta e cinco milhões.', '6,5 × 10 = 65. Aplicando mais seis fatores dez, obtemos 65.000.000. São sete fatores ao todo, então n = 7.'],
        ['Escreva 3,2 × 10⁻³ como número decimal.', 0.0032, 'Dividir por mil desloca a vírgula três casas para a esquerda.', '3,2 ÷ 10 = 0,32. Dividindo por dez outras duas vezes, chegamos a 0,032 e depois a 0,0032.'],
        ['Um sensor processa 1,2 × 10⁶ amostras, gastando 2,5 × 10⁻³ milissegundo por amostra, uma após a outra. Qual é o tempo total em segundos?', 3, 'Multiplique as medidas e, ao final, use 1.000 milissegundos = 1 segundo.', 'Os coeficientes dão 1,2 × 2,5 = 3. Os expoentes somam 6 + (−3) = 3. São 3 × 10³ milissegundos, equivalentes a 3.000 ÷ 1.000 = 3 segundos.']
      ])
  ];
})();
