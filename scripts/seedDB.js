const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Marley & Me",
    author: "John Grogan",
    thumbnail: "http://books.google.com/books/content?id=YUAo7J3U_Z4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    href: "http://books.google.com.au/books?id=YUAo7J3U_Z4C&printsec=frontcover&dq=marley+inauthor:grogan&hl=&cd=1&source=gbs_api",
    description:
      "Marley & Me is the heart-warming and unforgettable story of a family in the making and the wondrously neurotic dog who taught them what really matters in life. John and Jenny were young and deeply in love, with a perfect little house and not a care in the world. Then they brought home Marley, a wiggly yellow furball of a puppy. Life would never be the same. Marley quickly grew into an uncontrollable 44-kilogram steamroller of a Labrador retriever. Expelled from obedience school, even the tranquillisers prescribed by the vet couldn't stop him. Yet through the chaos and the hilarity he won hearts and remained a steadfast model of devotion to his family, even when they were at their wits' end. Unconditional love, they would learn, comes in many forms.",
    date: new Date(Date.now())
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    thumbnail: "http://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "http://books.google.com.au/books?id=_i6bDeoCQzsC&pg=PA27&dq=code+inauthor:martin&hl=&cd=2&source=gbs_api",
    description:"Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer–but only if you work at it.",
    date: new Date(Date.now())
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    thumbnail: "http://books.google.com/books/content?id=sTKxDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "http://books.google.com.au/books?id=sTKxDAAAQBAJ&printsec=frontcover&dq=subtle+inauthor:manson&hl=&cd=1&source=gbs_api",
    description:"An in-your-face guide to living with integrity and finding happiness in sometimes-painful places.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
