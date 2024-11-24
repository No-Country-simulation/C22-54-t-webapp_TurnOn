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
        <div>
            <h3>Conoce las experiencias de nuestros clientes</h3>
            <h2>¿Qué es tener una buena gestión de turnos?</h2>
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
            >
                <CarouselContent>
                    <CarouselItem>
                        <div>
                            <div>
                                <img src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732293636/TurnOn/dhzzhfigm1h4c7wwmvpp.png" alt="Buena gestión de turnos" />
                            </div>
                            <div>
                                <p className="text-center text-p md:text-p-desktop mb-7">"Antes dependía de mis ojos para llamar a los consultorios, pero ahora puedo buscar y agendar turnos yo mismo. Es fácil de usar y me siento mucho más independiente."</p>
                                <p className="text-center text-p md:text-p-desktop mb-4">Lucas Torres</p>
                                <p className="text-center text-small md:text-small-desktop">Profesor y escritor</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <div>
                                <img src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732293636/TurnOn/dhzzhfigm1h4c7wwmvpp.png" alt="Buena gestión de turnos" />
                            </div>
                            <div>
                                <p className="text-center text-p md:text-p-desktop mb-7">"Antes dependía de mis ojos para llamar a los consultorios, pero ahora puedo buscar y agendar turnos yo mismo. Es fácil de usar y me siento mucho más independiente."</p>
                                <p className="text-center text-p md:text-p-desktop mb-4">Lucas Torres</p>
                                <p className="text-center text-small md:text-small-desktop">Profesor y escritor</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <div>
                                <img src="https://res.cloudinary.com/di0cvbfdb/image/upload/v1732293636/TurnOn/dhzzhfigm1h4c7wwmvpp.png" alt="Buena gestión de turnos" />
                            </div>
                            <div>
                                <p className="text-center text-p md:text-p-desktop mb-7">"Antes dependía de mis ojos para llamar a los consultorios, pero ahora puedo buscar y agendar turnos yo mismo. Es fácil de usar y me siento mucho más independiente."</p>
                                <p className="text-center text-p md:text-p-desktop mb-4">Lucas Torres</p>
                                <p className="text-center text-small md:text-small-desktop">Profesor y escritor</p>
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
