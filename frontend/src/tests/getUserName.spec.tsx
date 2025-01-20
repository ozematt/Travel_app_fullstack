import { describe, expect, it } from "vitest";
import { getUserName } from "../lib/helpers";

describe("getUserName", () => {
  it("should return string without '@'", () => {
    const email = "testEmail@getDefaultNormalizer.com";
    const username = getUserName(email);

    expect(username).not.toContain("@");
  });
});
