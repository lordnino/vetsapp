export class UserModel {
  image: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  name: string;
  website: string;
}

export class BranchPostModel {
  date: Date;
	image: string;
	description: string;
	likes: string ;
	comments: string;
	liked: boolean = false;
}

export class BranchModel {
  user: UserModel = new UserModel();
  following: Array<UserModel> = [];
  followers: Array<UserModel> = [];
  posts: Array<BranchPostModel> = [];
}
