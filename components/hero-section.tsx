import EmailForm from "./email-form"

export default function HeroSection() {
  return (
    <section className="pt-48 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">Bring Sanity to AI Coding</h1>
          <p className="text-lg md:text-xl font-normal text-black max-w-4xl mb-12">
            CodeMap generates clear Documentation for your AI Coding Tools. Avoid hallucinations, broken logic, or
            confusion.
          </p>
          <EmailForm />
        </div>
      </div>
    </section>
  )
}
