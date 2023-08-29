const getAllSimplifiedSkills = (simplifiedSkillsMap: Map<string, string[]>): string[] => {
  const allSimple = [...simplifiedSkillsMap.values()].flat();
  return Array.from(new Set(allSimple)).sort();
};

export default getAllSimplifiedSkills;
