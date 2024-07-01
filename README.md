# SportMap

SportMap é uma aplicação que permite aos usuários encontrar e marcar quadras esportivas em um mapa, facilitando a localização e o acesso a diferentes pontos de prática esportiva. Com SportMap, você pode criar uma conta, fazer login, adicionar marcadores indicando quadras esportivas e muito mais.

## Funcionalidades

- **Cadastro e Login**: Crie uma conta ou faça login para acessar todas as funcionalidades do SportMap.
- **Localização Atual**: O aplicativo pede a localização atual do usuário, utilizando a posição do celular para fornecer uma experiência personalizada e precisa.
- **Adicionar Marcadores**: Adicione marcadores no mapa indicando a localização de quadras esportivas.
  - Selecione o esporte principal praticado na quadra ao adicionar um marcador.
- **Visualização de Marcadores**: Visualize todos os marcadores adicionados no mapa.
- **Favoritar Rota**: Selecione um marcador e favorite a rota até a quadra indicada.
- **Traçar Rota**: Trace uma rota até o marcador selecionado e visualize a rota diretamente no mapa.
- **Histórico de Rotas**: Veja o histórico das rotas que você traçou anteriormente.

## Como Usar

### 1. Cadastro e Login

1. **Cadastro**: Crie uma conta fornecendo suas informações básicas.
2. **Login**: Faça login na aplicação com suas credenciais.

### 2. Adicionar Marcadores

1. Navegue até a área do mapa onde você deseja adicionar um marcador.
2. Clique no local desejado para adicionar um marcador.
3. Selecione o esporte principal praticado na quadra a ser adicionada.

### 3. Favoritar e Traçar Rotas

1. Clique em um marcador no mapa para abrir o modal com as informações da quadra.
2. No modal, você pode:
   - Favoritar a rota até a quadra.
   - Traçar uma rota até a quadra selecionada.

### 4. Histórico de Rotas

1. Acesse o histórico para visualizar todas as rotas que você traçou anteriormente.

## Tecnologias Utilizadas

### Frontend

- **React Native**: Para a construção da interface do usuário e experiência mobile.

### Backend

- **Node.js**: Plataforma de execução para o servidor.
- **Express.js**: Framework para construção da API RESTful.
- **MySQL**: Banco de dados relacional para armazenar informações dos usuários, marcadores, e histórico de rotas.
- **Cors**: Middleware para permitir requisições de diferentes origens.
- **Bcrypt**: Biblioteca para hash de senhas e segurança dos dados dos usuários.
- **JWT (JSON Web Tokens)**: Para autenticação e gerenciamento de sessões.
- **AsyncStorage**: Para armazenamento local de dados no dispositivo do usuário.
