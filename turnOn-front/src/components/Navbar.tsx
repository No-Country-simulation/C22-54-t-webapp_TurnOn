import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className= 'flex items-center justify-around bg-white xl:py-4  '>
            <section>
                <img src='/logo.svg' alt='Logo TurnOn'/>
            </section>

            <section>
                <ul className="flex space-x-8 xl:text-p-desktop">
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

            <section className= 'flex space-x-9 ' >
                <Link to='/'>
                    <button> Registrate </button>
                </Link>
                <Link to='/'>
                    <button> Iniciar Sesión </button>
                </Link>
            </section>
        </nav>
    )
}