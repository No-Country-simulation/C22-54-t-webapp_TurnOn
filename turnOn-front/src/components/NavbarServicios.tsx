import { Link } from 'react-router-dom'; 
import { HamburguerServicios } from '../pages/Servicios/HamburguerServicios';
import {Button} from './Button';


export const NavbarServicios = () => {

    return (
        <nav className= 'flex items-center justify-between md:justify-around bg-white m-5 '>
            <section>
                <Link to='/'>
                    <img src='/logo.svg' alt='Logo TurnOn' className='w-[91px] h-[36px]' />
                </Link>
            </section>  

            <section className='hidden md:flex'>
                <ul className= 'flex space-x-4 md:space-x-8 text-p-desktop text-dark-gray'>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/'>Servicios</Link>
                    </li>
                    <li>
                        <Link to='/'>Especialistas</Link>
                    </li>
                    <li>
                        <Link to='/'>Facturas</Link>
                    </li>
                </ul>
                
            </section>

            <section className= 'flex items-center space-x-8 md:space-x-4'>   

                {/* Input de búsqueda */}        
                <div className='relative hidden md:block'>
                    <input
                        type='text'
                        placeholder=' Buscar...'
                        className='p-2 border border-gray-300 rounded-full'
                    />
                    <Button className='absolute right-0 top-0 mt-2.5 mr-2.5'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 text-gray-500'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                >
                                <path
                                    fillRule='evenodd'
                                    d='M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z'
                                    clipRule='evenodd'
                                />
                            </svg>
                    </Button>
                </div> 
                
                <img
                    src='/src/assets/usuario1.jpg'
                    alt='Perfil'
                    className='w-12 h-12 rounded-full object-cover'
                />
                            
                <HamburguerServicios/>
            </section>
        </nav>
    );
};
