import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-one',
  templateUrl: './category-one.component.html',
  styleUrls: ['./category-one.component.scss']
})
export class CategoryOneComponent implements OnInit {
 
  catKnobsArray = ['../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg','../../assets/images/knobs/knob-img1.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
