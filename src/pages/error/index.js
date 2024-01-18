import TextDiv from "@/components/textdiv";

export default function CustomError() {
  const msg = "Oops... something went wrong while proccessing your request. Please try again.";

  return <TextDiv text={msg} />;
}
