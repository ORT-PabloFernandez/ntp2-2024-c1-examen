import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CustomerDetails from "@/componentes/CustomerDetails";

export default function CustomerDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://salesbackend.azurewebsites.net/api/sales/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data.customer);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      {customer && <CustomerDetails customer={customer} />}
    </main>
  );
}