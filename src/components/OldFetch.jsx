import React, { useEffect, useState } from "react";

const OldFetch = ({ url }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(false);
    setData(undefined);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return loading ? (
    <div>Carregando...</div>
  ) : error ? (
    <div>Erro ao carregar os dados</div>
  ) : (
    <div>
      <h1>Antigo react:</h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default OldFetch;
