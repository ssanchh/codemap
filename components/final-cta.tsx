import EmailForm from "./email-form"

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 md:px-10 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Tired of babysitting AI?</h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join thousands of developers who've made AI coding safe and reliable with RepoScope + GuardRails.
        </p>
        <EmailForm
          buttonText="Get Early Access"
          placeholder="Enter your email for beta access"
          className="max-w-md mx-auto"
        />
        <p className="text-gray-600 text-sm mt-4">Free during beta • No credit card required</p>
      </div>
    </section>
  )
}
