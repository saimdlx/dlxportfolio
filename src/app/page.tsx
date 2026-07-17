'use client'
export default function Home() {

  return (
    <main className="flex flex-col h-screen items-center justify-center p-12 text-sm">
      <div className="flex flex-col justify-start items-start w-full max-w-screen-lg gap-6 h-full min-h-0">
        <div className="relative w-full overflow-hidden aspect-[3/2] max-h-[55vh] min-h-0">
          <img className="object-cover absolute h-full w-full inset-0px" src="/finearts.jpg"/> 
        </div>
        <div className="flex flex-col justify-between md:grow gap-y-8 shrink-0">
          <div className="md:grid grid-cols-1 md:grid-cols-10 gap-3 md:gap-6 h-full md:grid-rows-1 flex flex-col">
            <div className="md:col-span-3 flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="font-light tracking-tighter text-xl leading-8">Saim Ahmed</span>
                <span className="font-light tracking-tighter text-sm leading-8">&#123;<a href="https://www.linkedin.com/in/ssaim/" target="_blank" rel="noopener noreferrer">LinkedIn</a> - <a href="https://github.com/saimdlx" target="_blank" rel="noopener noreferrer">GitHub</a>&#125;</span>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col"></div>
            <div className="col-span-2 md:flex flex-col text-xl tracking-tighter font-light leading-8 hidden">Insatiably curious about technology.</div>
            <div className="flex flex-col col-span-3 tracking-wide leading-6 font-light gap-4 leading-[1.6rem] tracking-[-0.0067rem]">
              <p>
                I'm an aspiring software engineer. I attend UC Berkeley, and currenly work at&nbsp;
                  <a className="underline italic font-normal" href="https://cadabrai.com/" rel="noopener noreferrer" target="_blank">Cadabra</a>. 
              </p>
              <p>
                In my free time, I enjoy photography, drumming, and skateboarding.
              </p>
              <p>I'm interested in working on problems that intersect hardware and software; technology that seeks to be beautiful and efficient.</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-8">
            <span className="font-light tracking-tight text-sm">1629saim[at]gmail[dot]com</span>
            <span className="font-light tracking-tight text-sm">San Francisco, California</span>
          </div>
        </div>
      </div>
    </main>
  );
}