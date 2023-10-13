import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define a HashMap to store the data
const peopleMap = new Map<string, Person>();

export interface Person {
  id: string;
  name: string;
  photo: string;
  likes: number;
  dislikes: number;
  timeSlots: TimeSlot[];
  bookedTimeSlots: TimeSlot[];
  isLiked: boolean;
  isDisliked: boolean;

}

export interface TimeSlot {
  id: string;
  date: Date;
  time: string;
}

peopleMap.set('1', {
  id: '1',
  name: 'Alex Dong',
  photo: 'Me.jpg',
  likes: 153,
  dislikes: 12,
  timeSlots: [
    { id: '1', date: new Date('2023-05-26'), time: '10:00 AM' },
    { id: '2', date: new Date('2023-05-26'), time: '11:00 AM' },
    { id: '3', date: new Date('2023-05-27'), time: '2:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('2', {
  id: '2',
  name: 'Gabe Ashkenazi',
  photo: 'Gabe.jfif',
  likes: 204,
  dislikes: 6,
  timeSlots: [
    { id: '4', date: new Date('2023-05-28'), time: '9:00 AM' },
    { id: '5', date: new Date('2023-05-28'), time: '11:00 AM' },
    { id: '6', date: new Date('2023-05-28'), time: '3:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('3', {
  id: '3',
  name: 'Lance Bae',
  photo: 'Lance.jfif',
  likes: 378,
  dislikes: 23,
  timeSlots: [
    { id: '7', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '8', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '9', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('4', {
  id: '4',
  name: 'Sam Kagan',
  photo: 'Sam.jfif',
  likes: 132,
  dislikes: 31,
  timeSlots: [
    { id: '10', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '11', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '12', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('5', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('6', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('7', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('8', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});

peopleMap.set('9', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});
peopleMap.set('10', {
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
});


const page = new Map<number, Person[]>();

page.set(1, [{
  id: '1',
  name: 'Alex Dong',
  photo: 'Me.jpg',
  likes: 153,
  dislikes: 12,
  timeSlots: [
    { id: '1', date: new Date('2023-05-26'), time: '10:00 AM' },
    { id: '2', date: new Date('2023-05-26'), time: '11:00 AM' },
    { id: '3', date: new Date('2023-05-27'), time: '2:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}, 
{id: '2',
name: 'Gabe Ashkenazi',
photo: 'Gabe.jfif',
likes: 204,
dislikes: 6,
timeSlots: [
  { id: '4', date: new Date('2023-05-28'), time: '9:00 AM' },
  { id: '5', date: new Date('2023-05-28'), time: '11:00 AM' },
  { id: '6', date: new Date('2023-05-28'), time: '3:00 PM' },
],
bookedTimeSlots: [], // Add the bookedTimeSlots property
isLiked: false,
isDisliked: false,
},{
  id: '3',
  name: 'Lance Bae',
  photo: 'Lance.jfif',
  likes: 378,
  dislikes: 23,
  timeSlots: [
    { id: '7', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '8', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '9', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '4',
  name: 'Sam Kagan',
  photo: 'Sam.jfif',
  likes: 132,
  dislikes: 31,
  timeSlots: [
    { id: '10', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '11', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '12', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '6',
  name: 'Tom Cruise',
  photo: 'Tom_Cruise.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '16', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '17', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '18', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '7',
  name: 'Walter White',
  photo: 'Walter_White.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '19', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '20', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '21', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '8',
  name: 'Levi Ackerman',
  photo: 'Levi_Ackerman.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '22', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '22', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '23', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '9',
  name: 'Goku',
  photo: 'Goku_UI.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '24', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '25', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '26', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '10',
  name: 'Giyuu Tomioka',
  photo: 'Giyuu_Tomioka.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '27', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '28', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '29', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}])

page.set(2, [{
  id: '1',
  name: 'Alex Dong',
  photo: 'Me.jpg',
  likes: 153,
  dislikes: 12,
  timeSlots: [
    { id: '1', date: new Date('2023-05-26'), time: '10:00 AM' },
    { id: '2', date: new Date('2023-05-26'), time: '11:00 AM' },
    { id: '3', date: new Date('2023-05-27'), time: '2:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}, 
{id: '2',
name: 'Gabe Ashkenazi',
photo: 'Gabe.jfif',
likes: 204,
dislikes: 6,
timeSlots: [
  { id: '4', date: new Date('2023-05-28'), time: '9:00 AM' },
  { id: '5', date: new Date('2023-05-28'), time: '11:00 AM' },
  { id: '6', date: new Date('2023-05-28'), time: '3:00 PM' },
],
bookedTimeSlots: [], // Add the bookedTimeSlots property
isLiked: false,
isDisliked: false,
},{
  id: '3',
  name: 'Lance Bae',
  photo: 'Lance.jfif',
  likes: 378,
  dislikes: 23,
  timeSlots: [
    { id: '7', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '8', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '9', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '4',
  name: 'Sam Kagan',
  photo: 'Sam.jfif',
  likes: 132,
  dislikes: 31,
  timeSlots: [
    { id: '10', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '11', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '12', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '6',
  name: 'Tom Cruise',
  photo: 'Tom_Cruise.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '16', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '17', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '18', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '7',
  name: 'Walter White',
  photo: 'Walter_White.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '19', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '20', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '21', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '8',
  name: 'Levi Ackerman',
  photo: 'Levi_Ackerman.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '22', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '22', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '23', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '9',
  name: 'Goku',
  photo: 'Goku_UI.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '24', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '25', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '26', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '10',
  name: 'Giyuu Tomioka',
  photo: 'Giyuu_Tomioka.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '27', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '28', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '29', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}])

page.set(3, [{
  id: '1',
  name: 'Alex Dong',
  photo: 'Me.jpg',
  likes: 153,
  dislikes: 12,
  timeSlots: [
    { id: '1', date: new Date('2023-05-26'), time: '10:00 AM' },
    { id: '2', date: new Date('2023-05-26'), time: '11:00 AM' },
    { id: '3', date: new Date('2023-05-27'), time: '2:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}, 
{id: '2',
name: 'Gabe Ashkenazi',
photo: 'Gabe.jfif',
likes: 204,
dislikes: 6,
timeSlots: [
  { id: '4', date: new Date('2023-05-28'), time: '9:00 AM' },
  { id: '5', date: new Date('2023-05-28'), time: '11:00 AM' },
  { id: '6', date: new Date('2023-05-28'), time: '3:00 PM' },
],
bookedTimeSlots: [], // Add the bookedTimeSlots property
isLiked: false,
isDisliked: false,
},{
  id: '3',
  name: 'Lance Bae',
  photo: 'Lance.jfif',
  likes: 378,
  dislikes: 23,
  timeSlots: [
    { id: '7', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '8', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '9', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '4',
  name: 'Sam Kagan',
  photo: 'Sam.jfif',
  likes: 132,
  dislikes: 31,
  timeSlots: [
    { id: '10', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '11', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '12', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '6',
  name: 'Tom Cruise',
  photo: 'Tom_Cruise.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '16', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '17', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '18', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '7',
  name: 'Walter White',
  photo: 'Walter_White.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '19', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '20', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '21', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '8',
  name: 'Levi Ackerman',
  photo: 'Levi_Ackerman.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '22', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '22', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '23', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '9',
  name: 'Goku',
  photo: 'Goku_UI.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '24', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '25', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '26', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '10',
  name: 'Giyuu Tomioka',
  photo: 'Giyuu_Tomioka.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '27', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '28', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '29', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}])

page.set(4, [{
  id: '1',
  name: 'Alex Dong',
  photo: 'Me.jpg',
  likes: 153,
  dislikes: 12,
  timeSlots: [
    { id: '1', date: new Date('2023-05-26'), time: '10:00 AM' },
    { id: '2', date: new Date('2023-05-26'), time: '11:00 AM' },
    { id: '3', date: new Date('2023-05-27'), time: '2:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}, 
{id: '2',
name: 'Gabe Ashkenazi',
photo: 'Gabe.jfif',
likes: 204,
dislikes: 6,
timeSlots: [
  { id: '4', date: new Date('2023-05-28'), time: '9:00 AM' },
  { id: '5', date: new Date('2023-05-28'), time: '11:00 AM' },
  { id: '6', date: new Date('2023-05-28'), time: '3:00 PM' },
],
bookedTimeSlots: [], // Add the bookedTimeSlots property
isLiked: false,
isDisliked: false,
},{
  id: '3',
  name: 'Lance Bae',
  photo: 'Lance.jfif',
  likes: 378,
  dislikes: 23,
  timeSlots: [
    { id: '7', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '8', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '9', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '4',
  name: 'Sam Kagan',
  photo: 'Sam.jfif',
  likes: 132,
  dislikes: 31,
  timeSlots: [
    { id: '10', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '11', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '12', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '5',
  name: 'Nick DeGiacomo',
  photo: 'Nick.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '13', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '14', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '15', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '6',
  name: 'Tom Cruise',
  photo: 'Tom_Cruise.jfif',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '16', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '17', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '18', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '7',
  name: 'Walter White',
  photo: 'Walter_White.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '19', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '20', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '21', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '8',
  name: 'Levi Ackerman',
  photo: 'Levi_Ackerman.png',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '22', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '22', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '23', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '9',
  name: 'Goku',
  photo: 'Goku_UI.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '24', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '25', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '26', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
},{
  id: '10',
  name: 'Giyuu Tomioka',
  photo: 'Giyuu_Tomioka.jpg',
  likes: 100000000000000,
  dislikes: 0,
  timeSlots: [
    { id: '27', date: new Date('2023-05-28'), time: '10:00 AM' },
    { id: '28', date: new Date('2023-05-28'), time: '2:00 PM' },
    { id: '29', date: new Date('2023-05-28'), time: '4:00 PM' },
  ],
  bookedTimeSlots: [], // Add the bookedTimeSlots property
  isLiked: false,
  isDisliked: false,
}])



// const pplPerPage = 10;
// const minus = peopleMap.size % pplPerPage
// let count = 0
// for (let x = pplPerPage; x <= peopleMap.size; x=x+pplPerPage) {
//   const person1 = peopleMap.get((x-10).toString())! 
//   const person2 = peopleMap.get((x-9).toString())! 
//   const person3 = peopleMap.get((x-8).toString())! 
//   const person4 = peopleMap.get((x-7).toString())! 
//   const person5 = peopleMap.get((x-6).toString())! 
//   const person6 = peopleMap.get((x-5).toString())! 
//   const person7 = peopleMap.get((x-4).toString())! 
//   const person8 = peopleMap.get((x-3).toString())! 
//   const person9 = peopleMap.get((x-2).toString())! 
//   const person10 = peopleMap.get((x-1).toString())! 

  
//   page.set(count, [
//     person1, person2, person3, person4, person5, person6, person7, person8, person9
    
//   ])
  
//   count+=1;
  
// }





// count = Math.floor((peopleMap.size - minus - pplPerPage) / 2) + 1;

// for (let x = peopleMap.size - minus; x <= peopleMap.size; x++) {
//   const person3 = Array.from(peopleMap.values())[x];
//   page.set(count, [person3]);
// }


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Office Hours app');
});

app.get('/api/people', (req: Request, res: Response) => {
  const people = Array.from(peopleMap.values());
  res.json(people);
});

app.get('/api/people/:id', (req: Request, res: Response) => {
  const personId = req.params.id;
  const person = peopleMap.get(personId);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.get('/api/:id', (req: Request, res: Response) => {
  const arrayId = parseInt(req.params.id);
  const person = page.get(arrayId);

  res.json(person);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.patch('/api/people/:id/book-time-slot/:timeSlotId', (req: Request, res: Response) => {
  const personId = req.params.id;
  const timeSlotId = req.params.timeSlotId;

  const person = peopleMap.get(personId);
  if (person) {
    const timeSlotIndex = person.timeSlots.findIndex((slot) => slot.id === timeSlotId);
    if (timeSlotIndex !== -1) {
      const bookedTimeSlot = person.timeSlots.splice(timeSlotIndex, 1)[0];
      person.bookedTimeSlots.push(bookedTimeSlot);
      res.json({ message: 'Time slot booked successfully' });
    } else {
      res.status(400).json({ error: 'Time slot not available' });
    }
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.patch('/api/people/:id/reset-time-slots', (req: Request, res: Response) => {
  const personId = req.params.id;

  const person = peopleMap.get(personId);
  if (person) {
    person.timeSlots.push(...person.bookedTimeSlots);
    person.bookedTimeSlots = [];
    res.json({ message: 'Time slots reset successfully' });
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

app.patch('/api/people/increaseLike/:id', (req: Request, res: Response) => {
  const personId = req.params.id;
  let likes = req.params.likes;

  const person = peopleMap.get(personId);
  if (person) {
      if (person.isLiked === false) {
        person.likes = person.likes + 1
        person.isLiked = true
        res.json({ message: 'liked successfully' });
      }
      else {
      person.likes = person.likes - 1
      person.isLiked = false
        res.json({ message: 'removed like successfully' });
      }
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});


app.patch('/api/people/decreaseLike/:id', (req: Request, res: Response) => {
  const personId = req.params.id;
  let likes = req.params.likes;

  const person = peopleMap.get(personId);
  if (person) {
      if (person.isDisliked === false) {
        person.dislikes = person.dislikes + 1
        person.isDisliked = true
        res.json({ message: 'disliked successfully' });
      }
      else {
      person.dislikes = person.dislikes - 1
      person.isDisliked = false
        res.json({ message: 'removed disliked successfully' });
      }
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
