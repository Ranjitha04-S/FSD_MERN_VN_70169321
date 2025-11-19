import React from "react";
import "./../styles/ProductDetail.css";

const ProductDetail = ({ product, onBack }) => {
  if (!product) return <h2>No product selected</h2>;

  return (
    <div className="detail-container">

      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="detail-card">
        
        {/* Left Image Section */}
        <div className="detail-image-box">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Right Details Section */}
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="price">₹ {product.price}</p>
          <p className="style">{product.style}</p>

          <p className="description">{product.description}</p>

          {/* Sizes */}
          <div className="sizes">
            <h4>Available Sizes:</h4>
            <div className="size-buttons">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity">
            <h4>Quantity:</h4>
            <input type="number" min="1" defaultValue="1" />
          </div>

          {/* Buttons */}
          <div className="action-buttons">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
