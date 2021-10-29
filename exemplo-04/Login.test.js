import React from 'react'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Redirect as MockRedirect } from "react-router-dom";
import Login from "./Login";

jest.mock("react-router-dom", () => ({
  Redirect: jest.fn(() => null),
}));

beforeAll(() => jest.spyOn(window, 'fetch'))

test("logging in redirects to the admin", async () => {
  render(<Login />);

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  })

  userEvent.type(screen.getByLabelText(/username/i), 'Ashley');
  userEvent.type(screen.getByLabelText(/password/i), '123');
  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  expect(submitButton).toBeDisabled();
  await waitFor(() =>
    expect(MockRedirect).toHaveBeenCalledWith({ to: "/" }, {})
  );
});

test("omitting the fields results in an error", async () => {
  const message = 'TEST_ERROR_MESSAGE'
  render(<Login />);

  window.fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ message }),
  })

  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  expect((await screen.findByRole("alert")).textContent).toBe(message);
  expect(submitButton).not.toBeDisabled();
});
