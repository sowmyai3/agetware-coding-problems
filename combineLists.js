function combineLists(list1, list2) {
  const combined = [...list1, ...list2];
  combined.sort((a, b) => a.positions[0] - b.positions[0]);

  const merged = [];

  for (let i = 0; i < combined.length; i++) {
    let current = combined[i];

    while (i + 1 < combined.length && isOverlapping(current, combined[i + 1])) {
      const next = combined[i + 1];
      current = mergeElements(current, next);
      i++;
    }

    merged.push(current);
  }

  return merged;
}

function isOverlapping(a, b) {
  const [aStart, aEnd] = a.positions;
  const [bStart, bEnd] = b.positions;

  const overlapStart = Math.max(aStart, bStart);
  const overlapEnd = Math.min(aEnd, bEnd);
  const overlapLength = Math.max(0, overlapEnd - overlapStart);

  const aLength = aEnd - aStart;
  const bLength = bEnd - bStart;

  return (overlapLength > aLength / 2) || (overlapLength > bLength / 2);
}

function mergeElements(a, b) {
  return {
    positions: [Math.min(a.positions[0], b.positions[0]), Math.max(a.positions[1], b.positions[1])],
    values: [...a.values, ...b.values]
  };
}

//  Example 
const list1 = [
  { positions: [0, 5], values: [1] }
];

const list2 = [
  { positions: [4, 9], values: [2] },
  { positions: [10, 14], values: [3] }
];

console.log(JSON.stringify(combineLists(list1, list2), null, 2));
