import Image from "next/image";
import { Welcome, Footer, Services, Transactions } from "./components";

export default function Home() {
  return (
    <>
      <div>
        <div className="gradient-bg-welcome">
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  );
}
