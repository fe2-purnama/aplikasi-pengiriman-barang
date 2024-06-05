const Sender = require('../models/Sender');
const User = require('../models/User');
const Shipment = require('../models/Shipment'); 

const createSender = async (req, res, next) => {
    try {
        const { name, phoneNumber, originCity, postCode, address, shipmentId, dropOffId } = req.body;

        // Validate required fields
        if (!shipmentId || !name || !phoneNumber) {
            return res.status(400).json({
                status: false,
                message: "User ID, name, and phone number are required.",
                data: null,
            });
        }

        // Check if user exists
        const existingUser = await Shipment.findById(shipmentId);
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
            shipmentId,
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

const updateSender = async (req, res, next) => {
    try {
        const senderId = req.params.senderId; // Mengambil ID pengirim dari parameter rute
        const updateData = req.body; // Data baru untuk diperbarui

        // Periksa apakah pengirim ada
        const existingSender = await Sender.findById(senderId);
        if (!existingSender) {
            return res.status(404).json({
                status: false,
                message: "Sender not found.",
                data: null,
            });
        }

        // Periksa apakah ada perubahan yang diminta pada pengiriman terkait
        if (updateData.shipmentId) {
            // Periksa apakah pengiriman yang diminta ada
            const existingShipment = await Shipment.findById(updateData.shipmentId);
            if (!existingShipment) {
                return res.status(404).json({
                    status: false,
                    message: "Shipment not found.",
                    data: null,
                });
            }
        }

        // Lakukan pembaruan pada pengirim
        const updatedSender = await Sender.findByIdAndUpdate(senderId, updateData, { new: true });

        res.status(200).json({
            status: true,
            message: "Sender updated successfully",
            data: updatedSender,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createSender,
    updateSender,
};
