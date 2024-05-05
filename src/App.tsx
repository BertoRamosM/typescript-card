import { useState } from "react"
import { useQuery } from "react-query"

import Drawer from '@material-ui/core/Drawer'
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/badge'

import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

function App() {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)

  const getTota

  return (
    <>
      <h1>Cart</h1>
    </>
  )
}

export default App
