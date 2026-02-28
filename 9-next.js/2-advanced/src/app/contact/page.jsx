"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Contact = () => {
  const [age, setAge] = useState(" ");

  // const searchParams = useSearchParams();
  // const name = searchParams.get("name");

  return (
    <div className="border border-red-500 p-10">
      <h1>İletişim Sayfası</h1>

      <button onClick={() => alert("Bildirim")}>Bana Tıkla</button>
    </div>
  );
};

export default Contact;
