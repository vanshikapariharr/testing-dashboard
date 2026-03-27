describe('Testing Analytics Dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // TEST 1: Page loads and shows title
  it('should load the dashboard', () => {
    cy.get('[data-cy="dashboard-title"]').should('be.visible')
  })

  // TEST 2: Summary cards show correct data
  it('should display all 4 summary cards', () => {
    cy.get('[data-cy="summary-cards"]').should('be.visible')
    cy.get('[data-cy="total-count"]').should('contain.text', '50')
    cy.get('[data-cy="passed-count"]').should('contain.text', '38')
    cy.get('[data-cy="failed-count"]').should('contain.text', '12')
    cy.get('[data-cy="pass-rate"]').should('contain.text', '76%')
  })

  // TEST 3: Test table is visible
  it('should display the test table', () => {
    cy.get('[data-cy="test-table"]').should('be.visible')
    cy.get('[data-cy="test-count"]').should('contain.text', '50 tests')
  })

  // TEST 4: Filter by passed
  it('should filter tests by passed status', () => {
    cy.get('[data-cy="filter-passed"]').click()
    cy.get('[data-cy="test-count"]').should('contain.text', '38 tests')
    cy.get('[data-cy="test-status"]').each(status => {
      cy.wrap(status).should('contain.text', 'passed')
    })
  })

  // TEST 5: Filter by failed
  it('should filter tests by failed status', () => {
    cy.get('[data-cy="filter-failed"]').click()
    cy.get('[data-cy="test-count"]').should('contain.text', '12 tests')
    cy.get('[data-cy="test-status"]').each(status => {
      cy.wrap(status).should('contain.text', 'failed')
    })
  })

  // TEST 6: Filter all resets table
  it('should show all tests when all filter is clicked', () => {
    cy.get('[data-cy="filter-passed"]').click()
    cy.get('[data-cy="filter-all"]').click()
    cy.get('[data-cy="test-count"]').should('contain.text', '50 tests')
  })

  // TEST 7: Trend chart is visible
  it('should display the trend chart', () => {
    cy.get('[data-cy="trend-chart"]').should('be.visible')
  })

  // TEST 8: Test rows are visible
  it('should display test rows in the table', () => {
    cy.get('[data-cy="test-row"]').should('have.length', 50)
  })

})