**LyricFind:**

*Demo do app*

https://github.com/pedrohsmorais/LyricFind/assets/98822728/894f7dd2-5681-4302-87d6-aa7d64af91bf

O aplicativo desenvolvido em React Native é uma plataforma de busca de letras de músicas que permite aos usuários pesquisar por autor e música. A estrutura do código está organizada em três partes principais:

**1. Componente Principal - `App`:**

- *Descrição:*
  O componente `App` configura a navegação do aplicativo utilizando `react-navigation`.

- *Funcionalidade:*
  - Utiliza o `NavigationContainer` do `@react-navigation/native`.
  - Define uma pilha de navegação (`StackNavigator`) com as telas `SearchScreen` e `LyricScreen`.

---




**2. Tela de Pesquisa (`SearchScreen`):**

- *Descrição:*
  A tela de pesquisa permite que os usuários insiram o nome do autor e da música para buscar as letras correspondentes.

- *Funcionalidade:*
  - Utiliza o `useState` para controlar os estados dos campos de entrada.
  - Utiliza o `TextInput` para obter informações de autor e música.
  - Navega para a tela de letra (`LyricScreen`) ao pressionar o botão de pesquisa.

---

**3. Tela de Letra (`LyricScreen`):**

- *Descrição:*
  A tela de letra exibe a letra de uma música, possibilitando a tradução entre inglês e português.

- *Funcionalidade:*
  - Utiliza o `useState` para controlar o estado do componente.
  - Realiza uma solicitação assíncrona para uma API externa (`http://api.vagalume.com.br`) para obter a letra da música.
  - Inclui um interruptor (`Switch`) para alternar entre a letra original e a traduzida.
