require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose.set('strictQuery', false);

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'Name must be at least 3 characters long'],
    required: [true, 'Name is required'],
  },
  number: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: [
      {
        validator: function (v) {
          return /^(\d{2,3})-(\d+)$/.test(v) && v.length >= 8;
        },
        message: (props) =>
          `${props.value} is not a valid phone number! It must be at least 8 characters long and in the format XX-XXXXXXX or XXX-XXXXXXX.`,
      },
      {
        validator: function (v) {
          return /^\d{2,3}-\d+$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid phone number! It should only contain numbers and a single hyphen.`,
      },
    ],
  },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema, 'persons');
