import Link from "next/link";

export default function Venta(props){
    return(
        <>
            <li>
                <div>
                    <Link href={`ventas/${props.Key}`}>
                        <div>
                            <h3>Fecha: {props.Date}</h3>
                            <h3>Lugar: {props.Location}</h3>
                            <h3>Metodo: {props.MetodoPurchase}</h3>
                        </div>
                    </Link>
                </div>
            </li>
        </>
    );
}