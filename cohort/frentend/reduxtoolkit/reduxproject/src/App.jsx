// import { fetchUnsplashImages } from "./api/mediaApi";
// import { fetchPexelsVideos } from "./api/mediaApi";
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white ">
      <SearchBar />
      <Tab />
      <ResultGrid />
    </div>
  );
};

export default App;
