describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.fixture("data.json").then((data) => {
      cy.get("#email").type(data.users[1].email);
    });
    //

    // cy.get("#btn").click();
  });
});
