import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';

const mockProducts = [
    {
        id: 1,
        name: 'Sofa Set',
        company: 'Company A',
        category: 'Furnitures',
        price: 19,
        rating: 4.5,
        discount: 10,
        availability: 'In Stock',
        image: 'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg'
    },
    {
        id: 2,
        name: 'Women watch',
        company: 'Fossil',
        category: 'Watches',
        price: 29,
        rating: 4.0,
        discount: 15,
        availability: 'In Stock',
        image: 'https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_roseblack.jpg?v=1696689556&width=2400'
    },
    {
        id: 3,
        name: 'Shoes',
        company: 'Puma',
        category: 'Sports shoes',
        price: 39,
        rating: 3.5,
        discount: 5,
        availability: 'Out of Stock',
        image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=false'
    },
];

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(mockProducts);
    }, []);

    return (
        <div className="product-container">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>Company: {product.company}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;
