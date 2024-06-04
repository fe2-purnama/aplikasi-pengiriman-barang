const Sender = require('../models/Sender');
const User = require('../models/User');
const PickUp = require('../models/PickUp'); // Assuming you have a PickUp model

const createSender = async (req, res, next) => {
    try {
        const { name, phoneNumber, originCity, postCode, address, pickUpId, dropOffId } = req.body;

        // Validate required fields
        if (!pickUpId || !name || !phoneNumber) {
            return res.status(400).json({
                status: false,
                message: "User ID, name, and phone number are required.",
                data: null,
            });
        }

        // Check if user exists
        const existingUser = await PickUp.findById(pickUpId);
        if (!existingUser) {
            return res.status(404).json({
                status: false,
                message: "User not found.",
                data: null,
            });
        }

        // Create new sender record
        const newSender = await Sender.create({
            name,
            phoneNumber,
            originCity,
            postCode,
            address,
            pickUpId,
            dropOffId,
        });

        res.status(201).json({
            status: true,
            message: "Sender created successfully",
            data: newSender,
        });

    } catch (err) {
        next(err);
    }
};

module.exports = {
    createSender,
};
