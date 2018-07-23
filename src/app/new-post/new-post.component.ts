import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService} from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const newPost = new Post();
    newPost.title = this.postForm.get('title').value;
    newPost.content = this.postForm.get('content').value;
    newPost.created_at = new Date();
    newPost.loveIts = 0;
    // console.log(newPost);

    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
