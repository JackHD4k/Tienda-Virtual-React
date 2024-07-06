import { useState } from "react";
import "./App.css";
import Carrito from "./components/Carrito";
import Producto from "./components/Producto";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      name: 'producto1',
      description: 'esto es una descipcion del producto 1',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 100
    },
    {
      name: 'producto2',
      description: 'esto es una descipcion del producto 2',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 200
    },
    {
      name: 'producto3',
      description: 'esto es una descipcion del producto 3',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 300
    },
    {
      name: 'producto4',
      description: 'esto es una descipcion del producto 4',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 400
    },
    {
      name: 'producto5',
      description: 'esto es una descipcion del producto 5',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 500
    },
    {
      name: 'producto6',
      description: 'esto es una descipcion del producto 6',
      url: 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
      precio: 600
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    }

    )
  }

  return (
    <div className="d-flex">
      <div>
        <header className="container-fluid bg-dark text-light d-flex align-items-center justify-content-around py-2">
          <a href="#">
            <img src="/logo-amazon.png" width="100px" alt="logo" />
          </a>
          <div>
            <span className="fw-bold">
              <i className="bi bi-geo-alt"></i> Lima 13492
            </span>
          </div>
          <div className="input-group w-50 h-25">
            <span className="input-group-text">
              Todos <i className="bi bi-arrow-down-short"></i>
            </span>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Amazon"
            />
          </div>
          <div className="d-flex align-items-center">
            <img
              className="mx-1"
              src="https://cdn.icon-icons.com/icons2/1694/PNG/512/peperuflag_111973.png"
              width="25px"
              height="15px"
              alt="country"
            />
            <span className="fw-bold">Pe</span>
          </div>
          <div>
            <span className="fw-bold">
              <i className="bi bi-person-circle mx-1"></i>
              <a href="login.html">Iniciar Sesión</a>
            </span>
          </div>
          <div>
            <button type="button">
              <span className="fw-bold">
                <i className="bi bi-cart4"></i> Carrito
              </span>
            </button>
          </div>
        </header>


        <nav id="navigator" className="fw-bold navbar p-0">
          <div>
            <ul className="navbar-nav flex-row gap-3 px-3">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Ofertas del Día</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Servicio al Cliente</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Comprar de Nuevo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Vender</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Amazon de Joel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Listas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Tarjetas de Regalo</a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="carouselExample" className="carousel slide mx-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://m.media-amazon.com/images/I/61dLymMR-9L._SX3000_.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://m.media-amazon.com/images/I/71n3URQek3L._SX3000_.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 row">


              {products.map((producto, index) => (
                <Producto
                  key={index}
                  name={producto.name}
                  description={producto.description}
                  url={producto.url}
                  precio={producto.precio}
                  addToCart={() => addToCart(producto)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      <Carrito cart={cart} />
    </div>
  );
}

export default App;
