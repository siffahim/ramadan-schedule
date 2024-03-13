"use client";
import { useParams } from "next/navigation";

const Breadcrumb = () => {
  const param = useParams();
  const url =
    param.id === "Dhaka"
      ? "dhaka.jpg"
      : param.id === "Chattogram"
      ? "chattogram.jpg"
      : param.id === "Rajshahi"
      ? "rajshahi.jpeg"
      : param.id === "Mymensingh"
      ? "mymensingh.jpg"
      : "";
  return (
    <div className="w-full h-80 relative">
      <img
        src={`/images/${url}`}
        className="w-full h-full object-center"
        alt=""
      />
      <div className="bg-[#0c9678c4] w-full h-full absolute left-0 top-0 flex justify-center items-center">
        <h2 className="text-7xl text-white">{param.id}</h2>
      </div>
    </div>
  );
};

export default Breadcrumb;
