describe('PUT API Tests', () => {
  const apiUrl = Cypress.env('baseUrl');

  it('PUT /posts/1', () => {
    const updatedPost = {
      title: 'foo updated',
      body: 'bar updated',
      userId: 1,
    };

    cy.api({
      method: 'PUT',
      url: apiUrl + '/posts/1', 
      body: updatedPost,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatedPost); 
      expect(response.body).to.have.property('id', 1); 
    });
  });
});
