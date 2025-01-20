import { describe, expect, it } from "vitest";
import { getUserName } from "../lib/helpers";

describe("getUserName", () => {
  it("should return string without '@'", () => {
    const email = "testEmail@gmail.com";
    const username = getUserName(email);

    expect(username).toBe("TestEmail");
    expect(username).not.toContain("@");
  });

  it("should capitalize the first letter of the username", () => {
    const email = "lowercase@gmail.com";
    const username = getUserName(email);

    expect(username).toBe("Lowercase");
  });

  it("should handle special characters in username", () => {
    const email = "test-email123@gmail.com";
    const username = getUserName(email);

    expect(username).toBe("Test-email123");
  });
});
