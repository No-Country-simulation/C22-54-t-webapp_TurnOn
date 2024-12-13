import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

export default function DatesCalendar() {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <div className="h-screen m-10">
      <Calendar
        localizer={localizer}
        //   events={myEventsList}
        views={["month", "week"]}
        //   components={components}
        //   onSelectEvent={handleSelectEvent}
        //   onSelectSlot={handleSelectSlot}
        selectable
      />
    </div>
  );
}
