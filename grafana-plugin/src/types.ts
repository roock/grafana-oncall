export interface OnCallAppSettings {
  onCallApiUrl?: string;
  grafanaUrl?: string;
  license?: string;
}

declare global {
  export interface Window {
    grafanaBootData: any;
    RECAPTCHA_SITE_KEY: string;
    grecaptcha: any;
    dataLayer: any;
    mixpanel: any;
  }
}
