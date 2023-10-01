import { toast } from "react-toastify";

const addToLocalStorage = (id) =>{
    const savedCart = getFromLocalStorage();
    const exist = savedCart.find(savedId => savedId == id)
    if (!exist) {  
        success();
        savedCart.push(id);
        localStorage.setItem('emajohn_cart', JSON.stringify(savedCart));
    }
    else if (exist) {
        
        duplicat()
    }

}

const removeFromLocalStorage = (id) => { 
    const cart = getFromLocalStorage();
    const afterRemoved = cart.filter(product => product !== id);
    localStorage.setItem('emajohn_cart', JSON.stringify(afterRemoved));
 }

const getFromLocalStorage = () => { 
    const cartStr = localStorage.getItem('emajohn_cart');
    if (cartStr) {
        const cart = JSON.parse(cartStr);
        return cart;
    }
    else return [];
 }

 const success = () =>{
    toast('🦄 Successfully add to cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   const duplicat = () =>{
    toast('🦄 Already added this produc!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
  

 export {addToLocalStorage, getFromLocalStorage, removeFromLocalStorage};