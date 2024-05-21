import Sale from './Sale';
export default function SalesList(data) {
    return(
        <div>
            {
            data.sales.map((sale) => {
                return(
                    <Sale
                    key={sale._id}
                    id={sale._id}
                    saleDate={sale.saleDate}
                    storeLocation={sale.storeLocation}
                    purchaseMethod={sale.purchaseMethod}
                    />
                );
            })
            }
        </div>
    );
}