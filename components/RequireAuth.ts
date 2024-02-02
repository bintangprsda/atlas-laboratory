// components/RequireAuth.ts

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '../helpers/auth';

const RequireAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      // Redirect mereka ke halaman login
      router.push('/');
    }
  }, [router]);

  return children;
};

export default RequireAuth;
