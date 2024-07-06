// eslint-disable-next-line react/prop-types
const Producto = ({ name, description, url, precio, addToCart }) => {
	return (
		<div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
			<div className="card">
				<img src={url} className="card-img-top" alt={name} />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
						<button className="btn btn-primary" onClick={addToCart}>Comprar</button>
            <span>S/ {precio}</span>
					</div>
			</div>
		</div>
	);
}
export default Producto;