import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => 'Next image stub',
}));
