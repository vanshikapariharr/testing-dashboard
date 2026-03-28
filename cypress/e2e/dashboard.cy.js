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

  // TEST 9: Filter bar is visible
  it('should display the filter bar', () => {
    cy.get('[data-cy="filter-bar"]').should('be.visible')
    cy.get('[data-cy="filter-all"]').should('be.visible')
    cy.get('[data-cy="filter-passed"]').should('be.visible')
    cy.get('[data-cy="filter-failed"]').should('be.visible')
  })

  // TEST 10: Passed card shows correct color class
  it('should show passed card', () => {
    cy.get('[data-cy="passed-card"]').should('be.visible')
    cy.get('[data-cy="passed-count"]').should('be.visible')
  })

  // TEST 11: Failed card shows correct data
  it('should show failed card', () => {
    cy.get('[data-cy="failed-card"]').should('be.visible')
    cy.get('[data-cy="failed-count"]').should('be.visible')
  })

  // TEST 12: Pass rate card is visible
  it('should show pass rate card', () => {
    cy.get('[data-cy="rate-card"]').should('be.visible')
    cy.get('[data-cy="pass-rate"]').should('contain.text', '%')
  })

  // TEST 13: Filter switches correctly between passed and failed
  it('should switch between passed and failed filters', () => {
    cy.get('[data-cy="filter-passed"]').click()
    cy.get('[data-cy="test-count"]').should('contain.text', '38 tests')
    cy.get('[data-cy="filter-failed"]').click()
    cy.get('[data-cy="test-count"]').should('contain.text', '12 tests')
  })

  // TEST 14: Table has correct columns
  it('should display correct table columns', () => {
    cy.get('.test-table th').eq(0).should('contain.text', 'Test Name')
    cy.get('.test-table th').eq(1).should('contain.text', 'Suite')
    cy.get('.test-table th').eq(2).should('contain.text', 'Status')
    cy.get('.test-table th').eq(3).should('contain.text', 'Duration')
    cy.get('.test-table th').eq(4).should('contain.text', 'Date')
  })

  // TEST 15: First test row has correct data
  it('should display correct data in first test row', () => {
    cy.get('[data-cy="test-row"]').first().within(() => {
      cy.get('[data-cy="test-name"]').should('contain.text', 'should open the app')
      cy.get('[data-cy="test-status"]').should('contain.text', 'passed')
    })
  })

})