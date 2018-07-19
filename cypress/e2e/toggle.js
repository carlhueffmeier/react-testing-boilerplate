var switchTestId = 'toggle-switch';
var labelRegex = /toggle state/i;

describe('Toggle', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('clicking switch correctly changes input field value', () => {
    cy.getByTestId(switchTestId)
      .click()
      .getByLabelText(labelRegex)
      .should(inputNode => /^on$/i.test(inputNode.value));
    cy.getByTestId(switchTestId)
      .click()
      .getByLabelText(labelRegex)
      .should(inputNode => /^off$/i.test(inputNode.value));
  });

  it('changing input field correctly changes switch state', () => {
    cy.getByLabelText(labelRegex)
      .clear()
      .type('on')
      .getByTestId(switchTestId)
      .should(switchNode => switchNode.checked);
    cy.getByLabelText(labelRegex)
      .clear()
      .type('of')
      .getByTestId(switchTestId)
      .should(switchNode => switchNode.checked);
    cy.getByLabelText(labelRegex)
      .clear()
      .type('OFF')
      .getByTestId(switchTestId)
      .should(switchNode => !switchNode.checked);
  });
});
