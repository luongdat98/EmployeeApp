import * as React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { legacy_createStore as createStore } from "redux";
import reducers from '../reducers';
import applyMiddleware from '../middleware';


const store = createStore(reducers, applyMiddleware);

describe("Testing App.js", ()=>{
  test("Expect matched snapshot", async ()=>{
    const app = render(
      <MemoryRouter>
        <Provider store={store}>
        <App/>
        </Provider>
      </MemoryRouter>
    );
    expect(app).toMatchSnapshot();
  });
})