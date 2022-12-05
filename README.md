# Fundamentos de Clean Code

### O que é ou não é Clean Code?

#### O que é Clean Code: 

<h5> Clean Code está pautado em dois pilares: </h5>

1 - Legibilidade: 

<p> É um código de fácil leitura, não quer dizer que o código é
simples, porém, mesmo que complexo, uma pessoa com conhecimento
técnico vai conseguir abrir o código e ler. </p>
     
2 - Manutenção: 
     
Um código de fácil manutenção. 
Se é possível ler o código, porém, adicionar uma nova 
funcionalidade ou dar manutenção em uma funcionalidade
existente o código não é considerado limpo.
     
 Para dar manutenção em um código limpo, é necessário
ter duas coisas: 
     
- Previsibilidade 
- Confiança



#### O que não é Clean Code: 

- Clean Code não é um manual: A teoria não define Clean Code
O código limpo nasce apartir de muitos códigos "sujos".

- Clean Code não é estrutura de pastas

- Clean Code não é um código menor: Um código maior pode ser muito melhor 
do que um código menor.

- Clean Code não tem nada a ver com Arquitetura ou Design de Software: 
Algumas dessas práticas podem ajudar a manter um código mais legível e manutenível
mas não há obrigatoriedade dessas práticas para se obter um código limpo.

- Clean Code não tem nada a ver com a performance no código: Seguir as 
práticas de um código limpo não vai tornar a aplicação mais performatica  


</hr>

### Princípios do código limpo

1 - Código Testável: Sem testes difícilmente haverá confiança no código que está sendo escrito.

2 - Revisão: Se não houver uma revisão no código a cada adição de nova feature, a cada nova 
alteração a chance do código não ser limpo é muito grande. 

3 - Refatoração: Aplicar melhorias em código já escrito anteriormente. Código é um organismo
vivo, ele recebe remendos ao longo de toda a vida da aplicação, se isso não é constantemente 
refatorados, em um momento o código deixará de ser um código de fácil manutenção. 

4 - Simplicidade: Um dos princípios da Programação chamado KISS
Keep it Simple and Stupid: Boas escolhas trazem simplicidade para o código,
Adicione ferramentas e tecnologias conforme houver realmente necessidade.

5 - Iterações Curtas: Pequenas iterações no código.
Tem a ver com uma feature não demorando semanas para ir ao ar
para receber a primeira revisão. O ideal é ir enviando para revisão/produção aos poucos.
