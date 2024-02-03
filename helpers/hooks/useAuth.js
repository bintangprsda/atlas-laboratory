import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      router.push('/');
    }
  }, [router]);
}

export default useAuth;
