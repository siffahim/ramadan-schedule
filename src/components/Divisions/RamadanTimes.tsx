"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const RamadanTimes = () => {
  const [ramadanData, setRamadanData] = useState([]);
  const router = useParams();
  const id = router.id[1];






  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://ramadan-backend.vercel.app/api/ramadan-timings/${id}`);
      const data = await res.json();
      setRamadanData(data?.data?.ramadanTimings);
    };
    getData()
  }, [id])

  console.log(ramadanData)

  let today = new Date();
  // Define options for Bangla locale
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
    locale: 'bn'  // Use 'bn' for Bengali (Bangla)
  };

  // Format the date
  const banglaDate = today.toLocaleDateString('bn-BD', options);
  const todayDate = banglaDate.split('/').join('-');

  const active = todayDate;
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
          {ramadanData.map((item, index) => (
            <tr
              key={index}
              className={`border ${item.date === active ? "bg-primary text-white text-bold" : ""
                }`}
            >
              <td className="border-r text-center py-2">{item?.noOfRamadan}</td>
              <td className="border-r text-center py-2">{item?.date}</td>
              <td className="border-r text-center py-2">{item?.day}</td>
              <td className="border-r text-center py-2">{item?.sahri?.split(' ')[0]}</td>
              <td className="border-r text-center py-2">{item?.iftar?.split(' ')[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RamadanTimes;
