import "./ItemList.css";
import { Item } from "./Item";

export const ItemList = ({items}) => {
    return(
        <div className="item-container">
        {items.map((item) => (
        <Item key={item.id} item={item} />
        ))}
        </div>
    );
};