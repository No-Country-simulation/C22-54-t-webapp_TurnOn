import { FaPaypal } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdHistoryEdu, MdOutlineMail } from "react-icons/md";


const AllInOne = () => {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-roboto text-p md:text-p-desktop mt-4">
            Mejora la gestión de tus procesos médicos.
          </p>
          <h2 className="font-poppins font-bold text-h2 md:text-h2-desktop mt-4 mb-4 md:mb-6">
            Todo lo que necesitas en un solo lugar
          </h2>
          <h3 className="font-poppins font-bold text-h3 md:text-h3 mb-4">
            Características imperdibles:
          </h3>
          <p className="font-roboto text-p md:text-p-desktop mt-4">
            TurnON cuenta con una amplia cobertura en Buenos Aires y te permite tener un paneo general de cuál es el universo médico al que puedes optar en la ciudad.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 mt-8">
          <div className="max-w-[587px] max-h-[380px] mx-auto bg-secondary p-5 h-[340px] overflow-hidden mb-3 rounded-2xl	shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-h3 md:text-h3-desktop">
                Pagos en línea
              </h3>
              <div className="flex justify-center gap-3">
              <SiBinance aria-label="Pago con Binance" />
                <FaPaypal aria-label="Pago con PayPal" />
                <SiMastercard aria-label="Pago con Mastercard" />
              </div>
            </div>
            <p className="font-roboto text-p md:text-p-desktop mt-4">
              Permite a los pacientes pagar sus consultas de forma rápida y segura desde cualquier dispositivo, evitando filas y agilizando la experiencia de atención.
            </p>
          </div> {/* Card */}
          <div className="max-w-[587px] max-h-[380px] mx-auto bg-secondary-3 p-5 h-[340px] overflow-hidden mb-3 rounded-2xl	shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-h3 md:text-h3-desktop">
                Filtros de cercanía
              </h3>
              <div className="flex justify-center gap-3">
              <FaLocationDot />
              </div>
            </div>
            <p className="font-roboto text-p md:text-p-desktop mt-4">
              Encuentra profesionales de la salud cerca de tu ubicación con solo un clic. Optimiza tus búsquedas para elegir la opción más accesible y conveniente.            </p>
          </div> {/* Card */}
          <div className="max-w-[587px] max-h-[380px] mx-auto bg-secondary-2 p-5 h-[340px] overflow-hidden mb-3 rounded-2xl	shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-h3 md:text-h3-desktop">
              Disponibilidad 24/7
              </h3>
              <div className="flex justify-center gap-3">
              <FaRegClock />
              </div>
            </div>
            <p className="font-roboto text-p md:text-p-desktop mt-4">
            Gestiona tus citas en cualquier momento del día, sin depender del horario del consultorio. Agenda o modifica tus turnos cuando lo necesites.            </p>
          </div> {/* Card */}
          <div className="max-w-[587px] max-h-[380px] mx-auto bg-secondary p-5 h-[340px] overflow-hidden mb-3 rounded-2xl	shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-h3 md:text-h3-desktop">
              Recordatorios automáticos              </h3>
              <div className="flex justify-center gap-3">
              <MdOutlineMail />
              </div>
            </div>
            <p className="font-roboto text-p md:text-p-desktop mt-4">
            Recibe notificaciones antes de cada cita para que no se te pase ningún turno. Podés optar por recordatorios por llamadas, SMS, emailo Google Calendar.            </p>
          </div> {/* Card */}
          <div className="max-w-[587px] max-h-[380px] mx-auto bg-secondary-2 y p-5 h-[340px] overflow-hidden mb-3 rounded-2xl	shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-poppins font-bold text-h3 md:text-h3-desktop">
              Historial médico accesible              </h3>
              <div className="flex justify-center gap-3">
              <MdHistoryEdu />
              </div>
            </div>
            <p className="font-roboto text-p md:text-p-desktop mt-4">
            Visualizá y actualizá tu historial médico en un solo lugar. Esta función te permite tener toda tu información médica organizada y siempre a mano.            </p>
          </div> {/* Card */}

        </div>
      </div>
    </section>
  );
};

export default AllInOne;
