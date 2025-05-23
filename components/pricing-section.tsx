import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Indie Dev",
      price: "$19",
      period: "/month",
      description: "Perfect for solo developers and small projects",
      features: [
        "RepoScope context mapping",
        "GuardRails test validation",
        "Up to 3 repositories",
        "Email support",
        "Local processing only",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Team",
      price: "$12",
      period: "/seat/month",
      description: "For development teams and growing companies",
      features: [
        "Everything in Indie Dev",
        "Unlimited repositories",
        "Team collaboration features",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      period: "",
      description: "Custom solutions for large organizations",
      features: [
        "Everything in Team",
        "On-premise deployment",
        "Custom security policies",
        "Dedicated support",
        "SLA guarantees",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Choose the plan that fits your team size and needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-xl border ${
                plan.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-700"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 ${
                  plan.popular ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
