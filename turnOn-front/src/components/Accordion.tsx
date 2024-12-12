import * as Accordions from "@radix-ui/react-Accordion";
import { MdChevronRight } from "react-icons/md";

export default function Accordion() {
  return (
    <div className="w-full max-w-3xl mx-auto px-10 py-16">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-2">
          Estas son las preguntas frecuentes.
        </p>
        <h2 className="text-3xl font-bold">¿Aún con dudas?</h2>
      </div>

      <Accordions.Root type="single" collapsible className="space-y-4">
        <AccordionsItem value="item-1" question="¿Cómo reservar un turno?">
          Reservar un turno es muy sencillo: ingresá a nuestra plataforma, buscá
          al profesional que necesitás usando los filtros disponibles y
          seleccioná el horario que mejor se adapte a vos. Confirmá tu cita con
          un solo clic y recibí la información directamente en tu email o SMS.
        </AccordionsItem>

        <AccordionsItem
          value="item-2"
          question="¿Puedo cancelar o reprogramar una cita?"
        >
          Sí, podés cancelar o reprogramar tu cita directamente desde tu cuenta.
          Solo necesitás acceder a la sección de "Mis turnos", seleccionar la
          cita que querés modificar y elegir una nueva fecha u hora. Siempre te
          avisaremos si hay costos asociados a la cancelación.
        </AccordionsItem>

        <AccordionsItem
          value="item-3"
          question="¿Es seguro ingresar mis datos médicos?"
        >
          Absolutamente, la seguridad de tus datos es nuestra prioridad.
          Contamos con sistemas de encriptación avanzados que protegen toda tu
          información. Además, cumplimos con las normativas de privacidad médica
          vigentes para garantizar tu tranquilidad.
        </AccordionsItem>

        <AccordionsItem
          value="item-4"
          question="¿Puedo solicitar citas para terceros?"
        >
          Sí, podés agendar turnos para familiares o amigos fácilmente. Solo
          necesitás seleccionar la opción de "Cita para terceros" y completar
          los datos del paciente. Es ideal para gestionar citas médicas de tus
          seres queridos de manera práctica, rápida y a cualquier hora.
        </AccordionsItem>

        <AccordionsItem
          value="item-5"
          question="¿Qué pasa si el médico cambia la fecha de turno?"
        >
          Si el profesional modifica tu turno, recibirás una notificación
          inmediata por email o SMS con los detalles actualizados. Podrás
          aceptar el nuevo horario o buscar otro disponible desde tu cuenta. Así
          te asegurás de que siempre estés al tanto de cualquier cambio.
        </AccordionsItem>
      </Accordions.Root>
    </div>
  );
}

function AccordionsItem({
  children,
  value,
  question,
}: {
  children: React.ReactNode;
  value: string;
  question: string;
}) {
  return (
    <Accordions.Item value={value} className="border-b border-gray-200">
      <Accordions.Trigger className="group flex w-full items-center justify-between py-4 text-left text-base font-medium transition-colors hover:text-blue-600">
        {question}
        <MdChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-90" />
      </Accordions.Trigger>
      <Accordions.Content className="data-[state=open]:animate-Accordions-down data-[state=closed]:animate-Accordions-up overflow-hidden text-gray-500">
        <div className="pb-4 pt-1">{children}</div>
      </Accordions.Content>
    </Accordions.Item>
  );
}
