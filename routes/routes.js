let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/', async function (req, res) {
    // let result = await controller.insertCat(req, res);
    try {
        const result = await controller.insertCat(req, res); // Insert the cat into the database
        res.status(201).json({
            statusCode: 201,
            message: 'success',
            data: result, // Return the created cat's data
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.get('/', async function (req, res) {
    try {
        const result = await controller.getAllCats();
        res.status(200).json({ statusCode: 200, message: 'success', data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'error', error: error.message });
    }
});

module.exports = router;