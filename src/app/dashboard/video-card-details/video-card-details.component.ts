import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-card-details',
  templateUrl: './video-card-details.component.html',
  styleUrls: ['./video-card-details.component.css']
})
export class VideoCardDetailsComponent implements OnInit {

  @Input() video: Video | undefined;
  @Input() selected: boolean;

  constructor() {
    this.selected = false;
  }

  ngOnInit() {
  }

  shouldHighlight(v: Video) {
    if (this.selected) {
      return 'card  blue darken-4';
    } else {
      return 'card  blue darken-3';
    }
  }

  shouldBold(v: Video) {
    if (this.selected) {
      return true;
    } else {
      return false;
    }
  }
}
