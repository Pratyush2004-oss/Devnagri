import { QueriesTypes } from "@/types";
import React, { useEffect, useState } from "react";
import useAdminHook from "../_hook/admin.hooks";

const QueriesTable = () => {
  const [queries, setQueries] = useState<QueriesTypes[]>([]);
  const { fetchQueries } = useAdminHook();
  useEffect(() => {
    const fetchQueriesAsync = async () => {
      const queries = await fetchQueries();
      setQueries(queries);
    };
  }, []);
  return <div>QueriesTable</div>;
};

export default QueriesTable;
