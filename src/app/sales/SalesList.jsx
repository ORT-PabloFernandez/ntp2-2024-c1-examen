import Sale from "./Sales";

export default function SalesList(props) {
    
    return(
        <div className="flex row flex flex-wrap flex justify-center gap-4 place-content-stretch m-8">
            {props.sales.map(sale=>{
                return (
                    <ul className="divide-y divide-slate-100">
                        <Sale 
                        sale = {sale}
                        />
                    </ul>
                );
            })}
        </div>
    );
}