// https://docs.cypress.io/api/introduction/api.html

describe('PFF Test', () => {
  it('Visits Home page', () => {
    cy.visit('/');
    cy.contains('h1', 'Who are we?');
    cy.scrollTo('bottom', { duration: 12000 });
    cy.wait(3000);
  })
  it('ff1', () => {
    cy.visit('/ff1');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff2', () => {
    cy.visit('/ff2');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff3', () => {
    cy.visit('/ff3');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff4', () => {
    cy.visit('/ff4');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff5', () => {
    cy.visit('/ff5');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff6', () => {
    cy.visit('/ff6');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff7', () => {
    cy.visit('/ff7');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff8', () => {
    cy.visit('/ff8');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff9', () => {
    cy.visit('/ff9');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff10', () => {
    cy.visit('/ff10');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff11', () => {
    cy.visit('/ff11');
    cy.wait(3000);
  })
  it('ff12', () => {
    cy.visit('/ff12');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff13', () => {
    cy.visit('/ff13');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
  it('ff14', () => {
    cy.visit('/ff14');
    cy.wait(3000);
  })
  it('ff15', () => {
    cy.visit('/ff15');
    cy.scrollTo(0, 1500);
    cy.wait(3000);
  })
})
