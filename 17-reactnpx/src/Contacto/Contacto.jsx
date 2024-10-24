import './Contacto.css'
import ContactoFondo from '../Images/fondoContacto.png'


const Contacto = () => {
    return(
        <>
            <main style= {{backgroundImage: `url(${ContactoFondo})`}}>
                <section>
                    <form action="#">
                        <div class="infoUsuario">
                            <span class="msj">
                                Deja tu consulta o mensaje y te responderemos
                            </span>
                            <span class="inputBox">
                                <label class="label">Nombre Completo
                                    <input type="text"  required/>
                                </label>
                            </span>
                            <span class="inputBox">
                                <label class="label">Email
                                    <input type="email"  required/>
                                </label>
                            </span>
                            <span class="inputBox">
                                <label class="label">Tú Consulta o Comentario
                                    <textarea name="message" placeholder="Tu mensaje" required cols="20"></textarea>
                                </label>
                            </span>
                            <span class="botonBox">
                                <label class="label">
                                    <input type="submit" value="Enviar"/>
                                </label>
                            </span>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Contacto