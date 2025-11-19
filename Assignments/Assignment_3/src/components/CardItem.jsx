import "../styles/CardItem.css";

export default function CardItem({ product, onClick }) {
  return (
    <div className="card-item" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹{product.price}</p>
    </div>
  );
}
