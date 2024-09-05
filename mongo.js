const mongoose = require('mongoose');

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.husfl.mongodb.net/personApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema, 'persons');

if (name && number) {
  const person = new Person({ name, number });
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    listAllPersons();
  });
} else {
  listAllPersons();
}

function listAllPersons() {
  Person.find({}).then((result) => {
    console.log('phonebook:');
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
