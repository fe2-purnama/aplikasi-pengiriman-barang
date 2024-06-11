const mongoose = require("mongoose");
const Shipment = require("../models/Shipment");
const Sender = require("../models/Sender");
const Courier = require("../models/Courier");
const Recipient = require("../models/Recipient");
const Package = require("../models/Package");
const Service = require("../models/Service");
const User = require("../models/User");

const createShipment = async (req, res, next) => {
  try {
    const { userId, noTrack, type, status, courierId } = req.body;

    // Validate required fields
    if (!userId || !type || !status) {
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

    // Create new shipment record
    const newShipment = await Shipment.create({
      userId,
      noTrack,
      type,
      status,
      courierId,
    });

    res.status(201).json({
      status: true,
      message: "Shipment created successfully",
      data: newShipment,
    });
  } catch (err) {
    next(err);
  }
};

const getShipmentById = async (req, res, next) => {
  try {
    const shipmentId = req.params.id;

    // Find the Shipment by its ID
    const shipment = await Shipment.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(shipmentId) },
      },
      {
        $lookup: {
          from: "senders",
          localField: "_id",
          foreignField: "shipmentId",
          as: "sender",
        },
      },
      {
        $unwind: { path: "$sender", preserveNullAndEmptyArrays: true },
      },
      {
        $lookup: {
          from: "couriers",
          localField: "_id",
          foreignField: "shipmentId",
          as: "courier",
        },
      },
      {
        $unwind: { path: "$courier", preserveNullAndEmptyArrays: true },
      },
      {
        $lookup: {
          from: "recipients",
          localField: "_id",
          foreignField: "shipmentId",
          as: "recipient",
        },
      },
      {
        $unwind: { path: "$recipient", preserveNullAndEmptyArrays: true },
      },
      // Tambahkan lookup package
      {
        $lookup: {
          from: "packages",
          localField: "_id",
          foreignField: "shipmentId",
          as: "packages",
        },
      },
      // Tambahkan lookup service
      {
        $lookup: {
          from: "services",
          localField: "_id",
          foreignField: "shipmentId",
          as: "services",
        },
      },
    ]);

    if (shipment.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Shipment not found.",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Shipment found successfully.",
      data: {
        shipment: shipment[0],
      },
    });
  } catch (err) {
    next(err);
  }
};

const deleteShipment = async (req, res, next) => {
  try {
    const shipmentId = req.params.id;

    // Hapus data sender yang terkait
    await Sender.deleteMany({ shipmentId: shipmentId });

    // Hapus data courier yang terkait
    await Courier.deleteMany({ shipmentId: shipmentId });

    // Hapus data recipient yang terkait
    await Recipient.deleteMany({ shipmentId: shipmentId });

    // Hapus data package yang terkait
    await Package.deleteMany({ shipmentId: shipmentId });

    // Hapus data service yang terkait
    await Service.deleteMany({ shipmentId: shipmentId });

    // Hapus pengiriman berdasarkan ID
    const deletedShipment = await Shipment.findByIdAndDelete(shipmentId);

    if (!deletedShipment) {
      return res.status(404).json({
        status: false,
        message: "Shipment not found.",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Shipment and related data deleted successfully.",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createShipment,
  getShipmentById,
  deleteShipment,
};
