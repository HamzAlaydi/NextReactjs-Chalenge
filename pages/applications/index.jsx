import { Container } from "@mui/system";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DataTable from "../../components/applications-components/DataTable";
import SearchForm from "../../components/applications-components/SearchForm";
import { saveData, setInitialData } from "../../utils/redux/reducers";

const Index = ({ fetchedData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const records = fetchedData.result.auditLog;
    records && dispatch(saveData(records));
    records && dispatch(setInitialData(records));
  }, [fetchedData]);

  return (
    <div>
      <Head>
        <title>Application logger</title>
        <meta name="description" content="Application logger Table " />
      </Head>
      <Container maxWidth="xl">
        <h3>Application Loggers</h3>
        <SearchForm />
        <DataTable />
      </Container>
    </div>
  );
};
export default Index;

export const getStaticProps = async (_) => {
  const res = await fetch(process.env.END_POINT);
  const data = await res.json();

  return {
    props: {
      fetchedData: data,
    },
    revalidate: 3000,
  };
};
