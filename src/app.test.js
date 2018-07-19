import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import App from './app';

function changeInput(inputNode, newValue) {
  inputNode.value = newValue;
  fireEvent.change(inputNode);
}

afterEach(cleanup);

it('renders without crashing', () => {
  render(<App />);
});

describe('Toggle', () => {
  var switchNode;
  var inputNode;
  beforeEach(() => {
    var { getByLabelText, getByTestId } = render(<App />);
    switchNode = getByTestId('toggle-switch');
    inputNode = getByLabelText(/toggle state/i);
  })

  it('initial values are set to `off`', () => {
    expect(switchNode.checked).toBe(false);
    expect(inputNode.value).toMatch(/off/i);
  });

  it('clicking switch correctly changes input field value', () => {
    fireEvent.click(switchNode);
    expect(switchNode.checked).toBe(true);
    expect(inputNode.value).toMatch(/on/i);
  });

  it('changing input field correctly changes switch state', async () => {
    changeInput(inputNode, 'on');
    expect(switchNode.checked).toBe(true);
    changeInput(inputNode, 'OF');
    expect(switchNode.checked).toBe(true);
    changeInput(inputNode, 'OFF');
    expect(switchNode.checked).toBe(false);
  });
});
