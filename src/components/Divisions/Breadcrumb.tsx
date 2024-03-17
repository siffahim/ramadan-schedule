"use client";
import { useParams } from "next/navigation";

const Breadcrumb = () => {
  const param = useParams();

  const cityImageMap: Record<string, string> = {
    Dhaka: "dhaka.jpg",
    Chittagong: "chattogram.jpg",
    Rajshahi: "rajshahi.jpeg",
    Mymensingh: "mymensingh.jpg",
    Khulna: "khulna.jpg",
    Barisal: "barisal.jpg",
    Sylhet: "sylhet.jpg",
    Rangpur: "rangpur.jpg",
  };
  const cityBanglaNameMap: Record<string, string> = {
    Dhaka: "ঢাকা",
    Chittagong: "চট্টগ্রাম",
    Rajshahi: "রাজশাহী",
    Mymensingh: "ময়মনসিংহ",
    Khulna: "খুলনা",
    Barisal: "বরিশাল",
    Sylhet: "সিলেট",
    Rangpur: "রংপুর",
  };

  const url = cityImageMap[param.id[0] as keyof typeof cityImageMap] || "";
  const city =
    cityBanglaNameMap[param.id[0] as keyof typeof cityBanglaNameMap] || "";

  return (
    <div className="w-full h-80 relative">
      <img
        src={`/images/${url}`}
        className="w-full h-full object-center"
        alt=""
      />
      <div className="bg-[#0c9678c4] w-full h-full absolute left-0 top-0 flex justify-center items-center">
        <h2 className="text-7xl text-white">{city}</h2>
      </div>
    </div>
  );
};

export default Breadcrumb;
