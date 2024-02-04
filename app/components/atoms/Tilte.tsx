type title = {
  title: string;
};
const Tilte = ({title}: title) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold border-b-2 border-gray-700 w-fit py-2">
        {title}
      </h1>
    </div>
  );
};

export default Tilte;
