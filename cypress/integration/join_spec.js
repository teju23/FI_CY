describe('join in as a Founder', () => {
    it('join as founder with correct credentials', () => {
        cy.server();
        cy.visit('/');
        let password = 'secret123';
        cy.location();
        cy.wait(1000);
        cy.contains('Join').click({force: true});
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.text().includes('The Silicon Valley Founder Institute')) {
                cy.form();//When the semester is not available for that location
            }
            else if ($body.text().includes('Geolocation is not perfect')){
                cy.form();
            }
            else {
                cy.form();
                cy.get('#password').type(password);//When the semester is available at the location
            }
        });
        cy.get('.registration-form').submit();
        cy.wait(1000);
        cy.contains('Application Questions');
        cy.contains('Logout').click();
    });
});