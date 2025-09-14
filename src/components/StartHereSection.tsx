import { QrCode, Smartphone, CreditCard, ShoppingBag, CheckCircle, Zap, Receipt } from 'lucide-react';

const StartHereSection = () => {
  const steps = [
    {
      icon: QrCode,
      title: 'Scan QR',
      subtitle: 'trends.store',
      badge: 'No queue'
    },
    {
      icon: Smartphone,
      title: 'OTP Login',
      subtitle: 'Mobile verify',
      badge: 'Secure'
    },
    {
      icon: ShoppingBag,
      title: 'Scan Items',
      subtitle: 'Add to cart',
      badge: 'Easy'
    },
    {
      icon: CreditCard,
      title: 'Pay & Invoice',
      subtitle: 'Digital receipt',
      badge: 'Digital invoice'
    },
    {
      icon: CheckCircle,
      title: 'Detag & Exit',
      subtitle: 'Verify & go',
      badge: 'Faster exit'
    }
  ];

  return (
    <section id="start-here" className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Here
            <span className="block text-lg font-normal text-muted-foreground mt-2">
              60-second overview
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Mobile: Vertical layout */}
              <div className="md:hidden bg-white rounded-xl p-6 card-elevated">
                <div className="flex items-center gap-4">
                  <div className="step-indicator">{index + 1}</div>
                  <div className="icon-badge">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop: Horizontal layout */}
              <div className="hidden md:block text-center">
                <div className="bg-white rounded-xl p-6 card-elevated card-interactive">
                  <div className="step-indicator mx-auto mb-3">{index + 1}</div>
                  <div className="icon-badge mx-auto mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.subtitle}</p>
                  <span className="inline-block px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    {step.badge}
                  </span>
                </div>
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="h-2 w-2 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Receipt className="h-4 w-4" />
            Complete shopping in under 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;