import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videolist: Video[] = [];
  @Input() selectedVideo: Video | undefined;
  @Output() videoSelected = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  selectVideo(v: Video) {
    this.videoSelected.emit(v);
  }

  shouldBold(v: Video) {
    if (typeof this.selectedVideo === 'undefined') {
      return false;
    }
    if (v.id === this.selectedVideo.id) {
      return true;
    } else {
      return false;
    }
  }
}
