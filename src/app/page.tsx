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
      <div className="gradient-bg-initial">
        <div>
          <Initial />
        </div>
        <TransactionComponent />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
