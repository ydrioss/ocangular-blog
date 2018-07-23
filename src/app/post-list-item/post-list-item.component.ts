import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

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
  @Input() post: Post;

  constructor(private postService: PostService) { }

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

  onDeletePost(post) {
    this.postService.removePost(post);
  }

}
