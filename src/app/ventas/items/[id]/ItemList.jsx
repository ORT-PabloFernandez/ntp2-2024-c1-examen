import Item from "./Item";
export default function VentasList(props){
    return (
        <div className="grid grid-cols-4 gap-4">
            {props.items.map((item, index) =>{
                return(
                    <Item 
                        key={index}
                        name={item.name}
                        tags={item.tags}
                        price={item.price}
                        quantity={item.quantity}
                    />
                );
            })}
        </div>
    );
}