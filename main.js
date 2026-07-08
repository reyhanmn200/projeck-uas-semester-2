// ==========================================
// DARK MODE
// ==========================================

const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkButton.innerHTML="☀ Light Mode";

    }else{

        darkButton.innerHTML="🌙 Dark Mode";

    }

});


// ==========================================
// FILTER PRODUK
// ==========================================

function filterProduk(kategori){

    const produk=document.querySelectorAll(".produk");

    produk.forEach(function(item){

        if(kategori=="all"){

            item.style.display="block";

        }

        else{

            if(item.classList.contains(kategori)){

                item.style.display="block";

            }

            else{

                item.style.display="none";

            }

        }

    });

}



// ==========================================
// VALIDASI FORM
// ==========================================

const form=document.getElementById("formPesan");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const nama=document.getElementById("nama").value.trim();

    const email=document.getElementById("email").value.trim();

    const pesan=document.getElementById("pesan").value.trim();

    const hasil=document.getElementById("hasil");

    if(nama==""){

        hasil.innerHTML="Nama wajib diisi.";

        hasil.style.color="red";

        return;

    }

    if(email==""){

        hasil.innerHTML="Email wajib diisi.";

        hasil.style.color="red";

        return;

    }

    if(!email.includes("@")){

        hasil.innerHTML="Format email tidak valid.";

        hasil.style.color="red";

        return;

    }

    if(pesan==""){

        hasil.innerHTML="Pesan belum diisi.";

        hasil.style.color="red";

        return;

    }

    hasil.innerHTML="✅ Pesanan berhasil dikirim.";

    hasil.style.color="green";

    form.reset();

});



// ==========================================
// SCROLL ANIMATION
// ==========================================

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",function(){

    cards.forEach(function(card){

        let posisi=card.getBoundingClientRect().top;

        let layar=window.innerHeight;

        if(posisi<layar-100){

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        }

    });

});



// ==========================================
// EFFECT CARD
// ==========================================

cards.forEach(function(card){

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition=".8s";

});



// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const tombol=document.createElement("button");

tombol.innerHTML="⬆";

tombol.id="topButton";

document.body.appendChild(tombol);

tombol.style.position="fixed";
tombol.style.bottom="30px";
tombol.style.right="30px";
tombol.style.width="50px";
tombol.style.height="50px";
tombol.style.border="none";
tombol.style.borderRadius="50%";
tombol.style.background="#dc3545";
tombol.style.color="white";
tombol.style.fontSize="20px";
tombol.style.display="none";
tombol.style.cursor="pointer";
tombol.style.zIndex="1000";

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop>300){

        tombol.style.display="block";

    }

    else{

        tombol.style.display="none";

    }

});

tombol.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ==========================================
// HOVER CARD
// ==========================================

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="scale(1.03)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="scale(1)";

    });

});



// ==========================================
// WELCOME ALERT
// ==========================================

window.onload=function(){

    console.log("Website Seblak Mamah Nay berhasil dimuat.");

};



// ==========================================
// NAVBAR ACTIVE
// ==========================================

const menu=document.querySelectorAll(".nav-link");

menu.forEach(function(link){

    link.addEventListener("click",function(){

        menu.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



// ==========================================
// JAM OPERASIONAL
// ==========================================

const sekarang=new Date();

const jam=sekarang.getHours();

if(jam>=10 && jam<=22){

    console.log("Toko Sedang Buka");

}

else{

    console.log("Toko Sedang Tutup");

}