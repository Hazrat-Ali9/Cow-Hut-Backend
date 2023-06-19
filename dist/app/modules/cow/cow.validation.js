"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowValidation = void 0;
const zod_1 = require("zod");
const cow_constants_1 = require("./cow.constants");
const addCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        age: zod_1.z.number({
            required_error: 'Age is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        location: zod_1.z.enum([...cow_constants_1.CowLocation], {
            required_error: 'Location is required',
        }),
        breed: zod_1.z.enum([...cow_constants_1.CowBreed], {
            required_error: 'Breed is required',
        }),
        weight: zod_1.z.number({
            required_error: 'Weight is required',
        }),
        label: zod_1.z.enum([...cow_constants_1.CowLabel], {
            required_error: 'Label is required',
        }),
        category: zod_1.z.enum([...cow_constants_1.CowCategory], {
            required_error: 'Category is required',
        }),
        seller: zod_1.z.string({
            required_error: 'Seller Referance is required',
        }),
    }),
});
const updateCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }).optional(),
        age: zod_1.z.number({
            required_error: 'Age is required',
        }).optional(),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }).optional(),
        location: zod_1.z.enum([...cow_constants_1.CowLocation], {
            required_error: 'Location is required',
        }).optional(),
        breed: zod_1.z.enum([...cow_constants_1.CowBreed], {
            required_error: 'Breed is required',
        }).optional(),
        weight: zod_1.z.number({
            required_error: 'Weight is required',
        }).optional(),
        label: zod_1.z.enum([...cow_constants_1.CowLabel], {
            required_error: 'Label is required',
        }).optional(),
        category: zod_1.z.enum([...cow_constants_1.CowCategory], {
            required_error: 'Category is required',
        }).optional(),
        seller: zod_1.z.string({
            required_error: 'Seller Referance is required',
        }).optional(),
    }),
});
exports.CowValidation = {
    addCowZodSchema,
    updateCowZodSchema,
};
