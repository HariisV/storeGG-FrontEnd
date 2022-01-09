import SideBar from "../../components/organism/SideBar";
import TransactionContent from "../../components/organism/TransactionContent";

export default function transaction() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
