console.log("SETS WORKING");

let books=new Set();

books.add("JAVA PROGRAMMING");
books.add("Python");
books.add("JavaScript");
books.add("css");
books.add("html");
books.add("Sql");

console.log(books);
console.log(books.size);
console.log("PYTHON AVAILABLE",books.has("Python"));
console.log(books.delete("Sql"));

//printing all values using for Each Loop
books.forEach(function (books)
{
    console.log(books);
});