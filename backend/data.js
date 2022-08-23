import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Sri',
            email: 'admin1@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Puma',
                logo: '/image/toys.jpg',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },

        },
        {
            name: 'John',
            email: 'users@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,

        },
    ],
    products: [
        {

            name: 'formal shirts',
            category: 'shrits',
            image: '/image/p1.jpg',
            price: 820,
            countInStock: 10,
            brand: 'Nike',
            rating: 74,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'blue shirts',
            category: 'shirts',
            image: '/image/p2.jpg',
            price: 320,
            countInStock: 120,
            brand: 'Adidas',
            rating: 44,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'lite-blue shirts',
            category: 'shirts',
            image: '/image/p3.jpg',
            price: 620,
            countInStock: 110,
            brand: 'Nike',
            rating: 24,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'kack pants',
            category: 'pants',
            image: '/image/p4.jpg',
            price: 720,
            countInStock: 10,
            brand: 'adidas',
            rating: 14,
            numReviews: 50,
            description: 'high quality product',
        },
        {

            name: 'formal pant',
            category: 'Saree',
            image: '/image/p5.jpg',
            price: 920,
            countInStock: 103,
            brand: 'adidas',
            rating: 12,
            numReviews: 56,
            description: 'high quality product',
        },
        {

            name: 'blue pant',
            category: 'pant',
            image: '/image/p6.jpg',
            price: 520,
            countInStock: 0,
            brand: 'nikos',
            rating: 5,
            numReviews: 18,
            description: 'high quality product',
        },
    ],
};


export default data;