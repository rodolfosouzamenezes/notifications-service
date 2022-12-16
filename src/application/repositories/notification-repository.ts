import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract save(notification: Notification): Promise<void>;
  abstract create(notification: Notification): Promise<void>;
}
