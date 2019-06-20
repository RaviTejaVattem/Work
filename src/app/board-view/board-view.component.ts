import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef, TemplateRef } from '@angular/core';
import { VideoComponent } from '../shared/video/video.component';
import { CommentsDataService } from '../service/comments-data.service';

import { Comments } from '../models/comments-model';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {
  @ViewChildren(VideoComponent) videoplayer: QueryList<VideoComponent>;
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  data: Comments[];

  constructor(private _service: CommentsDataService) { }

  ngOnInit() {
    this._service.getCommentsData().subscribe(comment => {
      this.data = comment;
      this.data.map(val => val.videoUrl = this.videoUrl);
    });
  }

  toggleVideo(event: ElementRef, i: number) {
    console.log('querylist >>>>>>>>', event.nativeElement);
  }
}