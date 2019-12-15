// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardCreator = document.querySelector('.cards-container')
cardCreator.appendChild(newArticlesCreator())  

axios
.get(" https://lambda-times-backend.herokuapp.com/articles")
.then((res)=>{
    console.log (res.data.articles)
    
})
.catch((err)=>console.log(err));


function newArticlesCreator(arr){
    const card = document.createElement('div');
    const headlines = document.createElement('div');
    const author = document.createElement('div');
    const imgClass = document.createElement('div');
    const newImg = document.createElement('img');
    const spanned = document.createElement('span');

    //append elements//
card.appendChild(headlines);
card.appendChild(author);
author.appendChild(imgClass);
imgClass.appendChild(newImg);
author.appendChild(spanned);

//classList Info//
card.classList.add('card');
headlines.classList.add('headline');
author.classList.add('author');
imgClass.classList.add('img-container');

// ///text content//
// spanned.textContent = arr[0];
// headlines.textContent = ``;
// newImg.src = ``;

return card;

}