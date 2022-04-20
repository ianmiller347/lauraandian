import dayjs from 'dayjs';

// get sorted items or empty array if no items
export default function useSortedItems(items) {
  if (!items?.length) {
    return [];
  }
  const sortedItems = items
    ? [...items].sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix())
    : [];
  return sortedItems;
}
