import AnimateLinks from "./linksanimation";
import DotGrid from "./bitbackground";


export default function Home() {

  return (

      <div className="font-mono grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <DotGrid
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        dotSize={10}
        gap={15}
        baseColor="#000000ff"
        activeColor="#000000ff"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          
          <div className="tracking-wide text-4xl font-bold">
            hey, im saim!
          </div>

          <div className="text-xl font-bold text-wrap">
            im a <AnimateLinks className="text-decoration-line: underline" setColor="yellow" href="https://www.rcc.edu/programs/computer-science.html">computer science student</AnimateLinks> and <AnimateLinks className="text-decoration-line: underline" setColor="skyblue" href="https://github.com/saimdlx">software developer.</AnimateLinks><br></br>
            i currently work for <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://truehue.app/">trueHue Vision LLC</AnimateLinks> as a <AnimateLinks className="text-decoration-line: underline" setColor="palegreen" href="https://www.linkedin.com/in/ahmedsaim2027/">web intern.</AnimateLinks>
          </div>

        </main>
      </div>
  );
}
