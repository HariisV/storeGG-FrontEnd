import OverViewContent from "../../components/organism/OverViewContent";
import SideBar from "../../components/organism/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverViewContent />
    </section>
  );
}
