import { styled } from '../../styled-system/jsx';

export default styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(25%, auto))',
    maxWidth: '100%',
    width: 'var(--max-width)',

    '@media (max-width: 700px)': {
      gridTemplateColumns: '1fr',
      marginBottom: 'token(spacing.12)',
      maxWidth: '320px',
      textAlign: 'center',
    },

    '@media (min-width: 701px) and (max-width: 1120px)': {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
  },
});
