import classes from './CartButton.module.css';

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()

  function toggleCartHandler() {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span> 
    </button>
  );
};

export default CartButton;
