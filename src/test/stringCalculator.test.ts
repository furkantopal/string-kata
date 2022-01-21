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

  it("should give the sum of the input string with mulitple input separated", () => {
    let stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1,2,4")).toBe(7);
  });

  it("should give the sum of the input string after all non numeric characters are removed", () => {
    let stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1\n2,3")).toBe(6);
  });
});
