import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild('heading', {static: true}) header:ElementRef

constructor(){
  console.log('Constructor Called!')
} 

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges Called!')
  console.log(changes)
}

ngOnInit(){
  console.log('ngOnInit Called!')
  console.log(`Text Content: ${this.header.nativeElement.textContent}`)
}

ngDoCheck() {
  console.log('ngDoCheck Called!')
}

ngAfterContentInit() {
  console.log('ngAfterContentInit Called!')
}

ngAfterContentChecked() {
  console.log('ngAfterContentChecked Called!')
}

ngAfterViewInit() {
  console.log('ngAfterViewInit Called!')
  console.log(`Text Content: ${this.header.nativeElement.textContent}`)
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked Called!')
}

ngOnDestroy(){
  console.log('ngOnDestroy Called!')
}

}
