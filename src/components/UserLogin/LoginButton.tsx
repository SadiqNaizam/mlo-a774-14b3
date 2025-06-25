import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoading = false, className, ...props }) => {
  return (
    <Button
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-base font-semibold py-2.5',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Logging in...' : 'Login'}
    </Button>
  );
};

export default LoginButton;
