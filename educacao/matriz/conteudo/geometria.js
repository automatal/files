window.MATRIZ_CONTENT = window.MATRIZ_CONTENT || {};

window.MATRIZ_CONTENT.geometria = [
  {
    "id": "geo-medidas",
    "title": "Medidas e conversões",
    "goal": "Pôr comprimentos, áreas e volumes na mesma unidade antes de calcular.",
    "theory": [
      "Uma medida reúne um número e uma unidade. Uma fita de 1 m também mede 100 cm. Seu comprimento continua igual. O número aumenta porque o centímetro é uma unidade menor. Para converter de centímetros para metros, faça a operação inversa e divida por 100.",
      "A área conta quadradinhos e o volume conta cubinhos. Num quadrado de 1 m de lado cabem 100 fileiras de 100 quadrados de 1 cm de lado. Assim, 1 m² = 10.000 cm². Um cubo de 1 m de aresta tem ainda 100 camadas, logo 1 m³ = 1.000.000 cm³."
    ],
    "problem": "Uma parede mede 3,20 m. Um vão de porta de 85 cm ficará sem rodapé. Quantos metros de rodapé você precisa para o restante da parede?",
    "steps": [
      [
        "Escolha uma unidade",
        "1 m = 100 cm",
        "A parede e o vão são comprimentos. Escolher centímetros permite trabalhar com números inteiros."
      ],
      [
        "Converta a parede",
        "3,20 × 100 = 320 cm",
        "Há 3 metros inteiros, ou 300 cm, mais 0,20 m, ou 20 cm. Somando as partes, chegamos a 320 cm."
      ],
      [
        "Retire o trecho da porta",
        "320 − 85 = 235 cm",
        "O vão já está incluído nos 320 cm da parede. Descontamos seus 85 cm uma única vez."
      ],
      [
        "Volte à unidade pedida",
        "235 ÷ 100 = 2,35 m",
        "Cada grupo de 100 cm forma um metro. Temos dois metros completos e mais 35 centésimos de metro."
      ]
    ],
    "check": "Some o vão de volta em metros. O resultado, 2,35 + 0,85 = 3,20 m, recupera o comprimento da parede.",
    "pitfall": "Fazer 3,20 − 85 mistura metros com centímetros. Escrever a unidade em cada linha ajuda a perceber a diferença.",
    "exercises": [
      {
        "q": "Quantos centímetros há em 1,75 m?",
        "a": 175,
        "hint": "Cada metro contém 100 cm.",
        "solution": "1,75 × 100 = 175 cm. O metro inteiro fornece 100 cm e os 0,75 m fornecem 75 cm."
      },
      {
        "q": "Uma placa quadrada mede 1 m de lado. Qual é sua área em centímetros quadrados?",
        "a": 10000,
        "hint": "Converta cada lado para centímetros antes de multiplicar.",
        "solution": "Cada lado mede 100 cm. A área é 100 × 100 = 10.000 cm²."
      },
      {
        "q": "De uma barra de 2 m foram retiradas três peças de 45 cm. Desprezando as perdas de corte, quantos centímetros sobraram?",
        "a": 65,
        "hint": "Ache o total retirado e converta os 2 m para a mesma unidade.",
        "solution": "A barra começou com 200 cm. Os três cortes usaram 3 × 45 = 135 cm. Restaram 200 − 135 = 65 cm."
      }
    ]
  },
  {
    "id": "geo-escala",
    "title": "Escala em mapas e projetos",
    "goal": "Traduzir uma medida do desenho para o objeto real e fazer o caminho de volta.",
    "theory": [
      "A escala é a razão comprimento no desenho ÷ comprimento real, com ambos na mesma unidade. Na escala 1:50, uma unidade do desenho representa cinquenta unidades reais. Um centímetro representa 50 cm e um milímetro representa 50 mm.",
      "Para ir do desenho ao real na escala 1:n, multiplique por n. Para voltar, divida por n. Um desenho na escala 2:1, comum para mostrar detalhes pequenos, tem comprimentos duas vezes maiores que os do objeto."
    ],
    "problem": "Na planta de um quarto, uma parede mede 7,6 cm. O desenho está na escala 1:50. Qual é o comprimento real da parede em metros?",
    "steps": [
      [
        "Leia a correspondência",
        "1 cm na planta ↔ 50 cm no quarto",
        "A escala usa a mesma unidade nos dois lados. Cada centímetro desenhado representa um grupo de 50 cm reais."
      ],
      [
        "Conte os grupos",
        "7,6 × 50 = 380 cm",
        "Os sete grupos inteiros somam 350 cm. Os seis décimos de grupo acrescentam 30 cm."
      ],
      [
        "Expresse em metros",
        "380 ÷ 100 = 3,8 m",
        "A escala já foi aplicada. Esta divisão só muda a unidade da resposta."
      ],
      [
        "Reconstrua o desenho",
        "380 cm ÷ 50 = 7,6 cm",
        "Dividir o comprimento real pelo fator da escala recupera o segmento que se mede com a régua."
      ]
    ],
    "check": "Uma parede de 4 m apareceria com 8 cm na planta. Um desenho um pouco menor, com 7,6 cm, corresponde de fato a uma parede um pouco menor que 4 m.",
    "pitfall": "Ler 1:50 como “um centímetro vale cinquenta metros” aumenta o resultado cem vezes. Os dois números da escala comparam a mesma unidade.",
    "exercises": [
      {
        "q": "Na escala 1:100, um segmento de 4 cm representa quantos metros reais?",
        "a": 4,
        "hint": "Ache primeiro os centímetros reais.",
        "solution": "4 × 100 = 400 cm reais. Dividindo por 100, obtemos 4 m."
      },
      {
        "q": "Uma mesa real tem 1,50 m. Quantos centímetros deve medir no desenho em escala 1:25?",
        "a": 6,
        "hint": "Converta o comprimento real em centímetros e divida pelo fator 25.",
        "solution": "1,50 m = 150 cm. A redução para o desenho dá 150 ÷ 25 = 6 cm."
      },
      {
        "q": "Um detalhe de uma peça aparece com 18 mm em um desenho ampliado na escala 3:1. Qual é seu comprimento real em milímetros?",
        "a": 6,
        "hint": "Três milímetros no desenho correspondem a um milímetro no objeto.",
        "solution": "O desenho é três vezes maior. O detalhe real mede 18 ÷ 3 = 6 mm."
      }
    ]
  },
  {
    "id": "geo-angulos",
    "title": "Ângulos e polígonos",
    "goal": "Medir uma abertura e descobrir ângulos internos a partir dos lados de um polígono.",
    "theory": [
      "Duas semirretas que partem de um mesmo ponto formam um ângulo. O ponto de encontro é o vértice. Uma volta inteira mede 360°, meia volta mede 180° e um quarto de volta mede 90°, o chamado ângulo reto. A abertura depende das direções das semirretas.",
      "Um polígono é um contorno fechado formado por segmentos retos. Em um polígono convexo, as diagonais a partir de um único vértice dividem o interior em triângulos sem sobreposição. Com n lados surgem n − 2 triângulos, cada um com soma dos ângulos internos igual a 180°. Em um polígono regular, todos os lados e todos os ângulos internos são iguais."
    ],
    "problem": "Você está desenhando um ladrilho em forma de hexágono regular. Que medida deve ter cada ângulo interno para os seis cantos ficarem iguais?",
    "steps": [
      [
        "Conte os lados",
        "n = 6",
        "O prefixo “hexa” indica seis. Percorrer o contorno marca seis lados e seis ângulos internos."
      ],
      [
        "Divida em triângulos",
        "6 − 2 = 4 triângulos",
        "De um vértice, ligue os três vértices que não são seus vizinhos. As três diagonais formam quatro regiões triangulares."
      ],
      [
        "Junte os ângulos",
        "4 × 180° = 720°",
        "Somados, os cantos dos triângulos recompõem exatamente os ângulos internos do hexágono."
      ],
      [
        "Reparta por igual",
        "720° ÷ 6 = 120°",
        "A regularidade permite dividir a soma igualmente. Cada canto mede 120°."
      ]
    ],
    "check": "Ao acompanhar o contorno, a direção muda 180° − 120° = 60° em cada vértice. As seis mudanças completam 6 × 60° = 360°, uma volta.",
    "pitfall": "Dividir a soma dos ângulos pelo número de lados dá a média. Para afirmar que cada ângulo tem esse valor, precisamos saber que os ângulos são iguais.",
    "exercises": [
      {
        "q": "Dois ângulos adjacentes completam uma linha reta. Um mede 47°. Quantos graus mede o outro?",
        "a": 133,
        "hint": "Os dois juntos formam meia volta.",
        "solution": "A linha reta corresponde a 180°. Restam 180° − 47° = 133°."
      },
      {
        "q": "Quantos graus mede cada ângulo interno de um pentágono regular?",
        "a": 108,
        "hint": "Com cinco lados, divida a figura em três triângulos.",
        "solution": "A soma vale (5 − 2) × 180° = 540°. Como os cinco ângulos são iguais, 540° ÷ 5 = 108°."
      },
      {
        "q": "Um robô percorre um polígono regular, girando 45° no mesmo sentido em cada vértice. Quantos lados percorre até completar uma volta?",
        "a": 8,
        "hint": "O total dos giros externos ao fechar uma volta é 360°.",
        "solution": "Cada vértice acrescenta 45° de giro. São necessários 360° ÷ 45° = 8 giros, um para cada lado."
      }
    ]
  },
  {
    "id": "geo-perimetro-area",
    "title": "Perímetro e área",
    "goal": "Distinguir o contorno da superfície e calcular os dois em uma figura composta.",
    "theory": [
      "Perímetro é o comprimento de uma volta inteira pelo contorno. Para cercar um jardim, some os comprimentos dos trechos de cerca. A unidade continua sendo de comprimento, como o metro.",
      "Área mede quanta superfície está coberta. Um retângulo com 9 m por 6 m acomoda seis fileiras de nove quadrados de 1 m², por isso sua área é base × altura. Quando uma figura tem um recorte, você pode dividi-la em retângulos sem sobreposição ou descontar a área que falta."
    ],
    "problem": "Um terraço retangular de 9 m por 6 m perdeu um retângulo de 3 m por 2 m em um dos cantos e ficou em forma de L. Quanto piso cobre o terraço e qual é o comprimento de todo o contorno?",
    "steps": [
      [
        "Complete a figura",
        "9 × 6 = 54 m²",
        "Imagine o canto preenchido. O retângulo maior é fácil de medir e inclui a área que será descontada."
      ],
      [
        "Desconte o recorte",
        "54 − (3 × 2) = 48 m²",
        "O recorte ocupa 6 m². Os 48 m² restantes são a quantidade de superfície que receberá piso."
      ],
      [
        "Recupere os lados menores",
        "9 − 3 = 6 m   |   6 − 2 = 4 m",
        "Retirando o canto superior direito, restam 6 m na borda de cima e 4 m na lateral direita. O recorte cria ainda dois lados de 3 m e 2 m."
      ],
      [
        "Percorra a borda uma vez",
        "9 + 4 + 3 + 2 + 6 + 6 = 30 m",
        "Parta do canto inferior esquerdo e siga pelos seis segmentos até voltar ao início. Cada segmento entra uma única vez."
      ]
    ],
    "check": "Para conferir o piso por outro caminho, divida o L em uma faixa inferior de 9 × 4 e outra superior de 6 × 2. A soma 36 + 12 = 48 m² confirma a área.",
    "pitfall": "Subtrair os 6 m² do recorte do perímetro mistura grandezas. Neste recorte de canto, cada trecho de borda que saiu foi substituído por outro de igual comprimento.",
    "exercises": [
      {
        "q": "Uma moldura retangular mede 8 cm por 5 cm nas bordas externas. Qual é seu perímetro externo em centímetros?",
        "a": 26,
        "hint": "Conte dois lados de cada comprimento.",
        "solution": "8 + 5 + 8 + 5 = 26 cm de contorno externo."
      },
      {
        "q": "De um piso de 8 m por 5 m, tire um canto retangular de 3 m por 2 m. Qual é a área restante em metros quadrados?",
        "a": 34,
        "hint": "Subtraia a área do canto da área total.",
        "solution": "O retângulo inteiro cobre 8 × 5 = 40 m². O recorte ocupa 3 × 2 = 6 m². Ficam 40 − 6 = 34 m²."
      },
      {
        "q": "Um canteiro de 6 m por 4 m precisa de cerca em toda a volta, exceto por um portão de 1,5 m. Quantos metros de cerca são necessários?",
        "a": 18.5,
        "hint": "O portão ocupa parte do contorno.",
        "solution": "O contorno soma 2 × (6 + 4) = 20 m. Subtraindo o trecho do portão, 20 − 1,5 = 18,5 m de cerca."
      }
    ]
  },
  {
    "id": "geo-triangulos-area",
    "title": "Área de triângulos",
    "goal": "Identificar a altura perpendicular e entender por que a área tem uma divisão por dois.",
    "theory": [
      "Você pode escolher qualquer lado de um triângulo como base. A altura correspondente é a distância perpendicular entre o vértice oposto e a reta que contém essa base. O encontro forma 90°. Num triângulo obtusângulo, a altura pode cair no prolongamento da base.",
      "Faça uma cópia idêntica do triângulo e gire-a meia volta em torno do ponto médio de um dos lados diferentes da base. Esse lado se torna a emenda. As duas cópias formam um paralelogramo de mesma base e altura. Recortando e deslocando uma ponta do paralelogramo, podemos rearranjá-lo como um retângulo de área base × altura. Cada triângulo ocupa metade dessa área."
    ],
    "problem": "Uma placa triangular tem base de 10 cm, altura perpendicular de 6 cm e um lado inclinado de 8 cm. Quantos centímetros quadrados de material há na placa?",
    "steps": [
      [
        "Marque a base",
        "b = 10 cm",
        "A altura informada é medida em relação ao lado de 10 cm. Esse par deve permanecer junto na fórmula."
      ],
      [
        "Encontre a altura",
        "h = 6 cm",
        "A direção perpendicular mede a separação entre a base e uma reta paralela passando pelo vértice."
      ],
      [
        "Duplique o triângulo",
        "b × h = 10 × 6 = 60 cm²",
        "Duas placas iguais podem formar um paralelogramo. A multiplicação mede a área das duas juntas."
      ],
      [
        "Separe uma placa",
        "A = 60 ÷ 2 = 30 cm²",
        "As placas são congruentes, portanto têm áreas iguais. A divisão devolve a área de uma só."
      ]
    ],
    "check": "Duas placas de 30 cm² somam 60 cm², a área do paralelogramo construído pela duplicação.",
    "pitfall": "Usar automaticamente o lado inclinado de 8 cm como altura produz uma área errada. Procure a medida perpendicular à base escolhida.",
    "exercises": [
      {
        "q": "Um triângulo tem base de 12 cm e altura correspondente de 5 cm. Qual é sua área em centímetros quadrados?",
        "a": 30,
        "hint": "Multiplique as medidas e divida por dois.",
        "solution": "A = (12 × 5) ÷ 2 = 60 ÷ 2 = 30 cm²."
      },
      {
        "q": "Uma bandeira triangular tem área de 36 cm² e base de 9 cm. Qual é sua altura perpendicular em centímetros?",
        "a": 8,
        "hint": "Duas bandeiras juntas têm área base × altura.",
        "solution": "Duas bandeiras ocupam 2 × 36 = 72 cm². Dividir 72 pela base 9 dá a altura de 8 cm."
      },
      {
        "q": "Uma fachada tem um retângulo de 8 m por 3 m e, logo acima, um triângulo de base 8 m e altura 2 m. Qual é a área total em metros quadrados?",
        "a": 32,
        "hint": "Calcule as duas regiões separadamente e some.",
        "solution": "A parte de baixo mede 8 × 3 = 24 m². O triângulo mede (8 × 2) ÷ 2 = 8 m². O total é 24 + 8 = 32 m²."
      }
    ]
  },
  {
    "id": "geo-circulo",
    "title": "Circunferência e círculo",
    "goal": "Calcular o comprimento de uma borda circular e a área de um disco.",
    "theory": [
      "A circunferência é a borda formada pelos pontos que estão à mesma distância de um centro. Essa distância é o raio r. Um segmento de borda a borda que passa pelo centro é um diâmetro, d = 2r. O círculo inclui também a região interna.",
      "Em qualquer circunferência, a razão entre o comprimento da borda e o diâmetro é a constante π, aproximadamente 3,14159. Daí C = πd = 2πr. Divida mentalmente o disco em muitos setores finos e alterne as pontas para cima e para baixo. À medida que os setores ficam menores, o conjunto se aproxima de um retângulo com base de meia circunferência e altura r. A área é πr × r = πr²."
    ],
    "problem": "Um disco tem 20 cm de diâmetro. Quanto mede a borda e qual é a área de uma das faces? Use π ≈ 3,14.",
    "steps": [
      [
        "Leia o diâmetro",
        "d = 20 cm   |   r = 20 ÷ 2 = 10 cm",
        "Um raio vai do centro à borda. O diâmetro atravessa o centro e equivale a dois raios."
      ],
      [
        "Calcule a borda",
        "C ≈ 3,14 × 20 = 62,8 cm",
        "Cada diâmetro cabe um pouco mais de três vezes no comprimento da volta completa."
      ],
      [
        "Calcule a superfície",
        "A ≈ 3,14 × 10² = 314 cm²",
        "O quadrado do raio é 10 × 10 = 100 cm². Multiplicá-lo por π dá a área de uma face."
      ],
      [
        "Compare as unidades",
        "borda ≈ 62,8 cm   |   face ≈ 314 cm²",
        "Uma fita que contorna o disco precisa de comprimento. Para pintar sua face, precisamos de uma medida de superfície."
      ]
    ],
    "check": "Um quadrado de lado 20 cm que contém o disco tem 400 cm². A área encontrada, 314 cm², cabe dentro desse limite. A borda dividida pelo diâmetro dá 62,8 ÷ 20 = 3,14.",
    "pitfall": "Substituir r pelo diâmetro em πr² quadruplica a área, porque o fator dois também é elevado ao quadrado.",
    "exercises": [
      {
        "q": "Uma roda tem 10 cm de diâmetro. Com π ≈ 3,14, quantos centímetros mede uma volta na borda?",
        "a": 31.4,
        "hint": "A medida informada já é o diâmetro.",
        "solution": "C = πd ≈ 3,14 × 10 = 31,4 cm."
      },
      {
        "q": "Um círculo tem diâmetro de 12 cm. Com π ≈ 3,14, qual é a área em centímetros quadrados?",
        "a": 113.04,
        "hint": "Antes de elevar ao quadrado, encontre o raio.",
        "solution": "O raio é 12 ÷ 2 = 6 cm. A ≈ 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
      },
      {
        "q": "Uma arruela tem raio externo de 5 cm e furo circular de raio 3 cm. Com π ≈ 3,14, qual é a área de material em uma face, em centímetros quadrados?",
        "a": 50.24,
        "hint": "Calcule a área do disco externo e desconte a área do furo.",
        "solution": "A área restante é π × 5² − π × 3² = π × (25 − 9) = 16π. Com a aproximação pedida, 16 × 3,14 = 50,24 cm²."
      }
    ]
  },
  {
    "id": "geo-volume",
    "title": "Volume e capacidade",
    "goal": "Relacionar camadas de cubinhos, centímetros cúbicos e litros.",
    "theory": [
      "Volume indica o espaço ocupado por um sólido. Um cubinho de 1 cm de aresta ocupa 1 cm³. Numa caixa retangular, a base comporta comprimento × largura cubinhos na primeira camada. Multiplicar pelo número de camadas, dado pela altura em centímetros, fornece V = comprimento × largura × altura.",
      "Qualquer prisma reto ou cilindro reto de seção constante segue a mesma ideia, V = área da base × altura. A capacidade de um recipiente usa suas medidas internas. Um cubo de 10 cm de aresta contém 10 × 10 × 10 = 1.000 cm³, equivalentes a 1 litro. Assim, 1 cm³ equivale a 1 mL."
    ],
    "problem": "Um aquário retangular tem medidas internas de 40 cm por 25 cm e altura de 30 cm. A água fica 6 cm abaixo da borda. Quantos litros de água ele contém?",
    "steps": [
      [
        "Encontre a altura da água",
        "30 − 6 = 24 cm",
        "O espaço vazio está no topo. Apenas os 24 cm abaixo dele entram no volume ocupado pela água."
      ],
      [
        "Meça uma camada",
        "40 × 25 = 1.000 cm²",
        "A base retangular mede 1.000 cm². Uma camada de água com 1 cm de espessura ocupa 1.000 cm³."
      ],
      [
        "Empilhe as camadas",
        "1.000 × 24 = 24.000 cm³",
        "A seção do aquário permanece igual até a altura de 24 cm, por isso multiplicamos a área da base pela altura preenchida."
      ],
      [
        "Converta a capacidade",
        "24.000 ÷ 1.000 = 24 L",
        "Agrupar os centímetros cúbicos em milhares fornece o número de litros."
      ]
    ],
    "check": "Cheio até a borda, o aquário conteria 30 L. Cada centímetro de altura corresponde aqui a 1 L. Os 6 cm vazios deixam 30 − 6 = 24 L de água.",
    "pitfall": "Multiplicar pelas medidas externas inclui o vidro no volume interno. Observe também se a altura dada corresponde à parte preenchida.",
    "exercises": [
      {
        "q": "Qual é o volume de um cubo de 4 cm de aresta em centímetros cúbicos?",
        "a": 64,
        "hint": "Há 4 × 4 cubinhos em cada uma das quatro camadas.",
        "solution": "V = 4 × 4 × 4 = 64 cm³."
      },
      {
        "q": "Uma caixa retangular de medidas internas 30 cm por 20 cm por 10 cm está com metade da capacidade ocupada. Quantos litros ela contém?",
        "a": 3,
        "hint": "Calcule a capacidade total antes de tomar a metade.",
        "solution": "O total é 30 × 20 × 10 = 6.000 cm³ = 6 L. Metade corresponde a 3 L."
      },
      {
        "q": "Uma peça cilíndrica maciça tem raio 2 cm e altura 10 cm. Use π ≈ 3,14. Qual é seu volume em centímetros cúbicos?",
        "a": 125.6,
        "hint": "No cilindro a base é um círculo, de área πr².",
        "solution": "A base mede aproximadamente 3,14 × 2² = 12,56 cm². Multiplicando pela altura, 12,56 × 10 = 125,6 cm³."
      }
    ]
  },
  {
    "id": "geo-pitagoras",
    "title": "Teorema de Pitágoras",
    "goal": "Descobrir um lado desconhecido de um triângulo retângulo.",
    "theory": [
      "Um triângulo retângulo tem um ângulo de 90°. Os dois lados que se encontram nesse ângulo são os catetos. O lado em frente ao ângulo reto é a hipotenusa e é sempre o maior dos três.",
      "Imagine um quadrado construído sobre cada lado. O teorema de Pitágoras afirma que, para um triângulo retângulo, as áreas dos dois quadrados dos catetos somam a área do quadrado da hipotenusa. Se a e b são os catetos e c é a hipotenusa, a² + b² = c². A raiz quadrada recupera o comprimento positivo a partir da área."
    ],
    "problem": "Uma escada de 5 m está apoiada numa parede vertical. Seu pé está a 3 m da parede sobre um piso horizontal. A que altura ela encosta?",
    "steps": [
      [
        "Identifique o ângulo reto",
        "piso ⊥ parede",
        "A distância horizontal e a altura vertical se encontram a 90°. A escada fica do lado oposto a esse encontro e é a hipotenusa."
      ],
      [
        "Escreva a relação",
        "3² + h² = 5²",
        "A distância até a parede e a altura são os catetos. Seus quadrados entram do mesmo lado da igualdade."
      ],
      [
        "Isole o quadrado",
        "h² = 25 − 9 = 16",
        "Subtraímos 9 dos dois lados para obter a área do quadrado construído sobre a altura desconhecida."
      ],
      [
        "Recupere o comprimento",
        "h = √16 = 4 m",
        "Quatro vezes quatro é dezesseis. Como a altura é uma medida de comprimento, usamos a raiz positiva."
      ]
    ],
    "check": "Substitua os três comprimentos. A conta 3² + 4² = 9 + 16 = 25 = 5² confirma a relação. A altura também ficou menor que a escada.",
    "pitfall": "Escrever h² = 3² + 5² colocaria a altura como hipotenusa. Localize o ângulo reto antes de decidir qual lado fica sozinho na igualdade.",
    "exercises": [
      {
        "q": "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Quanto mede a hipotenusa em centímetros?",
        "a": 10,
        "hint": "Some os quadrados antes de tirar a raiz.",
        "solution": "c² = 6² + 8² = 36 + 64 = 100. Portanto c = √100 = 10 cm."
      },
      {
        "q": "A diagonal de um retângulo mede 17 cm e um dos lados mede 8 cm. Qual é o comprimento do outro lado em centímetros?",
        "a": 15,
        "hint": "A diagonal é a hipotenusa do triângulo formado com os dois lados.",
        "solution": "x² = 17² − 8² = 289 − 64 = 225. A raiz positiva é x = 15 cm."
      },
      {
        "q": "Um atalho atravessa em diagonal um terreno retangular de 5 m por 12 m. Quantos metros ele poupa em relação a andar pelos dois lados?",
        "a": 4,
        "hint": "Compare o comprimento da diagonal com 5 + 12.",
        "solution": "A diagonal mede √(5² + 12²) = √169 = 13 m. O trajeto pelos lados mede 17 m. A economia é 17 − 13 = 4 m."
      }
    ]
  },
  {
    "id": "geo-semelhanca",
    "title": "Semelhança de triângulos",
    "goal": "Encontrar medidas indiretas comparando lados que ocupam posições correspondentes.",
    "theory": [
      "Figuras semelhantes têm a mesma forma. Os ângulos correspondentes são iguais e todos os comprimentos correspondentes são multiplicados pelo mesmo fator k. Nos triângulos, basta confirmar dois pares de ângulos iguais. O terceiro fica determinado porque os três somam 180°.",
      "Antes de montar uma proporção, ligue cada lado ao que desempenha a mesma função na outra figura. Altura corresponde a altura, base a base. O perímetro também multiplica por k. A área multiplica por k² porque tanto a base quanto a altura mudam."
    ],
    "problem": "No mesmo instante e sobre terreno plano, uma haste vertical de 1,5 m projeta sombra de 2 m. Uma árvore vertical projeta sombra de 10 m. Qual é a altura da árvore?",
    "steps": [
      [
        "Explique a semelhança",
        "ângulo reto + mesma inclinação da luz",
        "Haste e árvore formam 90° com o terreno. Como os raios solares chegam praticamente paralelos, o ângulo entre a luz e o chão também coincide."
      ],
      [
        "Associe os lados",
        "2 m ↔ 10 m   |   1,5 m ↔ h",
        "Compare sombra com sombra e altura com altura. Manter a mesma ordem evita inverter uma das razões."
      ],
      [
        "Encontre o fator",
        "k = 10 ÷ 2 = 5",
        "A sombra da árvore tem cinco vezes o comprimento da sombra da haste. A semelhança exige o mesmo fator em todos os lados correspondentes."
      ],
      [
        "Aplique à altura",
        "h = 1,5 × 5 = 7,5 m",
        "A altura da árvore deve ter cinco vezes a altura da haste para conservar a forma do triângulo."
      ]
    ],
    "check": "A razão altura ÷ sombra vale 1,5 ÷ 2 = 0,75 na haste e 7,5 ÷ 10 = 0,75 na árvore. Os resultados coincidem.",
    "pitfall": "Sombras medidas em horários diferentes podem ter inclinações solares diferentes. A igualdade dos ângulos é o que permite usar uma mesma proporção.",
    "exercises": [
      {
        "q": "Um triângulo é ampliado com fator 1,5. Quanto mede, em centímetros, o lado que correspondia a 4 cm?",
        "a": 6,
        "hint": "Multiplique o comprimento original pelo fator linear.",
        "solution": "4 × 1,5 = 6 cm. Todos os comprimentos correspondentes crescem na mesma proporção."
      },
      {
        "q": "Um poste de 2 m projeta sombra de 1,6 m. No mesmo instante e terreno plano, um muro vertical projeta sombra de 4 m. Quantos metros tem o muro?",
        "a": 5,
        "hint": "Divida a sombra maior pela menor para encontrar o fator de ampliação.",
        "solution": "O fator é 4 ÷ 1,6 = 2,5. A altura do muro vale 2 × 2,5 = 5 m."
      },
      {
        "q": "Um adesivo triangular de área 6 cm² é ampliado, triplicando todos os comprimentos. Qual é sua nova área em centímetros quadrados?",
        "a": 54,
        "hint": "Tanto a base quanto a altura são multiplicadas por três.",
        "solution": "A área multiplica por 3² = 9. Assim, 6 × 9 = 54 cm²."
      }
    ]
  }
];

