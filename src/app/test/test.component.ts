import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: `./test.component.html`,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  cards = [
    { title: 'Card 1', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Card 2', description: 'Consectetur adipiscing elit.' },
    { title: 'Card 3', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Card 4', description: 'Ut enim ad minim veniam.' },
    { title: 'Card 5', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Card 6', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Card 7', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Card 8', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ];
  translateX = 0;
  dynamicHeight : number| null =null;
  @ViewChild('containerRef') containerRef!: ElementRef;
  @ViewChild('objectRef') objectRef!: ElementRef;

  setDynamicHeight=(num:number)=>{
    this.dynamicHeight = num;
  }
  setTranslateX=(num:number)=>{
    this.translateX = num;
  }
  ngAfterViewInit(): void {
    if(window.innerWidth>1000){
    this.handleDynamicHeight(this.objectRef);
    window.addEventListener("resize", this.resizeHandler);
    }
  }

   resizeHandler = () => {
    this.handleDynamicHeight(this.objectRef);
  };


   calcDynamicHeight = (objectWidth:number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };
  
   handleDynamicHeight = (ref:any) => {
    const objectWidth = ref.nativeElement.scrollWidth;
    const dynamicHeight = this.calcDynamicHeight(objectWidth);
    this.setDynamicHeight(dynamicHeight);
  };

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const offsetTop = - this.containerRef.nativeElement.offsetTop;
      this.setTranslateX(offsetTop);
  }
}
