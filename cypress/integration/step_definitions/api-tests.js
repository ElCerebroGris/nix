import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

console.log('Carregando definições de passos para api-tests.js');

Given('que eu tenho uma nova postagem com título {string} e corpo {string}', (title, body) => {
  console.log(`Given: título = ${title}, corpo = ${body}`);
  cy.wrap({ title, body }).as('newPost');
});

When('eu envio a postagem para a API', function() {
  console.log('When: enviando postagem para a API');
  cy.createPost(this.newPost.title, this.newPost.body);
});

Then('a postagem deve ser criada com sucesso', function() {
  console.log('Then: verificando criação da postagem');
  cy.get('@newPost').then(post => {
    cy.getPost(Cypress.env('postId')).then(response => {
      expect(response.body.title).to.eq(post.title);
      expect(response.body.body).to.eq(post.body);
    });
  });
});
