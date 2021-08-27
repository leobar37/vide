import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      body {
        overflow-x: hidden;
      }
      .max-paragraph {
        max-width: 1000px;
      }
    `}
  ></Global>
);
