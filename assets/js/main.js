const navShow = () => {
	const navBar = document.querySelector('.nav-bar');
	const menuList = document.querySelector('.mobile-menu');

	navBar.addEventListener('click', () => {
		menuList.classList.toggle('mobile-menu-active');

		navBar.classList.toggle('close');
   
	});


}
navShow();

$(document).ready(function () {
    $(".list-item .watch").click(function () {
        $(".watchlist").addClass("open")

    })

    $(".close-btn").click(function () {
        $(".watchlist").removeClass("open")
        console.log("open")

    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: false,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 43,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 43,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 48,
        },
        520: {
            slidesPerView: 1,
            spaceBetween: 48,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 28,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },

        1199: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 38,
        },
    },

});

$(document).ready(function () {
    $(".play-btn").click(function () {
        $(".popup").addClass("popup-open")

    })

    $(".close-modal").click(function () {
        $(".popup").removeClass("popup-open")

    })
})

$(document).ready(function() {
    $(".button-wrap button").click(function () {
        $(".button-wrap button").removeClass("active");
        $(this).addClass("active");     
    });
});

$(document).ready(function () {
    $(".close-b").click(function () {
        $("this").parent().remove();
        
        
    })
    
})

$('.watchlist li i').on('click', function(){
    $(this).closest('li').remove();
});