import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade',
      category: 'social',
      recipientId: 'example.recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
