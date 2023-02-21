const numberOfCategories = document.querySelector('#categories').querySelectorAll('.item').length;
const titlesArray = document.querySelector('#categories').querySelectorAll('h2');

const result = array => {
    console.log(`Number of categories: ${numberOfCategories}`);

     titlesArray.forEach(title => {
       const elementsArray = title.nextElementSibling.querySelectorAll('li');
        console.log(`Category: ${title.textContent}`)
        console.log(`Elements: ${elementsArray.length}`)
     });

}
result(titlesArray);