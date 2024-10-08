// This generates an array of integers that can be used to map through in order to create components in a 
// more streamlined fashion
export default function generate(number){
    const arr = []
    for(let i = 0; i < number; i++) arr.push(i)
    return arr    
}