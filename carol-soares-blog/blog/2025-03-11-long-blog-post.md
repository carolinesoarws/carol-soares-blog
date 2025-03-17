---
slug: long-blog-post
title: Minha experiência trabalhando em um laboratório de inovação nos ultimos 7 meses.
authors: carolsoares
tags: [ia generativa, inovação, aprendizados]
---

Há oito meses, comecei a trabalhar em um projeto de inovação. A ideia principal desse projeto é testar soluções inovadoras para problemas, utilizando IA Generativa. Está sendo um mundo completamente novo para mim, pois, até então, eu tinha atuado apenas na entrega de produtos. Trabalhar nesse laboratório me tirou completamente da bolha, principalmente por eu ser uma engenheira backend. Nesse período, aprendi algumas coisas:

### Nem tudo se soluciona com IA Generativa 
O mundo da tecnologia é tão doido quanto o lançamento de um disco novo de diva pop. A revolução de algumas tecnologias emergentes faz com que muita gente no mercado, principalmente líderes de negócio, corra para as colinas desesperados para implementar essas soluções a qualquer custo. Quando uma diva pop lança um álbum icônico, é literalmente escrito nas estrelas que todas as marcas, tendências e até a indústria da moda vão surfar nessa vibe. O mesmo acontece na tecnologia: quando uma inovação realmente impactante surge, todo mundo quer incorporar, adaptar e capitalizar em cima dela. O problema é que, muitas vezes, essa corrida acontece sem um entendimento real de se aquela ferramenta é, de fato, a solução certa para o problema.

O que eu mais gosto nesse projeto é que ele me faz pensar fora da minha bolha e até mesmo questionar se a solução que estou propondo realmente faz sentido para o problema de negócio que vamos resolver ou se a IA Generativa atende às nossas expectativas. Nem todo problema precisa de IA Generativa para ser resolvido, mas o fato de refletirmos sobre a efetividade dessas tecnologias nos nossos desafios muda completamente o sentido de "apenas usar a tecnologia a qualquer custo".

### Boas práticas e Automatização sim e sempre!
Nesse projeto, fazemos entregas rápidas de protótipos. Sendo assim, estamos o tempo todo testando novas soluções e disponibilizando-as para avaliação. O fato de entregarmos apenas protótipos **não** significa que as boas práticas de software devem ser deixadas de lado. Eu senti na pele como é importante aplicar boas práticas de desenvolvimento e ter um deploy automatizado em todos os projetos. 

Utilizar uma nova tecnologia não significa que precisamos abandonar as boas práticas ou deixá-las apenas parcialmente estruturadas. Elas existem por um bom motivo: facilitar a vida do desenvolvedor e aumentar a velocidade das entregas. Tem sido muito satisfatório ver a grandeza dessas práticas aplicadas no meu dia a dia principalmente alinhadas com IA Generativa, e isso significa que uma nova tecnologia *não deve anular* todo o resto. Eu amo boas práticas de software, depois que você trabalha seguindo esse modelo, não dá mais vontade de fazer de qualquer jeito.


### O poder exponencial da IA Generativa
Nesse período, pude utilizar alguns modelos de IA generativa para as nossas entregas, e é fascinante ver o poder exponencial dessas tecnologias. Uma das que mais me marcou foi o modelo de embeddings da OpenAI, além do modelo para trabalhar com voz.  

Em determinado momento, precisei trabalhar com RAG em uma base de dados vetorial, acoplado a um modelo de embeddings. Foi **muuuuito** legal ver o comportamento do programa ao retornar dados com base na similaridade da busca, tudo parecia mágico! Mas, se não houver uma boa base de dados, o tiro pode sair pela culatra. Além disso, algumas bibliotecas podem ser pesadas no Python, então, se você não tiver uma máquina que aguente o tranco, pode acabar tendo dor de cabeça. 

Na minha experiência utilizei com o chromadb como banco de dados vetorial, eita banquinho sentimental. Basta uma configuração errada e o colega não sobe direito. Na época precisei implantar ele na AWS, mesmo configurando portas de comunicação dele para a internet ele pegava qualquer porta menos a que queriamos, ele deu uma canseira viu? Mas pra testes pequenos ele teve um comportamento legal, o que me deixa bem animada com as possibilidades. Nesse momento estou explorando outros bancos vetoriais mas foi bem legal aprender com o chromadb, eu não conheci os conceitos muito a fundo mas foi super interessante trabalhar com ele. 

O que me salvou em varios momentos foi o fato de eu ter uma máquina parruda pra trabalhar, eu já cheguei a *crachar* meu pc umas 4 vezes seguidas testando alguns modelos e bibliotecas extremamente pesadas, mas minha máquina saiu viva. Até mesmo trabalhando com AWS Lambda ou EC2, o processo de utilização das bibliotecas pode ser moroso dependendo do processo de instalação, e o docker foi o nosso aliado nessa briga. Algo que me faz refletir bem sobre a Gen IA é o fato que precisarmos ter uma máquina ok pra conseguir trabalhar com alguns bibliotecas e modelos, pelo menos localmente, pelo menos na minha experiência depois que incluimos o docker na jogada ficou mais leve trabalhar com essas bibliotecas mais pesadas tipo langchain, um sonho em uma noite de verão, literalmente.

Já com o modelo de voz, foi muito interessante perceber a naturalidade na fala, especialmente com alguns sotaques, o que me deixou surpreendida!! O modelo que testamos para fluxo de conversa tinha um tom super legal que da pra ser bem calibrado, o que abre infitinas possibilidades para acessibilidade, e isso é sensacional!

A Gen IA alinhada da forma correta é sensacional e leva o patamar de entregas a outro nível! Aprendi muito a ser flexivel nessa questão, a possibilidade de testar diversos modelos, alinhado a boas práticas é de outro mundo. 

### Mulheres no poder!
Nesse projeto, passaram muitas pessoas legais, inteligentes e parceiras. Mas tenho muito orgulho em dizer que a equipe é majoritariamente feminina. Que delícia é trabalhar com outras mulheres, compartilhar experiências… Eu me sinto ouvida, acolhida, abraçada. Um privilégio!

Esses ultimos meses foram legais.
