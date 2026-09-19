document.head.insertAdjacentHTML(
  "beforeend",
  "<style>* { box-sizing: border-box; }</style>",
);
document.body.style = `
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
`;

//create Header
const header = document.createElement("header");
const title = document.createElement("h2");
const headerUl = document.createElement("ul");
const headerContainer = document.createElement("div");
const HeaderContent = document.createElement("div");
//Start Header

//header classes
title.className = "title";
headerUl.className = "list";
headerContainer.className = "header-container";
HeaderContent.className = "header-content";

//header content
//--title
title.innerText = "elzero";

//--ul list => create and append li
let ulList = ["home", "about", "services", "contact"];
ulList.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  li.style = `
  color: rgba(0, 0, 0, 0.623);
  text-transform: capitalize;
  margin-right: 7px;
  font-size: 1.2rem;
  cursor:pointer;
  `;
  headerUl.appendChild(li);
});

//--apped children to the parent element [header]
HeaderContent.appendChild(title);
HeaderContent.appendChild(headerUl);
headerContainer.appendChild(HeaderContent);
header.appendChild(headerContainer);

//header styles
header.style = `
  background-color: #fff;
  width: 100%;
  height: 60px
`;

title.style = `
  text-transform: capitalize;
  color: #009688;
  font-size: 1.4rem;
`;

headerUl.style = `
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

headerContainer.style = `
  width: 100%;
  padding: 0 15px;
  display: flex;
`;

HeaderContent.style = `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// append header to document
document.body.appendChild(header);

//End Header

//******************* */

// Start content
const content = document.createElement("div");
const contentContainer = document.createElement("div");
const contentHolder = document.createElement("div");

//set classes
content.className = "content";
contentContainer.className = "content-container";
contentHolder.className = "content-holder";

//set components styles
content.style = `
  background-color: #eee;
  width: 100%;
`;

contentContainer.style = `
  padding: 15px;
`;

contentHolder.style = `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

//Implement Cards
let cardsCount = 15;

for (let i = 0; i < cardsCount; i++) {
  const card = document.createElement("div");
  card.className = "card";
  card.style = `
  background-color: #fff;
  text-align: center;
  padding: 5px;
  width: calc((100% - 24px) / 3);  
  display:block;
  border-radius: 5px;
  `;

  const h4 = document.createElement("h4");
  h4.className = "card-header";
  h4.innerText = `${i + 1}`;
  h4.style = `
  text-align: cente;
  color: black;`;

  const p = document.createElement("p");
  p.className = "card-content";
  p.innerText = "product";
  p.style = `
  text-align: center;
  color: rgba(0, 0, 0, 0.527);
  text-transform: capitalize;
  `;

  //append
  card.appendChild(h4);
  card.appendChild(p);

  //append in contentHolder
  contentHolder.appendChild(card);
}

contentContainer.appendChild(contentHolder);
content.appendChild(contentContainer);

document.body.appendChild(content);
// End content

//******************* */

//Start Footer
const footer = document.createElement("footer");
const footerContent = document.createElement("span");

footerContent.innerText = `Copyright ${new Date().getFullYear()}`;
footerContent.style = `
color: #fff;
text-transform: capitalize;
font-size: 1.3rem;
`;

footer.style = `
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(0, 150, 136);
height: 55px;
width: 100%;
`;

footer.className = "footer";
footer.appendChild(footerContent);

document.body.appendChild(footer);
//End Footer
