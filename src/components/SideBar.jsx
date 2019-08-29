import React from "react";

const SideBar = props => {
  const { onMammalSelect } = props;
  const seaMammals = [
    { id: 1, name: "orca" },
    { id: 3, name: "gray whale" },
    { id: 4, name: "humpback" },
    { id: 5, name: "atlantic white-sided dolphin" },
    { id: 6, name: "pacific white-sided dolphin" },
    { id: 8, name: "harbor porpoise" },
    { id: 9, name: "harbor seal" },
    { id: 10, name: "northern elephant seal" },
    { id: 13, name: "steller sea lion" },
    { id: 14, name: "sea otter" }
  ];

  return (
    <ul className="list-group sidebar">
      {seaMammals.map(mammal => (
        <li
          key={mammal.id}
          onClick={() => onMammalSelect(mammal.name)}
          className="list-group-item"
        >
          {mammal.name}
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
