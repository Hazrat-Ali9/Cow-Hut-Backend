"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const mongoose_1 = __importDefault(require("mongoose"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const cow_model_1 = require("../cow/cow.model");
const user_model_1 = require("../user/user.model");
const order_model_1 = require("./order.model");
const cowOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        // Simulate the transaction process
        const { cow, buyer } = data;
        session.startTransaction();
        const buyerUser = yield user_model_1.User.findOne({
            _id: buyer,
            role: 'buyer',
        });
        const AvailableCow = yield cow_model_1.Cow.findOne({ _id: cow, label: 'for sale' });
        if (!buyerUser) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Buyer doesn't exist !");
        }
        if (!AvailableCow) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Cow is not available for sale');
        }
        if (AvailableCow.price > (buyerUser === null || buyerUser === void 0 ? void 0 : buyerUser.budget)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Buyer budget is not enough');
        }
        const updatedBuyer = yield user_model_1.User.findByIdAndUpdate(buyer, { budget: buyerUser.budget - AvailableCow.price }, { new: true });
        if (!updatedBuyer) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to update buyer's budget");
        }
        const seller = yield user_model_1.User.findOne({
            _id: AvailableCow.seller,
            role: 'seller',
        });
        if (!seller) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Seller doesn't exist !");
        }
        const updatedSeller = yield user_model_1.User.findByIdAndUpdate(AvailableCow.seller, { income: seller.income + AvailableCow.price }, { new: true });
        if (!updatedSeller) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to update seller's income");
        }
        const updatedCow = yield cow_model_1.Cow.findByIdAndUpdate(cow, { label: 'sold out' }, { new: true });
        if (!updatedCow) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to update cow's status");
        }
        const order = new order_model_1.Order({ cow, buyer });
        yield order.save({ session });
        yield session.commitTransaction();
        session.endSession();
        return order;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.Order.find().populate('cow').populate('buyer');
    return orders;
});
exports.OrderService = {
    cowOrder,
    getAllOrders,
};
