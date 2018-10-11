const express = require('express');
const router = express.Router();
const Sensor = require('../../models/Sensor');
// @route   GET api/sensor/test
// @desc    Tests sensors route
// @access  Public
router.get("/", function(req, res) {
    res.status(200).json({
        msg: "success"
    })
    if(Error) throw error;
});

router.post("/", function(req, res) {
    const data = req.body;
    if(req.body) {
        const newSensor = new Sensor({
            "name": data.name,
            "value": data.value,
            "sequence": data.sequence,
            "id": data.id
        });
        res.status(200).json({
            msg: "you have sent successfully your data",
            data: data
        })
        newSensor.save().then(sensor => res.json(sensor)).catch(err => console.log(err))
    }
    if(Error) throw Error;
});

module.exports = router;