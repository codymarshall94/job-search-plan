export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="bg-white rounded-md border-2 border-black py-4 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none">
        {title}
      </h1>
      <p className="text-lg font-bold text-center text-[#2F2F2F] w-1/2 mt-4">
        {description}
      </p>
    </div>
  );
}
