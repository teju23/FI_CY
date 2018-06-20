// describe("Super Admin discussion page",()=>{
//   beforeEach(()=>{
//     cy.server();
//     cy.signup('admin@fi.co', 'secret123');
//     // cy.get(".admin_super").contains("Discuss").should('have.attr', 'href', '/discussions').click();
//     cy.visit('http://localhost:3000/discussions')
//     cy.wait(500);
//   }),
//   afterEach(()=>{
//     cy.contains('Logout').click();
//   })
//   it("allows admin to create and delete assignments discussion", () => {
//     cy.contains('Assignments').should('have.attr', 'href', '/discussions?category=Assignments').click();
//     cy.post();
//   })
//   // it("allows admin to create and delete ideas discussion", () => {
//   //   //  cy.visit('http://localhost:3000/discussions')
//   //   cy.contains('Ideas').should('have.attr','href','/discussions?category=Ideas').click();
//   //   cy.post();

//   // })
//   // it("allows admin to create and delete cofounders discussion", () => {
//   //   cy.contains('Cofounders').should('have.attr', 'href', '/discussions?category=Cofounders').click();
//   //   cy.post();

//   // })
//   // // it("allows admin to create and delete Feedback discussion", () => {
//   // //   cy.contains('Feedback').should('have.attr', 'href', '/discussions?category=Feedback').click();
//   // //   cy.post();

//   // // })
//   // it("allows admin to create and delete Female Founders discussion", () => {
//   //   cy.contains('Female Founders').should('have.attr', 'href', '/discussions?category=Female+Founders').click();
//   //   cy.post();
//   //  })
//   // it("allows admin to create and delete Veterans discussion", () => {
//   //   cy.contains('Veterans').should('have.attr', 'href', '/discussions?category=Veterans').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Star Fellows discussion", () => {
//   //   cy.contains('Star Fellows').should('have.attr', 'href', '/discussions?category=Star+Fellows').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete FI Worldwide discussion", () => {
//   //   cy.contains('FI Worldwide').should('have.attr', 'href', '/discussions?category=FI+Worldwide').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Bugs discussion", () => {
//   //   cy.contains('Bugs').should('have.attr', 'href', '/discussions?category=Bugs').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete General Mentors discussion", () => {
//   //   cy.contains('General Mentors').should('have.attr', 'href', '/discussions?category=General+Mentors').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Mentoring discussion", () => {
//   //   cy.contains('Mentoring').should('have.attr', 'href', '/discussions?category=Mentoring').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Advising discussion", () => {
//   //   cy.contains('Advising').should('have.attr', 'href', '/discussions?category=Advising').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Networking discussion", () => {
//   //   cy.contains('Networking').should('have.attr', 'href', '/discussions?category=Networking').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Graduates discussion", () => {
//   //   cy.contains('Graduates').should('have.attr', 'href', '/discussions?category=Graduates').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete News discussion", () => {
//   //   cy.contains('News').should('have.attr', 'href', '/discussions?category=News').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Team discussion", () => {
//   //   cy.contains('Team').should('have.attr', 'href', '/discussions?category=Team').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Product discussion", () => {
//   //   cy.contains('Product').should('have.attr', 'href', '/discussions?category=Product').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Traction discussion", () => {
//   //   cy.contains('Traction').should('have.attr', 'href', '/discussions?category=Traction').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Fundraising discussion", () => {
//   //   cy.contains('Fundraising').should('have.attr', 'href', '/discussions?category=Fundraising').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete General Directors discussion", () => {
//   //   cy.contains('General Directors').should('have.attr', 'href', '/discussions?category=General+Directors').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Recruiting discussion", () => {
//   //   cy.contains('Recruiting').should('have.attr', 'href', '/discussions?category=Recruiting').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Operating discussion", () => {
//   //   cy.contains('Operating').should('have.attr', 'href', '/discussions?category=Operating').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Office Hours discussion", () => {
//   //   cy.contains('Office Hours').should('have.attr', 'href', '/discussions?category=Office+Hours').click();
//   //   cy.post();
//   // })
//   // it("allows admin to create and delete Special Assignments discussion", () => {
//   //   cy.contains('Special Assignments').should('have.attr', 'href', '/discussions?category=Special+Assignments').click();
//   //   cy.post();
//   // })

// })