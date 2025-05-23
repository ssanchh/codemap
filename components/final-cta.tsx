export default function FinalCTA() {
  return (
    <section className="py-20 px-6 md:px-10 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Tired of AI that doesn't get your codebase?</h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join thousands of developers who've made AI coding smarter with CodeMap's intelligent context injection.
        </p>

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
        </div>

        <p className="text-gray-600 text-sm mt-4">Free during beta • No credit card required</p>
      </div>
    </section>
  )
}
