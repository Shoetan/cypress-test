/* eslint-disable no-undef */
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[counter-testid="counter"]').should("exist")

  })
})