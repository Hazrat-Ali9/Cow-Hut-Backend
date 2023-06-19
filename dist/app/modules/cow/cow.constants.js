"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowFilterableFields = exports.cowSearchableFields = exports.CowCategory = exports.CowLabel = exports.CowBreed = exports.CowLocation = void 0;
exports.CowLocation = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Khulna',
    'Barishal',
    'Sylhet',
    'Rangpur',
    'Mymensingh',
];
exports.CowBreed = [
    'Brahman',
    'Nellore',
    'Sahiwal',
    'Gir',
    'Indigenous',
    'Tharparkar',
    'Kankrej',
];
exports.CowLabel = ['for sale', 'sold out'];
exports.CowCategory = ['Dairy', 'Beef', 'Dual Purpose'];
exports.cowSearchableFields = [
    "searchTerm",
    'name',
    // 'age',
    // 'price',
    'location',
    'breed',
    // 'weight',
    'label',
    'category',
];
exports.cowFilterableFields = [
    'searchTerm',
    'name',
    'age',
    'price',
    'location',
    'breed',
    'weight',
    'label',
    'category',
    "minPrice",
    "maxPrice",
];
