"use client";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-bg relative">
        <div className="container pb-28 flex justify-center items-center text-center">
          <div>
            <img className="mx-auto" src="/images/ramadan.png" alt="" />
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
      <div className="w-2/3 h-28 container shadow rounded -mt-14 bg-white z-50 p-5 flex items-center justify-center">
        <h1 className="text-4xl font-light">11:00:50 AM</h1>
      </div>
    </div>
  );
};

export default HeroSection;
