export default function Customer({ props }) {
    return (
      <div>
        <h2>Customer Details</h2>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Satisfaction:</strong> {props.satisfaction}/5</p>
      </div>
    );
  }
  