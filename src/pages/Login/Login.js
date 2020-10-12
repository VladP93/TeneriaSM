import React from 'react';
import "./Login.css"

export default function Login() {
    return (
        <>
            <div className="limite"> 
                {/* <!--Este contenedor va a contener todo la pantalla del Login --> */}
                <div className="container-Login" style={{backgroundColor: "#69859A"}}>
                    <div className="wrap-login">
                        {/* <!--Creacion del formulario--> */}
                        <form className="form-login">
                            {/* <!--Logo centrando del formulario--> */}
                            <span className="form-login-logo">
                                <i className="fas fa-user"></i>
                            </span>

                            {/* <!--Texto de Iniciar Sesion--> */}
                            <span className="login-form-title p-b-34 p-t-27">
						        Iniciar Sesion 
                            </span>
                    
                            {/* <!--Campo de texto para ingresar el usuario--> */}
                            <div className="wrap-input ">
						        <input className="input1" type="text" name="Usuario" placeholder="Usuario" />
						        <span className="focus-input"  ></span>
                            </div>

                            {/* <!--Campo de texto para ingresar la contraseña--> */}
                            <div className="wrap-input ">
						        <input className="input1" type="password" name="Contraseña" placeholder="Contraseña" />
						        <span className="focus-input" ></span>
                            </div>

                            {/* <!--Boton para iniciar Sesion--> */}
                            <div className="container-login-form-btn">
				        		<button className="login-form-btn">
						        	Iniciar Sesión
						        </button>
					        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
