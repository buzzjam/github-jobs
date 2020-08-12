import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "@material-ui/core";
import Job from "./components/Job";
import JobPagination from "./components/JobPagination";
import "./App.css";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  const handlePageChange = (event, value) => {
    setPage(value)
  };

  return (
    <Container>
      <h1>Github Jobs Board</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      {!loading && <JobPagination page={page} onChange={handlePageChange}></JobPagination>}

      {jobs.map((job) => {
        return <Job key={job.id} job={job}></Job>;
      })}
    </Container>
  );
}

export default App;
