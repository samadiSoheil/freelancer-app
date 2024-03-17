import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectServices";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-project"],
    queryFn: getOwnerProjectsApi,
  });

  // const { projects } = data || {};

  // return { projects, isLoading };
  return { data, isLoading };
}
