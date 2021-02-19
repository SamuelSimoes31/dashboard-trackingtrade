# dashboard-trackingtrade

Todos os dados mockados estão no arquivo data.ts como as natureza dos dados, o formato, como eles podem ser filtrados/separados, então não me preocupei muito em adicionar funcionalidade para os botões, justamente porque elas não foram informadas.
Mas aqui a ideia seria puxar todos esses dados (não necessariamente nesses formatos) através de hooks que contenham as requisições a API REST.

Alguns "position: absolute" poderiam ser substituídos por display flex para uma estilização mais responsiva e segura.
Assim como um entendimento melhor dados e da interface implica em uma melhor componentização e distribuição dos mesmos.

Adicionei funcionalidade de troca e tema claro/escuro para aproveitar de algumas funcionalidades do styled-components e junto utilizar hooks e context API.

![Alt text](/Screenshot_light.png)
![Alt text](/Screenshot_dark.png)