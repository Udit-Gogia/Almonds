import { useUser } from "@clerk/clerk-react";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interface";
import { checkOrCreateUser } from "../services/userService";

export const useUserAuthHook = () => {
  const { user } = useUser();

  const [authenticatedUser, setAuthenticatedUser] = useState<IUser | null>(
    null
  );

  useEffect(() => {
    if (user) {
      setAuthenticatedUser({
        username: user.username!,
        email: user.primaryEmailAddress!.emailAddress!,
        clerkId: user.id,
      });
    }
  }, [user]);

  // the below function checks if a user with the mentioned clerkId is present or not. If not a new user is created.
  const processUserAuthentication = useCallback(async () => {
    try {
      if (authenticatedUser) {
        const response = await checkOrCreateUser(authenticatedUser);

        return response === 200 || response === 201;
      }
    } catch (err) {
      return false;
    }
    return false;
  }, [authenticatedUser]);

  return { processUserAuthentication, user };
};
