import { InjectionToken } from '@angular/core';

export const QUERY_PARAMS_DEBOUNCE_MS = new InjectionToken<number>(
  'QUERY_PARAMS_DEBOUNCE_MS',
  {
    providedIn: 'root',
    factory: () => 50 // default value
  }
);
