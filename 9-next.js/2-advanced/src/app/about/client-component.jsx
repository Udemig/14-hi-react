"use client";

import ServerComponent from "./server-component";

const ClientComponent = ({ children }) => {
  console.log("Client component render oldu");

  return (
    <div className="p-10 border border-red-500 space-y-10">
      <h1>Client Component</h1>

      {children}
    </div>
  );
};

export default ClientComponent;
