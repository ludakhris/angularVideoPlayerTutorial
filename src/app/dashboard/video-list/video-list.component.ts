import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videolist: Video[] = [];

  selectedVideo: Video | undefined;

  constructor() { }

  ngOnInit() {
  }

  onSelect(v: Video) {
    this.selectedVideo = v;
  }

  shouldHighlight(v: Video) {
    if (this.selectedVideo !== undefined && v.id === this.selectedVideo.id) {
      return 'card  blue darken-4';
    } else {
      return 'card  blue darken-3';
    }
  }

  shouldBold(v: Video) {
    if (this.selectedVideo !== undefined && v.id === this.selectedVideo.id) {
      return true;
    } else {
      return false;
    }
  }
}
