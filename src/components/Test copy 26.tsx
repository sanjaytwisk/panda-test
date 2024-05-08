import { styled } from '../../styled-system/jsx';

export default styled('a', {
  base: {
    padding: '1rem 1.2rem',
    borderRadius: 'var(--border-radius)',
    background: 'rgba(var(--card-rgb), 0)',
    border: '1px solid rgba(var(--card-border-rgb), 0)',
    transition: 'background 200ms, border 200ms',

    '& span': {
      display: 'inline-block',
      transition: 'transform 200ms',
    },

    '& h2': {
      fontWeight: '600',
      marginBottom: '0.7rem',
    },

    '& p': {
      margin: 'token(spacing.0)',
      opacity: '0.6',
      fontSize: '0.9rem',
      lineHeight: '1.5',
      maxWidth: '30ch',
      textWrap: 'balance',
    },

    '@media (prefers-reduced-motion)': {
      '&:hover span': {
        transform: 'none',
      },
    },

    '@media (max-width: 700px)': {
      padding: '1rem 2.5rem',

      '& h2 ': {
        marginBottom: 'token(spacing.2)',
      },
    },

    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        background: 'rgba(var(--card-rgb), 0.1)',
        border: '1px solid rgba(var(--card-border-rgb), 0.15)',
      },

      '&:hover span ': {
        transform: 'translateX(4px)',
      },
    },
  },
});
