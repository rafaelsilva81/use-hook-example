import React, { use } from "react";

const NewFetch = ({ url }) => {
  const data = use(fetch(url).then((res) => res.json()));

  return (
    <div>
      <h1>Novo fetch usando use() hook </h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NewFetch;
