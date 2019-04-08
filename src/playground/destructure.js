const person = {
    name: 'Kelvin onkundi ndemo',
    age:20,
    location: {
        city:"Nairobi",
        temp:"50 degrees"
    }
}

const {name,age} = person
console.log(`${name} is ${age} years`)

const {name:firstname='kelvin', city} = person.location;

console.log(`He comes from ${city}`)


const book = {
    title:'Eagle is the Enemy',
    author:'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
}

const {name:publisherDamage} = book.publisher;
console.log(`${publisherDamage}`)

const menu = ['ugali','fish','sukuma']

const {} = menu;