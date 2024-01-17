import TextDiv from "@/components/textdiv";

export default function Home() {
  const text = "Welcome to WorkOut Generator! To create a workout please click the 'Create workout' button, input your parameters and get after it!"

  return (
    <main className="h-full">
      <TextDiv text={text} />
    </main>
  );
}
