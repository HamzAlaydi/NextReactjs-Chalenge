export const tableRow = (data) => {
  const pushedData = [];
  data.map((d) => {
    pushedData.push({
      id: +d.logId,
      applicationType: d.applicationType,
      applicationId: d.applicationId,
      action: d.actionType,
      actionDetails: d.actionDetails,
      date: d.creationTimestamp,
    });
  });
  return pushedData;
};
