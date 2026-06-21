'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    // Prevent smooth animation on page navigation
    html.style.scrollBehavior = 'auto';

    // Instantly go to top
    window.scrollTo(0, 0);

    // Restore original behavior
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    });
  }, [pathname]);

  return null;
}