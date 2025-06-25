import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface UnderlinedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const UnderlinedInput: React.FC<UnderlinedInputProps> = ({ id, label, ...props }) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id} className="text-sm font-normal text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        className={cn(
          'h-auto bg-transparent p-0 border-0 border-b border-input rounded-none shadow-none text-base',
          'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary'
        )}
        {...props}
      />
    </div>
  );
};

const InputFields: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <div className="space-y-6">
      <UnderlinedInput
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />
      <UnderlinedInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
    </div>
  );
};

export default InputFields;
