import { useState } from "react";

const useSearchAndFilter = ({ data: initialData, filters }) => {
  const [data, setData] = useState(initialData);
  const tags = filters.tags;

  const filterByTag = (tag) => {
    if (tag === "All") {
      setData(initialData);
    } else {
      setData(() => filters.select(tag));
    }
  };

  const filterBySearch = (searchTerm) => {
    if (!searchTerm) setData(initialData);
    setData(() => filters.search(searchTerm));
  };

  return { cards: data, search: filterBySearch, select: filterByTag, tags };
};

export default useSearchAndFilter;
