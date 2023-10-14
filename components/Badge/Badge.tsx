export default function Badge({ badgeText }: { badgeText: string }) {
  return (
    <div className="w-fit rounded-full border-2 border-black bg-white px-3 py-1.5 text-sm font-bold shadow-none">
      {badgeText}
    </div>
  );
}
