import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImgmodalService } from '../imgmodal.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('img01') modalImg!: ElementRef;
  @ViewChild('caption') captionText!: ElementRef;

  constructor(private modalService: ImgmodalService) {}

  ngOnInit() {
    console.log('ImageModalComponent initialized');
    this.modalService.showModal$.subscribe((modalData) => {
      if (modalData) {
        this.openModal(modalData.imgSrc, modalData.altText);
      } else {
        this.closeModal();
      }
    });
  }

  openModal(imgSrc: string, altText: string): void {
    this.modal.nativeElement.style.display = 'block';
    this.modalImg.nativeElement.src = imgSrc;
    this.captionText.nativeElement.innerHTML = altText;
  }

  closeModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }
}
