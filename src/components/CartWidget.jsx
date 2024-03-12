import cart from '../assets/cart.png';

export const CartWidget = () => {
    return (
        <div id='cart_shop'> 
        <img src={cart} alt="Cart"  />
        <span className='number_span'>0</span>
        </div>
    )
}