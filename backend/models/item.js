const { model, Schema, Types: { ObjectId} } = require('mongoose');

//TODO: Change fields depending on the project
const schema = new Schema({
    make: { type: String, minlength: [4, 'Make must contain atleast 4 characters'], required: [true, `Make is required`] },
    model: { type: String, minlength: [4, 'Make must contain atleast 4 characters'], required: [true, 'Model is required'] },
    year: {
        type: Number,
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
        required: true
    },
    description: { type: String, },
    price: { type: Number },
    img: { type: String },
    material: { type: String },
    owner: { type: ObjectId, ref: 'User'}
});

const Item = model('Item', schema);

module.exports = Item;