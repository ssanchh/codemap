import EmailForm from "./email-form"

export default function BottomCTA() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join 500+ devs bringing clarity to their AI builds</h2>
          <p className="text-2xl font-normal text-black max-w-3xl mx-auto mb-10">
            Get early access to CodeMap and transform how you build with AI.
          </p>
          <div className="flex justify-center">
            <EmailForm buttonText="Join the Waitlist" placeholder="you@example.com" />
          </div>
        </div>
      </div>
    </section>
  )
}
