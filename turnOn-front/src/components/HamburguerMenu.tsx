import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; 
import { Button } from "./Button";
import { Link } from 'react-router-dom';

export const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <nav>
           <Button onClick={toggleMenu} className="md:hidden p-2 ">
                <FontAwesomeIcon icon={faBars} className="text-black w-6 h-6"/> 
           </Button>
           {isOpen && (
                <>
                    {/* Fondo semitransparente */}
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}/>
                    
                    {/* Menú hamburguesa */}
                    <section className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>    

                        <div className="flex flex-col items-start space-y-4 p-4 h-full">
                            {/* Botón de cierre */}
                            <FontAwesomeIcon icon={faXmark} className="text-black w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                            <hr className="border-t border-gray-300 w-full " />

                            <ul className="space-y-4 text-p-desktop">
                                <li>
                                    <Link to='/' onClick={toggleMenu}>Inicio</Link>
                                </li>
                                <li>
                                    <Link to='/services' onClick={toggleMenu}>Servicios</Link>
                                </li>
                                <li>
                                    <Link to='/plans' onClick={toggleMenu}>Planes</Link>
                                </li>
                                <li>
                                    <Link to='/companies' onClick={toggleMenu}>Empresas</Link>
                                </li>
                            </ul>                                        
                        </div>
                    </section>
                </>
           )}
        </nav>
    )
}

