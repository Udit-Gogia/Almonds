export interface IUser {
  username: string;
  email: string;
  clerkId: string; // this is used in place of userId. Every user will be authenticated through clerk hence each user will have their own clerk id.
}

export interface ITaskCounterCard {
  id: number;
  title: string;
  count: number;
  cardBackground: string;
  content: React.ReactNode;
}

export interface IAboutAlmondsFeature {
  title: string;
  body: string;
  fontColor: string;
  fontSelectionColor: string;
  iconStrokeColor: string;
}