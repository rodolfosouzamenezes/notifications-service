import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notificatons-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipients Notifications', () => {
  it('should be able to get recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example.recipient-id-1' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
      ]),
    );
  });
});
