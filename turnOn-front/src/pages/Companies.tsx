
const CompaniesPage = () => {
    const companies = [
        {
            name: "Mercado Libre",
            logo: "https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486261/TurnOn/i2tutqvr4hhul6huu3l7.jpg",
            testimonial:
                "\"Siempre se me complicaba coordinar las citas médicas de mis hijos. Ahora recibo recordatorios automáticos y puedo gestionar todo desde mi celular, incluso en horarios que antes eran imposibles. Me solucionó la vida.\"",
            person: "Silvana Iglesias",
            role: "CEO en Mercado Libre",
        },
        {
            name: "Beta Health",
            logo: "https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486286/TurnOn/zup2gaboepf2bec7vbnj.jpg",
            testimonial:
                "\"Antes dependía de mis hijos para llamar a los consultorios, pero ahora puedo buscar y agendar turnos yo mismo. Es fácil de usar y me siento mucho más independiente.\"",
            person: "Lucas Torres",
            role: "Profesor y escritor",
        },
        {
            name: "Gamma Corp",
            logo: "https://res.cloudinary.com/di0cvbfdb/image/upload/v1732486284/TurnOn/gfabi7q6ik3s3lgypmuo.png",
            testimonial:
                "\"Con mi agenda tan ajustada, agendar turnos siempre era un problema. Desde que uso este sistema, puedo buscar médicos cerca de casa y pagar todo online en minutos. ¡Es súper práctico y eficiente!\"",
            person: "Mariano González",
            role: "Desarrollador de software",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto my-10 px-4 text-center">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-small max-w-md">
                    Estas son algunas de las empresas que confían en nuestra plataforma.
                </p>
                <h2 className="text-h2 font-bold font-sans">Empresas Asociadas</h2>
                <p className="max-w-md">
                    Nos enorgullece trabajar con líderes en sus industrias, quienes mejoran su gestión de turnos y aumentan la satisfacción de sus clientes gracias a nuestro servicio.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl shadow-lg bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={company.logo}
                            alt={`Logo de ${company.name}`}
                            className="w-32 h-32 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-h3 font-sans font-bold text-black-80">
                            {company.name}
                        </h3>
                        <p className="text-gray-600 italic mt-4">{company.testimonial}</p>
                        <p className="text-sm text-gray-700 mt-2">
                            <strong>{company.person}</strong> <br />
                            {company.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompaniesPage;
