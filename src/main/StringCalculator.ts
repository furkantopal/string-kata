export class StringCalculator {
  add(numbers: string): number {
    numbers = numbers.replace("\n", ",");
    const inputNumber: string[] = numbers.split(",");
    let sum = 0;
    inputNumber.forEach((element) => (sum = sum + +element));
    return sum;
  }
}
