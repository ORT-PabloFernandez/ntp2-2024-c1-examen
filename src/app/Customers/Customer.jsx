export default function CustomerPage(props) {
  return (
    <>
      <h4>Genero: {props.gender}</h4>
      <h4>Edad: {props.age}</h4>
      <h4>Email: {props.email}</h4>
      <h2>Satisfacción: {props.satisfaction}</h2>
    </>
  );
}
