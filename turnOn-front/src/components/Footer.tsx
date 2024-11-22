import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300 text-sm py-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
                {/* Sección de Redes Sociales */}
                <div>
                    <h3 className="font-semibold mb-4">Redes sociales</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="text-black hover:text-gray-600">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-black hover:text-gray-600">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="YouTube" className="text-black hover:text-gray-600">
                            <FaYoutube className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Sección de Información de Contacto */}
                <div>
                    <h3 className="font-semibold mb-4">Información de contacto</h3>
                    <p>+54 9 (11) 2387-57xx</p>
                    <p>info@turnos.app</p>
                    <p>Arenales 000, Of. 000 esq. Av. del Libertador</p>
                    <p>Vicente López, Buenos Aires, Argentina.</p>
                </div>

                {/* Sección del Formulario */}
                <div>
                    <h3 className="font-semibold mb-4">¡Escribinos!</h3>
                    <p className="mb-4">Dejá tus datos y nos pondremos en contacto con vos.</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="w-full p-2 mb-3 border border-gray-300 rounded-md"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Línea inferior con enlaces */}
            <div className="text-center border-t border-gray-300 mt-6 pt-4">
                <p className="text-gray-500">
                    &copy; 2024 TurnON.{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Términos y condiciones
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Política de privacidad
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Trabaja con nosotros
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                        Ayuda
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
