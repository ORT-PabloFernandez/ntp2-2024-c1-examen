import Link from "next/link";

export default function Venta(props){
    return (
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
            <div className="flex items-center gap-4">
                <img
                    alt=""
                    src="/img/venta.png"
                    className="size-16 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-medium text-white">Venta</h3>
                    <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-gray-300"> Fecha: {props.saleDate} </p>
                            </li>
                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-gray-300"> Locacion: {props.storeLocation} </p>
                            </li>
                            <li className="p-1 leading-none">
                                <p className="text-xs font-medium text-gray-300">Metodo de compra: {props.purchaseMethod}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="mt-4 space-y-2">
                <li>
                    <Link 
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                        href={`ventas/customer/${props.id}`}
                        >
                        <strong className="font-medium text-white">Cliente</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">Datos del cliente</p>
                    </Link>
                </li>
                <li>
                    <Link 
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                        href={`ventas/items/${props.id}`}
                        >
                        <strong className="font-medium text-white">Productos</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">Datos de los productos comprados</p>
                    </Link>
                </li>
            </ul>
        </article>
    );
}