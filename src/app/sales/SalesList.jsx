import Sale from "./Sale";


export default function SaleList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 sm:m-6 md:m-8 lg:m-10">
      {props.sales.map((sale) => {
        return (
          <Sale
            key={sale._id}
            {...sale}
          />
        );
      })}
    </div>
  );
}