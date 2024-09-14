import api from "../api/axiosInstance";
import { IUser } from "../interfaces/user.interface";

export const checkOrCreateUser = async (userData: IUser) => {
  try {
    const resp = await api.post("/check_or_create_user/", {
      clerk_id: userData.clerkId,
      email: userData.email,
      username: userData.username,
    });

    console.log("this is the api request ", resp);

    return resp.status;
  } catch (err) {
    console.log("err is ", err);
    throw new Error("Failed to fulfil request");
  }
};
