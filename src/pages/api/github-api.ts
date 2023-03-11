import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ProjectCommits, normalize } from "@/utils";

export const baseUrl = "http://localhost:1337/timeline?";

export const GetCommits = (username: string, repname: string) => {
  const [response, setResponse] = useState<ProjectCommits>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    await axios
      .get(`${baseUrl}username=${username}&reponame=${repname}`)
      .then(function (data) {
        setResponse(normalize(data.data));
        setIsLoading(false);
      })
      .catch(function (err) {
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { response, error, isLoading };
};
