import Badge from "../Badge/Badge";

type Props = {
  heading: string;
  paragraph: string;
  tag?: string;
  link: string;
};

export default function Card({ heading, paragraph, tag, link }: Props) {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-[#FDFD96] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      <div className="border-b-2 border-black p-4 bg-white">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4">
        <p>{paragraph}</p>
      </div>
      <div className="border-t-2 border-black p-4 gap-4">
        <Badge key={tag} badgeText={tag || ""} />
      </div>
      <div className="flex justify-end items-end p-4 flex-grow">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.34L13.17 12 8.59 7.66L10 6.24l6 6-6 6-1.41-1.41z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
