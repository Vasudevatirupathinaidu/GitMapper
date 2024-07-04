const formatDate = (datestring) => {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = new Date(datestring).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export { formatDate };
