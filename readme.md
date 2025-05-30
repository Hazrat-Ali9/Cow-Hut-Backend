# Hazrat Ali

### Online Cow Selling Backend for Eid Ul Adha


This project is a simple backend project for a cow hut. It is a simple project that allows a user to add cows to the cow hut, and get the status of the cow hut. Seller can also sell cows from the cow hut app. and buyer can buy cows from the cow hut app. 

### All The Application Routes are given below:

#### User
- https://assigment-3-cow-hut.vercel.app/api/v1/auth/signup (POST) - For create a new user
- https://assigment-3-cow-hut.vercel.app/api/v1/users (GET) - For get all the users
- https://assigment-3-cow-hut.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (GET) - For get a single user
- https://assigment-3-cow-hut.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH) - For update a single user
- https://assigment-3-cow-hut.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) - For delete a single user

#### Cows

- https://assigment-3-cow-hut.vercel.app/api/v1/cows (POST) - For create a new cow
- https://assigment-3-cow-hut.vercel.app/api/v1/cows (GET) - For get all the cows aslo can filter by location, maxPrice , minPrice, and search by name search term etc 
- https://assigment-3-cow-hut.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) - For get a single cow
- https://assigment-3-cow-hut.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH) - For update a single cow
- https://assigment-3-cow-hut.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Pagination and Filtering routes of Cows

- https://assigment-3-cow-hut.vercel.app/api/v1/cows?page=1&limit=10
- https://assigment-3-cow-hut.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
- https://assigment-3-cow-hut.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000
- https://assigment-3-cow-hut.vercel.app/api/v1/cows?location=Chattogram
- https://assigment-3-cow-hut.vercel.app/api/v1/cows?searchTerm=Cha

#### Orders

- https://assigment-3-cow-hut.vercel.app/api/v1/orders (POST) - For create a new order (buyer can buy a cow)
- https://assigment-3-cow-hut.vercel.app/api/v1/orders (GET) - For get all the orders

