import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function useScrollSnap() {
  const pathname = usePathname();

  return useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);
}
