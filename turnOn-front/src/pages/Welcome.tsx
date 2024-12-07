import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {Clinicas} from '../components/Clinicas'
import ShiftControl from "@/components/welcome/ShiftControl";
import HowItWorks from "@/components/welcome/HowItWorks";
import AllInOne from "@/components/welcome/AllInOne";
import Benefits from "@/components/welcome/Benefits";

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Benefits/>
      <Clinicas />
      <HowItWorks/>
      <AllInOne></AllInOne>
      <ShiftControl/>
      <Accordion />
    </div>
  );
}
