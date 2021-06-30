/* Custom hook that sort array desc or asc */
const useSortedList = (array, order) => {
  array =
    order === "asc"
      ? array.sort((a, b) => (a > b ? -1 : 1))
      : array.sort((a, b) => (a > b ? 1 : 1));

  return { array };
};
export default useSortedList;