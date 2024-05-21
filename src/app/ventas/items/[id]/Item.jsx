
export default function Item(props){
    return(
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 mt-5">
        <img
            src="/img/item.jpg"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="relative border border-gray-100 bg-white p-6">
            {props.tags.map((tag, index) =>{
                return(
                    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium me-4">{tag}  </span>
                );
            })}
            <h3 className="mt-4 text-lg font-medium text-gray-900">{props.name}</h3>
            <p className="mt-1.5 text-sm text-gray-700">${props.price["$numberDecimal"]}</p>
            <span className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 mt-5">
                Cantidad: {props.quantity}
            </span>
        </div>
    </article>
    );
}
       