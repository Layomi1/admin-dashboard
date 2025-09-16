const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:8800/api"
  : "https://admin-dashboard-1e43hf2d3-layomis-projects.vercel.app/api";

export default API_BASE_URL;
