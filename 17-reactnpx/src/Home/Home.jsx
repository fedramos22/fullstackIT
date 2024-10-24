import ropaEjemplo from '../Images/ropaEjemplo.png'
import icono from '../Images/icono3modabel.jpg'
import tarjetaUno from '../Images/tarjetaUno.png'
import tarjetaDos from '../Images/tarjetaDos.png'
import tarjetaTres from '../Images/tarjetaTres.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();

    const Tienda = () =>{
        navigate('/Tienda');
    }

    return(
    <>
        <main class="main">
            <section class="seccionUno">
                    <div class="tarjetaUno" style={{backgroundImage: `url(${tarjetaUno})`}}>
                        <span class="textoUno">
                            Estilo Exclusivo
                        </span>
                        <span class="textoDos">
                                Descubre la <br/> Moda
                        </span>
                        <label>
                            <input type="button" value="Más Info"/>
                        </label>
                    </div>
                    <div class="tarjetaDos" style={{backgroundImage: `url(${tarjetaDos})`}}>
                    </div>
            </section>
            <span class="textSeccion">Nueva Temporada</span>
            <section class="seccionDos">
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
                    <span class="cajaBoton">
                        <button class="boton" onClick={Tienda}>Cargar más</button>
                    </span>
            </section>
            <section class="categoria">
                <div class="catUno" style={{backgroundImage: `url(${tarjetaUno})`}
                }>
                    <h2>Camisas y remeras</h2>
                </div>
                <div class="catDos">
                    <h2>Pantalones y Polleras</h2>
                </div>
                <div class="catTres">
                    <h2>Sweaters</h2>
                </div>
                <div class="catCuatro">
                    <h2>Buzos y Camperas</h2>
                </div>
            </section>
            <div class="textSeccionDos">
                <figure>
                    <img src={icono} alt=""/>
                </figure>
                <h1 class="titulo">
                    Modabel
                </h1>
            </div>
            <section class="seccionTres">
                <div class="tarjetaTres" style={{backgroundImage: `url(${tarjetaTres})`}}>
                </div>
                <div class="tarjetaCuatro">
                    <h2>Tu nueva Tienda de Moda Favorita</h2>
                    <p class="textoCuatro">
                        Tras recibir numerosas solicitudes para tener una ubicación física, decidimos dar el salto y exhibir nuestros productos en un lugar único. Con una amplia gama de artículos para todos los gustos, todos son bienvenidos a explorar y adquirir algo especial. Vive una experiencia de compra exclusiva por tiempo limitado y agrega tus artículos preferidos a tu carrito de compras real. ¡Visítanos y deja el carrito virtual para después!
                    </p>
                </div>
            </section>
        </main>
    </>
    );
}

export default Home