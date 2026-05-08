import NormanDoor from "../components/NormanDoor";
import Title from "../components/Title";
import ASG from "../components/ASG";
import CoreConcepts from "../components/CoreConcepts";
import Tree from "../components/Tree";
import PsychologyOfBlame from "../components/PoB";
import MentalModels from "../components/MentalModels";
import DesignBusiness from "../components/DesignBusiness";
import Credit from "../components/Credit";

export default function Workshop() {
  return (
    <main className="app-page">
      <NormanDoor />
      <Title />
      <ASG />
      <CoreConcepts />
      <Tree />
      <PsychologyOfBlame />
      <MentalModels />
      <DesignBusiness />
      <Credit />
    </main>
  );
}
