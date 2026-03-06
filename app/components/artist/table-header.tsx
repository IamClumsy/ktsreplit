"use client";

export const TableHeader = () => (
  <tr>
    {["Artist", "Genre", "Role", "Group", "Skill 2", "Skill 3", "Ranking", "Photos", "Best Usage"].map((col) => (
      <th
        key={col}
        className="px-1 py-2 text-center text-sm font-semibold text-pink-100 uppercase tracking-wider"
        scope="col"
      >
        {col}
      </th>
    ))}
  </tr>
);
