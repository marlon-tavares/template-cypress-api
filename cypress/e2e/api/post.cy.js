describe('POST API Tests', () => {
  const apiUrl = Cypress.env('baseUrl');

  it('POST /posts', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    cy.api({
      method: 'POST',
      url: apiUrl + '/posts', 
      body: newPost,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newPost); 
      expect(response.body).to.have.property('id'); 
    });
  });
});
