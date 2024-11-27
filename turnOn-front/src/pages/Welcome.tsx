import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {Clinicas} from '../components/Clinicas'
import ShiftControl from "@/components/ShiftControl/ShiftControl";

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Clinicas />
      <ShiftControl></ShiftControl>
      <Accordion />
    </div>
  );
}
