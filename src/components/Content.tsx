import { styled } from '../../styled-system/jsx';

export default styled('div', {
  base: {
    '@media (max-width: 700px)': {
      padding: 'token(spacing.16)',
    },
  },
});
