const isler = document.querySelector('.isler');
const sil = document.querySelector('.close');
const ekle= document.querySelector('.ekle');
const arama = document.querySelector('input[name="arama"]');
function isEkle(is){
    isler.innerHTML+=`<li>${is} <span class="close">X</span</li>`;
}

ekle.addEventListener('keyup',e=>{
    if(e.keyCode ===13){
    isEkle(ekle.value.trim())
    ekle.value="";
    e.preventDefault();
    }
});

isler.addEventListener('click',e=>{
    if(e.target.classList.contains('close')){
        e.target.parentElement.remove();
    }    
});

arama.addEventListener('keyup',e=>{

    const ifade=arama.value.trim().toLowerCase();
    aconsole.log(ifade);
    filtreOlustur(ifade);
});

const filtreOlustur=(ifade)=>{

    //console.log(Array.from(liste.children));
    Array.from(isler.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return !yapilacak.textContent.toLowerCase().includes(ifade);
    }).forEach((yapilacak)=>{
        yapilacak.classList.add('filtre');
    });

    Array.from(isler.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return yapilacak.textContent.toLowerCase().includes(ifade);
    }).forEach((yapilacak)=>{
        yapilacak.classList.remove('filtre');
    });
}
