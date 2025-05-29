import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'; 

function Card({data}) {
   
    
     
  return (
    <div className="Wrapper-info">
        
    {data.map((item) => (

    <Link to={`/product/${item.id}`} state={{ item }}  key={item.id} className="card-info" style={{ textDecoration: 'none', color: 'inherit' }}>

      

        <div className="image-info">
          <img src={item.thumbnail} alt={item.title} />
        </div>

        <div className="card-title">
          <h3>{item.title}</h3>
        </div>

        <div className="product-info">
          <span className="price">₹{item.price}</span>
          <span className="rating">⭐ {item.rating}</span>
          <span className="discount">{item.discountPercentage}% OFF</span>
        </div>

        <div className="description">
          <p>Description</p>
          <p className="clamp-text">{item.description}</p>
          <a href="#" className="know-more">Know More</a>
           
        </div>

      
      </Link>
    ))}
    </div>
  )
}

export default Card;
