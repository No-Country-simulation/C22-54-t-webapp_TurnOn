import { plans } from "@/mocks/plans";

const PlansPage = () => {
    return (
        <section className="max-w-[768px] mx-auto my-10 text-center">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-small max-w-md">
                    Explora nuestros planes y elige el que mejor se adapte a tus necesidades.
                </p>
                <h2 className="text-h2 font-bold font-sans">Nuestros Planes</h2>
                <p className="max-w-md">
                    Ofrecemos planes diseñados para facilitar la gestión de turnos y mejorar
                    la experiencia tanto para profesionales como para pacientes.
                </p>
            </div>
            <div className="flex flex-col gap-6 mt-6">
                {plans.map((plan, index) => (
                    <article
                        key={index}
                        className={`w-full flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${plan.bg}`}
                    >
                        <h3 className="text-h3 font-sans font-bold text-black-80">
                            {plan.title}
                        </h3>
                        <p className="text-xl font-semibold text-gray-700">{plan.price}</p>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                        <ul className="text-left text-gray-600 mt-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="before:content-['✓'] before:mr-2 before:text-green-500">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Contratar
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PlansPage;
