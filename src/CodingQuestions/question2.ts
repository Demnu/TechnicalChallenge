const fibo = (n :number): number=>{
    let x1 : number = 0;
    let x2 : number = 1;
    let y : number = 0;
    // If n is 0, return 0 as the first Fibonacci number is 0.
    if (n === 0){
        return 0;
    }
    // If n is 1, return 1 as the second Fibonacci number is 1.
    else if (n === 1){
        return 1;
    }
    // For all other values of n greater than or equal to 2, calculate the nth Fibonacci number using a loop.
    for (let i : number = 2; i<=n ; i++){
        y = x1 + x2; // y is the sum of the previous two numbers in the sequence.
        x1 = x2; // x1 becomes the previous number in the sequence (x2).
        x2 = y; // x2 becomes the current number in the sequence (y).
    }
    return y;
}
export default fibo;