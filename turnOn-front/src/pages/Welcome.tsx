import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {Clinicas} from '../components/Clinicas'
import ShiftControl from "@/components/welcome/ShiftControl";
import HowItWorks from "@/components/welcome/HowItWorks";

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Clinicas />
      <HowItWorks/>
      <ShiftControl/>
      <Accordion />
    </div>
  );
}
