// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const mainHeader = document.querySelector('.header-container');
   
//function Header() {
    ///create the elements//
   const header = document.createElement('div');
    const spanner = document.createElement('span');
    const titleOfIndex = document.createElement('h1');
    const spanClass = document.createElement('span');

    //append the child//
    header.appendChild(spanner);
    header.appendChild(titleOfIndex);
    header.appendChild(spanClass);
    mainHeader.appendChild(header);

    ///add the class lists//
    header.classList.add('header');
    spanner.classList.add('date');
    spanClass.classList.add('temp');

    //text content//
    titleOfIndex.textContent = 'Lambda Times';
    spanner.textContent = 'SMARCH 28, 2019';
    spanClass.textContent = '98°';

   

 