export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-blue-600 text-sm font-medium">Smart Context for AI Coding</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center tracking-tight">
            AI writes your code.
            <br />
            We make sure it <span className="text-blue-600">sees everything</span>.
          </h1>

          <div className="mt-10 mb-10 text-lg md:text-xl text-center text-black max-w-3xl mx-auto leading-relaxed font-bold">
            <p>Your AI coding assistant is fast - but blind.</p>
            <p>
              CodeMap understands deeply your project and tells your Coding Assistant which files are involved in each
              prompt.
            </p>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="relative" style={{ minHeight: "177px" }}>
              <iframe
                data-tally-src="https://tally.so/embed/3Nyjz0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="177"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="CodeMap Early Access"
                className="absolute inset-0 w-full"
              ></iframe>
            </div>

            <script
              dangerouslySetInnerHTML={{
                __html: `
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){
                  "undefined"!=typeof Tally?Tally.loadEmbeds():
                  d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){
                    e.src=e.dataset.tallySrc
                  })
                };
                if("undefined"!=typeof Tally) v();
                else if(d.querySelector('script[src="'+w+'"]')==null){
                  var s=d.createElement("script");
                  s.src=w; s.onload=v; s.onerror=v;
                  d.body.appendChild(s);
                }
              `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
