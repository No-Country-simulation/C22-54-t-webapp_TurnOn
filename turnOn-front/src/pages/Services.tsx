import { services } from "../mocks/services";

const ServicesPage = () => {
  return (
    <section className="max-w-[560px] mx-auto my-10 text-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-small max-w-md">
          Algunos de nuestros beneficios.
        </p>
        <h2 className="text-h2 font-bold font-sans">
          ¿Por qué usar TurnON?
        </h2>
        <p className="max-w-md">
          Nuestro objetivo es ayudarte a hacer más fácil el proceso de cuidar tu
          salud y sabemos que la gestión de turnos es una de las mejores maneras
          de empezar.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 mt-6">
        {services.map((article, index) => (
          <article
            key={index}
            className={`w-full h-[225px] flex px-4 items-center justify-center text-center rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${article.bg}`}
          >
            <h3 className="text-h3 font-sans font-bold text-black-80">
              {article.text}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
