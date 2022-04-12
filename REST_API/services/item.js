const Item = require('../models/item');

async function getAll(){
    return Item.find({});
}

async function getLastTree(){
    return Item.find({}).limit(3);
}

function getById(id){
    return Item.findById(id);
}

async function create(item){
    const result = new Item(item);
    await result.save();

    return result;
}

async function update(id, item){
    const existing = await Item.findById(id);

     //TODO: Change names according to requirements

    existing.name = item.name;
    existing.description = item.description;
    existing.location = item.location,
    existing.price = item.price;
    existing.img = item.img;

    await existing.save();

    return existing;
}

async function deleteById(id){
    await Item.findByIdAndDelete(id);
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getLastTree,
}