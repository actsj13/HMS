import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Server} from '../../utils/Server'
import { Asset } from '../../models/Asset';

@Injectable()
export class StoreService {
  token = "niloy";//localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+this.token})
  };

  constructor(private http: HttpClient) { }

  getAssetList() : Observable<Asset[]> {
    return this.http.get<Asset[]>(Server.API_ENDPOINT + 'store');
  }

  addAsset(asset:Asset) {
    return this.http.post(Server.API_ENDPOINT +'store', JSON.stringify(asset), this.httpOptions);
  }

  updateAsset(asset:Asset) {
    return this.http.put(Server.API_ENDPOINT +'store', JSON.stringify(asset),this.httpOptions);
  }

  deleteAsset(asset:Asset) {
    return this.http.delete(Server.API_ENDPOINT +'store/'+asset.assetID,this.httpOptions);
  }

  searchSortAsset(asset:Asset) {
    return this.http.post(Server.API_ENDPOINT +'store_search', JSON.stringify(asset), this.httpOptions);
  }
}
