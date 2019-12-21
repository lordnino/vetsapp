export class ContactModel {
	images: Array<string> = [];
	name: string;
	rating: number;
	email: string;
  phone: string;
  website: string;
  address: string;

	constructor() {
    this.images = [
			'./assets/images/maps/place-1.jpg',
			'./assets/images/maps/place-2.jpg',
			'./assets/images/maps/place-3.jpg',
			'./assets/images/maps/place-4.jpg'
		];
		this.name = "Egyptian Veterinary Syndicate";
		this.rating = 4;
		this.email = "contact@egy-vet-synd.org";
	  this.phone = " 02 2792 5718";
	  this.website = "https://egy-vet-synd.org/vet2/";
	  this.address = "6 El Hadika St., Kasr El Nil, Cairo Governorate";
  }
}
