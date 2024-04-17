export function pagination({ query, items }) {
  const page = +query.page || 1;
  const limit = +query.limit || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const total = items.length;
  const pageItems = items.splice(startIndex, endIndex);

  return {
    currentPage: page,
    items: pageItems,
    limitRow: limit,
    totalRow: total,
  };
}
