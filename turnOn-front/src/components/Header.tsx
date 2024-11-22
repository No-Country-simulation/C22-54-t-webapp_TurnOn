import hm1 from "../assets/hm1.png"

const Header = () => {
    return (
      <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50">
        {/* Contenido del texto */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Reservá tu turno desde cualquier lugar, rápido y fácil
          </h1>
          <p className="text-gray-700 mb-2">
            Agenda en pocos clics y optimiza tu tiempo
          </p>
          <p className="text-gray-600 mb-4">
            Conectamos pacientes con profesionales de la salud en Buenos Aires
            para citas presenciales, telemedicina y a domicilio. Recuerda, ¡La
            salud no espera, vos tampoco!
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-black font-bold underline hover:text-blue-500"
          >
            FIJATE EN LA DISPONIBILIDAD
          </a>
        </div>
  
        {/* Imagen */}
        <div className="mt-6 md:mt-0">
          <img
            src={hm1}
            alt="Paciente y doctor conversando"
            className="max-w-full h-auto"
          />
        </div>
      </header>
    );
  };
  
  export default Header;
  