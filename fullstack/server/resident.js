const db = require('../db') //this is required
const Resident = require('../db/models/resident');
const Driver = require('../db/models/driver');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Resident.findAll({
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Resident.findOne({
            where:{id:req.params.id},
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router;
