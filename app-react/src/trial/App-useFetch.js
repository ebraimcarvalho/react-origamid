import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto");
  }, [request]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (loading) return <p>Carregando...</p>;

  if (data) {
    return (
      <div>
        <p>Produtos: </p>
        {data.map((item) => (
          <h3 key={item.id}>{item.nome}</h3>
        ))}
      </div>
    );
  } else return <p>Nothing to show!</p>;
};

export default App;
