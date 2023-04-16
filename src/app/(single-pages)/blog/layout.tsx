export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Blog Side Nav</aside>
      <>{children}</>
    </div>
  );
}
