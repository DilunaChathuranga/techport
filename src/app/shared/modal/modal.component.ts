import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy {
@Input() modalID=''
imgSrc: string | undefined;




  constructor(public modal:ModalService,public el:ElementRef) {
   console.log(el);
   //let val=modal.getimageUrl();
    //console.log(val+' ..get the value');

  
   }

  ngOnInit(): void {

    document.body.appendChild(this.el.nativeElement);

    this.modal.imgSrc$.subscribe((imgSrc) => {
      this.imgSrc = imgSrc;
      // Do something with the imgSrc in your modal component...
      console.log('called oninit');
      console.log(imgSrc);
    });
  }
  
  ngOnDestroy(){
    document.body.removeChild(this.el.nativeElement);
  }

  closeModal(){
    this.modal.toggleModal(this.modalID);
    
  }

  

}
