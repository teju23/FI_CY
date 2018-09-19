describe('allows Admin to create a new blog',()=>{
    it('allows Admin to create post',()=>{
        cy.visit('/');
        cy.signup('andrew@fi.co', 'secret123');
        cy.visit('/admin/blogs');
        cy.get('#breakout').contains('New Post').should('have.attr', 'href','/posts/new').click();
        cy.get('#post_title').type('New Test Blog Post');
        cy.get('#post_category').type('Testing');
        cy.get('.center .button').focus().click();//submits the post 
        cy.contains('Post was successfully created.');//checks wheather post is created
        cy.visit('/admin/blogs');
        cy.get('tr').contains('New Test Blog Post').siblings('a').contains('Delete').click();//deletes the post
        cy.logout();
    });
});


