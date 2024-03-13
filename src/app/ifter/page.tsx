const IfterPage = () => {
  return (
    <div className="container">
      <table className="w-full">
        <thead className="bg-primary text-white text-left">
          <tr className="border">
            <th className="border-r text-center">রমজান</th>
            <th className="border-r text-center">তারিখ</th>
            <th className="border-r text-center">বার</th>
            <th className="border-r text-center">সেহরির(শেষ সময়)</th>
            <th className="border-r text-center">ইফতার</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(30).keys()].map((item) => (
            <tr key={item} className="border">
              <td className="border-r text-center">০১</td>
              <td className="border-r text-center">১২ মার্চ</td>
              <td className="border-r text-center">মঙ্গলবার</td>
              <td className="border-r text-center">৪:৫১</td>
              <td className="border-r text-center">৬:১০</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IfterPage;
