"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMosque } from "react-icons/fa";
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

interface CustomDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  locale: string;
}

const Division = () => {
  const data = [
    "ঢাকা",
    "চট্টগ্রাম",
    "রাজশাহী",
    "ময়মনসিংহ",
    "খুলনা",
    "বরিশাল ",
    "সিলেট",
    "রংপুর",
  ];
  const data2 = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Mymensingh",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
  ];

  const [todateData, setTodayData] = useState([])


  const englishDigitsToBangla = (englishNumber: string): string => {
    const banglaDigits: { [key: string]: string } = {
      '0': '০',
      '1': '১',
      '2': '২',
      '3': '৩',
      '4': '৪',
      '5': '৫',
      '6': '৬',
      '7': '৭',
      '8': '৮',
      '9': '৯',
    };

    return englishNumber.replace(/[0-9]/g, (match) => banglaDigits[match]);
  };

  const getBanglaDate = (englishDate: Date): string => {
    const formattedEnglishDate = format(englishDate, 'dd-MM-yyyy', { locale: bn });
    const banglaDate = englishDigitsToBangla(formattedEnglishDate);
    return banglaDate;
  };

  const today = new Date();
  const banglaDate = getBanglaDate(today);
  console.log(banglaDate);

  // const todayDate = banglaDate.split('/').join('-');
  // console.log(todayDate, banglaDate)


  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://ramadan-backend.vercel.app/api/ramadan-timings/date-wise?date=${banglaDate}`);
      const data = await res.json();
      setTodayData(data?.data);
    };
    getData()
  }, [todayDate])


  return (
    <div className="my-10 pb-24">
      <h2 className="text-center text-3xl mb-10 ">আজকের ইফতার ও সাহরির সময় </h2>
      <div className="grid grid-cols-4 container gap-4">
        {todateData?.map((item, index) => (
          <Link key={item} href={`/divisions/${data2[index]}/${item?._id}`}>
            <div className="card p-5 rounded hover:bg-secondary">
              <div className="flex justify-between items-center">
                <div className="flex items-center relative">
                  <div className="w-8 h-8 p-7 bg-primary rotate-45 rounded"></div>
                  <h2 className="text-sm absolute left-3 text-white ">
                    {" "}
                    <FaMosque size={30} />
                  </h2>
                </div>
                <div className="flex  items-center relative ">
                  <div className="w-8 h-8 p-7 bg-primary rotate-45 rounded"></div>
                  <h2 className="text-lg absolute text-white">{item?.division}</h2>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6 text-lg">
                <div>
                  <h2>ইফতার</h2>
                  <h2>সাহরি</h2>
                </div>
                <div>
                  <h2>{item?.ramadanTimings[0]?.iftar?.split(' ')[0]}</h2>
                  <h2>{item?.ramadanTimings[0]?.sahri?.split(' ')[0]}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Division;
