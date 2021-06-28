// rest operator: used in "parameters" (function declaration) to "combine"
let displayColors = function(...colors){
    for(let i in colors){
        console.log(colors[i]);
    }
}
let extraColor = ['Orange', 'Yellow', 'Indigo']
// spread operator: used in "arguments" (function call) to "split"
displayColors('Red', 'Blue', ...extraColor);