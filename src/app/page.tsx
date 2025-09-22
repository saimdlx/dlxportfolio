import Animato from "./linksanimation";


export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <div className="tracking-wide text-5xl font-bold">
        hello,<br></br>im saim ahmed.
      </div>

      <div className="text-xl font-bold text-wrap ">
        im a computer science student and <Animato setColor="skyblue" href="https://github.com/saimdlx">software developer.</Animato><br></br>
        i currently work for <Animato setColor="orchid" href = "https://truehue.app/">trueHue Vision LLC</Animato> as a <Animato setColor="palegreen" href="https://www.linkedin.com/in/ahmedsaim2027/">web intern.</Animato>
      </div>

      </main>
    </div>
  );
}
