import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts++;
    console.log(`upvote => ${this.postLoveIts}`);
  }

  onDontLoveIt() {
    this.postLoveIts--;
    console.log(`downvote => ${this.postLoveIts}`);
  }

}
