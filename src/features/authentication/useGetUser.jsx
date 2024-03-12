import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authServise";

export default function useGetUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });
}
