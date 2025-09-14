import { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, CreditCard, Receipt, Smartphone, Wifi, ChevronDown } from 'lucide-react';

const TroubleshootingSection = () => {
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null);

  const issues = [
    {
      title: "Can't scan QR",
      icon: Smartphone,
      color: "text-warning",
      steps: [
        { text: "Check phone camera permissions", status: "check" },
        { text: "Ensure QR code is clean and well-lit", status: "check" },
        { text: "Try typing trends.store manually", status: "arrow" },
        { text: "Still not working? Call L1 Support", status: "escalate" }
      ]
    },
    {
      title: "OTP not received",
      icon: Clock,
      color: "text-warning", 
      steps: [
        { text: "Wait 60 seconds, then resend", status: "check" },
        { text: "Check SMS/network connectivity", status: "check" },
        { text: "Verify mobile number is correct", status: "arrow" },
        { text: "Use alternative number", status: "escalate" }
      ]
    },
    {
      title: "Item won't scan",
      icon: Receipt,
      color: "text-destructive",
      steps: [
        { text: "Clean barcode area", status: "check" },
        { text: "Try manual barcode entry", status: "check" },
        { text: "Check if item is Scan & Go eligible", status: "arrow" },
        { text: "Remove from cart, scan at POS", status: "escalate" }
      ]
    },
    {
      title: "Payment pending",
      icon: CreditCard,
      color: "text-warning",
      steps: [
        { text: "Wait 2-3 minutes for processing", status: "check" },
        { text: "Check bank app for deduction", status: "check" },
        { text: "If money deducted, proceed to detag", status: "arrow" },
        { text: "If failed, retry payment", status: "escalate" }
      ]
    },
    {
      title: "Invoice not received",
      icon: Receipt,
      color: "text-destructive",
      steps: [
        { text: "Check SMS and email", status: "check" },
        { text: "Look in app order history", status: "check" },
        { text: "Show payment confirmation at detag", status: "arrow" },
        { text: "Generate manual receipt", status: "escalate" }
      ]
    },
    {
      title: "Network issues",
      icon: Wifi,
      color: "text-destructive",
      steps: [
        { text: "Switch to store WiFi", status: "check" },
        { text: "Try mobile data", status: "check" },
        { text: "Restart app", status: "arrow" },
        { text: "Continue at POS counter", status: "escalate" }
      ]
    }
  ];

  const errorCodes = [
    { code: "E001", meaning: "Network timeout" },
    { code: "E002", meaning: "Payment gateway error" },
    { code: "E003", meaning: "Invalid barcode" },
    { code: "E004", meaning: "Item not found" },
    { code: "E005", meaning: "Store system offline" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'check':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'arrow':
        return <div className="w-4 h-4 bg-primary rounded-full" />;
      case 'escalate':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Troubleshooting
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick solutions for common customer issues
          </p>
        </div>

        {/* Issue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white rounded-xl card-elevated">
              <button
                onClick={() => setExpandedIssue(expandedIssue === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`icon-badge ${issue.color}`}>
                    <issue.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{issue.title}</h3>
                    <p className="text-xs text-muted-foreground">Tap for solution</p>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedIssue === index ? 'rotate-180' : ''}`} />
              </button>

              {expandedIssue === index && (
                <div className="px-4 pb-4 animate-fade-in-up">
                  <div className="space-y-2">
                    {issue.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                        {getStatusIcon(step.status)}
                        <span className="text-sm text-foreground flex-1">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Error Codes */}
        <div className="bg-white rounded-xl p-6 card-elevated">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Common Error Codes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {errorCodes.map((error, index) => (
              <div key={index} className="flex flex-col items-center p-3 bg-secondary/30 rounded-lg">
                <span className="font-mono font-bold text-sm text-primary">{error.code}</span>
                <span className="text-xs text-muted-foreground text-center">{error.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TroubleshootingSection;