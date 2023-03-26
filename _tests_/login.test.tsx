// import Dashboard from '../src/app/dashboard/index';
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
// import SideMenu from "../src/components/Layout/sideMenu/index";
import React from "react";
import Login from "../src/app/login/index";
import App from "../src/App";

describe("Login Component", async () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
    cleanup();
  });

  it("renders a logo image", () => {
    const { getByAltText } = render(<App />);
    const logoImg = getByAltText("lendsqr_logo");

    // Post Expectations
    expect(logoImg).not.toBeNull();
  });

  it("renders without crashing", async () => {
    render(<App />);
    const h1 = screen.queryByText("Welcome!");

    // Post Expectations
    expect(h1).not.toBeNull();
  });

  it("Render Login Button", async () => {
    render(<App />);
    const button = screen.queryByText("LOG IN");

    // Post Expectations
    expect(button).not.toBeNull();
  });

  it("should handle email input change", () => {
    const { getByTestId } = render(<App />);
    const emailField = getByTestId("email-field");

    const email = "adamjamiu98@gmail.com";
    fireEvent.change(emailField, {
      target: { value: email },
    });

    expect(emailField.value).toBe(email);
  });

  it("should handle passowrd input change", () => {
    const { getByTestId } = render(<App />);
    const passwordField = getByTestId("password-field");

    const password = "123456789";
    fireEvent.change(passwordField, {
      target: { value: password },
    });

    expect(passwordField.value).toBe(password);
  });
  
});
