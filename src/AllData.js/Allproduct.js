import { HomeData } from "../Homedata.js/HomeData";
import { clothData } from "../data.js/ShopData";
export const allProducts = [
  ...HomeData,
  ...clothData
];
