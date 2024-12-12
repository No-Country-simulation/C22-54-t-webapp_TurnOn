import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <div className="bg-primary py-4">
            <div className="max-w-[1200px] mx-auto px-4">
                <h3 className="font-roboto text-center text-p md:text-p-desktop mt-4">
                    Prueba una demo GRATIS.
                </h3>
                <h2 className="font-poppins font-bold text-center text-h2 md:text-h2-desktop mt-4 mb-4 md:mb-6">
                    Así funciona nuestra plataforma
                </h2>
                <div className="flex justify-center items-center flex-col gap-3 relative">
                    <video
                        src="https://res.cloudinary.com/di0cvbfdb/video/upload/v1733182858/TurnOn/atfeasmabpba8e8x1f6m.mp4"
                        controls
                        className="w-full md:w-[587px] md:h-[347px] rounded-2xl shadow-lg"
                    />
                    <Link to="/" className="font-roboto text-center text-p md:text-p-desktop shadow-lg bg-gradient-to-r from-white from-1% via-accent-2 via-30% to-[#9CCE3C] to-90% absolute md:bottom-36 md:left-52 left-2 py-2 px-24 rounded-2xl">DEMO</Link>
                    <p className="font-roboto text-center text-p md:text-p-desktop">
                        Descubre cómo opera nuestra plataforma desde adentro antes de registrarte.
                        Podrás explorar el proceso de programación de citas y verificar la disponibilidad
                        de servicios para la actual y la próxima semana.
                    </p>
                    <Link
                        className="font-roboto text-center text-p md:text-p-desktop shadow-lg bg-accent py-2 px-8 md:px-10 rounded-2xl text-white"
                        to="/"
                    >
                        Mira la demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
