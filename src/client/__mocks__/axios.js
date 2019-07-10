export default {
  get: jest.fn(),
  post: jest.fn(),
  interceptors: {
    response: {
      use: jest.fn(),
    },
    request: {
      use: jest.fn(),
    },
  },
};
