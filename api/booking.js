const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
   console.log("get");
   res.sendStatus(200);
});

router.post('/', async (req, res) => {
    const datas = req.body;

    res.status(200).send(req.body);
});


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const datas = req.body;

    res.status(200).send(req.body);
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const datas = req.body;

    res.status(200).send(req.body);
});

module.exports = router;