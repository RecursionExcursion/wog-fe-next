import TextDiv from "@/components/textdiv";
import photo from "../../public/KB_BB.png";

export default function Home() {
  const text =
    "Welcome to WorkOut Generator! To create a workout please click the 'Create workout' button, input your parameters and get after it!";

  const kb_bb = "./KB_BB.png";
  return (
    <div className="flex flex-col justify-center  items-center gap-14">
      <TextDiv text={text} />
      <img className="w-[50%]" src={kb_bb} alt="Description of the image" />
    </div>
  );
}
