describe('allows to register for an event',()=>{
    beforeEach( ()=>{
        cy.visit('/');
    }),

    afterEach(()=>{
        cy.logout();
    }),

    it('allows user to register for the upcoming event',()=>{
        let phone = '9999999999';
        cy.contains('Events').should('have.attr','href',('/events')).click();//goes to events page
        cy.wait(1000);
        cy.get('.featured-hero').click(); // clicks on the event
        cy.get('.registration-form').within(()=>{  //registers for event
            cy.form();
            cy.get('#phone_number').type(phone).should('have.value', phone);
            cy.contains('Register to this event').click();
        });
        cy.get('.modal-header').contains('You are successfully registered for');//check for registration success message
        cy.get('.close').click();
        cy.get('.event-registered-message').contains('Cancel Attendance').focus().click();
        cy.contains('You have indicated that you are NOT attending this event.');
        cy.contains('Register to this event').click();
        cy.get('.modal-header').contains('You are successfully registered for');
        cy.get('.close').click();
        cy.get('.event-registered-message').contains('Cancel Attendance').focus().click();
    }),

    it('allows accepted founder to register for the event',()=>{
        cy.signup('accepted_founder@gmail.com', 'secret123');
        cy.event_register();
    }),

    it('allows applied founder to register for the event',()=>{
        cy.signup('applied_founder@gmail.com','secret123');
        cy.event_register();
    }),

    it('allows admin to register for the event',()=>{
        cy.signup('graduated_founder@gmail.com','secret123');
        cy.event_register();
    }),

    it('it allows super admin to add a new event',()=>{
        cy.location();
        cy.wait(1000);
        cy.get('#location-search').should('have.value', 'Silicon Valley');
        cy.signup('andrew@fi.co','secret123');
        cy.get('#nav_wrap').contains('Courses').click();
        cy.get('#course_flag').select('Engineer');
        cy.wait(1000);
        cy.contains('Add a Recruiting Event').click();
        cy.get('body').get('#main_message');
    });
});