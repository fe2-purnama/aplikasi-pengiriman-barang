const mongoose = require("mongoose");
const PickUp = require("../models/PickUp");
const User = require("../models/User");
const Sender = require("../models/Sender");

const createPickUp = async (req, res, next) => {
    try {
        const { userId, noTrack } = req.body;

        // Validate required fields
        if (!userId || !noTrack) {
            return res.status(400).json({
                status: false,
                message: "All fields are required.",
                data: null,
            });
        }

        // Check if user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({
                status: false,
                message: "User not found.",
                data: null,
            });
        }

        // Create new pick-up record
        const newPickUp = await PickUp.create({
            userId,
            noTrack,
        });

        res.status(201).json({
            status: true,
            message: "Pick-up created successfully",
            data: newPickUp,
        });

    } catch (err) {
        next(err);
    }
};

const getPickUpById = async (req, res, next) => {
    try {
        const pickupId = req.params.id;

        // Find the pickup by its ID
        const pickup = await PickUp.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(pickupId) }
            },
            {
                $lookup: {
                    from: "senders",
                    localField: "_id",
                    foreignField: "pickUpId",
                    as: "sender"
                }
            },
            {
                $unwind: { path: "$sender", preserveNullAndEmptyArrays: true }
            }
        ]);

        if (pickup.length === 0) {
            return res.status(404).json({
                status: false,
                message: "Pickup not found.",
                data: null,
            });
        }

        res.status(200).json({
            status: true,
            message: "Pickup found successfully.",
            data: {
                pickup: pickup[0],
            },
        });
        
    } catch (err) {
        next(err);
    }
};


module.exports = {
    createPickUp,
    getPickUpById,
};
