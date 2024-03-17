"use client";

import { formatTime } from "@/utils/formatTime";
import { useEffect, useState } from "react";

const HeroSection = () => {

  const [todateData, setTodayData] = useState([])

  let todayYear = new Date();
  const year = todayYear.getFullYear();
  let todayMonth = new Date();
  const month = todayMonth.getMonth() + 1

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://api.aladhan.com/v1/calendarByAddress/${year}/${month}?address=Bangladesh`);
      const data = await res.json();
      setTodayData(data?.data[0].timings);
    };
    getData()
  }, [year, month])

  console.log(todateData)

  const prayerTimes = [
    { name: "ফজর", time: formatTime(todateData?.Fajr) },
    { name: "যোহর", time: formatTime(todateData?.Dhuhr) },
    { name: "আসর", time: formatTime(todateData?.Asr) },
    { name: "মাগরিব", time: formatTime(todateData?.Maghrib) },
    { name: "ইশা", time: formatTime(todateData?.Isha) },
  ];


  return (
    <div>
      <div className="hero-bg relative">
        <div className="container pb-16 flex justify-center items-center text-center">
          <div>
            <img
              className="mx-auto w-[400px]"
              src="/images/ramadan.png"
              alt=""
            />
            <h2 className="text-white text-lg">
              شَهۡرُ رَمَضَانَ ٱلَّذِیۤ أُنزِلَ فِیهِ ٱلۡقُرۡءَانُ هُدࣰى
              لِّلنَّاسِ وَبَیِّنَـٰتࣲ مِّنَ ٱلۡهُدَىٰ وَٱلۡفُرۡقَانِۚ فَمَن
              شَهِدَ مِنكُمُ ٱلشَّهۡرَ فَلۡیَصُمۡهُۖ وَمَن كَانَ مَرِیضًا أَوۡ
              عَلَىٰ سَفَرࣲ فَعِدَّةࣱ مِّنۡ أَیَّامٍ أُخَرَۗ یُرِیدُ ٱللَّهُ
              بِكُمُ ٱلۡیُسۡرَ وَلَا یُرِیدُ بِكُمُ ٱلۡعُسۡرَ وَلِتُكۡمِلُوا۟
              ٱلۡعِدَّةَ وَلِتُكَبِّرُوا۟ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمۡ
              وَلَعَلَّكُمۡ تَشۡكُرُونَ ۝١٨٥
            </h2>
          </div>
        </div>
      </div>
      <div className="w-2/4 p-2 container rounded -mt-10 bg-white z-50">
        <div className="grid grid-cols-5 gap-2">
          {prayerTimes.map((item, index) => (
            <div
              key={index}
              className="bg-primary text-white p-3  rounded text-center"
            >
              <p className="text-lg">{item.name}</p>
              <h2 className="text-xl">{item.time > 12 ? item.time - 12 : item.time}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
