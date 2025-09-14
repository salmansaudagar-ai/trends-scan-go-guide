import { Search, Menu, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-14 items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <QrCode className="h-6 w-6 text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-primary">TRENDS</span>
            <span className="text-xs text-muted-foreground">Scan & Go</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search help topics..."
              className="h-8 w-full rounded-md bg-muted pl-8 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
        </div>

        {/* Menu */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;