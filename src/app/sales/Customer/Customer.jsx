export default function Customer(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
        <div className="sale-item__info">
          <h2>{props.gender}</h2>
          <h2>{props.age}</h2>
          <h2>{props.email}</h2>
          <h2>{props.satisfaction}</h2>
        </div>
      </div>
    </li>
  );
}
