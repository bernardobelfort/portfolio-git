# Reflexão — Portfólio Git

## O que foi difícil

A parte mais complicada pra mim foi entender o que estava acontecendo durante o merge conflict. Quando abri o arquivo e vi aquelas marcações de `<<<<<<<`, `=======` e `>>>>>>>` espalhadas pelo código, minha primeira reação foi de confusão total, não ficou imediatamente óbvio o que era "meu" código e o que era o código da outra branch. Precisei parar e ler com calma pra entender que o Git estava literalmente me mostrando as duas versões lado a lado e me pedindo pra decidir qual manter.

Além disso, no começo eu não tinha clareza sobre a diferença entre fazer um merge direto pela linha de comando e abrir um Pull Request. Sabia que eram coisas diferentes, mas não entendia por que alguém escolheria um em vez do outro. Fui entendendo isso na prática, ao longo do exercício.

## O que ficou claro

O que ficou mais claro pra mim foi o propósito real de uma branch. Antes eu entendia branch de forma abstrata, como "uma cópia do código". Mas fazendo o exercício eu percebi que branch é mais sobre intenção do que sobre cópia, você cria uma branch porque quer trabalhar em algo específico sem afetar o que já está funcionando. Quando fiz duas branches a partir do mesmo commit e as duas mexeram no mesmo arquivo de formas diferentes, ficou muito concreto pra mim por que o Git não consegue resolver isso sozinho.

Os commits semânticos também fizeram mais sentido do que eu esperava. No começo pareciam uma formalidade chata, mas ao olhar o histórico no final e conseguir entender exatamente o que cada commit fez só pela mensagem, entendi o valor disso num projeto real com mais pessoas.

## O que ainda é confuso

O que ainda não ficou totalmente claro pra mim é o fluxo do Git em projetos com várias pessoas trabalhando ao mesmo tempo. Nesse exercício eu era a única pessoa no repositório, então os conflitos foram criados de propósito e eu sabia exatamente o que tinha mudado em cada branch. Mas num projeto real, com outras pessoas commitando em paralelo sem eu saber, não tenho certeza de como eu saberia o que priorizar na hora de resolver um conflito, especialmente se o código em conflito não fosse meu.