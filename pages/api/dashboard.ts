import { NextApiRequest, NextApiResponse } from "next";
import * as userService from "../../services/user-service";
import logger from "@/lib/logger";

const log = logger.child({ route: "/api/dashboard" });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    log.info("Received getDashboardData request");

    // Extract user information from the request
    // You'll need to implement proper authentication middleware
    const { userId, email, role } = req.headers;

    if (!userId || !email || !role) {
      throw new Error("Missing authentication data");
    }

    const dashboardData = await userService.getUserStats(userId as string);
    log.info("Sending dashboard data");
    res.status(200).json(dashboardData);
  } catch (error) {
    log.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Failed to fetch dashboard data" });
  }
}

export default handler;