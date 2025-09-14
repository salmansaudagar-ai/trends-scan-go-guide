import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StartHereSection from '@/components/StartHereSection';
import RoleGuidesSection from '@/components/RoleGuidesSection';
import TroubleshootingSection from '@/components/TroubleshootingSection';
import QuizSection from '@/components/QuizSection';
import { Shield, Phone, Clock, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StartHereSection />
        <RoleGuidesSection />
        <TroubleshootingSection />
        
        {/* SOPs & Safety Quick Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Safety & Privacy */}
              <div className="bg-white rounded-xl p-6 card-elevated text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Safety & Privacy</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CCTV monitors detag station</li>
                  <li>• Never share customer data</li>
                  <li>• Verify ID for high-value items</li>
                  <li>• Report suspicious activity</li>
                </ul>
              </div>

              {/* Escalations */}
              <div className="bg-white rounded-xl p-6 card-elevated text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Escalations</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>L1 Store: <span className="font-mono">*Store Champion*</span></div>
                  <div>L2 Tech: <span className="font-mono">1800-XXX-XXXX</span></div>
                  <div>P0 Critical: <span className="font-mono text-destructive">Emergency Line</span></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl p-6 card-elevated text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Target KPIs</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Adoption: <span className="text-success font-medium">15%+</span></div>
                  <div>NPS: <span className="text-success font-medium">8+</span></div>
                  <div>Checkout: <span className="text-success font-medium">&lt;3 min</span></div>
                  <div>Success: <span className="text-success font-medium">95%+</span></div>
                </div>
              </div>
            </div>

            {/* Golden Rules */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-success/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Golden Rules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Don't detag without verified invoice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No double charge on 'pending'</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Match item count & amount</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <QuizSection />
        
        {/* Footer */}
        <footer className="py-8 px-4 bg-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">T</span>
              </div>
              <div>
                <div className="font-bold">TRENDS Scan & Go</div>
                <div className="text-xs text-white/80">Powered by Reliance Retail</div>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Making retail smarter, one scan at a time
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;