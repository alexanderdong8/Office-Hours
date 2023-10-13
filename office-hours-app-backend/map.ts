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

  export const page = new Map<number, Person[]>();

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
  