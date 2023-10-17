type CardProps = {
  name: string;
  url: string;
};

export default function Card({ name, url }: CardProps) {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{name}</h2>
      </div>
      <div className="p-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Docs
          </button>
        </a>
      </div>
    </div>
  );
}
