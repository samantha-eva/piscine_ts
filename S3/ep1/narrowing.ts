function traiterValeur(strs: string  | number ): number{
    if (typeof strs === "string") {
        return strs.length;
    }else{
        return strs * 2;
    }

}


// Tests
console.log(traiterValeur("Hello")); 
console.log(traiterValeur(5));