const jsonData = [
        {
            img : "img/second_page/img_1.jpg",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : 52,   
            link : "#"
        },

       {
            img : "img/second_page/img_2.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : 52 ,
            link : "#" 
        },
    
        {
            img : "img/second_page/img_3.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : 52 ,
            link : "#" 
        },
        {
            img : "img/second_page/img_4.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : 52 ,
            link : "#" 
        } 
]
       

fillTemplateProducts(jsonData)
        
function fillTemplateProducts(obj){
    obj.forEach(element => {
            
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
    }


