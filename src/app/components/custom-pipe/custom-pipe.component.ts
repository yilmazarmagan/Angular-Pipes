import { Component, OnInit } from '@angular/core';
import { commentData } from '../../core/utils/comment-data';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
})
export class CustomPipeComponent {
  searchEmail = '';
  commentData: any[] = commentData;
}
