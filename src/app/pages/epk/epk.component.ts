import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Photos } from '../interfaces/epk-photo-card';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrls: ['./epk.component.scss']
})
export class EpkComponent implements OnInit, AfterViewInit {
  imgs = Photos;

  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
}
