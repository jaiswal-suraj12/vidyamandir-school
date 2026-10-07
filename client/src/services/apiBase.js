const configuredApiUrl =
  import.meta.env.VITE_API_URL || "https://vidyamandir-school.onrender.com";
const apiUrl = configuredApiUrl.replace(/\/+$/, "");

export const API_URL = apiUrl.endsWith("/api") ? apiUrl : `${apiUrl}/api`;
