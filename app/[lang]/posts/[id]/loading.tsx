"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
      <ClipLoader size={50} color="#0070f3" />
    </div>
  );
}
