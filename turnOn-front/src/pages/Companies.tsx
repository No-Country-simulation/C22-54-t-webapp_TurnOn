import { companies } from "@/mocks/companies";

const CompaniesPage = () => {
    return (
        <section className="max-w-[768px] mx-auto my-10 text-center">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-small max-w-md">
                    Estas son algunas de las empresas que confían en nuestro servicio.
                </p>
                <h2 className="text-h2 font-bold font-sans">Empresas Asociadas</h2>
                <p className="max-w-md">
                    Nuestra plataforma es utilizada por empresas líderes en diferentes
                    industrias para optimizar la gestión de turnos y mejorar la experiencia de sus clientes.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {companies.map((company, index) => (
                    <article
                        key={index}
                        className={`flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${company.bg}`}
                    >
                        <img
                            src={company.logo}
                            alt={`Logo de ${company.name}`}
                            className="w-16 h-16 mb-4 object-contain"
                        />
                        <h3 className="text-h3 font-sans font-bold text-black-80">
                            {company.name}
                        </h3>
                        <p className="text-sm text-gray-600">{company.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CompaniesPage;
