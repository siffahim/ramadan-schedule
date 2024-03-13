import { FaMosque } from "react-icons/fa";

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
  const x = [
    {
      division: "Dhaka",
      data: [
        {
          day: 1,
          ifter: 4,
          sheri: 3,
          date: "2024",
        },
      ],
    },
  ];
  return (
    <div className="my-10 pb-24">
      <h2
        className="text-center text-3xl mb-10 "
        style={{ fontFamily: "bangla" }}
      >
        আজকের ইফতার ও সাহরির সময়{" "}
      </h2>
      <div className="grid grid-cols-4 container gap-4">
        {data.map((item) => (
          <div key={item} className="card p-5 rounded">
            <div className="flex justify-between items-center">
              <div className="flex items-center relative">
                <div className="w-8 h-8 p-7 bg-secondary rotate-45 rounded"></div>
                <h2 className="text-sm absolute left-3 text-white ">
                  {" "}
                  <FaMosque size={30} />
                </h2>
              </div>
              <div className="flex  items-center relative ">
                <div className="w-8 h-8 p-7 bg-secondary rotate-45 rounded"></div>
                <h2 className="text-lg absolute text-white">{item}</h2>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 text-lg">
              <div>
                <h2>ইফতার</h2>
                <h2>সাহরি</h2>
              </div>
              <div>
                <h2>৫:১৫</h2>
                <h2>৬:৪০</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Division;
