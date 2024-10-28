describe('API Tests', () => {
  const apiUrl = Cypress.env('baseUrl');

  it('GET /posts', () => {
    cy.api({
      method: 'GET',
      url: apiUrl + '/posts',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');
      });
  });

  it('GET /posts/{id}', () => {
    const idsToTest = [1, 2, 3, 4, 5]; 

    idsToTest.forEach((id) => {
      cy.api({
        method: 'GET',
        url: `${apiUrl}/posts/${id}`, 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('id', id); 
      });
    });
  });

  it('GET /posts/{id}/comments', () => {
    const idsToTest = [1, 2, 3, 4, 5]; 

    idsToTest.forEach((id) => {
      cy.api({
        method: 'GET',
        url: `${apiUrl}/posts/${id}/comments`, 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.be.an('array'); 
        response.body.forEach(comment => {
          expect(comment).to.have.property('postId', id); 
        });
      });
    });
  });

  it('GET /comments?postId={id}', () => {
    const idsToTest = [1, 2, 3, 4, 5]; 

    idsToTest.forEach((id) => {
      cy.api({
        method: 'GET',
        url: `${apiUrl}/comments?postId=${id}`, 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.be.an('array'); 
        response.body.forEach(comment => {
          expect(comment).to.have.property('postId', id); 
        });
      });
    });
  });
});
