import {  useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from "react";
import '../index.css'
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import {Button} from './Button';
import banner1 from'../assets/hm1.jpg';
import banner2 from '../assets/hm2.jpg';
import banner3 from '../assets/hm3.jpg';



const Header = () => {
  const navigate = useNavigate();

  const [api, setApi] = useState<CarouselApi>();                                              //api = es un objeto que proporciona métodos y propiedades que permiten interactuar con el carrusel,
  const [current, setCurrent] = useState(0);

  const handleHeaderClick = () => {
    navigate('/');
  };

  //selecciona el indice del elemento y lo actualiza.
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {                                                                    // api.on = es API del carrusel y está diseñado para registrar listeners para eventos específicos.
      setCurrent(api.selectedScrollSnap())                                                     //selectedScrollSnap() = es un método del objeto api del carrusel que devuelve el índice del elemento actualmente seleccionado.                         
    })
  }, [api]);

  //permite desplazar el carrusel a un elemento específico basado en su índice.
  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({ delay: 4000, stopOnInteraction: false }),
          Fade()
        ]}
        opts={{ loop: true }}
        className='mb-8'
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative flex flex-col items-start justify-center w-full h-[650px] md:h-[577px]">
              {/* Contenedor de texto */}
              <div className="max-w-md text-left relative z-20 p-7 md:p-0 md:ml-20">
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
                <Button onClick={handleHeaderClick} className="button-header flex items-center justify-center">
                  Fijate en la disponibilidad
                  <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </Button>
              </div>
              
              {/* Gradiente de tailwind, puedes especificar valores personalizados rgba con []. */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.4)] md:from-[rgba(255,255,255,0.8)] md:to-transparent z-10"></div>              
              
              <img src={banner1} alt="Banner 1" className="absolute inset-0 w-full h-full object-cover object-position-mobile "  />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative flex flex-col items-start justify-center w-full h-[650px] md:h-[577px]">
              {/* Contenedor de texto */}
              <div className="max-w-md text-left relative z-20 p-7 md:p-0 md:ml-20">
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
                <Button onClick={handleHeaderClick} className="button-header flex items-center justify-center">
                  Fijate en la disponibilidad
                  <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </Button>
              </div>
              
              {/* Gradiente de tailwind, puedes especificar valores personalizados rgba con []. */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.4)] md:from-[rgba(255,255,255,0.8)] md:to-transparent z-10"></div>              
              
              <img src={banner2} alt="Banner 2" className="absolute inset-0 w-full h-full object-cover object-position-mobile " />
            </div>
          </CarouselItem>
        
          <CarouselItem>
            <div className="relative flex flex-col items-start justify-center w-full h-[650px] md:h-[577px]">
              {/* Contenedor de texto */}
              <div className="max-w-md text-left relative z-20 p-7 md:p-0 md:ml-20">
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
                <Button onClick={handleHeaderClick} className="button-header flex items-center justify-center">
                  Fijate en la disponibilidad
                  <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </Button>
              </div>
              
              {/* Gradiente de tailwind, puedes especificar valores personalizados rgba con []. */}
              <div className=" absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)] md:from-[rgba(255,255,255,0.8)] md:to-transparent z-10"></div>              
              
              <img src={banner3} alt="Banner 3" className="absolute inset-0 w-full h-full object-cover object-position-mobile-3 " />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Botones de navegación del carrusel */}
      <div className='flex justify-center space-x-2 mt-4 z-20'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index ? 'bg-white border border-dark-gray' : 'bg-dark-gray'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Header;
