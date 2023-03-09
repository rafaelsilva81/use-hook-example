import { Suspense } from "react";
import NewFetch from "./components/NewFetch";
import OldFetch from "./components/OldFetch";

function App() {
  const defaultUrl = "https://jsonplaceholder.typicode.com/posts";
  return (
    <div>
      <div>
        {/* <OldFetch url={defaultUrl} /> */}
        <Suspense fallback={<div> Carregando... </div>}>
          <NewFetch url={defaultUrl} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
