const RamadanTimes = () => {
  const active = 2;
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
          {[...Array(30).keys()].map((item) => (
            <tr
              key={item}
              className={`border ${
                item === active ? "bg-primary text-white text-bold" : ""
              }`}
            >
              <td className="border-r text-center py-2">০১</td>
              <td className="border-r text-center py-2">১২ মার্চ</td>
              <td className="border-r text-center py-2">মঙ্গলবার</td>
              <td className="border-r text-center py-2">৪:৫১</td>
              <td className="border-r text-center py-2">৬:১০</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RamadanTimes;
