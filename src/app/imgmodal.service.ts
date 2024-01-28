import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgmodalService {
  private showModalSource = new BehaviorSubject<{ imgSrc: string; altText: string } | null>(null);
  showModal$ = this.showModalSource.asObservable();

  openModal(imgSrc: string, altText: string): void {
    console.log('Trying to open modal'+imgSrc);
    this.showModalSource.next({ imgSrc, altText });
  }

  closeModal(): void {
    this.showModalSource.next(null);
  }
}
