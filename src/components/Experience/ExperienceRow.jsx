function ExperienceRow({ inputValue }) {
  return (
    <div className="p-1 mt-3 border border-primary rounded-md cursor-pointer">
      <h1 className="px-2 font-bold text-xl text-primary border-none">
        {inputValue}
      </h1>
    </div>
  );
}

export default ExperienceRow;
