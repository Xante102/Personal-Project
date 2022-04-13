import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css']
})
export class StudentsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = [
    {
      img:'https://c4.wallpaperflare.com/wallpaper/197/868/21/women-blonde-teens-face-wallpaper-preview.jpg',
      name:'Tamara Manning',
      field: 'B.A. Business Administration',
      courses: 34,
      reviews: 28,
      approved: 19,
    },
    {
      img:'https://i.pinimg.com/564x/87/4a/67/874a6797fe9bc0474e868e8e5af4594c.jpg',
      name:'Katrina Brooks',
      field: 'Bsc. Computer Science',
      courses: 24,
      reviews: 20,
      approved: 23,
    },
    {
      img:'https://ak.picdn.net/shutterstock/videos/1069688551/thumb/1.jpg?ip=x480',
      name:'Garry Sharp',
      field: 'B.A. Business Administration',
      courses: 43,
      reviews: 39,
      approved: 28,
    },
    {
      img:'https://images.hdqwalls.com/download/ariel-winter-ashley-photoshoot-for-teen-vogue-us-4k-2020-2a-1400x1050.jpg',
      name:'Linda Lucas',
      field: 'Bsc. Accounting & Finance',
      courses: 22,
      reviews: 15,
      approved: 27,
    },
      {
        img:'https://tuk-cdn.s3.amazonaws.com/assets/templates/Education-Portal/ep_17.png',
      name:'Lewis Patterson',
      field: 'Bsc. Cybersecurity',
      courses: 14,
      reviews: 28,
      approved: 20,
    },
    {
      img:'https://p4.wallpaperbetter.com/wallpaper/838/923/721/beautiful-girl-teen-wallpaper-preview.jpg',
      name:'Cecelia French',
      field: 'Bsc. Software Engineering',
      courses: 21,
      reviews: 55,
      approved: 18,
    },
    {
      img:'https://img.freepik.com/free-photo/headshot-portrait-tender-redhead-teenage-girl-with-serious-expression-looking-camera-caucasian-woman-model-with-ginger-hair-posing-indoors-pastel-blue-background-copy-space_1258-462.jpg',
      name:'Hannah Ford',
      field: 'Bsc. Software Engineering',
      courses: 15,
      reviews:  23,
      approved: 10,
    },
    {
      img:'https://ak.picdn.net/shutterstock/videos/1018093183/thumb/1.jpg',
      name:'Wilson Jordan',
      field: 'B.A. Business Administration',
      courses: 32,
      reviews: 45,
      approved: 12,
    },
    {
      img:'https://ak.picdn.net/shutterstock/videos/1060299299/thumb/1.jpg?ip=x480',
      name:'Percy Watts',
      field: 'Bsc. Accounting & Finance',
      courses: 14,
      reviews: 23,
      approved: 22,
    },
    {
      img: 'https://www.devostock.com/static12/preview2/stock-photo-devostock-blonde-beautiful-thinking-girl-indoor-wall-4k-176351.jpg',
      name:'Thelma Hunt',
      field: 'Bsc. Computer Science',
      courses: 36,
      reviews: 41,
      approved: 23,
    },
    {
      img:'https://wallpaperaccess.com/full/1764260.jpg',
      name:'Forrest Nelson',
      field: 'Bsc. Accounting & Finance',
      courses: 28,
      reviews: 10,
      approved: 15,
    },
    {
      img:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80',
      name:'Levi Woods',
      field: 'Bsc. Computer Science',
      courses: 18,
      reviews: 21,
      approved: 12,
    },
    {
      img:'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVlbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      name:'Marcos Wade',
      field: 'Web Development',
      courses: 15,
      reviews: 29,
      approved: 20,
    },
    
  ]

}
