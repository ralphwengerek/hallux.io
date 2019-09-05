import serviceApi from './serviceApi';

const email = { test: 'test' };

describe('serviceApi', () => {
  it('should post to ', async () => {
    const result = await serviceApi.sendMail(email);
    expect(result).toBe('Post');
  });
});
