import { Injectable } from '@angular/core';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { ApiService } from './api.service';
import { subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService) { }

  getAmiibos() {
    return this.api.get<AmiiboInterface[]>('/amiibo');
  }
}
