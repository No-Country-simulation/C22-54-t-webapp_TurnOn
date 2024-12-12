import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {Clinicas} from '../components/Clinicas'
import ShiftControl from "@/components/home/ShiftControl";
import HowItWorks from "@/components/home/HowItWorks";
import AllInOne from "@/components/home/AllInOne";
import Benefits from "@/components/home/Benefits";

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
