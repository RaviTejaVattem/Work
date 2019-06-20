import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() comment;
  @Output() videoClick = new EventEmitter();
  @ViewChild('videoRef') videoRef;

  constructor() { }

  ngOnInit() {
  }

  toggleVideo(event: any, i: number) {
    this.videoClick.emit({ event: this.videoRef, index: i });
  }

}