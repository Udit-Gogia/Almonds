export interface IUser {
  username: string;
  email: string;
  clerkId: string; // this is used in place of userId. Every user will be authenticated through clerk hence each user will have their own clerk id.
}
