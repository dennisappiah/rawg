import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";
import platforms from "../data/platform";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
