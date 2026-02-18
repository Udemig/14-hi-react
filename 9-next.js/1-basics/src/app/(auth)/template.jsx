"use client";
import Link from "next/link";
import { useState } from "react";

const Template = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <div className="page flex items-center gap-10">
      <aside className="border border-zinc-500 flex flex-col gap-3 p-3 rounded-md">
        <h1>Selam, {name}</h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md border-zinc-500 text-lg p-2"
          placeholder="Adınızı girin..."
        />
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </aside>

      {children}
    </div>
  );
};

export default Template;
