import { Suspense } from "react";
import NewFetch from "./components/NewFetch";
import OldFetch from "./components/OldFetch";
import ReactQuery from "./components/ReactQuery";

function App() {
  const defaultUrl = "https://jsonplaceholder.typicode.com/posts";
  return (
    <>
      {/* <OldFetch url={defaultUrl} /> */}

      <Suspense fallback={<div> Carregando... </div>}>
        <NewFetch url={defaultUrl} />
      </Suspense>

      {/* <ReactQuery url={defaultUrl} /> */}
    </>
  );
}

export default App;
