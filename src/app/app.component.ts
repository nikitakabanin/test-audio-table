import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { IAudioInfo } from './models';
import {
  AudioPlayerComponent,
  NgxAudioPlayerModule,
} from '@khajegan/ngx-audio-player';
import { Track } from '@khajegan/ngx-audio-player';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, NgxAudioPlayerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('player', { static: false })
  player!: AudioPlayerComponent;

  dataSource: IAudioInfo[] = [
    { id: 1, title: 'Rain', fileName: 'rain.mp3' },
    { id: 2, title: 'Wind', fileName: 'wind.mp3' },
    { id: 3, title: 'Woods', fileName: 'woods.mp3' },
    { id: 4, title: 'City', fileName: 'city.mp3' },
  ];
  displayedColumns = ['id', 'title', 'file-name'];
  private initialPlaylist: Track[] = [
    { title: 'Rain', link: '../assets/sounds/rain.mp3', duration: 4 },
    { title: 'Wind', link: '../assets/sounds/wind.mp3', duration: 63 },
    { title: 'Woods', link: '../assets/sounds/woods.mp3', duration: 34 },
    { title: 'City', link: '../assets/sounds/city.mp3', duration: 66 },
  ];
  playlist = this.initialPlaylist;
  ngAfterViewInit(): void {}
  changeTrack(title: string) {
    this.playlist = this.initialPlaylist.filter((e) => e.title === title);
    this.player.isPlaying = false;
  }
}
