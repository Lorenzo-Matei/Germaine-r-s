import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  //-------- // originally from the products-search-page //----
  //state is the starting or default value of the state.  2nd param, action , is the action or function that changes the current state.
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true }; // ...state returns the previous state values. loading: true -> shows a loading message or animation

    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, productData: action.payload }; // 3rd param -  productsData: action.payload -> loads the productsData variable/state with data coming from the 'action'

    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }; //error returns the payload as a error message
  }
};

function ProductPage() {
  const params = useParams(); //this enables you to grab the productsData params or variables
  const { slug } = params; //this gets the slug variable from productData

  ////////////////////////////////////   copied from products-page-component  //////////////////////////
  const [{ loading, error, productData }, dispatch] = useReducer(reducer, {
    //changed productsData to productData
    loading: true,
    error: "",
    productData: [],
  });
  // 1st param - {loading, error, products} -> created a set of states within an object
  // 2nd param, dispatch, is the different functions that will be passed through to manipulate the states in said object
  //useReducer 1st param - reducer -> reducer is the function created outside of the component.
  // useReducer 2nd param - {loading: true, error: '', products: [] -> these are the default or starting states of said object initialized in the first half

  // const [productsData, setProducts] = useState([]); // useState() returns an array that contains variable and a function that return values in that variable ; in this case products

  useEffect(() => {
    //this hook does something everytime something rerenders -> ex. use types something/ click someting
    const fetchData = async () => {
      //this is a async functinon that grabs products from backend

      dispatch({ type: ACTIONS.FETCH_REQUEST });

      try {
        const result = await axios.get(`/api/productsData/slug/${slug}`); //sends ajax request to the address specified- api

        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: result.data,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_FAIL,
          payload: err.message,
        });
      }
    };

    // setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function

    fetchData(); //now that we've define fetchData function we call it within the useEffect.
  }, [slug]); // 2nd parameter - after the , - specifies when to rerender/update it, in this case its when the user selects another product which changes the slug
  // therefore useEffect will run this function after the 1st render of this component

  ////////////////////////////////////   copied from products-page-component  //////////////////////////

  return loading ? (
    <div>Please Wait, Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Helmet>
        <title>{productData.name}</title>
      </Helmet>
      {productData.name}
      <div>Test Product Lorem ipsum dolor sit amet.</div>
    </div>
  );
}

export default ProductPage;
