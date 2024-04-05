import Image from "next/image";
import {
  Initial,
  Footer,
  ServicesComponent,
  TransactionComponent,
} from "./components";

export default function Home() {
  return (
    <>
      <div>
        <div className="gradient-bg-initial">
          <Initial />
        </div>
        <ServicesComponent />
        <TransactionComponent />
        <Footer />
      </div>
    </>
  );
}
