import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';
import { VideoDataService } from '../../video-data.service';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  selectedVideo: Video | undefined;
  videoList: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videoList = svc.loadVideos();
  }

  ngOnInit() {
  }

  handleEvent(v: Video) {
    this.selectedVideo = v;
  }

}
