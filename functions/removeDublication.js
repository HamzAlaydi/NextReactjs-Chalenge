export const removeDuplication = (arr, info) => {
  if (info === "actionType") {
    const noDuplicationData = [];
    arr.map((d) => {
      noDuplicationData.push(d.actionType);
    });
    return [...new Set(noDuplicationData)];
  } else if (info === "applicationType") {
    const noDuplicationData = [];
    arr.map((d) => {
      noDuplicationData.push(d.applicationType);
    });
    return [...new Set(noDuplicationData)];
  }
};
