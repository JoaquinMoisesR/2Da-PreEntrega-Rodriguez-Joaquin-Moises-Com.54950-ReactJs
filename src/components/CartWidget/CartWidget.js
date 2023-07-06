import cart from './assets/icono.png'

const CartWidget = () => {
    return (
        <div>
            <br></br>
            <figure className="image is-96x96">
            <img src={cart} alt="cart-widget" height="20px"/>
            </figure>
            <p className="pr-4 has-text-warning">PRODUCTOS ADQUIRIDOS: 5</p>
        </div>
    )
}

export default CartWidget