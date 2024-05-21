import loadSales from '../functions/loadSales'
import SaleComponent from '../components/sales'
import Pagination from "../components/paginatos";

export default async function FullSales({searchParams}) {
    //yendo a la url /sales?page=[]&pageSize=[] se puede jugar con el paginado y el tamanio de la hoja!
    const pageSize = searchParams["pageSize"] || 10
    const page = searchParams["page"] || 1
    const salesData = await loadSales({ pageSize:pageSize, page:page })

    return (
        <div>
            <Pagination page={page}/>
            {salesData && salesData.map((sale) => (
                <SaleComponent key={sale._id} sale={sale}/>
            ))}
            <Pagination page={page}/>
        </div>
    );
}
