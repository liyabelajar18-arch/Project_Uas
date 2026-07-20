const swiper = new Swiper(".wisataSlider",{

slidesPerView:3,
slidesPerView: 3,
spaceBetween: 30,
loop: true,
centeredSlides: false,
watchOverflow: true,
autoplay:{
    delay:3000,
    disableOnInteraction:false,
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints:{

        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1024:{
            slidesPerView:3,
        }

    }

});
</script>