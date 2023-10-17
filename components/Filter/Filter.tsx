interface FilterProps {
  selectedTag: string | "All";
  handleTagChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterTags: string[];
}

const Filter = ({ selectedTag, handleTagChange, filterTags }: FilterProps) => {
  return (
    <div className="mt-4 mx-auto flex items-center justify-center bg-white rounded-md border-2 border-black py-4 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none w-fit">
      <label htmlFor="tagFilter" className="text-lg font-bold">
        Filter by Tag:
      </label>
      <select
        id="tagFilter"
        name="tagFilter"
        className="ml-2 p-2 rounded-md border-2 border-black"
        value={selectedTag}
        onChange={handleTagChange}
      >
        <option value="All">All</option>
        {filterTags.map((tag) => (
          <option value={tag} key={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
