const numberOfCategories = document.querySelector('#categories').querySelectorAll('.item');
const titlesArray = document.querySelector('#categories').querySelectorAll('h2');

const result = array => {
    console.log(`Number of categories: ${numberOfCategories.length}`);

     titlesArray.forEach(title => {
      //  const elementsArray = title.nextElementSibling.querySelectorAll('li');
        console.log(`Category: ${title.textContent}`)
        console.log(`Elements: ${numberOfCategories.length}`)
     });

}
result(titlesArray);