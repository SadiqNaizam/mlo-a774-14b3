import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is typically a page or a main feature component.
   */
  children: React.ReactNode;
  /**
   * Optional className to apply to the main container for custom styling.
   */
  className?: string;
}

/**
 * MainAppLayout provides the primary page structure.
 * It uses Flexbox to center its content both vertically and horizontally,
 * making it ideal for focused views like login or sign-up pages.
 * The background color is inherited from the global styles applied to the body.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
