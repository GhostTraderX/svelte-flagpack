import type { Component } from 'svelte';

export interface FlagProps {
  /**
   * The country code of the flag to display
   * @default "NL"
   * @see https://flagpack.xyz/docs/flag-index/
   */
  code?: string;
  
  /**
   * The size of the flag
   * @default "m"
   */
  size?: 's' | 'm' | 'l';
  
  /**
   * The gradient style to apply to the flag
   * @default ""
   */
  gradient?: '' | 'top-down' | 'real-linear' | 'real-circular';
  
  /**
   * Whether the flag should have a border
   * @default true
   */
  hasBorder?: boolean;
  
  /**
   * Whether the flag should have a drop shadow
   * @default false
   */
  hasDropShadow?: boolean;
  
  /**
   * Whether the flag should have border radius
   * @default true
   */
  hasBorderRadius?: boolean;
  
  /**
   * Additional CSS classes to apply to the flag
   */
  class?: string;

  /**
   * Base URL for flag assets
   * @default "https://cdn.jsdelivr.net/npm/flagpack-core@2.0.0/svg"
   * @example "/node_modules/svelte-flagpack/dist/flags" for local development
   */
  flagsBaseUrl?: string;
}

// Svelte 5 component typing
declare const Flag: Component<FlagProps>;

export default Flag;
export { Flag };
