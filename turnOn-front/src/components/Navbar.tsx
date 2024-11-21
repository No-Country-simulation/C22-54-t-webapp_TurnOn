import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';


export const Navbar = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        console.log('Registrate');
        navigate('/');
    }

    const handleLoginClick = () => {
        console.log('Iniciar Sesión');
        navigate('/');
    }

    return (
        <nav className= 'flex items-center justify-around bg-white m-3'>
            <section>
                <img src='/logo.svg' alt='Logo TurnOn'/>
            </section>

            <section>
                <ul className= 'flex space-x-8 xl:text-p-desktop text-dark-gray'>
                    <li>
                        <Link to='/'> Inicio </Link>
                    </li>
                    <li>
                        <Link to='/'> Servicios </Link>
                    </li>
                    <li>
                        <Link to='/'> Planes </Link>
                    </li>
                    <li>
                    <Link to='/'> Empresas </Link>
                    </li>
                </ul>
            </section>

            <section className= 'flex space-x-4'>
                <Link to='/'>
                    <Button label='Regristrate' onClick={handleRegisterClick} className='button-register' />
                </Link>
                <Link to='/'>
                    <Button label='Ingresa' onClick={handleLoginClick} className='button-login'/>
                </Link>
            </section>
        </nav>
    )
}