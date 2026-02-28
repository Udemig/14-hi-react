import { redirect, notFound } from "next/navigation";

import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

const Page = () => {
  console.log("hakkımızda render oldu");

  if ("admin değilse") {
    return notFound();
  }

  return (
    <div className="border border-blue-500 p-10 space-y-10">
      <h1>Hakkımızda Sayfası</h1>

      {/* <ServerComponent /> */}

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default Page;
