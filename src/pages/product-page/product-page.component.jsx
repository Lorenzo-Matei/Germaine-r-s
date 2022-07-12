import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams(); //this enables you to grab the productsData params or variables
  const { slug } = params; //this gets the slug variable from productData

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductPage;
