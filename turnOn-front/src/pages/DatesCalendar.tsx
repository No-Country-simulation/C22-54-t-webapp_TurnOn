import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import locale plugin for Day.js
import "dayjs/locale/es";
dayjs.locale("es");

interface Event {
  title: string;
  description: string;
  start: Date;
  end: Date;
}

export default function DatesCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState<Event[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedSlot({ start, end });
    setShowDialog(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (selectedSlot) {
      const newEvent: Event = {
        title: formData.title,
        description: formData.description,
        start: selectedSlot.start,
        end: selectedSlot.end,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    setShowDialog(false);
    setFormData({ title: "", description: "" });
  };

  const formatDate = (date: Date) => {
    return dayjs(date).format("D [de] MMMM [de] YYYY, h:mm A");
  };

  return (
    <div className="h-screen m-10">
      <BigCalendar
        localizer={localizer}
        events={events}
        views={["month", "week"]}
        onSelectSlot={handleSelectSlot}
        selectable
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
      />

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>Agregar Evento</DialogHeader>
          {selectedSlot && (
            <div className="space-y-2">
              <p>
                <strong>Inicio:</strong> {formatDate(selectedSlot.start)}
              </p>
              <p>
                <strong>Fin:</strong> {formatDate(selectedSlot.end)}
              </p>
            </div>
          )}
          <div className="space-y-4 mt-4">
            <Input
              name="title"
              placeholder="Título del evento"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              name="description"
              placeholder="Descripción del evento"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setShowDialog(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
