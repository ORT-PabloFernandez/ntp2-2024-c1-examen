export default function ClientDetails({ Client }) {
  if (!Client) {
    return <div>Cargando datos del comprador...</div>;
  }
  return (
    <div className="buyer-info">
      <h1>Datos del comprador</h1>
      <h2>Genero: {Client.gender}</h2>
      <h2>Edad: {Client.age}</h2>
      <h2>Email: {Client.email}</h2>
      <h2>Satisfaccion: {Client.satisfaction}</h2>
    </div>
  );
}
