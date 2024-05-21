

export default function User(props) {
  return (
    <li>
      <div>
          <div>
            <h2>{props.Item.name}</h2>
            <h2>{props.Item.tags}</h2>
            <h2>{props.Item.price}</h2>
            <h2>{props.Item.quantity}</h2>
          </div> 
      </div>
    </li>
  );
}
