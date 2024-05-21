export function Customer(props){
    const customer= props.customer;
    return(
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
        <div>
          <p className="text-xl font-semibold mb-2">
            Email: <span className="font-normal">{customer.email}</span>
          </p>
          <p className="text-xl font-semibold mb-2">
            Age: <span className="font-normal">{customer.age}</span>
          </p>
          <p className="text-xl font-semibold mb-2">
            Gender: <span className="font-normal">{customer.gender}</span>
          </p>
          <p className="text-xl font-semibold">
            Satisfaction: <span className="font-normal">{customer.satisfaction}</span>
          </p>
        </div>
    </div>
    );
}