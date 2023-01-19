import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  catKnobsArray = [['../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knob-img1.jpg'],
  ['../../assets/images/knobs/knob-img1.jpg',
  '../../assets/images/knobs/knobs-img14.jpg',
  '../../assets/images/knobs/knobs-img12.jpg',
]];
catHandlesArray = [['../../assets/images/handles/handles-img1.jpg',
'../../assets/images/handles/handles-img1.jpg',
'../../assets/images/handles/handles-img1.jpg'],
['../../assets/images/handles/handles-img1.jpg',
'../../assets/images/handles/handles-img1.jpg',
'../../assets/images/handles/handles-img1.jpg',
]]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openCategoriespanel(){
    this.router.navigateByUrl('Categories-panel');
  }
}
