import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ropaEjemplo from '../Images/ropaEjemplo.png'

const Carrito = () => {
    const [misCompras, setMiscompras] = useState('');
    const [user, setUser] = useState();

    const navigate = useNavigate({});

    useEffect(()=>{
        const producto = JSON.parse(localStorage.getItem('producto'));
        if (!producto) {
            alert('No hay productos en el carrito');
            navigate('/Tienda');
        } else {
            setUser(window.sessionStorage.getItem('user'));
            setMiscompras(producto);
        }
    },[]);

    const eliminarDatos = () => {
        localStorage.removeItem('producto');
        navigate('/Tienda');
    }

    return(
        <>
            <div className="container text-center">
                <h1>Carrito de {user}</h1>
                <div class="card" style={{width: '18rem'}}>
                    <img src={ropaEjemplo} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{misCompras.nombre}</h5>
                        <p class="card-text">${misCompras.precio}</p>
                        <button onClick={eliminarDatos} class="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito