import React from 'react';
import { cn } from '@/lib/utils';

export const ForgotPasswordLink: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a
      href="#"
      className={cn(
        'text-sm text-muted-foreground hover:text-primary transition-colors',
        className
      )}
    >
      Forgot Password
    </a>
  );
};

export const SignUpLink: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      Don't have an account?{' '}
      <a href="#" className="font-semibold text-primary hover:underline">
        SignUp
      </a>
    </p>
  );
};
