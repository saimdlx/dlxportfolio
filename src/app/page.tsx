import Animato from "./linksanimation";


export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <div className="tracking-wide text-5xl font-bold">
        hello,<br></br>i'm saim ahmed.
      </div>

      <div className="text-xl font-bold text-wrap ">
        i'm a computer science student and software developer.<br></br>
        i currently work for <Animato href = "https://truehue.app/">trueHue Vision LLC</Animato> as a web intern.
      </div>

      </main>
    </div>
  );
}
