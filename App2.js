const gadget = new Map();

gadget.set('MacBook', 2500);
gadget.set('ASUS ROG', 3999);
gadget.set('Dell XPS', 1500)
gadget.set('HP OmniBook', 200);

// function getKeyByValue(map, value){
//     for (let [key, val] of map){
//         if (val == value){
//             return key;
//         }
//     } 
//     return 'You put in the wrong value3'
// }

// const valuetofind = 3999
// const key = getKeyByValue( gadget, valuetofind)
// console.log(key) 

function getKeyByValue(map, value){
    for (let [key, val] of map){
        if (val == value){
            return val;
        }
    } 
    return 'You put in the wrong value3'
}

const valuetofind = 3999
const key = getKeyByValue( gadget, valuetofind)
console.log(key) 