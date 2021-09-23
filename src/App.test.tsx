import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  })
// -------------------------------------------------------------------------------------------------------------------------
  it("does not show the answer when swap current card button is clicked", async () => {
    const button = screen.getByTestId("swap-current-card-button");
    button.click();
    const element = await screen.queryByTestId("answer-label"); // Query not expected
    expect(element).not.toBeInTheDocument();
  });

  /*it("should shuffle when shuffle button clicked", async () => {
    const button = screen.getByTestId("shuffle-button");
    const og = JSON.stringify(screen.getByTestId("user-list"));
    button.click();
    const changed = await screen.findByTestId("user-list");
    expect(JSON.stringify(changed)).not.toEqual(og);
  });*/

  it("should change the prompt when swap current card is clicked", async () => {
    
  });
})
