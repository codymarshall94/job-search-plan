import Card from "@/components/Card/Card";
import { WEB_DEV_RESOURCES } from "@/constants/resources";

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-[#BAFCA2]">
      <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="bg-white rounded-md border-2 border-black py-4 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none">
        Resources
      </h1>
        <p className="text-lg font-bold text-center text-[#2F2F2F] w-1/2 mt-4">
          Here are some resources to help you learn web development!
        </p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center mt-4">
          {WEB_DEV_RESOURCES.map((resource) => {
            return (
              <Card
                heading={resource.name}
                paragraph={resource.description}
                tag={resource.tags[0]}
                key={resource.name}
                link={resource.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
