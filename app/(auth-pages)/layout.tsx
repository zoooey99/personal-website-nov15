export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-auto flex flex-col gap-12 items-center pt-80">{children}</div>
  );
}
