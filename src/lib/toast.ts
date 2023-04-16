'use client';

import { showNotification } from '@mantine/notifications';

export default function toast(type: ToastTypes, message: string) {
  return showNotification({
    message,
    autoClose: 2000,
  });
}
