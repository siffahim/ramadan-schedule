"use client";

import { format } from "date-fns";
import { bn } from "date-fns/locale";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const RamadanTimes = () => {
  const [ramadanData, setRamadanData] = useState([]);
  const router = useParams();
  const id = router.id[1];

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://ramadan-backend.vercel.app/api/ramadan-timings/${id}`
      );
      const data = await res.json();
      setRamadanData(data?.data?.ramadanTimings);
    };
    getData();
  }, [id]);

  const englishDigitsToBangla = (englishNumber: string): string => {
    const banglaDigits: { [key: string]: string } = {
      "0": "০",
      "1": "১",
      "2": "২",
      "3": "৩",
      "4": "৪",
      "5": "৫",
      "6": "৬",
      "7": "৭",
      "8": "৮",
      "9": "৯",
    };

    return englishNumber.replace(/[0-9]/g, (match) => banglaDigits[match]);
  };

  const getBanglaDate = (englishDate: Date): string => {
    const formattedEnglishDate = format(englishDate, "dd-MM-yyyy", {
      locale: bn,
    });
    const banglaDate = englishDigitsToBangla(formattedEnglishDate);
    return banglaDate;
  };

  const today = new Date();
  const banglaDate = getBanglaDate(today);

  const active = banglaDate;
  return (
    <div className="container">
      <table className="w-full">
        <thead className="bg-primary text-white text-left">
          <tr className="border">
            <th className="border-r text-center py-3">রমজান</th>
            <th className="border-r text-center py-3">তারিখ</th>
            <th className="border-r text-center py-3">বার</th>
            <th className="border-r text-center py-3">সেহরির(শেষ সময়)</th>
            <th className="border-r text-center py-3">ইফতার</th>
          </tr>
        </thead>
        <tbody>
          {ramadanData.map((item: any, index) => (
            <tr
              key={index}
              className={`border ${
                item?.date === active ? "bg-primary text-white text-bold" : ""
              }`}
            >
              <td className="border-r text-center py-2">{item?.noOfRamadan}</td>
              <td className="border-r text-center py-2">{item?.date}</td>
              <td className="border-r text-center py-2">{item?.day}</td>
              <td className="border-r text-center py-2">
                {item?.sahri?.split(" ")[0]}
              </td>
              <td className="border-r text-center py-2">
                {item?.iftar?.split(" ")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RamadanTimes;
