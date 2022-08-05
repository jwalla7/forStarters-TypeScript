/**
 * Destructuring does not change the original array.
 * With Objects, destructuring is not in order. 
 *  So values being destructured can't be arbitrary however can be overwritten
 *  for example
 */

const stateTexas = {
    stateName: 'Texas',
    capital: 'Austin'
}

const { stateName, capital: capitalName} = stateTexas;
console.log(stateName, capitalName, stateTexas);