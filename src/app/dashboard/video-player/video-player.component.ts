import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, share, switchMap, filter } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  selectedVideo: Observable<Video>;

  constructor(private router: Router, route: ActivatedRoute, svc: VideoDataService) {
    this.selectedVideo = route.queryParams.pipe(
      pluck<Params, string>('videoId'),
      filter(id => !!id),
      switchMap(id => svc.getVideo(id)),
      share()
    );
  }

  ngOnInit() {
  }

}
