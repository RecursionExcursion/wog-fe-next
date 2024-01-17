import Link from "next/link";

export default function ButtonLink(props) {
  const href = props.href;
  const text = props.text;

  return (
    <Link href={href} passHref>
      <button className="bg-gray-800 text-teal-500 px-10 py-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300 hover:text-teal-600">
        {text}
      </button>
    </Link>
  );
}
