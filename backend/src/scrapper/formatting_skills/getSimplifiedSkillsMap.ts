const getSimplifiedSkillsMap = (skills: string[]): Map<string, string[]> => {
  const simplifiedSkillsMap: Map<string, string[]> = new Map();
  skills.forEach((skill) => {
    const simplifiedSkill = skill
      .replace(/B2|C1/g, '')
      .toLowerCase()
      .replace(/\(.*\)/gi, '')
      .replace(/j\./gi, '')
      .replace(/(?<=.)(\.js|js)/gi, '')
      .replace(/ and | or |, | lub /gi, '/')
      .replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF0-9 +#\./]/gi, ' ')
      .replace(/(?<=\s)v?[0-9]+\+?\.?\/?[0-9]*\b\+?/gi, '')
      .replace(/\s+/gi, ' ');
    simplifiedSkillsMap.set(skill, getArrayOfGoodSkills(simplifiedSkill));
  });
  return simplifiedSkillsMap;
};

const getArrayOfGoodSkills = (skills: string): string[] => {
  const splittedSkills = skills.split('/').map((skill) => skill.trim());
  return splittedSkills.filter((skill) => !artefacts.includes(skill));
};

const artefacts: string[] = ['', '1.1', '2', '2.0', '20012', '3', '4', '802.1x', 'a', 'b', 'z', '.', '1', '8', '8.1'];

export default getSimplifiedSkillsMap;
