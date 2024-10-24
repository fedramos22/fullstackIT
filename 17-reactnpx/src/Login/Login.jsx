import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    /* Variables en React = useState: Manejar los estados */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Hook de navegacion---- tip: cada vez que algo arranque con 'use' es un hook
    const navigate = useNavigate();
    

    //función para el login del user
    const loginUser = (event) =>{

        event.preventDefault();

        console.log(email);
        console.log(password);
        
        
        //console.log(event);
        //console.log(event.target.value);
        
        if (email === '' || password === '') {
            alert('Complete los campos.');
            return;
        }

        if (email === 'pepe@gmail.com' && password === '1234') {
            alert('Login realizado.');
            window.sessionStorage.setItem('user', 'pepe@gmail.com');
            navigate("/admin");
        } else {
            alert("Usuario o constraseña incorrecta");
            navigate('/login');
        }
        
    }

    return(
        <>
            <div className="container">
                <form className="container m-5 p-5 center w-75">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp
                        "/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input 
                        type="password" 
                        class="form-control"
                        id="exampleInputPassword1" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="m-auto">
                        <button type="submit" class="btn btn-primary" onClick={loginUser}>Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login