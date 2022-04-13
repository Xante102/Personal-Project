import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  

  courses = [
    {
      name: 'Photography',
      person: 'Kianna Andrade',
      type: 'Photography',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },

    {
      name: 'iPhone & Android Photography',
      person: 'Arielle Sierra',
      type: 'Photography',
      price: 185,
      rating: 4.8,
      modules: '12 Modules by'
    },
    {
      name: 'Video Production',
      person: 'Kianna Andrade',
      type: 'Photography',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },
    {
      name: 'Adobe Lightroom',
      person: 'Lucian Deacon',
      type: 'Photography',
      price: 185,
      rating: 4.2,
      modules: '10 Modules by'
    },
    {
      name: 'Online Photoshop',
      person: 'Chance Conrad',
      type: 'Photography',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },
    {
      name: 'Video Editing',
      person: 'Melody Adams',
      type: 'Photography',
      price: 145,
      rating: 4.9,
      modules: '20 Modules by'
    },
    {
      name: 'Digital Marketing',
      person: 'Tyreke Churchill',
      type: 'Marketing',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },
    {
      name: 'Social Media Marketing',
      person: 'Zarah Weir',
      type: 'Marketing',
      price: 185,
      rating: 4.6,
      modules: '15 Modules by'
    },
    {
      name: 'Creative Writing',
      person: 'Wallace Bauer',
      type: 'Marketing',
      price: 199,
      rating: 4.6,
      modules: '10 Modules by'
    },
    {
      name: 'SEO & Digital Marketing',
      person: 'Lauryn Bautista',
      type: 'Marketing',
      price: 185,
      rating: 4.8,
      modules: '12 Modules by'
    },
    {
      name: 'Blogging, Content Marketing & Vlogging',
      person: 'Cally Payne',
      type: 'Marketing',
      price: 199,
      rating: 4.8,
      modules: '10 Modules by'
    },
    {
      name: 'Viral Marketing',
      person: 'Cally Payne',
      type: 'Marketing',
      price: 199,
      rating: 4.2,
      modules: '10 Modules by'
    },
    {
      name: 'Graphic Design',
      person: 'Aubrey Frederick',
      type: 'Design',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    }, {
      name: 'Fashion Design',
      person: 'Hassan Huber',
      type: 'Design',
      price: 199,
      rating: 4.8,
      modules: '12 Modules by'
    },
    {
      name: 'Interior Design',
      person: 'Justin Valdez',
      type: 'Design',
      price: 199,
      rating: 4.6,
      modules: '12 Modules by'
    },
    {
      name: 'Online Photoshop',
      person: 'Lexi-May Nicholls',
      type: 'Design',
      price: 185,
      rating: 4.6,
      modules: '15 Modules by'
    },
    {
      name: 'Budget Graphic Design',
      person: 'Herman Jacobson',
      type: 'Design',
      price: 185,
      rating: 4.2,
      modules: '10 Modules by'
    },
    {
      name: 'Adobe Illustrator',
      person: 'Miyah Lozano',
      type: 'Design',
      price: 185,
      rating: 4.6,
      modules: '10 Modules by'
    },
    {
      name: 'Jewellery Design',
      person: 'Kylan Horner',
      type: 'Design',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },
    {
      name: 'Technical Drawing',
      person: '',
      type: 'Design',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },
    {
      name: 'Excel',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.9,
      modules: '10 Modules by'
    },
    {
      name: 'leadership & Management',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.8,
      modules: '10 Modules by'
    },{
      name: 'Diploma in Project Management',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.8,
      modules: '10 Modules by'
    },{
      name: 'Data Analytics',
      person: '',
      type: 'Business & Analytics',
      price: 199,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Bookkeeping & Accounting',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'Sales & Business Development',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'How to Start a Business',
      person: '',
      type: 'Business & Analytics',
      price: 185,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Organizational Psychology',
      person: '',
      type: 'Business & Analytics',
      price: 130,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'Probability & Statistical Analysis',
      person: '',
      type: 'Business & Analytics',
      price: 145,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Mini MBA in Business',
      person: '',
      type: 'Business & Analytics',
      price: 120,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'E-commerce',
      person: '',
      type: 'Business & Analytics',
      price: 199,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Financial Trading & Investment',
      person: '',
      type: 'Finance',
      price: 199,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Property Investment',
      person: '',
      type: 'Finance',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },{
      name: 'Shares Trading',
      person: '',
      type: 'Finance',
      price: 185,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Cryptocurrency',
      person: '',
      type: 'Finance',
      price: 199,
      rating: '4.9',
      modules: '20 Modules by'
    },{
      name: 'Financial Planning',
      person: '',
      type: 'Finance',
      price: 185,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Nutrition',
      person: '',
      type: 'Health Wellness',
      price: 120,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Sports Nutrition',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Childcare Training',
      person: '',
      type: 'Health Wellness',
      price: 80,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Meal Planning & Food Science',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Mindfulness & Meditation',
      person: '',
      type: 'Health Wellness',
      price: 80,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Alternative Therapies',
      person: '',
      type: 'Health Wellness',
      price: 120,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Coaching',
      person: '',
      type: 'Health Wellness',
      price: 110,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Early Childhood Development',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Fitness Instruction',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'Psychology',
      person: '',
      type: 'Health Wellness',
      price: 199,
      rating: 4.8,
      modules: '15 Modules by'
    },{
      name: 'Physiology',
      person: '',
      type: 'Health Wellness',
      price: 175,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Pilates',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.5,
      modules: '10 Modules by'
    },{
      name: 'Yoga',
      person: '',
      type: 'Health Wellness',
      price: 95,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Forensic Psychology',
      person: '',
      type: 'Health Wellness',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },{
      name: 'Building Resilience',
      person: '',
      type: 'Health Wellness',
      price: 115,
      rating: 4.5,
      modules: '12 Modules by'
    },
    {
      name: 'Coding & Technology',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '12 Modules by'
    },{
      name: 'Web Development',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Data Analytics',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Advanced Microsoft Excel',
      person: '',
      type: 'Technology',
      price: 175,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Computer Science',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Game Development',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '20 Modules by'
    },{
      name: 'Mobile App Development',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '20 Modules by'
    },{
      name: 'Coding For Kids',
      person: '',
      type: 'Technology',
      price: 155,
      rating: 4.2,
      modules: '8 Modules by'
    },{
      name: 'Project Management',
      person: '',
      type: 'Technology',
      price: 170,
      rating: 4.9,
      modules: '10 Modules by'
    },{
      name: 'Photoshop',
      person: '',
      type: 'Technology',
      price: '',
      rating: 4.8,
      modules: '15 Modules by'
    },{
      name: 'Cryptocurrency',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '20 Modules by'
    },{
      name: 'Graphic Design',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Cybersecurity',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'React JS',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Python Programming',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Artificial Intelligence',
      person: '',
      type: 'Technology',
      price: 199,
      rating: 4.9,
      modules: '20 Modules by'
    },{
      name: 'Painting',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Cooking and Baking',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.2,
      modules: '15 Modules by'
    },{
      name: 'Knitting',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.2,
      modules: '15 Modules by'
    },{
      name: 'Dog Care, Grooming & Nutrition',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Wine Appreciation',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.9,
      modules: '8 Modules by'
    },{
      name: 'Acting and Theatre',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.9,
      modules: '15 Modules by'
    },{
      name: 'Floral Design',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.6,
      modules: '10 Modules by'
    },{
      name: 'Crystal Healing',
      person: '',
      type: 'Arts & Hobbies',
      price: '',
      rating: 4.2,
      modules: '8 Modules by'
    },{
      name: 'Tarot Reading',
      person: '',
      type: 'Arts & Hobbies',
      price: 99,
      rating: 4.2,
      modules: '8 Modules by'
    },{
      name: 'Cat care',
      person: '',
      type: 'Arts & Hobbies',
      price: 85,
      rating: 4.2,
      modules: '8 Modules by'
    },{
      name: 'Candle Making',
      person: '',
      type: 'Arts & Hobbies',
      price: 99,
      rating: 4.2,
      modules: '8 Modules by'
    },{
      name: 'Screenwriting',
      person: '',
      type: 'Arts & Hobbies',
      price: 199,
      rating: 4.5,
      modules: '15 Modules by'
    },{
      name: 'Pattern Making For Fashion Design',
      person: '',
      type: 'Arts & Hobbies',
      price: 99,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'International Cuisine and Wine',
      person: '',
      type: 'Arts & Hobbies',
      price: 99,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'Beauty Therapy',
      person: '',
      type: 'Beauty',
      price: 99,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Makeup, Nails & Beauty',
      person: '',
      type: 'Beauty',
      price: 150,
      rating: 4.9,
      modules: '12 Modules by'
    },{
      name: 'Image Consultancy',
      person: '',
      type: 'Beauty',
      price: 99,
      rating: 4.2,
      modules: '10 Modules by'
    },{
      name: 'Practical Guitar',
      person: '',
      type: 'Music',
      price: 100,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'Music Theory',
      person: '',
      type: 'Music',
      price: 100,
      rating: '4.9',
      modules: '15 Modules by'
    },{
      name: 'Sound Engineering',
      person: '',
      type: 'Music',
      price: 125,
      rating: 4.2,
      modules: '15 Modules by'
    },{
      name: 'English',
      person: '',
      type: 'Language',
      price: 99,
      rating: 4.5,
      modules: '12 Modules by'
    },{
      name: 'English (IELTS Readiness)',
      person: '',
      type: 'Language',
      price: 120,
      rating: 4.9,
      modules: '12 Modules by'
    },
  ]

}
