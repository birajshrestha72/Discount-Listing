import React, { useEffect, useState } from 'react';
import './DiscountList.css';

function DiscountList() {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch('/api/discounts')
      .then(res => res.json())
      .then(data => setDiscounts(data));
  }, []);

  return (
    <div className="discount-list-container">
      <h2>Available Discounts</h2>
      <ul className="discount-list">
        {discounts.map(discount => (
          <li key={discount._id} className="discount-item">
            <div className="discount-title">{discount.product_name}</div>
            <div className="discount-details">
              <span>Original: <b>Rs. {discount.price}</b></span>
              <span className="discount-value">-{discount.discount_percent}%</span>
              <span>Now: <b>Rs. {discount.discounted_price}</b></span>
            </div>
            <div className="discount-meta">
              <span>Category: {discount.category}</span>
              <span>City: {discount.city}</span>
              <span>Valid: {discount.start_date} to {discount.end_date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiscountList;