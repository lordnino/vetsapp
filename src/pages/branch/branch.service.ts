import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { BranchModel } from './branch.model';

@Injectable()
export class BranchService {
  constructor(
    public http: Http,
    public nativeStorage: NativeStorage
  ) {}

  getData(): Promise<BranchModel> {
    return this.http.get('./assets/example_data/branch.json')
     .toPromise()
     .then(response => response.json() as BranchModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUserImage(){
    return this.nativeStorage.getItem('branchImage');
  }

  setUserImage(newImage){
    this.nativeStorage.setItem('branchImage', newImage);
  }

}
