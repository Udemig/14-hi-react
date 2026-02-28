import UserTable from "@/components/table/user-table";
import { FC, Suspense } from "react";
import Loading from "../loading";
import UserModal from "@/components/modal/user-modal";

interface Props {
  searchParams: Promise<{ userId?: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      <Suspense fallback={<Loading styles="my-40" />}>
        <UserTable />
      </Suspense>

      {/*
       * Url'de bir userId parametresi varsa modalı göster
       * Bu sayede hiçbir yeri client component'a çevirmeden modal'ı gizle / göster yapabiliyoruz
       */}
      {userId && <UserModal userId={userId} />}
    </div>
  );
};

export default Users;
