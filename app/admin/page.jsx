"use client";
import { useDataContext } from "@/components/context/DataProvider";
import Loading from "@/components/loading/Loading";
import { redirect } from "next/navigation";
import AdminTabs from "@/components/tabcomponent/AdminTabs";
const page = () => {
  const { appLoading, user } = useDataContext();
  if (appLoading)
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        {" "}
        <Loading />{" "}
      </div>
    );

  if (!user) {
    return redirect("/login");
  }
  if (user && user?.roles?.Admin !== 5150) {
    return redirect("/user");
  }

  return (
    <div className="w-full min-h-screen pt-[75px] mb-6 p-2 mx-auto">
      <section className="">
        <div className="w-full flex flex-wrap gap-2"></div>
      </section>
    </div>
  );
};
export default page;
