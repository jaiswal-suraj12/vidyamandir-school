import React from "react";
import AdminShell from "../components/AdminShell";
 import CrudPage from "../components/CrudPage";
export default function Gallery() {
  return (
    <AdminShell title="Gallery">
      <CrudPage
        resource="gallery"
        title="Gallery"
        fields={["title", "imageUrl", "category"]}
      />
    </AdminShell>
  );
}