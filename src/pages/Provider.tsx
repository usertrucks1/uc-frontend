import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Providers() {
  const { categoryId } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProvidersByCategory(categoryId).then(setProviders);
  }, [categoryId]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Select a Provider</h1>
      <div className="space-y-4">
        {providers.map((p:any) => (
          <div
            key={p?.id}
            className="border p-4 rounded shadow"
            onClick={() => window.location.href = `/slots/${p.id}`}
          >
            <h2>{p?.first_name+ " " + p?.last_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
function getProvidersByCategory(categoryId: string | undefined) {
  throw new Error("Function not implemented.");
}

