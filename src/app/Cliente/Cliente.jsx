import "./cliente.css";

export default function Cliente(props) {
  return (
    <div className="card ">
      <div className="movie-item__info avatar">
        <h2> {props.SaleDate}</h2>
        <h2> {props.Gender}</h2>
        <h2> {props.Age}</h2>
      </div>
    </div>
  );
}
