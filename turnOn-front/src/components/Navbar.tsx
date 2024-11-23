import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { HamburguerMenu } from './HamburguerMenu';



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
        <nav className= 'flex items-center justify-between md:justify-around bg-white m-5 '>
            <section>
                <img src='/logo.svg' alt='Logo TurnOn' className='w-[91px] h-[36px] '/>
            </section>

            <section className='hidden md:flex'>
                <ul className= 'flex space-x-4 md:space-x-8 text-p-desktop text-dark-gray'>
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

            <section className= 'flex items-center space-x-3 md:space-x-4'>
                <Link to='/'>
                    <Button label='Regristrate' onClick={handleRegisterClick} className='button-register' />
                </Link>
                <Link to='/'>
                    <Button label='Ingresa' onClick={handleLoginClick} className='button-login'/>
                </Link>

                <HamburguerMenu/>
            </section>
        </nav>
    )
}