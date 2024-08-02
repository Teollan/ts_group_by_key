type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const map: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = item[key];

    if (map[groupKey] === undefined) {
      map[groupKey] = [];
    }

    map[groupKey].push(item);
  }

  return map;
}
