/**
 *  
 * Rest parameters are for defined functions that take an unbounded number of arguments.
 *  In TypeScript, the type annotation on these parameters is implicitly 'any[]' instead of 'any'
 *  and any type annotation given must be of the form 'Array<T>', 'T[]' or a tuple type.
 */

const numArray1 = [1, 2, 3];
const numArray2 = [4, 5, 6];
numArray1.push(...numArray2); 
console.log(numArray1) // [1, 2, 3, 4, 5, 6]

const colaSodaCan = {
    ingredients: [
        "carbonated water",
        "high fructose",
        "corn syrup",
        "caramel color",
        "phosphoric acid",
        "natural flavor",
        "caffeine"
    ],
    calories: 170,
    fat: 0,
    sodium: 10,
    carbohydrate: 43,
    sugar: 42,
    protein: 0 
}

const copiedColaSodaCan = {...colaSodaCan};
console.log(colaSodaCan)

const addNumbers = (...n: number[]) => {
    return n.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
