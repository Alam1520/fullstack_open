const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.srifv.mongodb.net/phonebook?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

const Persons = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
    mongoose
        .connect(url)
        .then(result => {
            console.log("connected")

            Persons.find({}).then(result => {
                result.forEach(person => {
                    console.log(person)
                })
                mongoose.connection.close()
            })
        })
} else {
    mongoose
        .connect(url)
        .then(result => {
            const person = new Persons({
                id: Math.floor(Math.random() * 100),
                name: process.argv[3],
                number: process.argv[4],
            })
            person.save().then(result => {
                console.log(`added new person ${result.name} number ${result.number} to phonebook`)
                mongoose.connection.close()
            })
        })
}
