import { count } from "console";

export class StringCalculator {
  add(numbers: string): number {
    const inputString: string[] = numbers.split("");

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "-" && !isNaN(+inputString[i+1])) 
        throw "negatives not allowed"


    }
    
    /*
    console.log(inputString);
    let delimeter = ",";
    if (
      inputString[0] === "/" &&
      inputString[1] === "/" &&
      inputString[3] === "\n"
    ) {
      delimeter = inputString[2];
    }

    //we have find "-" and if after any "-" is a number then toegther they are negative and throw an error
    */
    
    
    //length of string = count
    //loop each charcater until number of times  = count
    //test each character in string and then if "-" found test next characater is number then error
    
    numbers = numbers.replace(/\D/g, "");
    const inputNumbers: string[] = numbers.split("");
    let sum = 0;
    inputNumbers.forEach((x) => (sum = sum + +x));

    return sum;
  }
}
