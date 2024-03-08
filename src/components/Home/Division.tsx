const Division = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-4 container gap-4">
        {[...Array(8)].map((item) => (
          <div key={item} className="border p-5 rounded">
            h
          </div>
        ))}
      </div>
    </div>
  );
};

export default Division;
