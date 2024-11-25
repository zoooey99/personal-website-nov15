import PlaygroundBackButton from "@/components/playground-back-button";
export default async function Layout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PlaygroundBackButton/>
      <div className="w-auto flex flex-col gap-12 items-center pt-80">
        {children}
      </div>
    </>
  );
}
