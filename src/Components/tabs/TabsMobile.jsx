import { useNavigate } from "react-router-dom";

const TabsMobile = ({ categories }) => {
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;

    if (value === "all") {
      navigate("/");
    } else {
      navigate(`/category/${value}`);
    }
  }

  return (
    <section className="py-5 mt-5 block sm:hidden">
      <select
        className="bg-white rounded-md border border-gray-300 p-2 w-full"
        defaultValue="all"
        onChange={handleChange}
      >
        <option value="all">All</option>
        {categories.map((item, i) => (
          <option key={i} value={item.strCategory}>
            {item.strCategory}
          </option>
        ))}
      </select>
    </section>
  );
};

export default TabsMobile;
