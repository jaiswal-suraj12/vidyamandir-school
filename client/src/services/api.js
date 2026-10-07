const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("abvm_token");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const api = {
  // Authentication
  login: (email, password) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  
  me: () => request("/auth/me"),

  // Generic CRUD
  list: (resource) =>
    request(`/${resource}`),

  create: (resource, body) =>
    request(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  update: (resource, id, body) =>
    request(`/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  remove: (resource, id) =>
    request(`/${resource}/${id}`, {
      method: "DELETE",
    }),

  // Admissions
  listAdmissions: () =>
    request("/admissions"),

  updateAdmission: (id, body) =>
    request(`/admissions/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  // Contacts
  listContacts: () =>
    request("/contact"),

  updateContact: (id, body) =>
    request(`/contact/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
};