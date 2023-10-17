import ListItemLink from "./components/ListItemLink/ListItemLink";

export default function List({ items }: { items: any[] }) {
  return (
    <div
      className="flex flex-col mt-4 gap-4 p-4"
      style={{ maxHeight: "calc(100vh - 20%)", overflowY: "auto" }}
    >
      {items.map((item) => {
        return <ListItemLink item={item} key={item.name} />;
      })}
    </div>
  );
}
