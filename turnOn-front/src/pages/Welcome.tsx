import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {Clinicas} from '../components/Clinicas'

export default function Welcome() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Clinicas />
      <Accordion />
    </div>
  );
}
