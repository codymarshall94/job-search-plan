import React from "react";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Drawer({ active, setActive, children }: Props) {
  const closeDrawer = () => {
    setActive(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-start justify-start bg-gray-500/50 transition-all duration-300 ${
        active ? "" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeDrawer}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `translateX(${active ? "0%" : "-100%"}`,
        }}
        className={`z-10 h-full w-[500px] border-2 border-black bg-white font-bold transition-transform duration-300`}
      >
        <div className="bg-[#C4A1FF] p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Saved Searches</h2>
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={closeDrawer}
          >
            X
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
