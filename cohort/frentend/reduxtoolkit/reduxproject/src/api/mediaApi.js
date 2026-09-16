import axios from "axios";

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function fetchUnsplashImages(query, page = 1, per_page = 20) {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, page, per_page },
      headers: { Authorization: `Client-ID ${UNSPLASH_API_KEY}` },
    });
    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching Unsplash images:",
      error.response?.data || error.message,
    );
  }
}

export async function fetchPexelsVideos(query, page = 1, per_page = 20) {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/videos/search`,
      {
        params: { query, page, per_page },
        headers: { Authorization: PEXELS_API_KEY },
      },
    );
    return response.data.videos;
  } catch (error) {
    console.error(
      "Error fetching Pexels videos:",
      error.response?.data || error.message,
    );
  }
}
