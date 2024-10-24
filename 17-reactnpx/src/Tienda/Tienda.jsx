import ropaEjemplo from '../Images/ropaEjemplo.png'
import { useState } from 'react'

const Tienda = () =>{

    const [producto, setProducto] = useState({});

    
    const carrito = () => {
        
        alert("Producto agregado al carrito")

        const articulo = {
            nombre: 'Buzo verde',
            precio: '20.00',
            img: {ropaEjemplo}
        }
        localStorage.setItem('producto', JSON.stringify(articulo));

        /* setProducto(articulo); */
        console.log(producto);
        
        //localStorage.setItem('producto', 'Buzo verde','')
    }

    return(
        <>
            <span class="textSeccion">Camisas y Remeras</span>
                <section class="seccionDos">
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus" onClick={carrito}></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <span class="cajaBoton">
                            <button class="boton">Cargar más</button>
                        </span>
                </section>
                <span class="textSeccion">Pantalones y Polleras</span>
                <section class="seccionDos">
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus" onClick={carrito}></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <span class="cajaBoton">
                            <button class="boton">Cargar más</button>
                        </span>
                </section>
                <span class="textSeccion">Sweaters</span>
                <section class="seccionDos">
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus" onClick={carrito}></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <span class="cajaBoton">
                            <button class="boton">Cargar más</button>
                        </span>
                </section>
                <span class="textSeccion">Buzos y Camperas</span>
                <section class="seccionDos">
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus" onClick={carrito}></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <span class="precioArticulo">
                                $20.00
                            </span>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <article class="cardArticulos">
                            <figure>
                                <img src={ropaEjemplo}
                                    alt=""/>
                                <i class="bi bi-bag-plus"></i>
                            </figure>
                            <h2 class="descArticulo">
                                Soy un producto
                            </h2>
                            <div class="precioArticulo">
                                $20.00
                            </div>
                        </article>
                        <span class="cajaBoton">
                            <button class="boton">Cargar más</button>
                        </span>
                </section>
        </>
    );
}

export default Tienda