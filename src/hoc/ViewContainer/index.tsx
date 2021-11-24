import Button from "../../components/button";
import "./index.css";

const ViewContainer = (props: any) => {
  const addToCart = () => {
    props.addToCartItem(props.viewProduct);
  };

  const editProduct = () => {
    props.editProductItem(props.viewProduct);
  };

  return (
    <>
      <div className="box">
        <div>{}</div>
        <div>{props.viewProduct.id}</div>
        <div>{props.viewProduct.p_name}</div>
        <div>{props.viewProduct.p_description}</div>
        <div>{props.viewProduct.p_price}</div>
        <Button buttontitle="Add to Cart" onClick={addToCart} />
        <Button buttontitle="Edit Product" onClick={editProduct} />
      </div>
    </>
  );
};

export default ViewContainer;
