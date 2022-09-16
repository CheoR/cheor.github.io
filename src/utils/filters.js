export const filterChips = (data, setData, func) => {
  const filtered = (chip) => {
    if (chip === "All") {
      setData(data);
    } else {
      setData(() => data.filter(func));
    }
  };
  return filtered;
};

const filterChipsA = (chip) => {
  if (chip === "All") {
    setData(PROJECTS);
  } else {
    setData(() => PROJECTS.filter((obj) => obj.tags.includes(chip)));
  }
};

const filterChipsB = (chip) => {
  if (chip === "All") {
    setData(BLOGS);
  } else {
    setData(() => BLOGS.filter((obj) => obj.frontmatter.tags.includes(chip)));
  }
};

const filterSearchA = (searchTerm) => {
  if (!searchTerm) setData(PROJECTS);
  setData(() =>
    PROJECTS.filter((obj) =>
      obj.description.toLowerCase().includes(searchTerm?.toLowerCase())
    )
  );
};

const filterSearchB = (searchTerm) => {
  if (!searchTerm) setData(BLOGS);
  setData(() =>
    BLOGS.filter((obj) =>
      obj.body.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};

export const filterProjects = (data) => {
  const filtered = (searchTerm) => {
    if (!searchTerm) return;
    data.filter((obj) =>
      obj.description.toLowerCase().includes(searchTerm?.toLowerCase())
    );
  };
  return filtered;
};

export const filterBlogs = (data) => {
  const filtered = (searchTerm) =>
    data.filter((obj) =>
      obj.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return filtered;
};
