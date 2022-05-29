const menubtn = document.querySelector('.menubar')
const mobilelinks = document.querySelectorAll('.navbar__secondpart__links_container__mobile');
const menuicon = document.querySelector('.menubar')
menubtn.addEventListener('click', function(bn){
    console.log(mobilelinks[0])
    const active = mobilelinks[0];
    active.classList.toggle("activelink");
    if(active.classList.contains("activelink")){
        menuicon.classList.remove("fa-bars")
        menuicon.classList.add("fa-xmark")
        console.log("why running")
    }
    else{        
        menuicon.classList.add("fa-bars");
        menuicon.classList.remove("fa-xmark");
        console.log("why comming")

    }


})
// fa-xmark
const btn = document.querySelectorAll('.sponsor__section__contents__item__question')
const answer = document.querySelectorAll('.sponsor__section__contents__item');
console.log("hello world");
btn.forEach(function(b){
    b.addEventListener('click',function(e){
        const question = e.currentTarget.parentElement;
        question.classList.toggle("show-answer");
        const sibling =e.currentTarget.children[2].children[0];
        console.log(sibling);
        const list = sibling.classList;
        console.log(list);

        if(list.contains('fa-angle-down')){
            sibling.classList.remove('fa-angle-down');
                sibling.classList.add('fa-angle-up')
        }else{
            sibling.classList.remove('fa-angle-up');
            sibling.classList.add('fa-angle-down')
        }
        answer.forEach(function(item){
            if(item !==question ){
                item.classList.remove("show-answer")
            }
        })
    })
})


const anotherbtn = document.querySelectorAll('.additionmarket__section__content__first__part')


anotherbtn.forEach(function(btn){
    btn.addEventListener('click', function(bn){
        if( window.innerWidth <= 701){
            const parent = bn.currentTarget.parentElement;
            const sibling =bn.currentTarget.children[2].children[0];
            const list = sibling.classList;
            console.log(list);

            if(list.contains('fa-angle-down')){
                sibling.classList.remove('fa-angle-down');
                    sibling.classList.add('fa-angle-up')
            }else{
                sibling.classList.remove('fa-angle-up');
                sibling.classList.add('fa-angle-down')
            }
            parent.classList.toggle("show-another");
        }
    })
})


const secondsectionbtn = document.querySelectorAll(".secondsectionbtn");
const activesecondsection = document.querySelectorAll(".second__section__third__content")


secondsectionbtn.forEach(function(btn){
    btn.addEventListener('click', function(bn){
        const id = bn.target.id;
        secondsectionbtn.forEach(function(activebtn){
            console.log(activebtn)
            if( activebtn.id == id){
                console.log(activebtn)
                activebtn.classList.add("activebtn")
            }else{
                activebtn.classList.remove("activebtn")

            }
        })
        // console.log(id);
        activesecondsection.forEach(function(active){
            // console.log(active.id)
            if(active.id == id){
                
                active.classList.add("active");
            }else{
            active.classList.remove("active");
            }
        })

    })
})