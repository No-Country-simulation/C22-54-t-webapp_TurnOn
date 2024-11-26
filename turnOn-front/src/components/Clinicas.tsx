import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee'
import Clinica1 from '../assets/Cllinica1.png';
import Clinica2 from '../assets/Cllinica2.png';
import Clinica3 from '../assets/Cllinica3.png';
import Clinica4 from '../assets/Cllinica4.png';
import Clinica5 from '../assets/Cllinica5.png';


const reviews = [
  {
    img: Clinica1,
  },
  {
    img: Clinica2,
  },
  {
    img: Clinica3,
  },
  {
    img: Clinica4,
  },
  {
    img: Clinica5,
  },

];


interface PropsClinicas {
  img: string;
}

const ReviewCard = ({ img }: PropsClinicas) => {

  return (
    <figure
      //Contenedor
      className={cn(
        "relative w-60 h-24 md:w-80 md:h-32 p-3 md:p-4 cursor-pointer overflow-hidden rounded-xl border flex items-center justify-center" 
      )}
    >
      <div>
        <img className="object-cover w-full h-full" alt='Sanatorio' src={img} /> 
      </div>
    </figure>
  );
};

export function Clinicas() {

  return (
    <section className="relative flex h-[340px] w-full flex-col items-center justify-center overflow-hidden bg-gray-50 ">
      <div className="flex flex-col items-center text-center max-w-96 md:max-w-none px-2 ">
        <p className="text-p  mb-2 ">Líderes en el sector</p>
        <h3 className="text-3xl font-bold mb-6 ">Con la confianza de clínicas como:</h3>
      </div>
      
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
}
