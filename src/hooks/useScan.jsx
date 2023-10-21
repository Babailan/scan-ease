import { useState } from "react";

export default function useScan() {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(true);

  const Element = (
    <div className="py-5 flex gap-2">
      <input
        placeholder={search ? "Search for products" : "Waiting for scanning"}
        type={"text"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!search}
        className="w-full text-base border-2 border-silver outline-none py-1 px-3 rounded-md focus:border-sky"
      />
      <select
        id="cars"
        className="p-1 rounded-md outline-none border-silver border-2 bg-white focus:border-sky"
        onChange={(e) => {
          setValue("");
          if (e.target.value == "search") setSearch(true);
          else setSearch(false);
        }}
      >
        <option value="search">Search</option>
        <option value="scan">Barcode</option>
      </select>
    </div>
  );
  return [Element];
}
