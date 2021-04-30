import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import Music from "./components/Music";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (loading) return;
    setVideos(data[page]);
    console.log(data);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "music videos"}</h1>
        <div className="underline"></div>
      </div>
      <section className="videos">
        {videos && (
          <div className="container">
            {videos.map((video) => {
              return <Music key={video.id} {...video} />;
            })}
          </div>
        )}
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
