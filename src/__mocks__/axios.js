export default {
  get: jest.fn(() => Promise.resolve('Get')),
  post: jest.fn(() => Promise.resolve('Post')),
  interceptors: {
    response: {
      use: jest.fn(),
    },
    request: {
      use: jest.fn(),
    },
  },
};
