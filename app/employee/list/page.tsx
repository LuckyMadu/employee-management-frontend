import axios from "axios";
import { Navbar, EmployeeCard } from "@/components/organisms";

export default async function EmployeeList() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/employee/list`
  );
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {data.data.map((employee: any, index: any) => {
            return <EmployeeCard item={employee} />;
          })}
        </div>
      </div>
    </>
  );
}
