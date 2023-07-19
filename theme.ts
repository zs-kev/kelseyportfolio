import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': 'hsla(0, 0%, 100%, 1)',
  '--my-black': 'hsla(0, 0%, 0%, 1)',
  '--primary': 'hsla(174, 38%, 95%, 1)',
  '--secondary': 'hsla(196, 100%, 44%, 1)',
  '--tertiary': 'hsla(231, 53%, 17%, 1)',
};

export const kelseyTheme = buildLegacyTheme({
  '--component-bg': props['--primary'],
  '--component-text-color': props['--tertiary'],

  '--brand-primary': props['--secondary'],

  '--default-button-color': props['--tertiary'],
  '--default-button-primary-color': props['--tertiary'],

  '--main-navigation-color': props['--primary'],
  '--main-navigation-color--inverted': props['--tertiary'],

  '--focus-color': props['--secondary'],
});
