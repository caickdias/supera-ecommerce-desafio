# Interface de um ecommerce de games utilizando React Native e Expo

O aplicativo deste respositório foi feito para o processo seletivo da Supera Inovação e Tecnologia.

Aqui explicarei meu processo de criação e algumas tecnologias utilizadas.

Primeiramente, procurei referências de lojas virtuais de jogos para referências. Assim sendo, baseei-me em temas escuros como os das renomadas Steam e Epic Games. Seguem imagens exemplo de referência:

<img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/ref-steam.png" width="40%" height="40%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/ref-epic.png" width="40%" height="40%"/>

Decidi por optar por temas escuros e utilizei o Figma para desenhar as telas. DISCLAIMER: não sou ui/ux designer, não possuo know-how ou expertise nessa área, mas procurei fazer o melhor dentro de minhas limitações.

# DESENHO DAS TELAS NO FIGMA:

<img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/figma-home.png" width="20%" height="20%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/figma-cart.png" width="20%" height="20%"/>

Minha intenção foi procurar uma interface simples, com poucas palavras e intuição pelos ícones. Criei meus próprios ícones utilizando o Illustrator CS6.

Escolhi as seguintes cores como principais do aplicativo:

<img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/colors.png" width="80%" height="80%"/>

# Desenvolvimento

Utilizei Expo versão 4.12.0, Visual Code Studio como editor. Fiz os testes utilizando dispostivos físicos: iPhone 8 e Moto G7.
Algumas bibliotecas, funções, entre outras utilizadas:
- typescript
- expo-google-fonts
- react-navigation
- react-context
- useReducer
- react-native-animated
- svg-transformer

Para consumo da API local utilizei apenas um import. Para utilização das imagens fornecidas, por não estarem hospedadas e sim locais, transformei-as em componentes através de imports.

Considerei utilizar AsyncStorage, axios, fazer uma página com detalhe dos itens, mas no final optei por apenas cumprir os requisitos visto que não tinha certeza se conseguiria fazê-los a tempo já que tive que desenvolver esta solução concomitantemente ao desenvolvimento do meu TCC que será enviado em breve.

Seguem capturas de telas dos dispostivios físicos testados.

# IPHONE 8

<img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/iphone8-home-nocategory.jpeg" width="20%" height="20%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/iphone8-home-priceasc.jpeg" width="20%" height="20%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/iphone8-cart.jpeg" width="20%" height="20%"/>

# MOTO G7

<img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/android-motog7-home-nocategory.jpeg" width="20%" height="20%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/android-motog7-home-priceasc.jpeg" width="20%" height="20%"/> <img src="https://github.com/caickdias/supera-ecommerce-desafio/blob/main/readme-images/android-motog7-cart.jpeg" width="20%" height="20%"/>
