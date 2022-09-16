import { useState } from "react";

const useSearch = (initialValue, filterByTerm) => {
  const [value, setFilter] = useState(initialValue);

  const setValue = (searchTerm) => {
    if (!searchTerm) {
      setFilter(initialValue);
    }
    const filtered = filterByTerm(searchTerm);
    if (filtered.length) {
      setFilter(filtered);
    } else {
      setFilter([]);
    }
  };
  return [value, setValue];
};

export default useSearch;
