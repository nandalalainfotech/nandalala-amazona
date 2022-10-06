import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Dhanaraj',
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
            name: 'Arunkumar',
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

            name: 'Sarees',
            category: 'Saree',
            image: '/image/p8.jpg',
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

    Saree: [
        {
          _id: '7',
          name: 'Cotton Saree',
          category: 'Saree',
          image: '/images/p12.jpg',
          price: 120,
          countInStock: 10,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          description: 'high quality product',
        },
        {
          _id: '8',
          name: 'Silk Saree',
          category: 'Shirts',
          image: '/images/p91.jpg',
          price: 100,
          countInStock: 20,
          brand: 'Adidas',
          rating: 4.0,
          numReviews: 10,
          description: 'high quality product',
        },
        {
          _id: '9',
          name: 'Apoorva Saree',
          category: 'Shirts',
          image: '/images/p10.jpg',
          price: 220,
          countInStock: 0,
          brand: 'Lacoste',
          rating: 4.8,
          numReviews: 17,
          description: 'high quality product',
        },
        {
          _id: '10',
          name: 'Material Saree',
          category: 'Pants',
          image: '/images/sa4.jpg',
          price: 78,
          countInStock: 15,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 14,
          description: 'high quality product',
        },
        {
          _id: '11',
          name: 'Kurtha Saree',
          category: 'Pants',
          image: '/images/sa5.jpg',
          price: 65,
          countInStock: 5,
          brand: 'Puma',
          rating: 4.5,
          numReviews: 10,
          description: 'high quality product',
        },
        
      ],
     
};


export default data;