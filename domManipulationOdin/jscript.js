const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const smallBlueHeader = document.createElement('h3');


const moreContent = document.createElement('div2');
const moreContentHeader = document.createElement('h1');
const morePara = document.createElement('p');



content.classList.add('content');
content.textContent = 'This is some glorious text content';

para.classList.add('redPara');
para.textContent = "Hey I'm red";
para.style.color = 'red';

smallBlueHeader.classList.add('smallBlueHeader');
smallBlueHeader.textContent = "I'm a blue H3";
smallBlueHeader.style.color = 'blue';

moreContent.classList.add('moreContent');
moreContent.style.cssText = 'border: 2px solid black; background-color: pink; display: flex; flex-direction: column; align-items: center';

moreContentHeader.classList.add('moreContentHeader');
moreContentHeader.textContent = "I'm in a div";

morePara.classList.add('morePara');
morePara.textContent = 'ME TOO!';

container.appendChild(content);
container.appendChild(para);
container.appendChild(smallBlueHeader);

container.appendChild(moreContent);
moreContent.appendChild(moreContentHeader);
moreContent.appendChild(morePara);


const globalCss = document.querySelectorAll('*');


// button
const btn = document.querySelector('#btn');
const btnElement = document.querySelectorAll("button");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btnElement.forEach((btn) => {
    btn.style.cssText = "margin: 16px 0; margin-right: 8px;"; // iterate through nodelist of buttons and add styling to each one.
})

// btnElement.style.cssText = "margin: 16px 0; background-color: red;"

btn.onclick = () => alert('Hello, from the JavaScript file!');

btn2.addEventListener('click', () => {
    if (btn2.getAttribute('class') != 'cobold') {

        alert('I am in an event listener. I will now COBOL-ise the webpage');
        globalCss.forEach((globElmt) => {
            globElmt.classList.toggle("cobold");
        })
        btn2.textContent = "Press again to reset CSS";

    } else {
        alert('Now I will reset the css');        
        globalCss.forEach((globElmt) => {
            globElmt.classList.toggle("cobold");
        })
        btn2.textContent = "Cobolise!";
    }

});

// btn3.addEventListener('toggle', btn3Click);

const btn3Click = btn3.addEventListener('click', function (e) {  
        if(e.target.style.background == 'blue') {
            e.target.style.background = '#f0f0f0';  
        } else {
            console.log(e.target.style.background);
            e.target.style.background = 'blue'; 
        }  

});

// btn3.addEventListener('click', (twat) =>   {console.log(twat.target);});






