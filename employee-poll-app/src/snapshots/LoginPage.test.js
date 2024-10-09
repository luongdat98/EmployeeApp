import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { legacy_createStore as createStore } from "redux";
import reducers from '../reducers';
import applyMiddleware from '../middleware';
import LoginPage from "../components/pages/LoginPage";

const store = createStore(reducers, applyMiddleware);

describe("Testing Login Page Successfully", ()=>{
  test("Expect matched snapshot", async ()=>{
    const login = render(
        <MemoryRouter>
            <Provider store={store}>
              <LoginPage/>
            </Provider>
        </MemoryRouter>
    );
    expect(login).toMatchSnapshot();
  });
});

describe("Testing Login Page Fail", () => {
  test("Return error message when login fail", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );
    
    const username = screen.getByTestId("usernam-testing");
    const password = screen.getByTestId("password-testing");
    const button = screen.getByTestId("button-testing");

    fireEvent.change(username, { target: { value: "sarahedo" } });
    fireEvent.change(password, { target: { value: "password123" } });
    fireEvent.click(button);

    const error = screen.getByTestId("error-testing");
    expect(error).toBeInTheDocument();
  });
});