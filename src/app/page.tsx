'use client'
import AnimateLinks from "../components/linksanimation";
import PixelBlast from '../components/bitbackground';
import PixelTrail from '../components/PixelTrail';

export default function Home() {

  return (
    <div className="font-mono grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <PixelBlast
        style={{ width: '100%', height: '100%', position: 'absolute', padding: 0, margin: 0, top: 0, left: 0, zIndex: -1 }}
        variant="square"
        pixelSize={2}
        color="magenta"
        patternScale={2}
        patternDensity={0.5}
        pixelSizeJitter={0.5}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        speed={1}
        edgeFade={0.10}
      />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="text-xl font-bold place-self-center-safe">
          <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://github.com/saimdlx">GitHub</AnimateLinks> - <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://devpost.com/saimdlx?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">DevPost</AnimateLinks> - <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://www.linkedin.com/in/ssaim/">LinkedIn</AnimateLinks> - <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="">Blog (WIP)</AnimateLinks>
        </div>


        <div className="tracking-widest text-4xl font-bold place-self-center-safe">
          hey, im saim!
        </div>

        <div className="text-xl font-bold text-wrap place-self-center-safe">
          im a computer science student and aspiring software engineer.<br></br>
          i currently work for <AnimateLinks className="text-decoration-line: underline" setColor="orchid" href="https://toolhouse.ai/">ToolHouse</AnimateLinks> as an ambassador!
        </div>

      </main>

    </div>
  );
}
