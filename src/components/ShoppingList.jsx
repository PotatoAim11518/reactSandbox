import { useEffect, useState } from "react";

export default function ShoppingList() {
  const [value, setValue] = useState("");
  // const [items, setItems] = useState(() =>
  //   JSON.parse(localStorage.getItem("shoppingItems") || JSON.stringify([]))
  // );
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingItems")) || []
  );

  const handleAddItem = () => {
    if (value) {
      setItems([...items, value]);
      setValue("");
    }
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter" && value !== "") handleAddItem();
  };

  const handleRemoveItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  useEffect(() => {
    localStorage.setItem("shoppingItems", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h1>Shopping List</h1>
      <div>
        <label htmlFor="item">
          <input
            className="text-black rounded-md m-2 px-4 py-1"
            id="item"
            name="item"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handlePressEnter}
            placeholder="Remember to buy..."
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-1 rounded-lg border-2 border-slate-500/50 hover:bg-blue-500/50 bg-blue-900 active:scale-105 hover:border-2 transition"
          >
            Add item
          </button>
        </label>
      </div>
      <ul className="flex flex-col gap-4 justify-center items-center my-10">
        {items.map((item) => (
          <li
            key={item}
            className="flex justify-between w-1/2 px-4 py-2 bg-slate-600 border-[1px] border-white/40 hover:bg-white/10 rounded-md transition"
          >
            <p>{item}</p>
            <button onClick={() => handleRemoveItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
