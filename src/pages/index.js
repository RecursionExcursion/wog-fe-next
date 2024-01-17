import Image from "next/image";
import { Inter } from "next/font/google";
import TextDiv from "@/components/textdiv";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const text = "Welcome to WorkOut Generator! To create a workout please click the 'Create workout' button, input your parameters and get after it!"

  return (
    <main>
      <TextDiv text={text} />
    </main>
  );
}
