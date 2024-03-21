import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import "./App.css";
import ProductsList from "./assets/page/products";

function App() {
  return (
    <>
      <ProductsList></ProductsList>
    </>
  );
}

export default App;
