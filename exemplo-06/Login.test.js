import React from 'react'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Redirect as MockRedirect } from "react-router-dom";
import { rest } from 'msw'
import { server } from '../mocks/server'
import Login from "./Login";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

jest.mock("react-router-dom", () => ({
  Redirect: jest.fn(() => null),
}));

test("logging in redirects to the admin", async () => {
  render(<Login />);

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
  server.use(
    rest.post('/login', async (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message }))
    }),
  )
  render(<Login />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitButton);

  expect((await screen.findByRole("alert"))).toHaveTextContent(message);
  expect(submitButton).not.toBeDisabled();
});
