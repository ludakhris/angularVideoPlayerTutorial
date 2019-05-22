import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  selectedVideoId: Observable<string>;
  videoList: Observable<Video[]>;

  constructor(videoSvc: VideoDataService, route: ActivatedRoute) {
    this.videoList = videoSvc.loadVideos();

    this.selectedVideoId = route.queryParams.pipe(
      map(params => params['videoId'])
    );
  }

  ngOnInit() {
  }

}
