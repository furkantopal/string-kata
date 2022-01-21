export class StringCalculator {
  add(numbers: string): number {
    /*const inputString: string[] = numbers.split("");

    console.log(inputString);
    let delimeter = ",";
    if (
      inputString[0] === "/" &&
      inputString[1] === "/" &&
      inputString[3] === "\n"
    ) {
      delimeter = inputString[2];
    }
*/
    numbers = numbers.replace(/\D/g, "");
    const inputNumbers: string[] = numbers.split("");
    let sum = 0;
    inputNumbers.forEach((x) => (sum = sum + +x));

    return sum;
  }
}
