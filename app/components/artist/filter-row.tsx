"use client";

import { Artist } from "./types";

interface FilterRowProps {
  artists: Artist[];
  searchTerm: string;
  selectedGenre: string;
  selectedRole: string;
  selectedGroup: string;
  selectedSkill: string;
  selectedSkill3: string;
  selectedRanking: string;
  selectedPhotos: string;
  selectedBuild: string;
  genres: string[];
  roles: string[];
  groupOptions: string[];
  bestSkills: string[];
  goodSkills: string[];
  okaySkills: string[];
  badSkills: string[];
  worstSkills: string[];
  bestSkills3: string[];
  goodSkills3: string[];
  okaySkills3: string[];
  badSkills3: string[];
  worstSkills3: string[];
  buildOptions: string[];
  photosOptions: string[];
  onSearchChange: (v: string) => void;
  onGenreChange: (v: string) => void;
  onRoleChange: (v: string) => void;
  onGroupChange: (v: string) => void;
  onSkillChange: (v: string) => void;
  onSkill3Change: (v: string) => void;
  onRankingChange: (v: string) => void;
  onPhotosChange: (v: string) => void;
  onBuildChange: (v: string) => void;
}

const selectClass =
  "w-full px-1.5 py-1 rounded-md bg-violet-900/60 border border-fuchsia-400/50 text-white text-xs focus:outline-none focus:ring-2 focus:ring-pink-400/70 cursor-pointer hover:border-pink-300/70 hover:bg-violet-800/60 transition-colors not-italic";

export const FilterRow = ({
  artists,
  searchTerm,
  selectedGenre,
  selectedRole,
  selectedGroup,
  selectedSkill,
  selectedSkill3,
  selectedRanking,
  selectedPhotos,
  selectedBuild,
  genres,
  roles,
  groupOptions,
  bestSkills,
  goodSkills,
  okaySkills,
  badSkills,
  worstSkills,
  bestSkills3,
  goodSkills3,
  okaySkills3,
  badSkills3,
  worstSkills3,
  buildOptions,
  photosOptions,
  onSearchChange,
  onGenreChange,
  onRoleChange,
  onGroupChange,
  onSkillChange,
  onSkill3Change,
  onRankingChange,
  onPhotosChange,
  onBuildChange,
}: FilterRowProps) => {
  const artistNames = [...new Set(artists.map((a) => a.name))].sort();

  return (
    <tr className="align-middle filter-toolbar">
      <th className="px-1 py-2">
        <select value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} className={selectClass} aria-label="Filter by artist name">
          <option value="">Select Artist</option>
          {artistNames.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)} className={selectClass} aria-label="Filter by genre">
          <option value="">Select Genre</option>
          {genres.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedRole} onChange={(e) => onRoleChange(e.target.value)} className={selectClass} aria-label="Filter by role">
          <option value="">Select Role</option>
          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedGroup} onChange={(e) => onGroupChange(e.target.value)} className={selectClass} aria-label="Filter by group">
          <option value="">Select Group</option>
          {groupOptions.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedSkill} onChange={(e) => onSkillChange(e.target.value)} className={selectClass} aria-label="Filter by skill 2">
          <option value="">Select Skill 2</option>
          <optgroup label="Best">{bestSkills.map((s) => <option key={`s2b-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Good">{goodSkills.map((s) => <option key={`s2g-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Okay">{okaySkills.map((s) => <option key={`s2o-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Bad">{badSkills.map((s) => <option key={`s2bad-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Worst">{worstSkills.map((s) => <option key={`s2w-${s}`} value={s}>{s}</option>)}</optgroup>
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedSkill3} onChange={(e) => onSkill3Change(e.target.value)} className={selectClass} aria-label="Filter by skill 3">
          <option value="">Select Skill 3</option>
          <optgroup label="Best">{bestSkills3.map((s) => <option key={`s3b-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Good">{goodSkills3.map((s) => <option key={`s3g-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Okay">{okaySkills3.map((s) => <option key={`s3o-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Bad">{badSkills3.map((s) => <option key={`s3bad-${s}`} value={s}>{s}</option>)}</optgroup>
          <optgroup label="Worst">{worstSkills3.map((s) => <option key={`s3w-${s}`} value={s}>{s}</option>)}</optgroup>
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedRanking} onChange={(e) => onRankingChange(e.target.value)} className={selectClass} aria-label="Filter by ranking">
          <option value="">Select Ranking</option>
          {["S", "A", "B", "C", "F"].map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedPhotos} onChange={(e) => onPhotosChange(e.target.value)} className={selectClass} aria-label="Filter by photos">
          <option value="">Select Photos</option>
          {photosOptions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </th>
      <th className="px-1 py-2">
        <select value={selectedBuild} onChange={(e) => onBuildChange(e.target.value)} className={selectClass} aria-label="Filter by build">
          <option value="">Select Build</option>
          {buildOptions.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </th>
    </tr>
  );
};
