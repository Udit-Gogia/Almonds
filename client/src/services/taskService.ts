import api from "../api/axiosInstance";

export const task_dashboard = async (clerk_id: string) => {
  try {
    const resp = await api.post("/task/dashboard/", {
      clerk_id,
    });

    console.log("resp is ", resp);
  } catch (err) {
    console.log("err is ", err);
    throw new Error("Failed to fulfil request");
  }
};
