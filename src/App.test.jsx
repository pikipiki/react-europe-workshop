import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

vi.mock("aws-amplify", () => ({
  default: {
    configure: vi.fn(),
    API: {
      get: vi.fn(() => new Promise(() => {})),
    },
  },
}));

vi.mock("aws-amplify-react", () => ({
  withAuthenticator: (Component) => Component,
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
