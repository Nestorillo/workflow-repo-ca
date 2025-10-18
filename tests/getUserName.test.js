/* global global */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "../js/utils/storage.js";
import { JSDOM } from "jsdom";
const { window } = new JSDOM("", { url: "http://localhost" });
global.localStorage = window.localStorage;

describe("getUserName", () => {
  it("returns the user name from localStorage when user exists", () => {
    const mockUser = { name: "Nestor" };
    localStorage.setItem("user", JSON.stringify(mockUser));
    const result = getUserName();
    expect(result).toBe("Nestor");
  });

  it("returns null when no user exists in storage", () => {
    localStorage.removeItem("user");
    const result = getUserName();
    expect(result).toBeNull();
  });
});
