import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DashboardData } from "@/types/dashboard";

// maybe put this in an env

const API_URL = "http://localhost:3000/api";

const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await axios.get(`${API_URL}/user/stats`);
  const { data } = response.data;
  return data;
};

export const useDashboardData = () => {
  return useQuery<DashboardData, Error>({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
    refetchInterval: 30000,
  });
};
