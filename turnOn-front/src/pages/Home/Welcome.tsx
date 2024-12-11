import Accordion from "./Accordion";
import Header from "../../components/Header";
import {Clinicas} from './Clinicas'
import ShiftControl from "@/pages/Home/ShiftControl";
import HowItWorks from "@/pages/Home/HowItWorks";
import { Navbar } from "@/components/Navbar";

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Navbar/>
      <Header />
      <Clinicas />
      <HowItWorks/>
      <ShiftControl/>
      <Accordion />
    </div>
  );
}
