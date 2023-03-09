import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReactQuery = ({ url }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get_url"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return isLoading ? (
    <div>Carregando...</div>
  ) : isError ? (
    <div>Erro ao carregar os dados</div>
  ) : (
    <div>
      <h1>React-query:</h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ReactQuery;
