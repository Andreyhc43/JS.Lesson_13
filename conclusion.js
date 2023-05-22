const jsonData = [
    {
        "first" : {
            img : "photo.jpg",
            name : "firstName",   
            description: "firstDesc",   
            price : 200,   
            link : "#"
        },

        "second" : {
            img : "photo.jpg",
            name : "secondName",   
            description: "secondDesc",   
            price : 200   
        }
    }
]
        
        
    jsonData.forEach(element => {
            // шаблон
        const myProductBox = document.querySelector('.myProductBox');
        
        const productElement = document.createElement('div');
        productElement.classList.add('myProduct');
        
        const productIMG = document.createElement('img');
        productIMG.classList.add('myProduct_img');
        productIMG.setAttribute('alt','photo');
        productIMG.src = element.img;
        
        
        const productContent = document.createElement('div');
        productContent.classList.add('myProduct_content');
        
        const productLink = document.createElement('a');
        productLink.href = '#';
        productLink.textContent = element.link;
        
        
        const productDescription = document.createElement('p');
        productDescription.classList.add('myProduct_content_description');
        productDescription.textContent= element.description;
        
        
        const productPrice = document.createElement('p');
        productPrice.classList.add('myProduct_content_price');
        productPrice.textContent = element.price;
        
        
        
        myProductBox.appendChild(productElement);
        productElement.appendChild(productIMG);
        productElement.appendChild(productContent);
        productContent.appendChild(productLink);
        productContent.appendChild(productPrice);
        });