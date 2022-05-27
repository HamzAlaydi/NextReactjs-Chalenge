import React from "react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { removeDuplication } from "../../functions/removeDublication";
import { filterData } from "../../utils/redux/reducers";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/schema";
import { saveData } from "../../utils/redux/reducers";
const SearchForm = () => {
  //redux toolkit
  const { initialData } = useSelector((state) => state.dataSlice);
  const { savedData } = useSelector((state) => state.dataSlice);
  const dispatch = useDispatch();

  //React Hook Form Library https://react-hook-form.com/
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employeeName: "",
      actionType: "",
      applicationType: "",
      applicationId: "",
      fromDate: null,
      toDate: null,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    dispatch(filterData(data));
    // console.log(data);
  };

  //Handle Clear Filtration
  const handleClearFilter = () => {
    dispatch(saveData(initialData));
    //return search form inputs to default
    reset();
  };

  return (
    <Stack py="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction="row">
          {/* employeeName */}
          <Controller
            name="employeeName"
            control={control}
            render={({ field }) => (
              <TextField
                label="Employee Name"
                variant="outlined"
                {...field}
                error={Boolean(errors.employeeName)}
                helperText={errors.employeeName?.message}
              />
            )}
          />

          {/* actionType */}
          <Controller
            name="actionType"
            control={control}
            render={({ field }) => (
              <TextField
                label="Action Types"
                style={{ width: "250px" }}
                select
                {...field}
                error={Boolean(errors.actionType)}
                helperText={errors.actionType?.message}
              >
                {removeDuplication(initialData, "actionType").map(
                  (item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  }
                )}
              </TextField>
            )}
          />

          {/* applicationType */}

          <Controller
            name="applicationType"
            control={control}
            render={({ field }) => (
              <TextField
                label="Application Types"
                style={{ width: "250px" }}
                select
                {...field}
                error={Boolean(errors.applicationType)}
                helperText={errors.applicationType?.message}
              >
                {removeDuplication(initialData, "applicationType").map(
                  (item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  }
                )}
              </TextField>
            )}
          />

          {/* fromDate */}

          <Controller
            name="fromDate"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="From Date"
                  renderInput={(params) => <TextField {...params} />}
                  {...field}
                  error={Boolean(errors.fromDate)}
                  helperText={errors.fromDate?.message}
                />
              </LocalizationProvider>
            )}
          />

          {/* toDate */}

          <Controller
            name="toDate"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="To Date"
                  renderInput={(params) => <TextField {...params} {...field} />}
                  {...field}
                  error={Boolean(errors.toDate)}
                  helperText={errors.toDate?.message}
                />
              </LocalizationProvider>
            )}
          />

          {/* applicationId */}

          <Controller
            name="applicationId"
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Application ID"
                variant="outlined"
                {...field}
                error={Boolean(errors.applicationId)}
                helperText={errors.applicationId?.message}
              />
            )}
          />

          {/* Button */}

          <Button
            type="submit"
            variant="contained"
            style={{ padding: "0 50px 0" }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            style={{ padding: "0 50px 0" }}
            onClick={handleClearFilter}
          >
            Clear
          </Button>
        </Stack>{" "}
      </form>
    </Stack>
  );
};

export default SearchForm;
