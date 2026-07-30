import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets scroll position to top on every route change.
 * Prevents the browser from restoring the previous scroll
 * position when navigating between pages (e.g. clicking a
 * service card from the middle of the homepage).
 */
export function useRouteScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
}
