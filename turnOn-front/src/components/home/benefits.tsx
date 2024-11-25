import { benefits } from "../../mocks/benefits";

const Benefits = () => {
  return (
    <section className="max-w-[560px]  mx-4 my-10">
      <div className="flex flex-col gap-4 text-center [&>p]:text-small [&>p]:max-w-md items-center">
        <p>Algunos de nuestros beneficios.</p>
        <h2 className="text-h2 font-bold font-sans">¿Por qué usar TurnON?</h2>
        <p>
          Nuestro objetivo es ayudarte a hacer más fácil el proceso de cuidar tu
          salud y sabemos que la gestión de turnos es una de las mejores maneras
          de empezar.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 mt-6  [&>article]:w-full [&>article]:h-[225px] [&>article]:flex [&>article]:px-4 [&>article]:text-center [&>article]:items-center [&>article]:rounded-2xl  [&>article>h3]:text-h3 [&>article>h3]:font-sans [&>article>h3]:font-bold [&>article>h3]:text-black-80">
        {benefits.map((article, index) => (
          <article key={index} className={`shadow-lg ${article.bg}`}>
            <h3>{article.text}</h3>
          </article>
        ))}
      </div>
      ;
    </section>
  );
};

export default Benefits;
