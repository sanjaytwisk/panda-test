import { styled } from '../../styled-system/jsx';

export default styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 'token(spacing.4) 0',

    '&::before': {
      background: 'var(--secondary-glow)',
      borderRadius: '50%',
      width: '480px',
      height: '360px',
      marginLeft: '-400px',
    },

    '&::after': {
      background: 'var(--primary-glow)',
      width: '240px',
      height: '180px',
      zIndex: '-1',
    },

    '&::before, &::after': {
      content: '""',
      left: '50%',
      position: 'absolute',
      filter: 'blur(45px)',
      transform: 'translateZ(0)',
    },

    '@media (max-width: 700px)': {
      padding: '8rem 0 6rem',

      '&::before': {
        transform: 'none',
        height: '300px',
      },
    },
  },
});
