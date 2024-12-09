import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const ShiftControl = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const handleSelect = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <div className="bg-primary py-16">
            <h3 className="font-roboto text-center text-p md:text-p-desktop mb-3">Conoce las experiencias de nuestros clientes</h3>
            <h2 className="font-poppins font-bold text-center text-3xl md:text-h2-desktop mb-8">¿Qué es tener una buena gestión de turnos?</h2>
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: false,
                    }),
                    Fade(),
                ]}
                opts={{
                    loop: true,
                }}
                className="mb-8"
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486261/TurnOn/i2tutqvr4hhul6huu3l7.jpg"
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-24">
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-7 leading-tight">"Siempre se me complicaba coordinar las citas médicas de mis hijos. Ahora recibo recordatorios automáticos y puedo gestionar todo desde mi celular, incluso en horarios que antes eran imposibles. Me solucionó la vida."</p>
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-4">Silvana Iglesias</p>
                                            <p className="font-roboto text-center text-small md:text-small-desktop">CEO en Mercado Libre.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486286/TurnOn/zup2gaboepf2bec7vbnj.jpg"
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-24">
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-7 leading-tight">"Antes dependía de mis hijos para llamar a los consultorios, pero ahora puedo buscar y agendar turnos yo mismo. Es fácil de usar y me siento mucho más independiente."</p>
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-4">Lucas Torres</p>
                                            <p className="font-roboto text-center text-small md:text-small-desktop">Profesor y escritor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486284/TurnOn/gfabi7q6ik3s3lgypmuo.png"
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-24">
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-7 leading-tight">"Con mi agenda tan ajustada, agendar turnos siempre era un problema. Desde que uso este sistema, puedo buscar médicos cerca de casa y pagar todo online en minutos. ¡Es súper práctico y eficiente!"</p>
                                            <p className="font-roboto text-center text-p md:text-p-desktop mb-4">Mariano González</p>
                                            <p className="font-roboto text-center text-small md:text-small-desktop">Desarrollador de software.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="flex justify-center space-x-2 mt-4">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index
                            ? 'bg-white border border-dark-gray'
                            : 'bg-dark-gray'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShiftControl;