import TextDiv from "@/components/textdiv";
import { useRouter } from "next/router";

export default function APIRequestError() {
  const router = useRouter();
  const msg = "A workout out could not be created by the given parameters. Please trying loosening the parameters or allow repeating exercises.";

  return <TextDiv text={msg} />;
}
