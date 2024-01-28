import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IModal{
  id:string;
  visible:boolean;
 
  
}

@Injectable({
  providedIn: 'root'
})
export class ModalService{
  private modals:IModal[]=[];
  private imgSrcSubject = new BehaviorSubject<string>('');
  imgSrc$ = this.imgSrcSubject.asObservable();

  constructor() {
   
  }


  register(id:string){
    this.modals.push({
      id,
      visible:false,
      
      
    })
    console.log(this.modals);
  }
  unregister(id:string){
    this.modals=this.modals
    .filter(element=>element.id!==id);
  }
  
  isModalVisible(id:string):boolean{
    //1 way with negatiation operator
    //!! negatiation operator if we use !->then if true value return false,false return true ,if we use !!->then if true value return true,false return false
    return !!this.modals.find(element=> element.id===id)?.visible; //? optional operator

    //2 way with explicitly casting to Boolean
//    return Boolean(this.modals.find(element => element.id === id)?.visible);
  }
  
  toggleModal(id:string){
   // this.visible=!this.visible;
   const modal=this.modals.find(element=>element.id===id);
  
   if(modal)
    modal.visible=!modal.visible;
  }
  toggleModalImg(id:string,img:string){
    console.log('methoid call');
    // this.visible=!this.visible;
    const modal=this.modals.find(element=>element.id===id);
    
    this.setImageurl(img);
    //const imgsrc=this.modals.find(element=>element.img===img);
    console.log(img);
    if(modal)
     modal.visible=!modal.visible;
   }
   setImageurl(imgSrc:string){
    this.imgSrcSubject.next(imgSrc);
    console.log('new val'+this.imgSrcSubject)
   }

   /*
   getimageUrl():string {
    console.log('get urlloo calleedddd'+this.imgsrc);
    return this.imgsrc;

   }
*/
  
}
