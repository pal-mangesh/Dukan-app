import "./index.css";
import Header from "../hoc/header/index";
import Footer from "../hoc/footer/index";
import Cart from "../hoc/cart/index";
import ViewContainer from "../hoc/ViewContainer/index";
import Button from "../components/button";
import { useState } from "react";

export interface IProduct {
  id: number;
  p_name: string;
  p_description: string;
  p_price: number;
}

export interface ICart {
  id: number;
  p_name?: string;
  p_price?: number;
}

const DUMMY_PRODUCT: IProduct[] = [
  {
    id: 1,
    p_name: "Book",
    p_description: "History book",
    p_price: 300,
  },
  {
    id: 2,
    p_name: "Table",
    p_description: "Wooden table",
    p_price: 300,
  },
  {
    id: 3,
    p_name: "Computer",
    p_description: "Dell PC",
    p_price: 300,
  },
  {
    id: 4,
    p_name: "Mobile",
    p_description: "Samsung Mobile",
    p_price: 300,
  },
];

let cartUUID = 0;
let productUUID = 0;

const MainPage = () => {
  const [products, setProducts] = useState(DUMMY_PRODUCT);
  const [cart, setCart] = useState([] as ICart[]);

  //let [cartProducts, setCartProducts] = useState<IProduct>();

  const addNewProduct = () => {
    const enteredProductName = prompt("Enter Product Name");
    if (!enteredProductName || enteredProductName.length <= 0) {
      return;
    }

    const enteredProductDescription = prompt("Enter Product Description");
    if (!enteredProductDescription || enteredProductDescription.length <= 0) {
      return;
    }

    const enteredProductPrice = prompt("Enter Product Price");
    if (
      !enteredProductPrice ||
      enteredProductPrice.length <= 0 ||
      enteredProductPrice == null
    ) {
      return;
    }
    const enterProductPriceInt = parseInt(enteredProductPrice);

    const newproduct: IProduct = {
      id: getUniqueID() + 1,
      p_name: enteredProductName,
      p_description: enteredProductDescription,
      p_price: enterProductPriceInt,
    };

    setProducts([...products, newproduct]);
  };

  let getUniqueID = () => {
    return productUUID++;
  };

  let getUniqueCartID = () => {
    return cartUUID++;
  };

  const addToCartItemHandler = (viewProduct: IProduct) => {
    const CART_ITEMS: ICart = {
      id: getUniqueCartID() + 1,
      p_name: viewProduct.p_name,
      p_price: viewProduct.p_price,
    };
    const newCartItems = [...cart, CART_ITEMS];
    console.log(newCartItems);
    setCart(newCartItems);
  };

  const deleteCartItemHandler = (Item: ICart) => {
    const updatedCart = cart.filter((i) => i.id !== Item.id);
    setCart([...updatedCart]);
  };

  const editProductItemHandler = (product: IProduct) => {
    const productName: string = prompt("Enter new product name : ") || product.p_name;
    const productDescription: string =
      prompt("Enter new product description : ") ||  product.p_description;
    const productPrice: number =
      parseInt(prompt("Enter new value") || "") || product.p_price;

    const editedProduct: IProduct = {
      id: product.id,
      p_name: productName,
      p_description: productDescription,
      p_price: productPrice,
    };

    const updatedProducts = products.map((p: IProduct) => {
      return p.id === product.id ? editedProduct : p;
    });

    

    setProducts([...updatedProducts]);
  };

  return (
    <>
      <div className="flex-header">
        <Header headerTitle="Dukan">
          <Button buttontitle="Add Product" onClick={addNewProduct} />
        </Header>
      </div>
      <div className="row">
        <div className="col">
          {products.map((i, index) => (
            <ViewContainer
              addToCartItem={addToCartItemHandler}
              editProductItem={editProductItemHandler}
              viewProduct={i}
              key={index}
            />
          ))}
        </div>

        <div className="column2">
          <h2>Cart Items</h2>
          {cart.map((a, index) => (
            <Cart
              deleteCartItem={deleteCartItemHandler}
              cartItem={a}
              k={index + 1}
              key={index + a.id}
            />
          ))}
        </div>
      </div>
      <div className="flex-footer">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
