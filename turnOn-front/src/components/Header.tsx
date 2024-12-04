import {Button} from './Button';
import {  useNavigate } from 'react-router-dom'; 
import '../index.css'

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/');
  };

  return (
    <section
      className="header-section flex flex-col md:flex-row items-center justify-center md:justify-start p-6 ">
      <div className="max-w-md  text-left relative z-10 md:ml-20 ">
        <p className="text-gray-800 md:text-gray-700 mb-4">
          TurnOn, todo en un solo lugar.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Gestiona tu acceso a la salud desde cualquier lugar
        </h1>
        <p className="text-gray-800 md:text-gray-700 mb-4">
          Conectamos pacientes con profesionales de la salud en Buenos Aires
          para citas presenciales, telemedicina y a domicilio. Recuerda, ¡La
          salud no espera, vos tampoco!
        </p>
        
        <Button onClick={handleHeaderClick} className='button-header flex items-center justify-center'>
          Fijate en la disponibilidad
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default Header;
