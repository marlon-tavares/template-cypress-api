describe('DELETE API Tests', () => {
  const apiUrl = Cypress.env('baseUrl');

  it('DELETE /posts/1', () => {
    cy.api({
      method: 'DELETE',
      url: apiUrl+'/posts/1',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200); 
    });
  });
});
