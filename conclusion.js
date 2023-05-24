const jsonData = [
        {
            img : "img/second_page/img_1.jpg",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 51.00",   
            link : "#"
        },

       {
            img : "img/second_page/img_2.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 52.00" ,
            link : "#" 
        },
    
        {
            img : "img/second_page/img_3.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 53.00" ,
            link : "#" 
        },
        {
            img : "img/second_page/img_4.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 54.00" ,
            link : "#" 
        },
        {
            img : "img/second_page/img_5.png",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 55.00" ,
            link : "#" 
        }

]
       
const jsonCartItems = []



// функция формирования блока Fetured Items
function fillTemplateProducts(objData){
    objData.forEach(element => {
            
        const myProductBox = document.querySelector('.second_products');
        
        
        
        const productElement = document.createElement('div');
        productElement.classList.add('second_products_item');


        const imgDiv = document.createElement('div');
        imgDiv.classList.add('product_img');

        const productIMG = document.createElement('img');
        productIMG.classList.add('second_products_img');
        productIMG.setAttribute('alt','photo');
        productIMG.src = element.img;

        // !!! переназначить событие на кнопку
        productIMG.addEventListener('click', (e)=> {
            jsonCartItems.push(element)
            // console.log(element.price)
        },true)


        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('second_products_item_description');

        const descriptionH2 = document.createElement('h2');
        descriptionH2.textContent = element.name;

        const descriptionPF = document.createElement('p');
        descriptionPF.classList.add('second_products_item_description_subtitle');
        descriptionPF.textContent = element.description;

        const descriptionPS = document.createElement('p');
        descriptionPS.classList.add('second_products_item_description_price');
        descriptionPS.textContent = element.price;

        const descriptionDivSVG = document.createElement('div');

        const descriptionSVG = document.createElement('img');
        
        descriptionSVG.src = "img/svg/Hover.svg"
        descriptionSVG.classList.add('product_img_svg');






        myProductBox.appendChild(productElement);

        productElement.appendChild(imgDiv);
            imgDiv.appendChild(productIMG);

        productElement.appendChild(descriptionDiv);
            descriptionDiv.appendChild(descriptionH2);
            descriptionDiv.appendChild(descriptionPF);
            descriptionDiv.appendChild(descriptionPS);
        
        productElement.appendChild(descriptionDivSVG);
            // descriptionDivSVG.appendChild(descriptionSVG);


        
        
        
    });
}

// функция формирования блока CardItems

function fillTemplateCardItems(objData){
    const cardItemsBox = document.querySelector(".cart_items")
    const cardItem = document.createElement('div');


    cardItemsBox.appendChild(cardItem);
    
}








