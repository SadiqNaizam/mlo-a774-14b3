import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/UserLogin/LoginCard';

/**
 * LoginPage serves as the main entry point for user authentication.
 * It utilizes the MainAppLayout to provide a consistent, centered
 * view, focusing the user's attention on the login process.
 * The core functionality is encapsulated within the LoginCard component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
