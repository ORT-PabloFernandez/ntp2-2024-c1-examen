import Item from "./Item.jsx";
export default function SalesList(props) {
  return (
    <ul className="sales-list">
      {props.Items.map((item) => {
        return (
          <Item
            name={item["name"]}
            price={sale["price"]}
            quantity={sale["quantity"]}
          />
        );
      })}
    </ul>
  );
}
