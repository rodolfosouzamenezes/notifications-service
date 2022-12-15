import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less 5 characters', () => {
    expect(() => new Content('a'.repeat(3))).toThrowError();
  });

  it('should not be able to create a notification content with more 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError();
  });
});
