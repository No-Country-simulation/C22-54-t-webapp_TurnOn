const Benefits = () => {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="font-roboto text-p md:text-p-desktop mt-4 text-center">
          Algunos de nuestros beneficios.
        </p>
        <h2 className="font-poppins font-bold text-h2 md:text-h2-desktop mt-4 mb-4 md:mb-6 text-center">
          ¿Por qué usar TurnON?
        </h2>
        <p className="font-roboto text-p md:text-p-desktop mt-4 text-center">
          Nuestro objetivo es ayudarte a hacer más fácil el proceso de cuidar tu
          salud y sabemos que la gestión de turnos es una de las mejores maneras
          de empezar.
        </p>
        <div className="flex flex-wrap -mx-4 mt-9">
          <div className="w-full md:w-1/2 px-3 mb-8">
            <div className="max-w-[587px] h-[226px] bg-secondary rounded-2xl shadow-lg flex items-center justify-center">
              <div className="max-w-[307px]">
                <h3 className="text-h2 md:text-h3-desktop font-poppins font-bold text-center">
                  Podrás elegir entre muchos profesionales
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-8">
            <div className="max-w-[587px] h-[226px] bg-secondary-2 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="max-w-[307px]">
                <h3 className="text-h2 md:text-h3-desktop font-poppins font-bold text-center">
                  Retomarás el control de tu tiempo
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-8">
            <div className="max-w-[587px] h-[226px] bg-secondary-2 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="max-w-[307px]">
                <h3 className="text-h2 md:text-h3-desktop font-poppins font-bold text-center">
                  Disminuirá la probabilidad de olvidar tus citas
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-8">
            <div className="max-w-[587px] h-[226px] bg-secondary-3 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="max-w-[307px]">
                <h3 className="text-h2 md:text-h3-desktop font-poppins font-bold text-center">
                  Tu información estará bien resguardada
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;