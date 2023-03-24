
let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  document.querySelector("#main-title").textContent = "Welcome!";

  // Part 2
  document.body.style.backgroundColor = "gray";

  // Part 3
  document.querySelector("#favorite-things").lastElementChild.remove();

  // Part 4
  let titles = document.querySelectorAll(".special-title");
  for (elem of titles) {
    elem.style.fontSize = "2rem";
  }

  // Part 5 /////////////////

  let pastRaces = document.getElementsByTagName("li")[8];
  pastRaces.remove()
  
  // Part 6
  let newLi = document.createElement("li");
  newLi.textContent = "Rio";
  document.querySelector("#past-races").append(newLi);

  // Part 7
  let divContainer = document.createElement("div");
  divContainer.classList.add("blog-post", "purple");
  let heading = document.createElement("h1");
  heading.textContent = "Rio";
  let para = document.createElement("p");
  para.textContent = "Raced the best.";

  document.querySelector(".main").append(divContainer);
  document.getElementsByClassName("blog-post")[5].append(heading);
  document.getElementsByClassName("blog-post")[5].append(para);

  // Part 8

  const btn = document.querySelector("#quote-title")
  btn.addEventListener('click',randomQuote)
 

  // Part 9
  let blog = document.querySelector('.main')
  let children = blog.querySelectorAll('.blog-post')

  
  for (elem of children) { 
    elem.addEventListener('mouseout',evt1)
    elem.addEventListener('mouseenter',evt2)
  }
  function evt1() {
    for (let i = 0; i < 6; i++) {
      let element = document.getElementsByClassName('blog-post')[i]
      element.classList.toggle('purple')
    }
   }
  function evt2() {
    for (let i = 0; i < 6; i++) {
      let element = document.getElementsByClassName("blog-post")[i];
      element.classList.toggle("red");
    }
   }
});
