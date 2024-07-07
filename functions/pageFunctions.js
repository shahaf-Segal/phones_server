const phonePerPage = 10;

const getPagedArray = (phoneArray, pageNumber) => {
  const currentPage = pageNumber || 1;
  const startIndex = (pageNumber - 1) * phonePerPage;
  const endIndex = startIndex + phonePerPage;
  const filteredPhones = phoneArray.slice(startIndex, endIndex).length;
  const correctEndIndex = endIndex(filteredPhones.length - phonePerPage + 1);

  const total = Math.ceil(arrayLength / phonePerPage);
  return {
    phones: filteredPhones,
    pages: {
      total,
      current: currentPage,
      from: startIndex + 1,
      to: correctEndIndex,
    },
  };
};

module.exports = { getPagedArray };