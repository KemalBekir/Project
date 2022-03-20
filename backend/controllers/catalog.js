const router = require('express').Router();
const api = require('../services/item');
const mapErrors = require('../utils/mappers');
const { isAuth, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');

//TODO: Change depending on requiremenets by the project
router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material,
        owner: req.user._id
    };

    try {
        const result = await api.create(item);
        res.status(201).json(result);
    } catch (err) {
        const error = mapErrors(err);
        console.error(err.message);
        res.status(400).json({ message: error });
    }

});

//TODO: Change locals.item variable name depending on project
router.get('/:id', preload(), (req, res) => {
    const item = res.locals.item;
    res.json(item);
});

router.put('/:id', preload(), isOwner(),async (req, res) => {
    const id = req.params.id;
    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };

    try {
        const result = await api.update(id, item);
        res.json(result);
    } catch (err) {
        const error = mapErrors(err);
        console.error(err.message);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), isOwner(), async (req, res) => {
    try {
        const itemId = req.params.id;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        const error = mapErrors(err);
        console.error(err.message);
        res.status(400).json({ message: error });
    }

});


module.exports = router;