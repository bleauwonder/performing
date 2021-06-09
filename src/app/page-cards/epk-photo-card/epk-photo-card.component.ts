import { Component, Input, OnInit } from '@angular/core';
import { PhotoOptions } from '../../pages/interfaces/epk-photo-card';
@Component({
  selector: 'app-epk-photo-card',
  templateUrl: './epk-photo-card.component.html',
  styleUrls: ['./epk-photo-card.component.scss']
})
export class EpkPhotoCardComponent implements OnInit {
  @Input() imgs: PhotoOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
