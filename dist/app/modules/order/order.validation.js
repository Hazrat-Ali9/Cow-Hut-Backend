"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const addOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        cow: zod_1.z.string({
            required_error: 'Cow Referance id is required',
        }),
        buyer: zod_1.z.string({
            required_error: 'Buyer Referance id is required',
        }),
    }),
});
exports.OrderValidation = {
    addOrderZodSchema,
};
