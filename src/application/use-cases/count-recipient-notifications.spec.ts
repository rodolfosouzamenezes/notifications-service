import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notificatons-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count Recipients Notifications', () => {
  it('should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(makeNotification());
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example.recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example.recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
