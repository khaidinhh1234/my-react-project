import { Routes, Route } from "react-router-dom";

import {
  Banner,
  Blog,
  Footer,
  Header,
  New,
  Services,
  Shop,
} from "./components";

function App() {
  return (
    <>
      {" "}
      <div>
        <Header />
        <Banner />
        <New />

        <div className="container">
          <hr />
        </div>
        <Shop />
        <Blog />
        <Services />
        <Footer />
      </div>
    </>
  );
}
export default App;
