type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Modal({ active, setActive, children }: Props) {
  const closeModal = () => {
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  if (!active) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center"
      >
        <div className="relative flex w-[350px] flex-col items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] p-10 pt-12 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <button
            className="absolute top-2 right-2 text-2xl font-bold cursor-pointer"
            onClick={closeModal}
          >
            X
          </button>
          {children}
          <button
            className="mt-5 cursor-pointer rounded-md border-2 border-black bg-white px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
