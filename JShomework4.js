let myArray = ['book1',
'book2',
'book3',
'book4',
'book5',
'book6',
'book7',
'book8',
'book9',
'book10'
];


let informations = [
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
    {
        Title : 'title',
        Language : 'language',
        Author : 'author'
    },
];

let imageBook = [
    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},
    
    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

    {book:'https://www.freeiconspng.com/uploads/study-icon-6.png'},

];


    let ul = document.createElement('ul');
    let div = document.getElementById('myList');

    div.appendChild(ul);
    

    for(let i = 0 ; i < myArray.length ; i++){
        let li = document.createElement('li');   
        li.innerHTML = myArray[i] + '<br>' + informations[i].Title + '<br>' + informations[i].Language + '<br>' + informations[i].Author;
        ul.appendChild(li);
        let img = document.createElement('img');
        img.src = imageBook[i].book;
        img.style.width = "50px";
        ul.appendChild(img);
        
    };

    
    // img element

   





    