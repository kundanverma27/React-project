import React from 'react'
import './Detailed.css'

import { useLocation } from 'react-router-dom';

const Detailed = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) return <p></p>; 

  return (
    <div className="detailed-card-info">

     <div className= "detailed-card-image-info">
       
       <img src={item.thumbnail} alt={item.title} />
       <h2>{item.title}</h2>
      </div>

      <div className= "detailed-card-content-info">
      <p>Price: ₹{item.price}</p>
      <p>Rating: ⭐ {item.rating}</p>
      <p>Discount: {item.discountPercentage}% OFF</p>
      <p>{item.description}</p>
      <p>{item.warrantyInformation}</p>
      <p>{item.availabilityStatus}</p>
      <h3>Shipping info:</h3>
      <p>{item.shippingInformation}</p>
      

      <div >
        <h3>Reviews:</h3>
      {item.reviews.map((review, index) => (
        <div className= "detailed-card-review-info" key={index}>
       <p>
        Rating: {review.rating}
       <span className="rating-star">⭐</span>
      </p>

       <p>Comment: {review.comment}</p>
       <p>Date: {review.date}</p>
       <p>Reviewer Name: {review.reviewerName}</p>
       <p>Reviewer Email: {review.reviewerEmail}</p>
          </div>
        ))}
      </div>


      </div>
      
    </div>
  );
};

export default Detailed;