window.MATRIZ_CONTENT.trigonometria = [
  {
    "id": "trig-lados",
    "title": "Os lados de cada ângulo",
    "goal": "Localizar hipotenusa, cateto oposto e cateto adjacente mesmo quando o desenho gira.",
    "theory": [
      "A trigonometria do triângulo retângulo liga aberturas de ângulos a razões entre comprimentos. Comece marcando o ângulo reto, de 90°. A hipotenusa é o lado em frente a ele. Os outros dois lados são os catetos.",
      "Escolha agora um dos dois ângulos agudos, isto é, menores que 90°. O cateto oposto fica do outro lado do triângulo e não toca o vértice escolhido. O cateto adjacente encosta nesse vértice. Quando você troca o ângulo agudo de referência, os catetos trocam de função. Girar a folha conserva todas essas relações."
    ],
    "problem": "No triângulo ABC, o ângulo B é reto. Os lados medem AB = 12 cm, BC = 5 cm e AC = 13 cm. Quais são os lados oposto e adjacente quando olhamos primeiro de A e depois de C?",
    "steps": [
      [
        "Ache a hipotenusa",
        "B = 90° ⇒ hipotenusa AC = 13 cm",
        "AC une os dois vértices diferentes de B e fica em frente ao ângulo reto. A hipotenusa fica identificada durante todo o problema."
      ],
      [
        "Olhe a partir de A",
        "de A, cateto oposto = BC = 5 cm",
        "Os nomes dos lados que tocam A contêm a letra A. BC é o único que não a contém, portanto é o lado oposto."
      ],
      [
        "Escolha o cateto vizinho",
        "de A, cateto adjacente = AB = 12 cm",
        "AB e AC encostam em A. Como AC já é a hipotenusa, o cateto que encosta em A é AB."
      ],
      [
        "Mude o ponto de vista",
        "de C, oposto = AB = 12 cm   |   adjacente = BC = 5 cm",
        "Ao olhar de C, AB fica à frente e BC toca o vértice. O lado AC continua oposto ao ângulo reto em B."
      ]
    ],
    "check": "De cada ângulo agudo identificamos uma vez cada um dos três lados. Além disso, 5² + 12² = 169 = 13² confirma qual pode ser a hipotenusa.",
    "pitfall": "Tomar sempre o segmento horizontal como adjacente falha quando o desenho gira ou o ângulo de referência muda. Marque o vértice antes de nomear os lados.",
    "exercises": [
      {
        "q": "No triângulo DEF, E é o ângulo reto. DE = 3 cm, EF = 4 cm e DF = 5 cm. Quanto mede a hipotenusa em centímetros?",
        "a": 5,
        "hint": "O lado em frente a E liga D a F.",
        "solution": "DF fica em frente ao ângulo reto, então a hipotenusa mede 5 cm."
      },
      {
        "q": "Num triângulo retângulo em B, AB = 8 cm, BC = 15 cm e AC = 17 cm. Quanto mede o cateto oposto ao ângulo C em centímetros?",
        "a": 8,
        "hint": "Procure o lado cujo nome não contém C.",
        "solution": "O lado que não toca C é AB. Assim, o cateto oposto mede 8 cm."
      },
      {
        "q": "Uma rampa tem 5 m de comprimento, sobe 3 m e avança 4 m na horizontal. Para o ângulo entre a rampa e uma parede vertical no topo, quanto mede o cateto adjacente em metros?",
        "a": 3,
        "hint": "O ângulo escolhido encosta na rampa e na parede. A rampa é a hipotenusa.",
        "solution": "A parede representa a altura vertical de 3 m. Como a rampa de 5 m é a hipotenusa, o cateto que toca o ângulo no topo mede 3 m."
      }
    ]
  },
  {
    "id": "trig-seno-cosseno",
    "title": "Seno e cosseno",
    "goal": "Converter o comprimento de uma diagonal em altura e alcance horizontal.",
    "theory": [
      "Dois triângulos retângulos com o mesmo ângulo agudo são semelhantes. Ao ampliar um deles, todos os lados crescem pelo mesmo fator e os quocientes entre comprimentos ficam iguais. Isso permite dar um nome a cada razão associada ao ângulo.",
      "Para um ângulo agudo θ, leia θ como “teta”. O seno é sen(θ) = cateto oposto ÷ hipotenusa. O cosseno é cos(θ) = cateto adjacente ÷ hipotenusa. Esses números não têm unidade porque dividimos dois comprimentos expressos na mesma unidade. Em um triângulo retângulo, os dois quocientes de um ângulo agudo ficam entre zero e um."
    ],
    "problem": "Uma rampa reta mede 7,5 m ao longo da superfície. Para seu ângulo com o piso, sen(θ) = 0,6 e cos(θ) = 0,8. Qual é o desnível e quanto a rampa avança na horizontal?",
    "steps": [
      [
        "Marque o ângulo no piso",
        "hipotenusa = 7,5 m",
        "A rampa liga o começo ao topo. O desnível vertical fica em frente ao ângulo no piso e o avanço horizontal encosta nele."
      ],
      [
        "Monte a razão da altura",
        "0,6 = altura ÷ 7,5",
        "A altura é o cateto oposto. Usar seno liga diretamente a incógnita ao comprimento de rampa conhecido."
      ],
      [
        "Encontre o desnível",
        "altura = 0,6 × 7,5 = 4,5 m",
        "Multiplicar os dois lados por 7,5 desfaz a divisão. A altura é 60% do comprimento inclinado."
      ],
      [
        "Encontre o avanço",
        "avanço = 0,8 × 7,5 = 6 m",
        "Como cos(θ) = avanço ÷ 7,5, o avanço corresponde a 80% do comprimento inclinado."
      ]
    ],
    "check": "Os dois resultados formam catetos coerentes com a diagonal. Temos 4,5² + 6² = 20,25 + 36 = 56,25 = 7,5².",
    "pitfall": "Interpretar 0,6 como se fosse uma altura em metros ignora o tamanho da rampa. O seno dá uma razão e precisa ser multiplicado pela hipotenusa para fornecer um comprimento.",
    "exercises": [
      {
        "q": "O cateto oposto a θ mede 6 cm e a hipotenusa mede 10 cm. Qual é sen(θ) em forma decimal?",
        "a": 0.6,
        "hint": "Divida o cateto oposto pela hipotenusa.",
        "solution": "sen(θ) = 6 ÷ 10 = 0,6. As unidades se cancelam."
      },
      {
        "q": "Um cabo reto de 12 m faz 60° com o chão. Se cos(60°) = 0,5, qual é sua projeção horizontal em metros?",
        "a": 6,
        "hint": "A projeção horizontal é o cateto que toca o ângulo com o chão.",
        "solution": "cos(60°) = avanço ÷ 12. Logo avanço = 12 × 0,5 = 6 m."
      },
      {
        "q": "Um sensor vê um alvo 4,8 m acima de sua altura. O seno do ângulo entre a linha de visão e a horizontal é 0,6. Qual é a distância em linha reta do sensor ao alvo em metros?",
        "a": 8,
        "hint": "Desta vez conhecemos o cateto oposto e procuramos a hipotenusa.",
        "solution": "0,6 = 4,8 ÷ distância. Multiplicando pela distância e dividindo por 0,6, obtemos 4,8 ÷ 0,6 = 8 m."
      }
    ]
  },
  {
    "id": "trig-tangente",
    "title": "Tangente e inclinação",
    "goal": "Calcular alturas a partir de uma distância horizontal e de uma inclinação.",
    "theory": [
      "A tangente de um ângulo agudo compara os dois catetos. Escrevemos tg(θ) = cateto oposto ÷ cateto adjacente. Se o ângulo é medido a partir da horizontal, a razão indica o ganho de altura por unidade de avanço horizontal.",
      "Uma inclinação de 25% significa subir 25 unidades a cada 100 unidades horizontais, ou razão 0,25. Uma inclinação expressa em porcentagem precisa ser interpretada como razão. Já a medida em graus descreve a abertura do ângulo. Por exemplo, um ângulo de 45° tem tangente 1 e equivale a uma inclinação de 100%."
    ],
    "problem": "A 8 m horizontalmente de um poste, uma pessoa observa o topo com um instrumento a 1,5 m do chão. A tangente do ângulo de elevação é 0,75. Qual é a altura do poste se o terreno é plano?",
    "steps": [
      [
        "Trace a horizontal",
        "base = 8 m   |   altura do instrumento = 1,5 m",
        "Imagine uma linha horizontal saindo do instrumento até o poste. O triângulo começa nessa linha, acima do chão."
      ],
      [
        "Nomeie o desnível",
        "tg(θ) = desnível ÷ 8 = 0,75",
        "O cateto oposto vai da linha horizontal até o topo. O cateto adjacente tem os mesmos 8 m da distância horizontal no chão."
      ],
      [
        "Calcule a parte acima da linha",
        "desnível = 8 × 0,75 = 6 m",
        "A cada metro horizontal, a linha de visão sobe 0,75 m. Em oito metros, sobe seis."
      ],
      [
        "Inclua a altura inicial",
        "altura total = 1,5 + 6 = 7,5 m",
        "A medida solicitada começa no chão. O instrumento já estava a 1,5 m desse ponto de partida."
      ]
    ],
    "check": "Desconte a altura do instrumento e reconstrua a inclinação. A razão (7,5 − 1,5) ÷ 8 = 6 ÷ 8 = 0,75 reproduz o dado.",
    "pitfall": "Usar a distância ao longo de uma rampa no denominador transforma a razão em seno. Para tangente, use o cateto adjacente ao ângulo.",
    "exercises": [
      {
        "q": "Uma rampa sobe 2 m a cada 8 m horizontais. Qual é a tangente do ângulo com o chão em forma decimal?",
        "a": 0.25,
        "hint": "Divida o desnível pelo avanço horizontal.",
        "solution": "tg(θ) = 2 ÷ 8 = 0,25. Isso corresponde a uma inclinação de 25%."
      },
      {
        "q": "Um telhado sobe 1,8 m. A tangente do seu ângulo com a horizontal é 0,6. Qual é a distância horizontal em metros?",
        "a": 3,
        "hint": "Na equação 0,6 = 1,8 ÷ d, descubra o denominador.",
        "solution": "Multiplicando por d, temos 0,6d = 1,8. Dividindo por 0,6, obtemos d = 3 m."
      },
      {
        "q": "Uma ciclovia mantém inclinação de 5% ao longo de 240 m horizontais. Quantos metros de altitude são ganhos?",
        "a": 12,
        "hint": "5% corresponde a um ganho de 0,05 m por metro horizontal.",
        "solution": "5 ÷ 100 = 0,05. O desnível é 0,05 × 240 = 12 m."
      }
    ]
  },
  {
    "id": "trig-notaveis",
    "title": "Os ângulos de 30°, 45° e 60°",
    "goal": "Reconstruir razões trigonométricas a partir de dois triângulos que você consegue desenhar.",
    "theory": [
      "Desenhe um triângulo equilátero de lado 2. Seus três ângulos iguais medem 60°. A altura traçada do topo divide a base ao meio e o ângulo do topo em dois de 30°. Cada metade tem hipotenusa 2, cateto curto 1 e cateto longo √(2² − 1²) = √3. Assim, sen(30°) = 1/2, cos(30°) = √3/2, sen(60°) = √3/2 e cos(60°) = 1/2.",
      "Para 45°, trace a diagonal de um quadrado de lado 1. Cada metade tem catetos iguais a 1, dois ângulos de 45° e hipotenusa √2. Por isso, sen(45°) = cos(45°) = 1/√2 = √2/2 e tg(45°) = 1. Também podemos dividir os catetos do outro triângulo para obter tg(30°) = 1/√3 e tg(60°) = √3."
    ],
    "problem": "Um cabo de 8 m forma 60° com a horizontal. Como descobrir o avanço horizontal e a altura sem precisar procurar uma tabela?",
    "steps": [
      [
        "Reconstrua o triângulo-modelo",
        "hipotenusa 2   |   catetos 1 e √3",
        "Divida ao meio um triângulo equilátero de lado 2. Pitágoras fornece o cateto longo, pois 2² − 1² = 3."
      ],
      [
        "Vire o olhar para os 60°",
        "adjacente = 1   |   oposto = √3",
        "O ângulo da base do triângulo-modelo mede 60°. A metade da base original encosta nesse ângulo e a altura original fica em frente."
      ],
      [
        "Ajuste o tamanho",
        "8 ÷ 2 = 4",
        "O cabo é a hipotenusa do triângulo real. Como os ângulos são iguais, multiplicar cada medida do modelo por quatro conserva a forma."
      ],
      [
        "Leia as projeções",
        "avanço = 4 m   |   altura = 4√3 m",
        "Multiplique os dois catetos do modelo pelo fator quatro. Com √3 ≈ 1,732, a altura é aproximadamente 6,93 m."
      ]
    ],
    "check": "O avanço e a altura satisfazem 4² + (4√3)² = 16 + 48 = 64 = 8². Faz sentido a altura superar o avanço, pois 60° ultrapassa 45°.",
    "pitfall": "No mesmo triângulo, olhar do vértice de 30° ou do de 60° troca os catetos oposto e adjacente. Essa troca explica por que sen(30°) = cos(60°).",
    "exercises": [
      {
        "q": "Um segmento de 10 m faz 30° com a horizontal. Qual é seu ganho vertical em metros?",
        "a": 5,
        "hint": "O cateto oposto a 30° corresponde à metade da hipotenusa.",
        "solution": "sen(30°) = altura ÷ 10 = 1/2. Assim, altura = 10 × 1/2 = 5 m."
      },
      {
        "q": "Um telhado faz 45° com a horizontal. Se ele avança horizontalmente 6 m, quantos metros sobe?",
        "a": 6,
        "hint": "No triângulo retângulo de 45°, os catetos são iguais.",
        "solution": "tg(45°) = altura ÷ 6 = 1. Logo a altura também é 6 m."
      },
      {
        "q": "Uma peça quadrada tem lado de 5 cm. Usando √2 ≈ 1,414, qual é a diagonal em centímetros, com duas casas decimais?",
        "a": 7.07,
        "hint": "A diagonal separa o quadrado em dois triângulos de 45° e vale lado × √2.",
        "solution": "Pelo modelo de lados 1, 1 e √2 ampliado cinco vezes, a diagonal é 5√2 ≈ 5 × 1,414 = 7,07 cm."
      }
    ]
  },
  {
    "id": "trig-radianos",
    "title": "Graus, radianos e arcos",
    "goal": "Converter uma rotação e calcular a distância percorrida na borda de um círculo.",
    "theory": [
      "Um radiano é a abertura de um ângulo central que recorta um arco de comprimento igual ao raio. Para um arco percorrido em um sentido, o tamanho do ângulo em radianos é comprimento do arco ÷ raio. Ao dobrar o raio, o arco de um mesmo ângulo também dobra, preservando a razão.",
      "Uma volta percorre a circunferência inteira, de comprimento 2πr. Dividir por r dá 2π radianos, equivalentes a 360°. Meia volta equivale a π radianos ou 180°. Para converter graus em radianos, multiplique por π/180. No caminho inverso, multiplique por 180/π."
    ],
    "problem": "Um ponto na borda de um disco de raio 9 cm gira 120°. Quanto vale o ângulo em radianos e que comprimento de arco ele percorre? Use π ≈ 3,14 para a distância decimal.",
    "steps": [
      [
        "Descubra a fração da volta",
        "120° ÷ 360° = 1/3",
        "A abertura corresponde a uma de três partes iguais de uma volta inteira."
      ],
      [
        "Passe a radianos",
        "θ = (1/3) × 2π = 2π/3 rad",
        "A medida em radianos usa 2π por volta. A fração do giro continua sendo um terço."
      ],
      [
        "Use a definição de radiano",
        "s = rθ = 9 × (2π/3) = 6π cm",
        "Se θ = s ÷ r, multiplicar por r isola o comprimento s do arco. Essa fórmula direta exige θ em radianos."
      ],
      [
        "Aproxime só no fim",
        "s ≈ 6 × 3,14 = 18,84 cm",
        "Guardar π até esta linha preserva o valor exato nas etapas anteriores."
      ]
    ],
    "check": "A circunferência inteira mede 2π × 9 = 18π cm. Um terço dela mede 18π ÷ 3 = 6π cm, o mesmo arco.",
    "pitfall": "Colocar 120 diretamente em s = rθ daria 1.080 cm e ultrapassaria muitas voltas. Converta o ângulo em graus antes de usar essa relação.",
    "exercises": [
      {
        "q": "Quantos graus correspondem a π/6 radianos?",
        "a": 30,
        "hint": "π radianos correspondem a 180°.",
        "solution": "π/6 é um sexto de meia volta. Temos 180° ÷ 6 = 30°."
      },
      {
        "q": "Escrevendo 270° como kπ radianos, qual é o valor decimal de k?",
        "a": 1.5,
        "hint": "Divida 270° pela medida de meia volta em graus.",
        "solution": "270 × π/180 = (270/180)π = 1,5π. Portanto k = 1,5."
      },
      {
        "q": "Uma roda tem raio 4 cm. Um marcador da borda gira 135°. Use π ≈ 3,14. Quantos centímetros de arco percorre?",
        "a": 9.42,
        "hint": "Converta 135° para radianos e depois multiplique pelo raio.",
        "solution": "135 × π/180 = 3π/4 rad. O arco mede 4 × 3π/4 = 3π cm, aproximadamente 9,42 cm."
      }
    ]
  },
  {
    "id": "trig-circulo",
    "title": "O círculo trigonométrico",
    "goal": "Encontrar seno e cosseno de ângulos maiores que 90° e interpretar seus sinais.",
    "theory": [
      "Imagine um círculo de raio 1 com centro na origem de dois eixos. Parta do ponto (1, 0) e gire no sentido anti-horário para medir ângulos positivos. A posição depois de um giro θ é (cos θ, sen θ). O cosseno é a coordenada horizontal x e o seno é a coordenada vertical y. À direita e acima, respectivamente, essas coordenadas são positivas.",
      "Os eixos dividem o círculo em quatro quadrantes. No primeiro, x e y são positivos. No segundo, x é negativo e y positivo. No terceiro, ambos são negativos. No quarto, x é positivo e y negativo. Sobre um eixo, uma coordenada pode ser zero. O ângulo de referência é a abertura aguda até o eixo horizontal mais próximo, usada para achar os tamanhos das coordenadas."
    ],
    "problem": "Um ponto sai de (1, 0) no círculo de raio 1 e gira 150° no sentido anti-horário. Quais são as coordenadas finais?",
    "steps": [
      [
        "Encontre a região",
        "90° < 150° < 180°",
        "O ponto termina acima do eixo horizontal e à esquerda do vertical. Estamos no segundo quadrante."
      ],
      [
        "Ache o ângulo de referência",
        "180° − 150° = 30°",
        "O ponto é o reflexo, pelo eixo vertical, do ponto correspondente a 30°. A distância horizontal muda de sentido e a altura é preservada."
      ],
      [
        "Recupere os tamanhos",
        "cos(30°) = √3/2   |   sen(30°) = 1/2",
        "O triângulo de referência, obtido da metade de um equilátero, fornece os valores absolutos das coordenadas."
      ],
      [
        "Aplique os sinais",
        "(x, y) = (−√3/2, 1/2)",
        "Caminhar para a esquerda dá x negativo. Subir dá y positivo. Na ordem do par, escrevemos cosseno e depois seno."
      ]
    ],
    "check": "No círculo unitário, x² + y² deve valer 1. Aqui, (−√3/2)² + (1/2)² = 3/4 + 1/4 = 1. Os sinais também coincidem com a região escolhida.",
    "pitfall": "Elevar as coordenadas ao quadrado apaga seus sinais. A posição no quadrante é necessária para decidir se estamos à esquerda, à direita, acima ou abaixo.",
    "exercises": [
      {
        "q": "No círculo unitário, qual é o cosseno de 180°?",
        "a": -1,
        "hint": "Meia volta leva do extremo direito ao extremo esquerdo do círculo. Leia a coordenada x.",
        "solution": "O ponto após meia volta é (−1, 0). A coordenada horizontal, cos(180°), é −1."
      },
      {
        "q": "Se sen(30°) = 0,5, qual é sen(330°) em forma decimal?",
        "a": -0.5,
        "hint": "Faltam 30° para completar a volta e o ponto está abaixo do eixo horizontal.",
        "solution": "O ângulo de referência é 360° − 330° = 30°. No quarto quadrante, y é negativo. Portanto sen(330°) = −0,5."
      },
      {
        "q": "Num desenho com o eixo vertical positivo para cima, um círculo de raio 10 cm tem centro na altura 20 cm. Um ponto faz ângulo de 210° com a horizontal positiva. Se sen(30°) = 0,5, em que altura, em centímetros, ele está?",
        "a": 15,
        "hint": "O ângulo 210° fica 30° abaixo da horizontal esquerda. Some ao centro o deslocamento vertical com sinal.",
        "solution": "No terceiro quadrante, sen(210°) = −0,5. O deslocamento vertical é 10 × (−0,5) = −5 cm. A altura do ponto é 20 − 5 = 15 cm."
      }
    ]
  },
  {
    "id": "trig-ondas",
    "title": "Ondas e ciclos do seno",
    "goal": "Ler altura média, amplitude e período em um movimento que se repete.",
    "theory": [
      "Se um ponto percorre o círculo unitário, sua altura é o seno do ângulo. Partindo do extremo direito, as alturas após cada quarto de volta são 0, 1, 0, −1 e 0. Ao registrar essas alturas contra o ângulo que aumenta, obtemos a onda senoidal. A sequência se repete a cada 2π radianos.",
      "Na expressão h(t) = d + A × sen(bt), d é a linha central. A amplitude |A| é a distância dessa linha até uma extremidade. Se b é diferente de zero e o ângulo está em radianos, uma volta acontece quando o ângulo aumenta ou diminui 2π. O tempo de uma repetição completa, chamado período, é T = 2π/|b|."
    ],
    "problem": "Num jogo, a altura em metros de uma plataforma é h(t) = 3 + 2 × sen(πt/2), com t em segundos. Quais alturas ela visita nos quatro primeiros segundos?",
    "steps": [
      [
        "Encontre o intervalo vertical",
        "mínima = 3 − 2 = 1 m   |   máxima = 3 + 2 = 5 m",
        "O seno vai de −1 a 1. Multiplicar por dois dá deslocamentos de −2 a 2, e somar três move a oscilação para a altura central de 3 m."
      ],
      [
        "Calcule o tempo de uma volta",
        "(π/2) × T = 2π ⇒ T = 4 s",
        "A cada segundo, o ângulo aumenta π/2, um quarto de volta. Quatro segundos completam as quatro partes."
      ],
      [
        "Siga a subida e a volta ao centro",
        "h(0) = 3   |   h(1) = 5   |   h(2) = 3",
        "Nos ângulos 0, π/2 e π, o seno vale 0, 1 e 0. Substitua cada valor em 3 + 2 × seno."
      ],
      [
        "Complete a descida",
        "h(3) = 1   |   h(4) = 3",
        "Nos ângulos 3π/2 e 2π, o seno vale −1 e 0. Ao final do ciclo, a plataforma volta à altura inicial e começa a subir novamente."
      ]
    ],
    "check": "Um período depois de t = 1 s, em t = 5 s, o ângulo é 5π/2. Ele equivale a uma volta mais π/2 e a plataforma chega outra vez a 5 m.",
    "pitfall": "A distância da altura mínima até a máxima é o dobro da amplitude. Neste exemplo, o percurso vertical entre os extremos mede 4 m e a amplitude é 2 m.",
    "exercises": [
      {
        "q": "Uma oscilação tem altura h = 7 + 3 × sen(t). Qual é a altura mínima em metros?",
        "a": 4,
        "hint": "A menor contribuição do seno ocorre quando ele vale −1.",
        "solution": "h mínima = 7 + 3 × (−1) = 4 m."
      },
      {
        "q": "Uma animação usa a expressão sen(πt/3), com t em segundos e ângulo em radianos. Qual é o período em segundos?",
        "a": 6,
        "hint": "Descubra quanto tempo o ângulo leva para aumentar 2π.",
        "solution": "πT/3 = 2π. Multiplicando por 3 e dividindo por π, temos T = 6 s."
      },
      {
        "q": "Uma cabine de roda-gigante oscila entre 2 m e 18 m. Qual deve ser a amplitude, em metros, de uma função senoidal que represente sua altura?",
        "a": 8,
        "hint": "A distância entre os extremos representa duas amplitudes.",
        "solution": "A distância vertical total é 18 − 2 = 16 m. Metade dela é 8 m, a amplitude. A linha central fica a 10 m de altura."
      }
    ]
  }
];

