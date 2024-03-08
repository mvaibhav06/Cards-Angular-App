import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: '../../assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Mountain Biking',
      imageUrl: '../../assets/biking.jpeg',
      username: 'biking122',
      content: 'I did some biking today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: '../../assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
  ];
}
