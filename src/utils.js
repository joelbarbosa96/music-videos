const paginate = (videos) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(videos.length / itemsPerPage);

  const newVideos = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return videos.slice(start, start + itemsPerPage);
  });

  return newVideos;
};

export default paginate;
