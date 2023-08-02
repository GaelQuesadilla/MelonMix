import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from "../navbar.js";
import * as ROUTES from "../../../constants/routes.js";

test("renders NavigationBar with correct brand name and link", () => {
  render(
    <Router>
      <NavigationBar />
    </Router>
  );
  const brandElement = screen.getByText("MelonMix");
  expect(brandElement).toBeInTheDocument();

  const linkElement = screen.getByRole("link", { name: "MelonMix" });
  expect(linkElement).toHaveAttribute("href", ROUTES.HOME);
});

test('Navbar has the "bg-dark" and "navbar-dark" classes', () => {
  render(
    <Router>
      <NavigationBar />
    </Router>
  );

  // Verifica que el Navbar tenga las clases "bg-dark" y "navbar-dark"
  const navbarElement = screen.getByRole("navigation");
  expect(navbarElement).toHaveClass("bg-dark");
  expect(navbarElement).toHaveClass("navbar-dark");
});
