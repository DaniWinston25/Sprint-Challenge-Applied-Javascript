// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicsTab = document.querySelector(".topics")
axios 
.get('https://lambda-times-backend.herokuapp.com/topics')
.then((res)=>{
  const user = res.data.topics;

   user.forEach((tab)=>{
  const newTab = topicCreator(tab);
    topicsTab.appendChild(newTab);
 })


})




function topicCreator(object){

  const tab = document.createElement('div');


tab.classList.add('tab');

tab.textContent = object;


return tab;
}



    


