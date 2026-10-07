import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";
import { api } from "../../services/api";

const empty = {
  title: "",
  description: "",
  date: "",
  imageUrl: "",
  category: "School",
  published: true,
};

export default function CrudPage({
  resource,
  title,
  fields = ["title", "description"],
  renderExtra,
}) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    try {
      setLoading(true);
      const data = await api.list(resource);
      setItems(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [resource]);

  function startCreate() {
    setEditing(null);
    setForm({ ...empty });
    setOpen(true);
    setError("");
  }

  function startEdit(item) {
    setEditing(item._id);

    setForm({
      ...empty,
      ...item,
      date: item.date ? item.date.slice(0, 10) : "",
    });

    setOpen(true);
    setError("");
  }

  async function save(e) {
    e.preventDefault();

    try {
      if (editing) {
        await api.update(resource, editing, form);
      } else {
        await api.create(resource, form);
      }

      setOpen(false);
      setEditing(null);
      setForm({ ...empty });
      await load();
    } catch (e) {
      setError(e.message);
    }
  }

  async function remove(id) {
    if (!window.confirm("Delete this item?")) return;

    try {
      await api.remove(resource, id);
      await load();
    } catch (e) {
      setError(e.message);
    }
  }

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const isGallery = resource === "gallery";

  return (
    <AdminPageFrame title={title} onAdd={startCreate}>
      {error && <div className="admin-error">{error}</div>}

      {loading ? (
        <div className="admin-empty">Loading...</div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                {isGallery && <th>Image</th>}
                <th>Title</th>
                <th>Details</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  {isGallery && (
                    <td>
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title || "Gallery image"}
                          className="gallery-thumb"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="gallery-no-image">
                          No image
                        </div>
                      )}
                    </td>
                  )}

                  <td>
                    <b>{item.title}</b>
                  </td>

                  <td>
                    {item.date
                      ? new Date(item.date).toLocaleDateString()
                      : (item.description ||
                          item.category ||
                          "—"
                        ).slice(0, 80)}
                  </td>

                  <td>
                    <span
                      className={
                        item.published === false
                          ? "badge muted"
                          : "badge"
                      }
                    >
                      {item.published === false
                        ? "Hidden"
                        : "Published"}
                    </span>
                  </td>

                  <td className="actions">
                    <button
                      type="button"
                      onClick={() => startEdit(item)}
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => remove(item._id)}
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!items.length && (
            <div className="admin-empty">
              No records yet.
            </div>
          )}
        </div>
      )}

      {open && (
        <div className="admin-modal-backdrop">
          <form className="admin-modal" onSubmit={save}>
            <div className="modal-title">
              <h2>
                {editing ? "Edit" : "Add"} {title}
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            {fields.map((field) => (
              <label key={field}>
                {field
                  .replaceAll("_", " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}

                {field === "description" ? (
                  <textarea
                    value={form[field] || ""}
                    onChange={(e) =>
                      updateField(field, e.target.value)
                    }
                    required
                    rows="5"
                  />
                ) : (
                  <input
                    type={field === "date" ? "date" : "text"}
                    value={form[field] || ""}
                    onChange={(e) =>
                      updateField(field, e.target.value)
                    }
                    required={["title", "description", "date"].includes(
                      field
                    )}
                  />
                )}

                {/* Gallery image preview */}
                {field === "imageUrl" && form.imageUrl && (
                  <div className="image-preview">
                    <img
                      src={form.imageUrl}
                      alt="Preview"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </label>
            ))}

            {renderExtra?.(form, setForm)}

            <div className="modal-actions">
              <button
                type="button"
                className="cancel"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button className="save" type="submit">
                <Save size={16} />
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminPageFrame>
  );
}

function AdminPageFrame({ title, onAdd, children }) {
  return (
    <div>
      <div className="page-toolbar">
        <div>
          <h2>{title}</h2>
          <p>Manage website content from the admin panel.</p>
        </div>

        <button
          className="admin-primary"
          onClick={onAdd}
          type="button"
        >
          <Plus size={17} />
          Add New
        </button>
      </div>

      {children}
    </div>
  );
}