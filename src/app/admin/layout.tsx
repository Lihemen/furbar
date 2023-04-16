import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Admin</p>
      {children}
    </div>
  );
}
