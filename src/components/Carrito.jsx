/* eslint-disable react/prop-types */
const Carrito = ({ cart }) => {
  let total = 0;

  return (
    <div id="carrito" className="col-2 bg-secondary text-light p-3">
      <h3>Carrito de Compras</h3>
      <ul id="cont-cart">
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity}
            {total += item.precio * item.quantity}
          </li>
        )
        )}
      </ul>
      <p>TOTAL: <span id="total-cart">S/ {total}</span></p>
      <button className="btn btn-primary">PAGAR</button>
    </div>
  );
};

export default Carrito;