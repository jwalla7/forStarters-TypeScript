/**
 * 
 * Destructuring does not change the original Array
 * With Arrays, destructing is in order by positioning.
 */

const bobMarleyPlaylist = [
    'Jamming',
    'Is This Love',
    'Three Little Birds', 
    'Get Up, Stand Up',
    'Satisfy My Soul',
    'Roots, Rock, Reggae'
]

const [song1, song2, ...remainingSongs] = bobMarleyPlaylist
console.log(song1); // "Jamming"
console.log(song2); // "Is This Love"
console.log(remainingSongs); // ["Three Little Birds". "Get Up, Stand Up", "Satisfy My Soul", "Roots, Rock, Reggae"]