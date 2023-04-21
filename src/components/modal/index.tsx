'use client';

import { useRouter } from 'next/navigation';

import { MantineNumberSize, Modal } from '@mantine/core';

export default function FeedModal({
  children,
  size = 'md',
}: {
  children: React.ReactNode;
  size?: MantineNumberSize | undefined;
}) {
  const router = useRouter();

  return (
    <Modal
      size={size}
      centered
      overlayProps={{ opacity: 0.5, blur: 4 }}
      opened={true}
      onClose={() => router.back()}>
      {children}
    </Modal>
  );
}
