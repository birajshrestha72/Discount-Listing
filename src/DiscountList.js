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
            <span className="discount-title">{discount.title}</span>
            <span className="discount-value">{discount.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiscountList;
