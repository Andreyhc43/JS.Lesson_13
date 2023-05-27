const jsonData = [
        {
            img : "img/second_page/img_1.jpg",
            name : "ELLERY X M'O CAPSULE",   
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",   
            price : "$ 51.00",   
            link : "#",
            color : "black",
            size : "L"
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
            // !!! МЕТОД ПРОВЕРЯЮЩИЙ МАССИВ НА ПОВТОРЯЮЩИЕСЯ ЭЛЕМЕНТЫ???
            // checkRepeatedElement(jsonCartItems);


            fillTemplateCardItems(jsonCartItems)
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


        
        
        
            fillTemplateCardItems(jsonCartItems);
    });
}

// функция формирования блока CardItems

function fillTemplateCardItems(objData){
    const cartItemsBox = document.querySelector(".cart_item_box")

    // ПОЛНАЯ ОЧИСТКА БЛОКА
    removeBlock()
        

    // cartItemsBox.removeChild(varRemove)

    objData.forEach(element => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart_item')
        cartItem.style.height = "306px";
        cartItem.style.width = "652px";
        cartItem.style.display = "flex";
        cartItem.style.border = "1px solid green"
        cartItemsBox.appendChild(cartItem);

        
        const cartItemDivIMG = document.createElement('div');
        cartItemDivIMG.classList.add('.cart_item_img');
        cartItem.style.width = "262px";
        cartItem.style.height = "306px";
        cartItem.appendChild(cartItemDivIMG);

        const cartItemIMG = document.createElement('img');
        cartItemIMG.classList.add('card_item_img');
        cartItemIMG.src = element.img;
        cartItemIMG.style.height = "100%"
        cartItemDivIMG.appendChild(cartItemIMG);
        
        const cartItemDivDescriptionBlock = document.createElement('div');
        cartItemDivDescriptionBlock.classList.add('description_block');
        cartItemDivDescriptionBlock.style.width = "320px";
        cartItemDivDescriptionBlock.style.border = "1px solid white";
        cartItem.appendChild(cartItemDivDescriptionBlock);

        const cartItemDescription = document.createElement('p');
        cartItemDescription.classList.add('.cart_item_description_block_text');
        cartItemDescription.style.width = "320px"
        cartItemDescription.textContent = element.name;

        cartItemDivDescriptionBlock.appendChild(cartItemDescription);

        
        const cartItemDivDescriptionDetail = document.createElement('div');
        cartItemDivDescriptionDetail.style.marginTop = "50px"

        const price = document.createElement('p');
        const color = document.createElement('p');
        const size = document.createElement('p');
        const quantity = document.createElement('p');
        
        price.textContent = "Price: " + element.price;
        cartItemDivDescriptionDetail.appendChild(price)

        color.textContent = "Color: " + element.color;
        cartItemDivDescriptionDetail.appendChild(color);

        size.textContent = "Size: " + element.size;
        cartItemDivDescriptionDetail.appendChild(size);

        quantity.textContent = "Quantity: " // добавить счетчик товаров
        cartItemDivDescriptionDetail.appendChild(quantity);
        

        cartItemDivDescriptionBlock.appendChild(cartItemDivDescriptionDetail);



        const cartItemButtonDiv = document.createElement('div');
        cartItem.appendChild(cartItemButtonDiv);

        const cartItemButton = document.createElement('button');
        cartItem.classList.add('button_del');
        cartItemButton.style.width = "40px";
        cartItemButton.style.height = "40px";
        cartItemButtonDiv.appendChild(cartItemButton);


        
        cartItemButton.addEventListener('click', (e)=> {

            console.log(element.img)
            console.log("этот элемент должен удалиться")
            
            const index = jsonCartItems.indexOf(element);
            console.log(index)
            
            delete jsonCartItems[index]

            fillTemplateCardItems(objData)
        })
    });
}


// функция полной очистки блока

function removeBlock(){
    const varRemove = document.querySelector('.cart_item_box')
    let childVarRemove = varRemove.lastElementChild;

        while (varRemove.firstElementChild) {
            varRemove.removeChild(childVarRemove);
            childVarRemove = varRemove.lastElementChild;
        }
}

// функция удаления элемента из массива jsonCartItems

function removeElementArray(){

}

