describe("allows Admin to create a new blog",()=>{
  beforeEach(function () {
    cy.visit('/')
  })
  it("allows Admin to create post",()=>{
    cy.signup('admin@fi.co', 'secret123');
    cy.visit('/admin/blogs');
    cy.get('#breakout').contains('New Post').should('have.attr', 'href','/posts/new').click();
    cy.get('#post_title').type('New Test Blog Post');
    cy.get('#post_category').type('Testing');
    cy.get('.center .button').focus().click();
    cy.contains('Post was successfully created.');
    cy.visit('/admin/blogs');
    cy.get('tr').contains('New Test Blog Post').siblings('a').contains('Delete').click();
    cy.get('[href="/information/logout"]').click({ force: true });
  })
  // it("allows us to subscribe",()=>{  
  //   cy.contains("Insights").should("have.attr", "href","/insights").focus().click();
  //   cy.get("#mce-FIRST").type("Teju").should("have.value","Teju");
  //   cy.get("#mce-EMAIL").type("admin@fi.co").should("have.value","admin@fi.co");
  //   cy.get("input[type=submit]").last().focus().click();
    
  // }),
  // it("allows us to open the latest insight",()=>{
  //   cy.contains("Insights").should("have.attr", "href", "/insights").focus().click();
  //   cy.contains("Latest Insight").click();
  // })
  // it("allows to check pagenation",()=>{
  //   cy.contains("Insights").should("have.attr", "href", "/insights").focus().click();
  //   const y= cy.get('.pagination').find('span').find('a');
  //   for(let i=1;i<y.length;i++){
  //     cy.contains("Next ").click();
  //   }
   
  // })
  // it("allows user to click ",()=>{
  //   cy.contains("Insights").should("have.attr", "href", "/insights").focus().click();
  //   cy.get(".card").first().click();
  //   cy.go('back');
  //   cy.get(".card").last().click();
  // })
})