window.MATRIZ_CONTENT.estatistica = [
  {
    "id": "est-frequencias",
    "title": "Tabelas, gráficos e frequências",
    "goal": "Transformar uma lista em contagens e ler a proporção representada por cada barra.",
    "theory": [
      "Uma observação é um valor registrado, como a quantidade de livros que uma pessoa leu no mês. A frequência absoluta conta quantas observações caem em uma categoria. A frequência relativa divide essa contagem pelo total observado. Multiplique a frequência relativa por 100 para expressá-la em porcentagem.",
      "Num gráfico de barras de frequência, um eixo identifica as categorias e o outro indica a contagem ou a porcentagem. Leia o rótulo, a unidade e a escala dos eixos antes de comparar alturas. Uma tabela permite conferir os valores exatos. Quando cada observação pertence a uma única categoria e todas foram incluídas, as contagens devem somar o tamanho do grupo."
    ],
    "problem": "Dez pessoas disseram quantos livros terminaram no mês. As respostas foram 0, 1, 2, 1, 3, 2, 1, 0, 2 e 2. Que porcentagem desse grupo leu pelo menos dois livros?",
    "steps": [
      [
        "Liste as categorias",
        "0 livro   |   1 livro   |   2 livros   |   3 livros",
        "Cada quantidade diferente vira uma linha de tabela ou uma categoria do gráfico. A resposta zero também conta como observação."
      ],
      [
        "Conte as ocorrências",
        "0 → 2 pessoas   |   1 → 3   |   2 → 4   |   3 → 1",
        "Percorra a lista uma única vez, marcando uma ocorrência na categoria correspondente a cada resposta."
      ],
      [
        "Selecione as linhas adequadas",
        "2 ou 3 livros ⇒ 4 + 1 = 5 pessoas",
        "“Pelo menos dois” inclui quem terminou exatamente dois e também quem terminou mais."
      ],
      [
        "Calcule a porcentagem",
        "5 ÷ 10 × 100 = 50%",
        "Cinco é a contagem de interesse. Dez é o total de pessoas ouvidas, incluindo quem leu zero."
      ]
    ],
    "check": "As quatro contagens somam 2 + 3 + 4 + 1 = 10. As categorias abaixo de dois livros somam cinco pessoas, completando os outros 50%.",
    "pitfall": "Dividir pelo número de categorias mudaria o significado. Para uma frequência relativa, o denominador é o total de observações que a pergunta usa.",
    "exercises": [
      {
        "q": "Na lista de notas 4, 5, 4, 3, 4 e 5, qual é a frequência absoluta da nota 4?",
        "a": 3,
        "hint": "Conte as ocorrências do valor 4 sem somar as notas.",
        "solution": "A nota 4 está na primeira, na terceira e na quinta posição. Sua frequência absoluta é 3."
      },
      {
        "q": "Em uma turma de 24 estudantes, 9 preferiram estudar de manhã. Qual é a porcentagem correspondente? Responda em porcentagem.",
        "a": 37.5,
        "hint": "Faça a parte dividida pelo total e multiplique por 100.",
        "solution": "9 ÷ 24 = 0,375. Multiplicando por 100, obtemos 37,5% da turma."
      },
      {
        "q": "Um gráfico mostra 30% de preferência por ônibus entre 80 pessoas. Quantas pessoas essa barra representa?",
        "a": 24,
        "hint": "Passe da porcentagem à contagem usando o tamanho do grupo.",
        "solution": "30% = 30/100 = 0,30. Então 0,30 × 80 = 24 pessoas."
      }
    ]
  },
  {
    "id": "est-medidas-centrais",
    "title": "Média, mediana e moda",
    "goal": "Calcular três formas de resumir um grupo e perceber o efeito de um valor extremo.",
    "theory": [
      "A média aritmética é a soma dos valores dividida pelo número de observações. Imagine reunir tudo e repartir igualmente entre todas as observações. A média preserva o total, por isso até um único valor muito alto pode puxá-la para cima.",
      "A mediana é o valor central dos dados colocados em ordem. Com quantidade par, use a média dos dois valores centrais. A moda é o valor mais frequente. Pode haver mais de uma moda quando diferentes valores empatam na maior frequência. Cada medida responde a uma pergunta diferente sobre o grupo."
    ],
    "problem": "Cinco viagens duraram 8, 10, 10, 12 e 30 minutos. Que resumo cada medida fornece, e por que a média ficou acima da mediana?",
    "steps": [
      [
        "Calcule o total",
        "8 + 10 + 10 + 12 + 30 = 70 min",
        "Para repartir o tempo das viagens igualmente, precisamos primeiro recuperar todos os minutos registrados."
      ],
      [
        "Reparta por cinco",
        "média = 70 ÷ 5 = 14 min",
        "A média de 14 minutos corresponde ao mesmo total de cinco viagens com duração igual."
      ],
      [
        "Localize o centro",
        "8, 10, [10], 12, 30 ⇒ mediana = 10 min",
        "A lista já está em ordem. O terceiro valor deixa duas observações antes e duas depois."
      ],
      [
        "Conte as repetições",
        "10 aparece 2 vezes ⇒ moda = 10 min",
        "Cada outra duração aparece uma única vez. A viagem de 30 minutos eleva o total e a média, mas continua ocupando só uma posição no fim da lista."
      ]
    ],
    "check": "Reconstrua o total pela média, 5 × 14 = 70. Se a última viagem passasse de 30 para 40 min, a média aumentaria 10 ÷ 5 = 2 min, enquanto o terceiro valor e a moda continuariam iguais.",
    "pitfall": "Escolher o elemento escrito no meio antes de ordenar pode dar uma mediana errada. Ordenar muda a posição visual, preservando os dados.",
    "exercises": [
      {
        "q": "As notas são 6, 7 e 8. Qual é a média aritmética?",
        "a": 7,
        "hint": "Some as três notas e divida por três.",
        "solution": "A soma é 6 + 7 + 8 = 21. A média vale 21 ÷ 3 = 7."
      },
      {
        "q": "As medidas foram 2, 9, 5 e 8 cm. Qual é a mediana em centímetros?",
        "a": 6.5,
        "hint": "Há quatro observações. Depois de ordenar, use as duas centrais.",
        "solution": "Em ordem temos 2, 5, 8 e 9. A mediana é (5 + 8) ÷ 2 = 6,5 cm."
      },
      {
        "q": "Uma fila registrou esperas de 3, 4, 4, 5 e 24 minutos. Quantos minutos a média supera a moda?",
        "a": 4,
        "hint": "Ache a duração mais frequente e compare com a divisão do total por cinco.",
        "solution": "A moda é 4 min. A soma é 40 min e a média vale 40 ÷ 5 = 8 min. A diferença é 8 − 4 = 4 min."
      }
    ]
  },
  {
    "id": "est-media-ponderada",
    "title": "Médias com pesos",
    "goal": "Combinar notas ou grupos quando cada valor representa uma quantidade diferente.",
    "theory": [
      "Na média ponderada, um valor recebe um peso que indica sua participação. Multiplique cada valor pelo próprio peso, some os produtos e divida pela soma dos pesos. Com pesos iguais, a conta se reduz à média aritmética.",
      "Uma frequência pode servir de peso. Se três pessoas estudaram 20 minutos cada, essa duração contribui com 3 × 20 = 60 minutos para o total. Ao reunir grupos de tamanhos diferentes, o tamanho de cada grupo pesa sua média, desde que todos estejam medindo a mesma grandeza e com a mesma unidade."
    ],
    "problem": "Em uma oficina, duas pessoas levaram em média 8 minutos para montar uma peça. Outras três levaram em média 14 minutos. Qual foi o tempo médio das cinco pessoas?",
    "steps": [
      [
        "Recupere o primeiro total",
        "2 × 8 = 16 min",
        "Multiplicar a média de um grupo pelo número de observações devolve sua soma. Não é preciso conhecer os dois tempos individuais."
      ],
      [
        "Recupere o outro total",
        "3 × 14 = 42 min",
        "Agora o valor 14 recebe peso três, correspondente ao número de participantes do segundo grupo."
      ],
      [
        "Reúna tempos e pessoas",
        "tempo total = 16 + 42 = 58 min   |   pessoas = 2 + 3 = 5",
        "A média do conjunto depende tanto do total de minutos como do número total de pessoas representadas."
      ],
      [
        "Distribua o total",
        "58 ÷ 5 = 11,6 min",
        "A divisão produz o tempo médio por pessoa quando os cinco resultados são tratados como um único grupo."
      ]
    ],
    "check": "A média de 11,6 fica entre 8 e 14 e mais perto de 14, que representa o grupo maior. Recuperamos 11,6 × 5 = 58 minutos.",
    "pitfall": "Fazer (8 + 14) ÷ 2 daria o mesmo peso aos dois grupos. A diferença de tamanho precisa aparecer na conta.",
    "exercises": [
      {
        "q": "Uma nota 7 tem peso 2 e uma nota 9 tem peso 3. Qual é a média ponderada?",
        "a": 8.2,
        "hint": "A soma dos pesos é 5.",
        "solution": "Os produtos são 7 × 2 = 14 e 9 × 3 = 27. A média é (14 + 27) ÷ 5 = 8,2."
      },
      {
        "q": "Quatro peças pesam 10 g cada e duas peças pesam 16 g cada. Qual é a massa média por peça em gramas?",
        "a": 12,
        "hint": "Trate a quantidade de peças de cada tipo como peso.",
        "solution": "A massa total é 4 × 10 + 2 × 16 = 72 g. Há seis peças. A média é 72 ÷ 6 = 12 g."
      },
      {
        "q": "Uma disciplina usa 40% de uma prova e 60% de um projeto. Com 6 na prova, que nota no projeto produz média final 7,8?",
        "a": 9,
        "hint": "Escreva 0,4 × 6 + 0,6 × nota = 7,8.",
        "solution": "A contribuição da prova é 2,4. O projeto precisa contribuir 7,8 − 2,4 = 5,4. Dividindo 5,4 por 0,6, a nota necessária é 9."
      }
    ]
  },
  {
    "id": "est-dispersao",
    "title": "Amplitude e dispersão",
    "goal": "Comparar a regularidade de dois conjuntos que têm a mesma média.",
    "theory": [
      "Dois conjuntos podem ter o mesmo centro e espalhamentos diferentes. A amplitude total é o maior valor menos o menor. Ela revela a distância entre os extremos, mas depende apenas deles. Um único resultado distante pode ampliá-la.",
      "Para considerar todos os valores, calcule quanto cada um se afasta da média e tome o valor absoluto, a distância sem sinal. A média dessas distâncias é o desvio absoluto médio em relação à média. Ela fica na mesma unidade dos dados. Somar desvios com sinal faria afastamentos acima e abaixo da média se cancelarem."
    ],
    "problem": "Duas máquinas têm tempos de execução em segundos. A registrou 9, 10, 10 e 11. B registrou 6, 10, 10 e 14. Qual foi mais regular nesses registros?",
    "steps": [
      [
        "Compare os centros",
        "média de A = 40 ÷ 4 = 10 s   |   média de B = 40 ÷ 4 = 10 s",
        "Cada máquina levou 40 segundos no conjunto das quatro execuções. Só a média não distingue a regularidade."
      ],
      [
        "Meça a faixa total",
        "amplitude de A = 11 − 9 = 2 s   |   de B = 14 − 6 = 8 s",
        "Os tempos extremos de B estão separados por uma distância maior."
      ],
      [
        "Calcule as distâncias até 10",
        "A → 1, 0, 0, 1   |   B → 4, 0, 0, 4",
        "Por exemplo, 6 está quatro segundos abaixo de 10 e 14 está quatro acima. Em ambos os casos, a distância até 10 é quatro."
      ],
      [
        "Tire a média das distâncias",
        "A → 2 ÷ 4 = 0,5 s   |   B → 8 ÷ 4 = 2 s",
        "Os tempos de A se afastaram menos do centro segundo as duas medidas. Nesses quatro registros, A foi mais regular."
      ]
    ],
    "check": "Uma lista em que todos os tempos são 10 teria amplitude zero e desvio absoluto médio zero. Os resultados de A estão mais próximos desse caso de regularidade perfeita.",
    "pitfall": "Confundir amplitude com o valor máximo apaga o limite de baixo. Duas listas com o mesmo máximo podem ter amplitudes muito diferentes.",
    "exercises": [
      {
        "q": "As temperaturas registradas foram 12, 18, 15 e 9 °C. Qual foi a amplitude em graus Celsius?",
        "a": 9,
        "hint": "Localize o maior e o menor valor da lista.",
        "solution": "O máximo é 18 °C e o mínimo é 9 °C. A amplitude vale 18 − 9 = 9 °C."
      },
      {
        "q": "Os valores são 2, 4 e 6. Qual é a soma das três distâncias absolutas até a média?",
        "a": 4,
        "hint": "A média é 4. Meça a distância de cada valor até 4.",
        "solution": "As distâncias são 2, 0 e 2. Sua soma é 2 + 0 + 2 = 4."
      },
      {
        "q": "Uma máquina produziu peças com comprimentos de 8, 8, 12 e 12 mm. Qual é o desvio absoluto médio em relação à média, em milímetros?",
        "a": 2,
        "hint": "Primeiro encontre a média dos quatro comprimentos e depois a média das quatro distâncias a ela.",
        "solution": "A média vale 40 ÷ 4 = 10 mm. Cada comprimento está a 2 mm de 10. O desvio absoluto médio é (2 + 2 + 2 + 2) ÷ 4 = 2 mm."
      }
    ]
  },
  {
    "id": "est-probabilidade",
    "title": "Probabilidade e complemento",
    "goal": "Contar resultados igualmente prováveis e calcular a chance de um evento.",
    "theory": [
      "O espaço amostral reúne os resultados possíveis de um experimento. Um evento é o conjunto dos resultados que satisfazem a condição da pergunta. Se todos os resultados individuais são igualmente prováveis, P(evento) = quantidade favorável ÷ quantidade total. Uma probabilidade vai de 0 a 1, ou de 0% a 100%.",
      "O complemento reúne todos os resultados que ficam de fora de um evento. Como evento e complemento cobrem todas as possibilidades sem compartilhar nenhuma, P(complemento) = 1 − P(evento). Contar pelo complemento ajuda quando a condição envolve expressões como “nenhum” ou “pelo menos um”."
    ],
    "problem": "Uma sacola contém 4 fichas verdes, 3 roxas e 1 cinza. As fichas são iguais ao toque e cada uma tem a mesma chance de ser sorteada. Qual é a chance de a ficha sorteada não ser roxa?",
    "steps": [
      [
        "Conte os resultados individuais",
        "4 + 3 + 1 = 8 fichas",
        "Cada ficha é um resultado equiprovável. As cores têm quantidades diferentes, por isso a contagem deve começar pelas oito fichas."
      ],
      [
        "Separe as favoráveis",
        "verdes + cinza = 4 + 1 = 5",
        "Sortear uma ficha verde ou a cinza atende à condição de sair uma cor diferente de roxa."
      ],
      [
        "Forme a razão",
        "P = 5/8 = 0,625",
        "Dividir as cinco fichas favoráveis pelas oito possíveis dá a parcela de resultados de interesse."
      ],
      [
        "Converta para porcentagem",
        "0,625 × 100 = 62,5%",
        "A porcentagem expressa a mesma probabilidade em partes de cem. Um sorteio específico continua podendo terminar em qualquer uma das três cores."
      ]
    ],
    "check": "Há três fichas roxas, então P(roxa) = 3/8. Seu complemento vale 1 − 3/8 = 5/8, a mesma probabilidade encontrada.",
    "pitfall": "Contar duas cores favoráveis entre três cores daria 2/3. As categorias teriam que ser equiprováveis para essa contagem funcionar.",
    "exercises": [
      {
        "q": "Um dado justo com faces de 1 a 6 é lançado. Em porcentagem, qual é a chance de sair um número par?",
        "a": 50,
        "hint": "Enumere as faces pares e use seis como total.",
        "solution": "As faces pares são 2, 4 e 6. A chance vale 3/6 = 0,5 = 50%."
      },
      {
        "q": "Uma caixa contém 3 lâmpadas com defeito e 9 boas. Cada lâmpada tem a mesma chance de ser escolhida. Em porcentagem, qual é a chance de escolher uma boa?",
        "a": 75,
        "hint": "O total inclui as lâmpadas boas e as com defeito.",
        "solution": "Há 12 lâmpadas. A chance de escolher uma boa é 9/12 = 3/4 = 75%."
      },
      {
        "q": "Um jogo sorteia uniformemente um inteiro de 1 a 20. Em porcentagem, qual é a chance de o valor ser diferente de 1, 2 e 3?",
        "a": 85,
        "hint": "Subtraia de 100% a chance dos três valores excluídos.",
        "solution": "Os valores excluídos representam 3/20 = 15%. O complemento tem probabilidade 100% − 15% = 85%."
      }
    ]
  },
  {
    "id": "est-uniao",
    "title": "Eventos com “ou”",
    "goal": "Somar possibilidades sem contar duas vezes os resultados que satisfazem duas condições.",
    "theory": [
      "Em matemática, “A ou B” em geral permite que ambos aconteçam. O conjunto de resultados coberto por pelo menos uma das condições é a união. A parte compartilhada, que satisfaz as duas condições ao mesmo tempo, é a interseção.",
      "Ao somar as contagens de A e de B, cada resultado compartilhado entra duas vezes. Subtraia a interseção uma vez para corrigir. A mesma regra vale para probabilidades, P(A ou B) = P(A) + P(B) − P(A e B). Se os eventos forem incompatíveis, a parte compartilhada vale zero."
    ],
    "problem": "Doze cartões, numerados de 1 a 12, têm a mesma chance de sair. Qual é a chance de sortear um número par ou múltiplo de três?",
    "steps": [
      [
        "Conte o primeiro evento",
        "pares = 2, 4, 6, 8, 10, 12 ⇒ 6",
        "Um número par é divisível por dois. Seis cartões satisfazem essa primeira condição."
      ],
      [
        "Conte o segundo evento",
        "múltiplos de três = 3, 6, 9, 12 ⇒ 4",
        "Percorra os números de três em três até o limite de doze."
      ],
      [
        "Remova a dupla contagem",
        "interseção = 6 e 12 ⇒ união = 6 + 4 − 2 = 8",
        "Os cartões 6 e 12 passaram nos dois testes. Cada um precisa ser contado apenas uma vez no grupo favorável."
      ],
      [
        "Divida pelo total",
        "P = 8/12 = 2/3",
        "Oito dentre os doze cartões pertencem à união. A fração simplifica ao dividir numerador e denominador por quatro."
      ]
    ],
    "check": "Os únicos cartões de fora são 1, 5, 7 e 11. Pelo complemento temos (12 − 4)/12 = 8/12, confirmando a contagem.",
    "pitfall": "Somar 6/12 e 4/12 sem olhar as repetições exagera a chance. Teste se algum resultado atende às duas condições.",
    "exercises": [
      {
        "q": "Num dado justo de 1 a 6, qual é a probabilidade, em porcentagem, de sair 1, 2 ou 6?",
        "a": 50,
        "hint": "No mesmo lançamento os três resultados são incompatíveis.",
        "solution": "Há três faces favoráveis entre seis. A chance é 3/6 = 50%."
      },
      {
        "q": "Dos números inteiros de 1 a 10, quantos são pares ou múltiplos de três?",
        "a": 7,
        "hint": "O número 6 aparece nos dois grupos.",
        "solution": "Há cinco pares e três múltiplos de três. O 6 é a única repetição. A contagem é 5 + 3 − 1 = 7."
      },
      {
        "q": "Em uma pesquisa com 40 pessoas, 16 estudaram pelo celular, 10 pelo tablet e 4 usaram ambos. Que porcentagem das 40 usou pelo menos um desses aparelhos?",
        "a": 55,
        "hint": "As quatro pessoas que usaram ambos já estão nas duas contagens.",
        "solution": "A união reúne 16 + 10 − 4 = 22 pessoas. A porcentagem é 22 ÷ 40 × 100 = 55%."
      }
    ]
  },
  {
    "id": "est-sequencias",
    "title": "Sorteios em sequência",
    "goal": "Calcular chances de etapas sucessivas e considerar o efeito da reposição.",
    "theory": [
      "Uma árvore de possibilidades separa o primeiro resultado em ramos e depois considera o que pode acontecer em cada ramo. Para seguir um caminho, multiplique a chance da primeira etapa pela chance da segunda dentro desse caminho. Essa segunda chance, calculada sabendo o que já ocorreu, é uma probabilidade condicional.",
      "Ao sortear fichas ao acaso com reposição e misturar novamente, a composição da sacola volta a ser a inicial. Sem reposição, atualize tanto o total quanto a quantidade de cada cor presente. Para uma pergunta que admite ordens distintas, some as chances dos caminhos favoráveis que não podem acontecer ao mesmo tempo."
    ],
    "problem": "Uma sacola contém 4 fichas verdes e 2 douradas. Cada ficha tem a mesma chance a cada sorteio. Qual é a chance de retirar duas verdes sem reposição? Como muda se a primeira voltar e as fichas forem misturadas?",
    "steps": [
      [
        "Comece com o primeiro ramo",
        "P(verde na primeira) = 4/6",
        "Das seis fichas, quatro são verdes. O primeiro sorteio tem a mesma distribuição nas duas versões."
      ],
      [
        "Atualize sem reposição",
        "P(segunda verde após uma verde) = 3/5",
        "Depois de retirar uma verde, sobram três verdes e duas douradas. Há cinco fichas disputando a segunda retirada."
      ],
      [
        "Multiplique no mesmo caminho",
        "(4/6) × (3/5) = 12/30 = 40%",
        "Entre os sorteios que começam com verde, apenas três quintos continuam com verde. Multiplicar as proporções seleciona as duas condições juntas."
      ],
      [
        "Refaça com reposição",
        "(4/6) × (4/6) = 4/9 ≈ 44,44%",
        "Devolver a primeira verde restaura as quatro verdes entre seis antes da segunda tentativa. A chance de uma segunda verde nesse ramo aumenta."
      ]
    ],
    "check": "Sem reposição, há 6 × 5 = 30 pares ordenados de fichas individuais. Os pares ordenados de duas verdes somam 4 × 3 = 12. A razão 12/30 confirma 40%.",
    "pitfall": "Multiplicar automaticamente a probabilidade inicial por ela mesma pressupõe que a primeira retirada preserva a chance da segunda. Releia a regra de reposição.",
    "exercises": [
      {
        "q": "Uma moeda justa é lançada duas vezes de modo independente. Em porcentagem, qual é a chance de sair cara nas duas vezes?",
        "a": 25,
        "hint": "O primeiro lançamento não altera a chance de cara no segundo.",
        "solution": "P(duas caras) = (1/2) × (1/2) = 1/4 = 25%."
      },
      {
        "q": "Uma sacola tem 3 fichas azuis e 2 brancas, todas equiprováveis. Duas são retiradas sem reposição. Em porcentagem, qual é a chance de ambas serem azuis?",
        "a": 30,
        "hint": "Depois de sair uma azul, restam duas azuis entre quatro fichas.",
        "solution": "P = (3/5) × (2/4) = 6/20 = 30%."
      },
      {
        "q": "Uma sacola tem 3 verdes e 2 douradas equiprováveis. Em duas retiradas sem reposição, qual é a chance, em porcentagem, de obter uma de cada cor, em qualquer ordem?",
        "a": 60,
        "hint": "Some os caminhos verde-depois-dourada e dourada-depois-verde.",
        "solution": "Verde depois dourada tem chance (3/5) × (2/4) = 6/20. Dourada depois verde tem chance (2/5) × (3/4) = 6/20. As ordens são distintas, logo a chance é 12/20 = 60%."
      }
    ]
  },
  {
    "id": "est-amostras",
    "title": "Amostras e estimativas",
    "goal": "Usar uma proporção observada para fazer uma estimativa e explicar seu alcance.",
    "theory": [
      "A população reúne todas as unidades sobre as quais queremos responder a uma pergunta. A amostra é a parte observada. Sua proporção pode servir para estimar a proporção da população quando o método de seleção representa bem os diferentes participantes.",
      "Em uma amostra aleatória simples de tamanho fixo, cada grupo possível desse tamanho tem a mesma chance de ser escolhido. Amostras diferentes podem apresentar resultados diferentes por acaso. A autoseleção, quando só responde quem decide participar, também pode favorecer certos perfis. O alcance de uma estimativa depende de como os dados foram coletados."
    ],
    "problem": "Uma escola tem 800 estudantes. Em uma amostra aleatória de 80 deles, 26 disseram que vão a pé à escola. Qual é a estimativa do número de estudantes que vão a pé?",
    "steps": [
      [
        "Separe os dois conjuntos",
        "população = 800   |   amostra = 80",
        "O grupo maior é o alvo da pergunta. Só temos respostas diretas do grupo de 80 estudantes."
      ],
      [
        "Ache a proporção observada",
        "26 ÷ 80 = 0,325 = 32,5%",
        "Dos participantes observados, 32,5 em cada cem, em termos proporcionais, vão a pé."
      ],
      [
        "Aplique ao grupo completo",
        "0,325 × 800 = 260 estudantes",
        "Projetamos para a população a proporção observada na amostra. A escola é dez vezes maior que a amostra, então a estimativa também é dez vezes a contagem observada."
      ],
      [
        "Escreva a conclusão com precisão",
        "26 observados   |   cerca de 260 estimados",
        "O primeiro número é uma contagem direta. Para o segundo, usamos a hipótese de que a amostra representa a população. Outra amostra poderia dar uma projeção diferente."
      ]
    ],
    "check": "Dividindo a estimativa pelo tamanho da escola, 260 ÷ 800 = 0,325. Recuperamos a proporção que motivou a projeção.",
    "pitfall": "Entrevistar apenas estudantes que chegam por um portão usado por pedestres pode inflar a proporção observada. O método de seleção interfere no resultado.",
    "exercises": [
      {
        "q": "Em uma amostra de 50 pessoas, 18 escolheram a opção A. Qual foi a porcentagem observada?",
        "a": 36,
        "hint": "Divida a quantidade da opção A pelo tamanho da amostra.",
        "solution": "18 ÷ 50 = 0,36, equivalente a 36% da amostra."
      },
      {
        "q": "Uma amostra representativa de uma associação indicou preferência de 35% pelo horário da tarde. Entre 400 associados, quantos se estima que prefiram esse horário?",
        "a": 140,
        "hint": "Multiplique a população pela proporção estimada.",
        "solution": "35% = 0,35. A estimativa é 0,35 × 400 = 140 associados."
      },
      {
        "q": "Em uma amostra de 40 peças, duas tinham uma marca superficial. Aplicando a proporção da amostra a um lote de 600 peças, quantas peças com marca se estimam?",
        "a": 30,
        "hint": "Transforme duas em quarenta em uma proporção antes de projetar para o lote.",
        "solution": "A proporção observada é 2 ÷ 40 = 0,05. Estimam-se 0,05 × 600 = 30 peças com marca, sujeitas à variação entre amostra e lote."
      }
    ]
  }
];
