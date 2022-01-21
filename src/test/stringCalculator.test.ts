import { StringCalculator } from "../main/StringCalculator";

describe("String Calculator test", () => {
  let stringCalculator: StringCalculator = new StringCalculator();
  it("should give the sum of the input string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should give the sum of the input string", () => {
    expect(stringCalculator.add("1")).toBe(1);
  });

  it("should give the sum of the input string with mulitple input separated", () => {
    expect(stringCalculator.add("1,2,4")).toBe(7);
  });

  it("should give the sum of the input string after all non numeric characters are removed", () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
  });
  it("should give the sum of the input string when it has different delimeters", () => {
    expect(stringCalculator.add("//;\n1;2")).toBe(3);
  });

  it("as number are added together, if any number is negative there should be an exception of negatives not allowed ", () => {
    expect(stringCalculator.add("//;\n1;2?-1")).toThrow("negatives not allowed");
  });
});
