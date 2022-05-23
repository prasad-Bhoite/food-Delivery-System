import React from "react";
import { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

//Temporary Object....
// const product = {
//   name: "samosa",
//   images: [
//     {
//       url: "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
//     },
//   ],
//   price: "30",
//   _id: "prasad",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="Foodie" />
      <div className="banner">
        <p>Welcome to Foodie</p>
        <h1>Find Your Favourite Dish here!!!</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Product</h2>

      <div className="container" id="container">
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
