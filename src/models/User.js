export default class User {

    constructor(props) {
        for (const [key, value] of Object.entries(props)) {
                 //console.log(`${key}: ${value}`);
                  this[key] = value
           }
     }

    }