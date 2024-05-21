export default function CustomerDetails({ customer }) {
    return (
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div className="mb-2">
          <span className="text-gray-700 font-bold">Name: </span>
          <span className="text-gray-700">{customer.name}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-bold">Email: </span>
          <span className="text-gray-700">{customer.email}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-bold">Phone: </span>
          <span className="text-gray-700">{customer.phone}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-bold">Address: </span>
          <span className="text-gray-700">{customer.address}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700 font-bold">Satisfaction: </span>
          <span className="text-gray-700">{customer.satisfaction}</span>
        </div>
      </div>
    );
  }