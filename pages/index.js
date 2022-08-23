import MapComp from "./about";
import dynamic from "next/dynamic";

export default function Home() {
  const MyAwesomeMap = dynamic(() => import("./about/index"), { ssr: false });
  return (
    <div>
      <MyAwesomeMap />
    </div>
  );
}
