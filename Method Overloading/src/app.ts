class MethodOverloading {
  public fun(s: string): number;
  public fun(n: number): string;
  public fun(arg: number | string): any {
    if (typeof arg === "number") return arg.toString();
    if (typeof arg === "string") return arg.length;
  }
}
let obj = new MethodOverloading();
console.log("Result: " + obj.fun(153));
console.log("Length of String: " + obj.fun("Vipul Kumar Upadhyay"));
