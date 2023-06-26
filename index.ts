import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";
function main() {
  const firtsStr: string = question("enter first number");
  const operator: string = question("enter operator ");
  const secondStr: string = question("enter second number");

  const validInput: boolean =
    isNumber(firtsStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    const firstNum = parseInt(firtsStr);
    const secondNum = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  }
}
function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}
function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}
const calculate = (firstNum: number, operator: Operator, secondNum: number) => {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      return "Geçerli bir opeartor giriniz lütfen";
  }
};
main();
