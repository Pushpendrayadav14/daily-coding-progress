import { useEffect } from "react";
import ResultCard from "../components/ResultCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnsplashImages, fetchPexelsVideos } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      //   if (!query) return <h1>Typeing Something...</h1>;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data;
          if (activeTab === "photos") {
            let response = await fetchUnsplashImages(query);
            data = response.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchPexelsVideos(query);
            data = response.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );
  if (error) {
    return <h1>ERROR</h1>;
  }
  if (loading) {
    return <h1>LOADING......</h1>;
  }

  return (
    <div className="w-full flex justify-center flex-wrap gap-6 overflow-auto p-8 ">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
