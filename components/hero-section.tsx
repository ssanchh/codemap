import EmailForm from "./email-form"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-blue-600 text-sm font-medium">RepoScope + GuardRails</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center tracking-tight">
            AI writes your code.
            <br />
            We make sure it <span className="text-blue-600">actually works</span>.
          </h1>

          <div className="mt-10 text-lg md:text-xl text-center text-black max-w-3xl mx-auto leading-relaxed font-bold">
            <p>Your AI Coding assistant is fast - but blind.</p>
            <p>RepoScope makes sure it sees the right files.</p>
            <p>GuardRails runs your tests and stops broken code.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-16">
            <EmailForm buttonText="Join the Waiting List" placeholder="Enter your email" />
          </div>
        </div>
      </div>
    </section>
  )
}
