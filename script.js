document.addEventListener('DOMContentLoaded', ()=>{
    let cardWrapper =  document.querySelector('.card-wrapper'),
        form = document.querySelector('form'),
        select =  document.querySelector('select');
    fetch('db.json')
        .then((res)=>res.json())
        .then(data=>{
            data.forEach(item=>{
                cardWrapper.appendChild(createCard(item.id, item.name, item.price));

            });
            
            form.addEventListener('click', (e)=>{
                let cards = document.querySelectorAll('.card');    
                    e.preventDefault();
                    if(e.target.tagName!== "BUTTON"){
                        return
                    }else{
                            sortVal(cards, selVal())
                         }            

                 });

                 function sortVal(arr,comp){
                    let sorted = [...arr].sort((a,b)=>{
                        const priceElB = b.querySelector(`.card-${comp}`);
                        const priceElA = a.querySelector(`.card-${comp}`);
                        const  getPrice =(el)=>(parseInt(el.innerHTML));
                        if (getPrice(priceElA) <  getPrice(priceElB)){
                            return -1
                        } 
                        else if ( getPrice(priceElA) >  getPrice(priceElB)){
                            return 1
                        }
                            return 0 
                    });
                    
                    cardWrapper.innerHTML ='';
                    sorted.forEach(el => cardWrapper.appendChild(el));

                 }

                 function selVal(){
                     let selectValue = select.value;
                     return selectValue;
                 }
        })

        function createCard(id, name, price){
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML=`
                <div class="card-id">${id}#</div>
                <div class="card-name">${name}</div>
                <div class="card-price">${price}$</div>
            `
            return card;
        }

})





























