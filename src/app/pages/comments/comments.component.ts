import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comment:string= '';
  commentList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addComment(event) {
    if(this.comment != '' && this.comment.length <= 300) {
      
      event.preventDefault();
      this.commentList.push({id: Math.random(), comment: this.comment});
      this.comment = '';
      console.log(this.commentList)
    } else {
      event.preventDefault();
      window.alert('Yorumunuz boş ve ya 300 karakterden uzun olamaz')
    }
  }

  changeHandler(event) {
    this.comment = event.target.value
  }

  deleteComment(id) {
    this.commentList = this.commentList.filter(item => id !== item.id)
  }
}
