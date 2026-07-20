// ==========================================
// DARK MODE
// ==========================================

const darkButton = document.getElementById("darkMode");

if (darkButton) {
    darkButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkButton.innerHTML = "☀ Light Mode";
        } else {
            darkButton.innerHTML = "🌙 Dark Mode";
        }
    });
}


// ==========================================
// FILTER PRODUK
// ==========================================

function filterProduk(kategori){

    const produk=document.querySelectorAll(".produk");

    produk.forEach(function(item){
        const kategoriItem=item.getAttribute("data-kategori");

        if(kategori=="all" || kategoriItem==kategori){
            item.style.display="";
        }

        else{
            item.style.display="none";
        }
    });

}

document.addEventListener("DOMContentLoaded", function(){
    const filterButtons=document.querySelectorAll("[data-filter]");

    filterButtons.forEach(function(button){
        button.addEventListener("click", function(){
            filterButtons.forEach(function(btn){
                btn.classList.remove("active");
            });

            this.classList.add("active");
            filterProduk(this.getAttribute("data-filter"));
        });
    });

    if(document.querySelector(".produk")){
        filterProduk("all");
    }
});



// ==========================================
// VALIDASI FORM
// ==========================================

const form=document.getElementById("formPesan");

if(form){

    const nama=document.getElementById("nama");
    const email=document.getElementById("email");
    const pesan=document.getElementById("pesan");
    const hasil=document.getElementById("hasil");

    function showFeedback(message, warna){
        if(hasil){
            hasil.innerHTML=message;
            hasil.style.color=warna;
            hasil.style.display="block";
        }
    }

    function resetFieldStyle(field){
        if(field){
            field.style.borderColor="#ced4da";
            field.style.boxShadow="none";
        }
    }

    function setFieldError(field){
        if(field){
            field.style.borderColor="#dc3545";
            field.style.boxShadow="0 0 0 0.2rem rgba(220,53,69,.25)";
        }
    }

    function validasiField(field){
        const value=field.value.trim();

        if(field.id==="nama" && value===""){
            setFieldError(field);
            return "Nama wajib diisi.";
        }

        if(field.id==="email"){
            if(value===""){
                setFieldError(field);
                return "Email wajib diisi.";
            }

            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                setFieldError(field);
                return "Format email tidak valid.";
            }
        }

        if(field.id==="pesan" && value===""){
            setFieldError(field);
            return "Pesan belum diisi.";
        }

        resetFieldStyle(field);
        return "";
    }

    [nama,email,pesan].forEach(function(field){
        if(!field) return;

        field.addEventListener("input", function(){
            const error=validasiField(this);

            if(error){
                showFeedback(error, "red");
            }else{
                showFeedback("", "green");
            }
        });
    });

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const errorList=[];

        [nama,email,pesan].forEach(function(field){
            if(!field) return;

            const error=validasiField(field);
            if(error){
                errorList.push(error);
            }
        });

        if(errorList.length>0){
            showFeedback(errorList[0], "red");
            return;
        }

        showFeedback("✅ Pesanan berhasil dikirim.", "green");
        form.reset();
        [nama,email,pesan].forEach(resetFieldStyle);

    });
}



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

const menu=document.querySelectorAll(".nav-menu a");

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