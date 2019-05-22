import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videolist: Video[] = [];
  @Input() selectedVideoId: string | undefined;
  // @Output() videoSelected = new EventEmitter<Video>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectVideo(v: Video) {
    // this.videoSelected.emit(v);
    const queryParams = { videoId: v.id };
    void this.router.navigate([], { queryParams, queryParamsHandling: '' });
  }

  shouldBold(v: Video) {
    if (typeof this.selectedVideoId === 'undefined') {
      return false;
    }
    if (v.id === this.selectedVideoId) {
      return true;
    } else {
      return false;
    }
  }
}
