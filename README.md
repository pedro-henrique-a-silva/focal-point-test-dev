# Gerenciador de Tarefas - To-Do List

Este é um projeto de um Gerenciador de Tarefas feito com Next.js, que permite criar, excluir e marcar tarefas como concluídas. O projeto foi desenvolvido com foco em uma experiência de usuário simples e responsiva.

## Funcionalidades

- **Adicionar novas tarefas**: Crie tarefas para acompanhar suas atividades pendentes.
- **Excluir tarefas**: Remova tarefas que não são mais necessárias.
- **Marcar tarefas como concluídas**: Mantenha o controle de suas tarefas finalizadas.
- **Responsividade**: O projeto é totalmente responsivo, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.


## Tecnologias Utilizadas

**Next.js** - Framework React para desenvolvimento de aplicações web.

**React Hooks** para o gerenciamento de estado e contexto.

**CSS e SCSS** para a estilização e responsividade.

## Como rodar o projeto

Clone este repositório:
```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas.git
```
Instale as dependências:

```bash
cd gerenciador-tarefas
npm install
```


Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra http://localhost:3000 no navegador para visualizar o projeto.

## Estrutura de Arquivos

- **app/**: Armazena todas as páginas e rotas principais do projeto, gerenciando a navegação e exibição de conteúdo.
- **hooks/**: Contém os custom hooks criados para abstrair e reutilizar a lógica em diferentes partes da aplicação.
- **types/**: Centraliza todas as definições de tipos TypeScript, garantindo tipagem consistente e clara em toda a aplicação.
- **assets/**: Reúne todos os recursos estáticos, como imagens e ícones, utilizados na interface da aplicação.
- **components/**: Abriga componentes reutilizáveis, como o modal de confirmação e o formulário de gerenciamento de tarefas, promovendo modularidade e organização.
- **pages/**: Contém as páginas principais da aplicação, como a lista de tarefas e outras telas, sendo cada página associada a uma rota específica.
- **styles/**: Inclui os arquivos de estilo organizados em CSS e SCSS, garantindo consistência visual e adaptação responsiva.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.