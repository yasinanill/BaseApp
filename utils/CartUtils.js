import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "./redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const useCartActions = () => {
  
    const dispatch = useDispatch();
 

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const handleClearCartData = async () => {

    try {
      await AsyncStorage.removeItem('cartItems');
     
      dispatch(clearCart()); // Sepet verilerini sıfırla
    } catch (error) {
      console.error('Hata:', error);
    }
  };



  return { 
    handleClearCartData,
    handleRemoveFromCart,
    handleClearCart
  };

};


