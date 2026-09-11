import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

vitest.mock('react-promise-tracker', () => ({
  usePromiseTracker: vitest.fn(),
}));

vitest.mock('react-spinners', () => ({
  ScaleLoader: () => <div>Spinner</div>,
}));

const mockUsePromiseTracker = vitest.mocked(usePromiseTracker);

describe('SpinnerComponent', () => {
  it('deberia mostrar el spinner cuando la promesa este en progreso', () => {
    mockUsePromiseTracker.mockReturnValue({ promiseInProgress: true });
    render(<SpinnerComponent />);
    expect(screen.getByText('Spinner')).toBeInTheDocument();
  });

  it('no deberia mostrar el spinner cuando no hay promesa en progreso', () => {
    mockUsePromiseTracker.mockReturnValue({ promiseInProgress: false });
    render(<SpinnerComponent />);
    expect(screen.queryByText('Spinner')).not.toBeInTheDocument();
  });
});
