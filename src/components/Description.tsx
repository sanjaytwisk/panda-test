import { styled } from '../../styled-system/jsx';

export default styled('div', {
  base: {
    display: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
    fontSize: '0.85rem',
    maxWidth: 'var(--max-width)',
    width: '100%',
    zIndex: '2',
    fontFamily: 'var(--font-mono)',

    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'token(spacing.1)',
    },
    '& p': {
      position: 'relative',
      margin: '0',
      padding: '1rem',
      backgroundColor: 'rgba(var(--callout-rgb), 0.5)',
      border: '1px solid rgba(var(--callout-border-rgb), 0.3)',
      borderRadius: 'var(--border-radius)',
    },

    '@media (max-width: 700px)': {
      fontSize: '0.8rem',

      '& a': {
        padding: '1rem',
      },

      '& p, & div': {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
      },

      '& p': {
        alignItems: 'center',
        inset: '0 0 auto',
        padding: '2rem 1rem 1.4rem',
        borderRadius: '0',
        border: 'none',
        borderBottom: '1px solid rgba(var(--callout-border-rgb), 0.25)',
        background:
          'linear-gradient(to bottom, rgba(var(--background-start-rgb), 1), rgba(var(--callout-rgb), 0.5))',
        backgroundClip: 'padding-box',
        backdropFilter: 'blur(24px)',
      },

      '& div': {
        alignItems: 'flex-end',
        pointerEvents: 'none',
        inset: 'auto 0 0',
        padding: 'token(spacing.8)',
        height: '200px',
        background:
          'linear-gradient(to bottom,transparent 0%,rgb(var(--background-end-rgb)) 40%)',
        zIndex: '1',
      },
    },
  },
});
