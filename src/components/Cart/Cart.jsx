
const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h3>Order Review: {cart.length}</h3>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X
                    </button></p>)
            }
        </div>
    );
};

export default Cart;