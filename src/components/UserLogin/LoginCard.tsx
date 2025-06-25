import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputFields from './InputFields';
import LoginButton from './LoginButton';
import { ForgotPasswordLink, SignUpLink } from './Links';
import { cn } from '@/lib/utils';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = React.useCallback(() => {
    setIsLoading(true);
    // Simulate API call for login
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={cn('w-[320px]', className)}>
      <Card className="bg-card shadow-md rounded-md p-6">
        <CardHeader className="p-0 mb-8">
          <CardTitle className="text-2xl font-bold text-center text-card-foreground">
            Welcome
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col space-y-6">
            <InputFields />
            <div className="flex justify-end">
              <ForgotPasswordLink />
            </div>
            <LoginButton isLoading={isLoading} onClick={handleLogin} />
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <SignUpLink />
      </div>
    </div>
  );
};

export default LoginCard;
