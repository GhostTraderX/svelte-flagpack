<script lang="ts">
  interface FlagProps {
    code?: string;
    size?: 's' | 'm' | 'l';
    gradient?: '' | 'top-down' | 'real-linear' | 'real-circular';
    hasBorder?: boolean;
    hasDropShadow?: boolean;
    hasBorderRadius?: boolean;
    class?: string;
  }

  let {
    code = 'NL',
    size = 'm',
    gradient = '',
    hasBorder = true,
    hasDropShadow = false,
    hasBorderRadius = true,
    class: className = ''
  }: FlagProps = $props();

  const lower = (q: string): string => q.toLowerCase();
  
  // Use $derived for reactive values
  const normalizedGradient = $derived(lower(gradient));
  const normalizedSize = $derived(lower(size));

  // Dynamically construct the flag URL
  // Note: Flags are pre-generated at build time into dist/flags/ directory
  // This path is relative to where the component is used in the consuming application
  const flagUrl = $derived(`./dist/flags/${normalizedSize}/${code}.svg`);
</script>

<div
  class={`flag ${normalizedGradient} size-${normalizedSize} ${hasBorder ? 'border' : ''} ${hasDropShadow ? 'drop-shadow' : ''} ${hasBorderRadius ? 'border-radius' : ''} ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`}
>
  <img src={flagUrl} alt={`Flag of ${code}`} />
</div>

<style>
  .flag {
    display: inline-block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    align-items: center;
  }

  .flag img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .flag.size-s {
    width: 16px;
    height: 12px;
  }

  .flag.size-s.drop-shadow {
    box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.1);
  }

  .flag.size-s.border-radius {
    border-radius: 1px;
  }

  .flag.size-s.border-radius.border::before {
    border-radius: 1px;
  }

  .flag.size-m {
    width: 20px;
    height: 15px;
  }

  .flag.size-m.drop-shadow {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .flag.size-m.border-radius {
    border-radius: 1.5px;
  }

  .flag.size-m.border-radius.border::before {
    border-radius: 1.5px;
  }

  .flag.size-l {
    width: 32px;
    height: 24px;
  }

  .flag.size-l.drop-shadow {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  }

  .flag.size-l.border-radius {
    border-radius: 2px;
  }

  .flag.size-l.border-radius.border::before {
    border-radius: 2px;
  }

  .flag.border::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    mix-blend-mode: overlay;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  .flag.top-down::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    mix-blend-mode: overlay;
    box-sizing: border-box;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);
  }

  .flag.real-linear::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    mix-blend-mode: overlay;
    box-sizing: border-box;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(39, 39, 39, 0.22) 11%,
      rgba(255, 255, 255, 0.3) 27%,
      rgba(0, 0, 0, 0.24) 41%,
      rgba(0, 0, 0, 0.55) 52%,
      rgba(255, 255, 255, 0.26) 63%,
      rgba(0, 0, 0, 0.27) 74%,
      rgba(255, 255, 255, 0.3) 100%
    );
  }

  .flag.real-circular::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    mix-blend-mode: overlay;
    box-sizing: border-box;
    background: radial-gradient(
          50% 36%,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(0, 0, 0, 0.24) 11%,
          rgba(0, 0, 0, 0.55) 17%,
          rgba(255, 255, 255, 0.26) 22%,
          rgba(0, 0, 0, 0.17) 27%,
          rgba(255, 255, 255, 0.28) 31%,
          rgba(255, 255, 255, 0) 37%
        )
        center calc(50% - 8px) / 600% 600%,
      radial-gradient(
          50% 123%,
          rgba(255, 255, 255, 0.3) 25%,
          rgba(0, 0, 0, 0.24) 48%,
          rgba(0, 0, 0, 0.55) 61%,
          rgba(255, 255, 255, 0.26) 72%,
          rgba(0, 0, 0, 0.17) 80%,
          rgba(255, 255, 255, 0.28) 88%,
          rgba(255, 255, 255, 0.3) 100%
        )
        center calc(50% - 8px) / 600% 600%;
  }
</style>
