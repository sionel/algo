function makeTable(pattern) {
  const table = Array.from({ length: pattern.length }, () => 0);
  let j = 0;
  for (let i = 1; i < pattern.length; i++) {
    // while (j > 0 && pattern[i] !== pattern[j]) j --; << 잘못된 코드
    while (j > 0 && pattern[i] !== pattern[j]) j = table[j - 1];
    if (pattern[i] === pattern[j]) table[i] = ++j;
  }
  return table.join('');
}

console.log(makeTable("aaabaaabaab"));
/*
aabaacaabaacdaabaacaab
*/
