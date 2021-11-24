import Button from "../../components/button";
import "./index.css";

const Cart = (props: any) => {

  const cartItemDelete =()=>{
    props.deleteCartItem(props.cartItem)
  }

  return (
    <>
      <div className="cart">
        <div>{props.k}</div>
      {/* <div className="item_title">{props.cartItem.id} </div> */}
        <div className="item_title">{"Item:"}</div>
        <div className="item_name">{props.cartItem.p_name} </div>
        <div className="item_title">{"Amount :"}</div>
        <div className="item_name">{props.cartItem.p_price}</div>
        <div className="button">
          <Button buttontitle="Delete"  onClick={cartItemDelete}/>
        </div>
      </div>
    </>
  );
};

export default Cart;
