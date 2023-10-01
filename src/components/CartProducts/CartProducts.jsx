import { useOutletContext } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import { AiFillDelete, AiFillCreditCard } from "react-icons/ai";
import { getFromLocalStorage } from "../LocalStorage/Localstorage";
import { useEffect, useState } from "react";

const CartProducts = () => {
  const [toRender, setToRender] = useState(false);
  const [products, setProducts] = useState([]);
  const allProducts = useOutletContext();
  const savedProducts = getFromLocalStorage();
  const [showAll, setShowAll] = useState(false);
  const handleRender = ()=>{
    setToRender(!toRender)
  }
  useEffect(() => {
    const toDisplayProduct = allProducts.filter((product) =>
      savedProducts.includes(product.id)
    );
    setProducts(toDisplayProduct);
  }, [toRender]);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const toDisplay = !showAll ? products.slice(0, 3) : products;
  let totalPrice = 0;
  let totalShipping = 0;
  let tex = 0;
  products.forEach((product) => {
    totalPrice += product.price;
    totalShipping += product.shipping;
    tex += totalPrice * 0.02;
  });

  return (
    <div className="">
      <div className="flex justify-center gap-4">
        <div className="px-3">
          {toDisplay?.map((product) => (
            <CartProduct key={product.id} product={product} handleRender ={handleRender}></CartProduct>
          ))}
        </div>
        <div className="bg-[#ff99004d] w-1/3 h-5/6 rounded-xl my-5">
          <div className="px-5">
            <h4 className="text-3xl font-bold py-4">Course Summary</h4>
            <p className="py-2">Selected Item:{products?.length} </p>
            <p className="py-2">Total Price: ${totalPrice}</p>
            <p className="py-2">Total Shipping Charge: ${totalShipping}</p>
            <p className="py-2">Tex: ${tex}</p>
            <h4 className=" text-2xl font-bold py-2">
              Grand Total: ${totalPrice + totalShipping + tex}{" "}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn btn-accent ">
              Clear Cart <AiFillDelete></AiFillDelete>
            </button>
            <button className="btn btn-primary ">
              Check Out <AiFillCreditCard></AiFillCreditCard>{" "}
            </button>
          </div>
        </div>
      </div>
      { products.length > 3 &&
      
      
        (!showAll ? <div className="flex justify-center my-6">
        <button onClick={handleShowAll} className="btn btn-warning">
          Show All
        </button>
        </div>
         : <div className="flex justify-center my-6">
         <button onClick={handleShowAll} className="btn btn-warning">
           Show less
         </button>
         </div>)
    || ''

      }
    </div>
  );
};

export default CartProducts;
