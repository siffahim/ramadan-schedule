"use client";

const HeroSection = () => {
  const prayerTimes = [
    { name: "ফজর", time: "ভোরে" },
    { name: "যোহর", time: "দুপুর" },
    { name: "আসর", time: "রাতে" },
    { name: "মাগরিব", time: "সন্ধ্যা" },
    { name: "ইশা", time: "রাতে" },
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
      <div className="p-2 container rounded -mt-10 bg-white z-50">
        <div className="grid grid-cols-5 gap-2">
          {prayerTimes.map((item, index) => (
            <div
              key={index}
              className="bg-secondary text-white p-3  rounded text-center"
            >
              <p className="text-lg">{item.name}</p>
              <h2 className="text-xl">৫:০০</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
