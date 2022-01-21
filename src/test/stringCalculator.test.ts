import { StringCalculator } from "../main/StringCalculator";

describe("String Calculator test", () => {
  it("should give the sum of the input string", () => {
    let stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should give the sum of the input string", () => {
    let stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1")).toBe(1);
  });
});
