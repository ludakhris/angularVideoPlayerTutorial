import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, share, switchMap } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videolist: Video[] = [];
  @Input() selectedVideoId: string | undefined;
  selectedVideo: Observable<Video>;
  // @Output() videoSelected = new EventEmitter<Video>();

  constructor(private router: Router, route: ActivatedRoute, svc: VideoDataService) {
    this.selectedVideo = route.params.pipe(
      pluck<Params, string>('videoId'),
      switchMap(id => svc.getVideo(id)),
      share()
    );
  }

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
