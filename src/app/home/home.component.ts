import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import IClip from 'src/app/models/clip.model';
import { ClipService } from 'src/app/services/clip.service';
import { ModalService } from 'src/app/services/modal.service';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImgmodalService } from '../imgmodal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


//videoOrder='1';
clips: IClip[] = [];
//activeClip: IClip | null = null;
//sort$: BehaviorSubject<string>;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  //private clipService: ClipService,
  private modal: ModalService,
  private modalService: ImgmodalService
  
) { 
  //this.clipService.getClips();

  //this.sort$ = new BehaviorSubject(this.videoOrder);
   //this.sort$.subscribe(console.log);
   //this.sort$.next('test');
}

openModal1($event:Event,imgSrc: string, altText: string): void {
  console.log('Image clicked!');
  $event.preventDefault();
  this.modalService.openModal(imgSrc, altText);
}
openModalImg($event:Event,imgSrc: string){
  $event.preventDefault();//prevent default browser behavior
  this.modal.toggleModalImg('auth',imgSrc);
}


/*
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params:Params)=>{

    const sortParam = params['params']['sort']; 
    console.log('sort no: '+sortParam);
    this.videoOrder = sortParam == '2' ? sortParam : '1';
    this.sort$.next(this.videoOrder);
    })
    this.clipService.getUserClips(this.sort$).subscribe(docs => {
      this.clips = []

      docs.forEach(doc => {
        this.clips.push({docID: doc.id,...doc.data()
        })
      })
      console.log(docs);
    })
  }
  */

  /*
sort(event: Event) {
  const { value } = (event.target as HTMLSelectElement)
  //this.router.navigateByUrl(`/manage?sort=${value}`)
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: {
      sort: value
    }
  })
}
*/

/*
openModal($event: Event, clip: IClip) {
  $event.preventDefault()
  this.activeClip = clip
  this.modal.toggleModal('editClip')
}
*/

/*
update($event: IClip) {
  this.clips.forEach((element, index) => {
    if(element.docID == $event.docID) {
      this.clips[index].title = $event.title
    }
  })
}
*/

/*
deleteClip($event: Event, clip: IClip) {
  $event.preventDefault()

  this.clipService.deleteClip(clip)
  this.clips.forEach((element, index) => {
    if(element.docID == clip.docID) {
      this.clips.splice(index, 1)
    }
  })
}
*/

/*
async copyToClipboard($event: MouseEvent, docID: string | undefined) {
  $event.preventDefault()

  if(!docID) {
    return
  }

  const url = `${location.origin}/clip/${docID}`

  await navigator.clipboard.writeText(url)

  alert('Link Copied!')
}
*/









  
  downloadPDF(){
    let link = document.createElement('a');
   // link.setAttribute('type', 'hidden');
    link.href = 'assets/cv/Diluna_Chathuranga_CV.pdf';
    link.download = "Diluna_Chathuranga_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
   
  }

}
