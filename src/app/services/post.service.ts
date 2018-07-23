import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      title: 'Mon premier post',
      content: 'One Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 0,
      created_at: new Date('2018-05-02T11:00:00')
    },
    {
      id: 2,
      title: 'Mon deuxième post',
      content: 'Two Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 10,
      created_at: new Date('2018-06-24T13:24:11')
    },
    {
      id: 3,
      title: 'Mon troisième post',
      content: 'Three Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: -4,
      created_at: new Date('2018-07-19T10:39:54')
    }
  ];

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date();
    };
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length-1)].id + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }



  constructor() { }
}
