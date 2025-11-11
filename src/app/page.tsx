'use client'
import AnimateLinks from "./linksanimation";
import PixelBlast from './bitbackground';


export default function Home() {

  return (
    <div className="font-mono grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PixelBlast
        style={{ width: '100%', height: '100%', position: 'absolute', padding: 0, margin: 0, top: 0, left: 0, zIndex: -1 }}
        variant="square"
        pixelSize={2}
        color="skyblue"
        patternScale={2}
        patternDensity={0.5}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={0.5}
        edgeFade={0.10}
      />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="tracking-widest text-4xl font-bold">
          hey, im saim!
        </div>

        <div className="text-xl font-bold text-wrap">
          im a <AnimateLinks className="text-decoration-line: underline" setColor="yellow" href="https://www.rcc.edu/programs/computer-science.html">computer science student</AnimateLinks> and <AnimateLinks className="text-decoration-line: underline" setColor="skyblue" href="https://github.com/saimdlx">software developer.</AnimateLinks><br></br>
          i currently work for <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://www.tryseatlock.com/">SeatLock</AnimateLinks> as a <AnimateLinks className="text-decoration-line: underline" setColor="palegreen" href="https://www.linkedin.com/in/ahmedsaim2027/">fullstack engineer.</AnimateLinks>
        </div>

      </main>

    </div>
  );
}
