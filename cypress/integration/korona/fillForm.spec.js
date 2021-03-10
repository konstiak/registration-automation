/// <reference types="cypress" />

context('Actions', () => {

  beforeEach(() => {
    cy.fixture('users.json').as('users')
  })

  it('Fill form ', () => {
    cy.fixture('users.json').then((users) => {
      const user = users[0]
      cy.visit('https://www.old.korona.gov.sk/covid-19-patient-form.php')
      cy.get('.patient-form > div.row div.col-lg-6:nth-of-type(1) > button').click()
      cy.get('div.regions-row:nth-of-type(8) button').click()
      cy.get('div.selectize-input').type(user.kraj + '{enter}')
      cy.get('.col-lg-5 div > input').type(user.miestoId)
      cy.get(user.terminSelector).click()
      cy.get('div:nth-of-type(2) div:nth-of-type(1) div.form-group > input').type(user.meno)
      cy.get('div:nth-of-type(2) div:nth-of-type(2) div > input').type(user.priezvisko)
      cy.get('.form-group.ng-scope input').type(user.rodneCislo)
      cy.get('div[title=\'Telefónne číslo (uveďte číslo, na ktoré vám vieme zaslať SMS)\'] > input').type(user.telefon)
      cy.get('div:nth-of-type(3) div.col-lg-4:nth-of-type(2) div > input').type(user.email)
      // 24 = dovera, 25 = vszp, 27 = union
      cy.get('div:nth-of-type(3) div.col-lg-4:nth-of-type(3) div > select').select(user.poistovna)
      cy.get('.ng-scope div.col-lg-6:nth-of-type(1) div > input').type(user.meno2)
      cy.get('div:nth-of-type(4) div:nth-of-type(2) div.form-group > input').type(user.priezvisko2)
      cy.get('.col-lg-6 div[title] > input').type(user.telefon2)
      cy.get('.col-lg-6 input.ng-valid-email').type(user.email2)
      cy.get('.col-lg-12 input').type(user.mesto)
      cy.get('input[name=\'street\']').type(user.ulica)
      cy.get('div.col-lg-3.col-xs-12:nth-of-type(3) div > input').type(user.cislo)
      cy.get('div.col-lg-3:nth-of-type(4) div > input').type(user.psc)
      cy.get('div.form-group:nth-of-type(3) label > input').check()
      cy.get('div:nth-of-type(4) label.form-check-label > input').check()
    })
  })
})