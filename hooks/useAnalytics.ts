'use client';

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    category?: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackRegisterClick = (source: string) => {
    trackEvent('register_click', 'conversion', source);
  };

  return {
    trackEvent,
    trackRegisterClick,
  };
};
