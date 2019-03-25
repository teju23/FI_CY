describe('allows Admin to create a new blog',()=>{
    it('allows Admin to create post',()=>{
        cy.visit('/');//goes to the website
        cy.get('.portfolio-value').scrollIntoView();// scrolls down to get the nav bar visible
        cy.signup('superadmin@fi.co', 'secret123');// logs in as super admin
        cy.visit('/admin/blogs');// goes to blogs page(insights)
        cy.get('#breakout').contains('New Post').should('have.attr', 'href','/posts/new').click();// clcks on create new post to create post
        cy.get('#post_title').type('New Test Blog Post');//input the title of post
        cy.get('.center .button').focus().click();//submits the post 
        cy.contains('Post was successfully created.');//checks wheather post is created
        cy.visit('/admin/blogs');// goes to amin blog page
        cy.get('tr').contains('New Test Blog Post').siblings('a').contains('Delete').click();//deletes the post
        cy.logout();// logs out
    });
});
