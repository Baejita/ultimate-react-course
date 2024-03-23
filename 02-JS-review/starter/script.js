/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
]

function getBooks() {
  return data
}

function getBook(id) {
  return data.find((d) => d.id === id)
}

*/
/*
const book = getBook(3)
console.log(book)

function getTotalReviewCounst(book) {
  const goodreads = book.reviews.goodreads.reviewsCount
  const librarythings = book.reviews.librarything?.reviewsCount ?? 0
  return goodreads + librarythings
}
console.log(getTotalReviewCounst(book))
*/
/*
const books = getBooks()
console.log(books)

const x = [1, 2, 3].map((el) => el * 2)
console.log(x)

const titles = data.map((data) => data.title)
titles

function getTotalReviewCounst(book) {
  const goodreads = book.reviews.goodreads.reviewsCount
  const librarythings = book.reviews.librarything?.reviewsCount ?? 0
  return goodreads + librarythings
}

//ถ้าอยากได้ มากกว่า อัน นอกจาก title

const esentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  googRead: getTotalReviewCounst(book),
}))
esentialData

//filter methods
const longBookAndMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
longBookAndMovie

//filter methods wiht include wiht map
const adventureBook = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title) //จะเอาแค่ชื่อ

adventureBook

//reduce method
const allPage = books.reduce((acc, book) => acc + book.pages, 0)
console.log(allPage)

//sort methods เป็น method ที่จะปรับเปลี่ยน array อันเดิม
const y = [7, 2, 4, 4, 5]
// const sortY = y.sort((a, b) => a - b)
// sortY
// how to resolve this use the slice methord before sort that make it new array
const sortYY = y.slice().sort((a, b) => a - b)
console.log(sortYY)
y
const sortedPagesBook = books.slice().sort((a, b) => b.pages - a.pages)
sortedPagesBook

const newBook = {
  id: "6",
  title: "Harry potter",
  author: "J. K. Rowling",
}
//การเพิ่ม object ใหม่โดยไม่ได้เปลี่ยนแปลง array เดิม
const booksAfterAdd = [...books, newBook]
booksAfterAdd

//delete object
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3)
booksAfterDelete

//update content of object id 1 ให้เป็น {} ว่าง หรืออัพเดทแค่บางส่วน ก็แค่ ... ก่อนแล้วค่อย , ตำแหน่งนั้น ๆอัพเพท(...book, pages: 999)
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 9999 } : book
)
booksAfterUpdate
*/
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((json) => console.log(json))

console.log("jonas")

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await res.json()
  // console.log(data)
  return data
}
const todos = getTodos()
console.log(todos)
