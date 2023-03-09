import React, { use } from "react";

const NewFetch = ({ url }) => {
  const data = use(
    fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        // Tratar o erro de forma adequada aqui
        console.error("Erro ao carregar os dados", err);
      })
  );

  return (
    <div>
      <h1>Novo fetch usando use() hook </h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NewFetch;
