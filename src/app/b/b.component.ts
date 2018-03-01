import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  //pasar imagen
  @Output() emisor = new EventEmitter;
  constructor() { }

  //
  @Input() canal: string ;

  ngOnInit() {
    this.emisor.emit('https://yt3.ggpht.com/-svmpAtQZ_Tc/AAAAAAAAAAI/AAAAAAAAAAA/41N37I0zCko/s900-c-k-no-mo-rj-c0xffffff/photo.jpg');
  }

}
