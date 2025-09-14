import { useState } from 'react';
import { ChevronRight, Users, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import associateImage from '@/assets/associate-helping.jpg';
import detagImage from '@/assets/detag-verification.jpg';
import managerImage from '@/assets/manager-huddle.jpg';

const RoleGuidesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const roles = [
    {
      title: 'Floor Associate',
      subtitle: 'Pitch in 10s • Help first scan • Hand-off to Detag',
      image: associateImage,
      icon: Users,
      steps: [
        'Approach customers browsing without bags/baskets',
        'Pitch: "Skip the line—scan & pay on your phone"',
        'Help with first QR scan and app login',
        'Show how to scan first item barcode',
        'Direct to detag station after payment',
        'Follow up: "How was your experience?"'
      ]
    },
    {
      title: 'Detag Station',
      subtitle: 'Verify invoice • Match items • Ask NPS',
      image: detagImage,
      icon: Shield,
      steps: [
        'Check digital invoice on customer phone',
        'Verify store code, amount, and timestamp',
        'Count items and match with invoice',
        'Remove security tags efficiently',
        'Ask NPS: "How would you rate this experience?"',
        'Offer help with app for next visit'
      ]
    },
    {
      title: 'Store Manager',
      subtitle: 'Preflight • KPIs • Escalations',
      image: managerImage,
      icon: BarChart3,
      steps: [
        'Morning setup: QR standees, wifi, staff briefing',
        'Monitor adoption rates and conversion',
        'Track payment success and failure rates',
        'Handle escalations from customers/staff',
        'Weekly review of NPS and feedback',
        'Coordinate with tech support for issues'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Role Guides
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick reference for every team member's responsibilities
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="bg-white rounded-xl overflow-hidden card-elevated card-interactive">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 photo-overlay" />
                  <div className="absolute top-4 left-4">
                    <div className="icon-badge bg-white/20 backdrop-blur border-white/30">
                      <role.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{role.subtitle}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="w-full flex items-center justify-between"
                  >
                    See steps
                    <ChevronRight className={`h-4 w-4 transition-transform ${expandedCard === index ? 'rotate-90' : ''}`} />
                  </Button>

                  {/* Expanded Steps */}
                  {expandedCard === index && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                      <ul className="space-y-2">
                        {role.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs text-primary font-medium">{stepIndex + 1}</span>
                            </div>
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleGuidesSection;