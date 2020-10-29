/**
* @jest-environment jsdom
*/

import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-test-renderer';
import App from './App';
import Checkbox from './src/components/checkbox';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'


jest.useFakeTimers();


describe('<App />', () => {
  it('has 1 child', async () => {
    const tree = renderer.create(<App />).toJSON();
    await act(async () => { 
      expect(tree.children.length).toBe(1); 
    })
  });

  it('renders correctly', async () => {
    const tree = renderer.create(<App />).toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    })
  });

  test('Signup flow', () => {
    const app = render(<App />);
    userEvent.click(app.getByText("Sign up", { exact: false }))
    const email = app.getByPlaceholderText("Your Email")
    userEvent.type(email, "testemail@gmail.com")
    const password = app.getByPlaceholderText("Your Password")
    userEvent.type(password, "password123")
    userEvent.click(app.getByText("Signup"))
    expect(app.getByText("You have not saved any Achievements yet!")).toBeTruthy(); 
  });
});

describe('<Checkbox />', () => {

  test('Checkbox is created with appropriate text', () => {
    const update = jest.fn();
    const checkbox = render(<Checkbox label="Work" saveSelected={update} />);
    expect(checkbox.queryByText("Work")).toBeTruthy(); 
  });
  
  test('Checkbox calls supplied function on click', () => {
    const update = jest.fn();
    const checkbox = render(<Checkbox label="Work" saveSelected={update} />);
    fireEvent.click(checkbox.getByText("Work"));
    expect(update).toHaveBeenCalled();
  });

});
