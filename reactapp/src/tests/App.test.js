import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from '../App';

test('renders_Greeting_word', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greeting/i);
  expect(linkElement).toBeInTheDocument();
});

test('render_label_For_entry', () => {
  render(<App/>);
  const labelid = screen.getByTestId("label");
  expect(labelid).toBeInTheDocument();
})

test('render_form', () => {
  render(<App/>);
  const formelement = screen.getByTestId("form");
  expect(formelement);
})

test('render_button',() => {
  render(<App/>);
  const buttonId = screen.getByRole("button", {name : /Say Hello/i });
  expect(buttonId).toBeInTheDocument();
})

test('handlechange_update_name_status', () => {
  const {getByLabelText} = render(<App/>);
  const getChangeelement = getByLabelText(/Enter your name/i);
  fireEvent.change(getChangeelement,{target :{value : 'Ragu'}});
  expect(getChangeelement.value).toBe('Ragu');
})

test('handleClick_sets_the_current_name', () => {
  const {getByLabelText, getByText} = render(<App/>);
  const getChangeelement = getByLabelText(/Enter your name/i);
  const submitchange = getByText(/Say Hello/i);

  fireEvent.change(getChangeelement,{target :{value : 'vijay'}});
  fireEvent.click(submitchange);

  const name = getByText(/Hello, vijay!/i);
  expect(name).toBeInTheDocument("Hello, vijay!");
})

