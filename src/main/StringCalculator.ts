
//   //;\n1;2"
//if start // take 3rd digit as delimeter
export class StringCalculator {
  add(numbers: string): number {
    const inputString: string[] = numbers.split("");
     
    console.log(inputString);
    let sum = 0;
    inputString.forEach((element) => (sum = sum + +element));
    return sum;
  }
}
