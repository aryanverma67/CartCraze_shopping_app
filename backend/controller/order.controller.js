const orderModel = require("../models/orderProductModel");

const orderController = async (request, response) => {
    try {
        const currentUserId = request.userId;

        const orderList = await orderModel.find({ userId: currentUserId }).sort({ createdAt: -1 });

        console.log('Fetched orders:', orderList); // Log fetched orders for debugging

        response.json({
            data: orderList,
            message: "Order list",
            success: true
        });

    } catch (error) {
        console.error('Error fetching orders:', error); // Log any errors that occur

        response.status(500).json({
            message: error.message || "Error fetching orders",
            error: true
        });
    }
};

module.exports = orderController;
