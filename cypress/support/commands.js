Cypress.Commands.add('createPost', (title, body) => {
  cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: title,
    body: body,
    userId: 1
  }).then(response => {
    expect(response.status).to.eq(201);
    Cypress.env('postId', response.body.id);
  });
});

Cypress.Commands.add('updatePost', (id, title) => {
  cy.request('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`, {
    id: id,
    title: title,
    body: 'bar',
    userId: 1
  }).then(response => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('getPost', (id) => {
  cy.request('GET', `https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
    expect(response.status).to.eq(200);
  });
});
