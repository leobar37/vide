import { render } from '@testing-library/react';

import UiVide from './ui-vide';

describe('UiVide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiVide />);
    expect(baseElement).toBeTruthy();
  });
});
