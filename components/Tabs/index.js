// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector(".topics")

axios 
.get('https://lambda-times-backend.herokuapp.com/topics')
.then((res)=>{
  const topicsArray = res.data
})



 topics.appendChild(topicCreator())
function topicCreator(){
  const tab = document.createElement('div');
//   const setTopic = topicsArray.array()

// setTopic[0].text = topicsArray['javascript'];
// setTopic[1].text = topicsArray['bootstrap'];
// setTopic[2].text = topicsArray['technology'];
// setTopic[3].text = topicsArray['jquery'];
// setTopic[4].text = topicsArray['node.js'];

tab.classList.add('tab');

// tabsClass.appendChild(setTopic[0]);
// tabsClass.appendChild(setTopic[1]);
// tabsClass.appendChild(setTopic[2]);
// tabsClass.appendChild(setTopic[3]);
// tabsClass.appendChild(setTopic[4]);

return tab;
}



    


