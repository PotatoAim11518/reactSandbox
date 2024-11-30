import React, { useState } from "react";

export default function Nav({ children }) {
  const childrenArr = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (i) => {
    setActiveTab(i);
  };
  return (
    <>
      <nav className="mb-16">
        <ul className="flex justify-center items-center gap-x-6">
          {activeTab !== 0 ? (
            <button
              onClick={() => activeTab > 0 && setActiveTab((prev) => prev - 1)}
              className="border-[7px] border-y-transparent border-l-transparent border-white"
            />
          ) : (
            <div className="border-[7px] border-transparent" />
          )}
          {childrenArr.map((_, i) => (
            <li key={i}>
              <button
                onClick={() => handleActiveTab(i)}
                className="h-3 w-3 rounded-full bg-white "
              />
            </li>
          ))}
          {activeTab !== childrenArr.length - 1 ? (
            <button
              onClick={() =>
                activeTab < childrenArr.length - 1 &&
                setActiveTab((prev) => prev + 1)
              }
              className="border-[7px] border-y-transparent border-r-transparent border-white"
            />
          ) : (
            <div className="border-[7px] border-transparent" />
          )}
        </ul>
      </nav>
      {childrenArr[activeTab]}
    </>
  );
}
