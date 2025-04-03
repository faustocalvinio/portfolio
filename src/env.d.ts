/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PORTFOLIO_URL: string;
    
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }