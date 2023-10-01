
import { RiDeleteBin5Fill} from 'react-icons/ri'
import { removeFromLocalStorage } from '../LocalStorage/Localstorage';

const CartProduct = ({product,handleRender}) => {
    const {id, img, name, price, shipping } =
    product;

    const handleRemove = (id) => { 
        removeFromLocalStorage(id)
        handleRender();
     }

    return (
        <div className=" border border-[#95A0A7] mt-4 rounded-lg">
            <div className='p-3 flex rounded-lg gap-5'>
            <div className="w-24 h-24">
                <img src={img} alt="" className='rounded-lg'/>
            </div>
            <div className='flex flex-col grow'>
                <h4>{name}</h4>
                <p>Price: <span className='text-[#F99000]'>${price}</span></p>
                <p>Shipping Charge: <span className='text-[#F99000]'>${shipping}</span></p>
            </div>
            <div onClick={() => handleRemove(id)} className='flex justify-center items-center text-4xl  h-auto'>
                <button className="text-red-300 rounded-full bg-red-500 p-2"><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
            </div>
            </div>
        </div>
    );
};

export default CartProduct;