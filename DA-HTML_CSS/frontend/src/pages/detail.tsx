import { getProduct } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProduct(id as string),
  });
  if (isLoading) return <p>Loading...</p>;
  return <div>{data.name}</div>;
};

export default DetailPage;
