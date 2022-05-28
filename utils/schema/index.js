import * as yup from "yup";

export const schema = yup
  .object({
    employeeName: yup.string(),
    actionType: yup.string(),
    applicationType: yup.string(),
    applicationId: yup.string(),
    fromDate: yup.string(),
    toDate: yup.string(),
  })
  .required();
