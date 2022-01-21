export class StringCalculator {
  add(numbers: string): number {
     const inputNumber: string[]  =  numbers.split(",");
    
     let sum = 0;
    console.log(inputNumber);
    inputNumber.forEach(element=> sum = sum+(+element))
    return sum;
  }
}
