import { products } from "../data";
import CardItem from "./CardItem";
import "../styles/CardList.css";

export default function CardList({ onSelect }) {
  return (
    <div className="card-list">
      {products.map((item) => (
        <CardItem key={item.id} product={item} onClick={onSelect} />
      ))}
    </div>
  );
}
