// Dummy data for testing purposes

import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const storyIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
]


export const users = [
    {
      _id: userIds[0],
      firstName: "test",
      lastName: "me",
      email: "asd@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-1-1705146427400-364184307.jpg",
      location: "San Fran, CA",
      followers: [userIds[1], userIds[2], userIds[3], userIds[4], userIds[5]].map((id) => id.toString()),
      following: [userIds[1], userIds[2], userIds[3]].map((id) => id.toString()),
      occupation: "Software Engineer",
      createdAt: "1115211422",
      updatedAt: "1115211422",
      __v: 0,
    },
    {
      _id: userIds[1],
      firstName: "Steve",
      lastName: "Ralph",
      email: "thataaa@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-2-1705146472042-877041543.jpg",
      location: "New York, CA",
      occupation: "Degenerate",
      createdAt: "1595589072",
      updatedAt: "1595589072",
      __v: 0,
    },
    {
      _id: userIds[2],
      firstName: "Some",
      lastName: "Guy",
      email: "someguy@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-3-1705146487987-166728258.jpg",
      location: "Canada, CA",
      occupation: "Data Scientist Hacker",
      createdAt: "1288090662",
      updatedAt: "1288090662",
      __v: 0,
    },
    {
      _id: userIds[3],
      firstName: "Whatcha",
      lastName: "Doing",
      email: "whatchadoing@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-4-1705146498584-166040287.jpg",
      location: "Korea, CA",
      occupation: "Educator",
      createdAt: "1219214568",
      updatedAt: "1219214568",
      __v: 0,
    },
    {
      _id: userIds[4],
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-5-1705146507991-569852897.jpg",
      location: "Utah, CA",
      occupation: "Hacker",
      createdAt: "1493463661",
      updatedAt: "1493463661",
      __v: 0,
    },
    {
      _id: userIds[5],
      firstName: "Harvey",
      lastName: "Dunn",
      email: "harveydunn@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-6-1705146520884-385113698.jpg",
      location: "Los Angeles, CA",
      occupation: "Journalist",
      createdAt: "1381326073",
      updatedAt: "1381326073",
      __v: 0,
    },
    {
      _id: userIds[6],
      firstName: "Carly",
      lastName: "Vowel",
      email: "carlyvowel@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-7-1705146531722-115953676.jpg",
      location: "Chicago, IL",
      occupation: "Nurse",
      createdAt: "1714704324",
      updatedAt: "1642716557",
      __v: 0,
    },
    {
      _id: userIds[7],
      firstName: "Jessica",
      lastName: "Dunn",
      email: "jessicadunn@gmail.com",
      password: "$2b$10$.GYYmBTcfnXzTZEGiPOsje3vM1JXeTxKFmeJbHJJhogy97saZLTlO",
      picturePath: "profile-8-1705146541324-86609889.jpg",
      location: "Washington, DC",
      occupation: "A Student",
      createdAt: "1369908044",
      updatedAt: "1359322268",
      __v: 0,
  },
];
  
  
  
  export const posts = [
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[1],
      firstName: "Steve",
      lastName: "Ralph",
      location: "New York, CA",
      description: "Some really long random description",
      picturePath: "profile-3-1705146487987-166728258.jpg",
      userPicturePath: "profile-2-1705146472042-877041543.jpg",
      likes: new Map([
        [userIds[0], true],
        [userIds[2], true],
        [userIds[3], true],
        [userIds[4], true],
      ]),
      comments: [
        {
          username: "CarlyVowel",
          text: "random comment",
          picturePath: "profile-7-1705146531722-115953676.jpg",
        },
        {
          username: "JaneDoe",
          text: "another random comment",
          picturePath: "profile-5-1705146507991-569852897.jpg",
        },
        {
          username: "JessicaDunn",
          text: "yet another random comment",
          picturePath: "profile-8-1705146541324-86609889.jpg",
        },
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[3],
      firstName: "Whatcha",
      lastName: "Doing",
      location: "Korea, CA",
      description:
        "Another really long random description. This one is longer than the previous one.",
      picturePath: "profile-1-1705146427400-364184307.jpg",
      userPicturePath: "profile-4-1705146498584-166040287.jpg",
      likes: new Map([
        [userIds[7], true],
        [userIds[4], true],
        [userIds[1], true],
        [userIds[2], true],
      ]),
      comments: [
        {
          username: "JessicaDunn",
          text: "one more random comment",
          picturePath: "profile-8-1705146541324-86609889.jpg",
        },
        {
          username: "JaneDoe",
          text: "and another random comment",
          picturePath: "profile-5-1705146507991-569852897.jpg",
        },
        {
          username: "CarlyVowel",
          text: "no more random comments",
          picturePath: "profile-7-1705146531722-115953676.jpg",
        },
        {
          username: "JessicaDunn",
          text: "I lied, one more random comment",
          picturePath: "profile-8-1705146541324-86609889.jpg",
        },
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[4],
      firstName: "Jane",
      lastName: "Doe",
      location: "Utah, CA",
      description:
        "This is the last really long random description. This one is longer than the previous one.",
      picturePath: "profile-2-1705146472042-877041543.jpg",
      userPicturePath: "profile-5-1705146507991-569852897.jpg",
      likes: new Map([
        [userIds[1], true],
        [userIds[6], true],
        [userIds[3], true],
        [userIds[5], true],
      ]),
      comments: [
        {
          username: "SteveRalph",
          text: "one more random comment",
          picturePath: "profile-3-1705146487987-166728258.jpg",
        },
        {
          username: "CarlyVowel",
          text: "I lied, one more random comment",
          picturePath: "profile-7-1705146531722-115953676.jpg",
        },
        {
          username: "JessicaDunn",
          text: "I lied again, one more random comment",
          picturePath: "profile-8-1705146541324-86609889.jpg",
        },
        {
          username: "SteveRalph",
          text: "Why am I doing this?",
          picturePath: "profile-3-1705146487987-166728258.jpg",
        },
        {
          username: "JaneDoe",
          text: "I'm bored",
          picturePath: "profile-5-1705146507991-569852897.jpg",
        },
      ],
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: userIds[5],
      firstName: "Harvey",
      lastName: "Dunn",
      location: "Los Angeles, CA",
      description: "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "profile-5-1705146507991-569852897.jpg",
    userPicturePath: "profile-6-1705146520884-385113698.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      {
        username: "SteveRalph",
        text: "I lied again, one more random comment",
        picturePath: "profile-3-1705146487987-166728258.jpg",
      },
      {
        username: "JaneDoe",
        text: "Why am I doing this?",
        picturePath: "profile-5-1705146507991-569852897.jpg",
      },
      {
        username: "CarlyVowel",
        text: "I'm bored",
        picturePath: "profile-7-1705146531722-115953676.jpg",
      },
      {
        username: "CarlyVowel",
        text: "I'm still bored",
        picturePath: "profile-7-1705146531722-115953676.jpg",
      },
      {
        username: "SteveRalph",
        text: "All I want to do is play video games",
        picturePath: "profile-3-1705146487987-166728258.jpg",
      },
      {
        username: "SteveRalph",
        text: "I'm going to play video games",
        picturePath: "profile-3-1705146487987-166728258.jpg",
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "profile-7-1705146531722-115953676.jpg",
    userPicturePath: "profile-7-1705146531722-115953676.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      {
        username: "SteveRalph",
        text: "I lied again, one more random comment",
        picturePath: "profile-3-1705146487987-166728258.jpg",
      },
      {
        username: "WhatchaDoing",
        text: "Why am I doing this?",
        picturePath: "profile-1-1705146427400-364184307.jpg",
      },
      {
        username: "HarveyDunn",
        text: "Man I'm bored",
        picturePath: "profile-6-1705146520884-385113698.jpg",
      },
      {
        username: "CarlyVowel",
        text: "What should I do?",
        picturePath: "profile-7-1705146531722-115953676.jpg",
      },
      {
        username: "CarlyVowel",
        text: "I'm going to play video games",
        picturePath: "profile-7-1705146531722-115953676.jpg",
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "profile-8-1705146541324-86609889.jpg",
    userPicturePath: "profile-8-1705146541324-86609889.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      {
        username: "SteveRalph",
        text: "Can I play video games now?",
        picturePath: "profile-3-1705146487987-166728258.jpg",
      },
      {
        username: "WhatchaDoing",
        text: "No let's actually study",
        picturePath: "profile-1-1705146427400-364184307.jpg",
      },
      {
        username: "HarveyDunn",
        text: "Never mind, I'm going to play video games",
        picturePath: "profile-6-1705146520884-385113698.jpg",
      },
      {
        username: "WhatchaDoing",
        text: "Stop it.",
        picturePath: "profile-1-1705146427400-364184307.jpg",
    },
    {
      username: "SteveRalph",
      text: "Michael, stop it.",
      picturePath: "profile-3-1705146487987-166728258.jpg",
    },
  ],
},
];

export const stories = [
    {
      _id: storyIds[0],
      userPicturePath: 'profile-7-1705146531722-115953676.jpg',
      videoPath: 'fear-1705195611835-668402116.mp4',
      createdAt: "2024-01-14T01:26:53.766Z",
      updatedAt: "2024-01-14T01:26:53.766Z",
      __v: 0
    },
    {
      _id: storyIds[1],
      userPicturePath: 'profile-2-1705146472042-877041543.jpg',
      videoPath: 'sinkInThe-1705195718493-214197066.mp4',
      createdAt: "2024-01-14T01:28:41.925Z",
      updatedAt: "2024-01-14T01:28:41.925Z",
      __v: 0
    },
    {
      _id: storyIds[2],
      userPicturePath: 'profile-3-1705146487987-166728258.jpg',
      videoPath: 'magic-1705195821876-757908389.mp4',
      createdAt: "2024-01-14T01:30:26.674Z",
      updatedAt: "2024-01-14T01:30:26.674Z",
      __v: 0
    }
  ];