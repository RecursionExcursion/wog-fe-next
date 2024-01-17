import Link from "next/link";
import CustomButton from "./custombutton";

export default function ButtonLink(props) {
  const href = props.href;
  const text = props.text;

  return (
    <Link href={href} passHref>
      <CustomButton text={text}/>
    </Link>
  );
}
