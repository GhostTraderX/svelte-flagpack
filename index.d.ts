import { SvelteComponent } from 'svelte';

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
  size?: 's' | 'm' | 'l' | 'S' | 'M' | 'L';
  
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
}

declare class Flag extends SvelteComponent {
  $$prop_def: FlagProps;
}

export default Flag;
