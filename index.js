const books = [
    {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },

    {
    title: "1984",
    author: "George Orwell",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
    },

    {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
    },

    {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://covers.openlibrary.org/b/id/8225263-L.jpg"
    },

    {
    title: "Moby Dick",
    author: "Herman Melville",
    image: "https://covers.openlibrary.org/b/id/7222276-L.jpg"
    }
];

let goodRead = "";
let bookCover = 0; bookCover < books.length; bookCover++;
    //for (let bookCover = 0; bookCover < books.length; bookCover++) {
        //goodRead +="<li>";

        //goodRead+= `<h1> ${books[bookCover].title} </h1>`;
        //goodRead += `<p> ${books[bookCover].author} </p>`;
        //goodRead += `<img src = "${books[bookCover].image}" />`;
        

        //goodRead +="</li>";
    //}

//document.getElementById("bookList").innerHTML = goodRead;


// Simulate fetching books with a delay using a Promise
function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(books);
        }, 1000); // simulate 1 second delay
      }); 
}

fetchBooks().then(bookArray=>{
    document.getElementById("bookList").innerHTML = goodRead;

    bookArray.forEach (book =>{
        goodRead+= `<h1> ${books[bookCover].title} </h1>`;
        goodRead += `<p> ${books[bookCover].author} </p>`;
        goodRead += `<img src = "${books[bookCover].image}" />`;
});

});


  
 
  