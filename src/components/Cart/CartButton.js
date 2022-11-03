import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const cartClickHandler = () => {
        dispatch(cartActions.toggleCart())
    }
  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
