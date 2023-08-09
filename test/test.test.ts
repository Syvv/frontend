import { describe, it, expect } from "vitest";

describe("When testing", () => {
	it("should be normal", () => {
		expect(1 + 1).toBe(2);
	});

	it("should also be normal", () => {
		expect(1 + 3).toBe(4);
	});
});
