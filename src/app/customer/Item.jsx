
export function Item(props){
    const item= props.item;
    return(
        <div key={props.index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
        <p className="text-lg mb-2">Price: ${item.price.$numberDecimal}</p>
        <p className="text-lg mb-2">Quantity: {item.quantity}</p>
        <div className="text-sm text-gray-400">
          Tags: {item.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>

    );
}