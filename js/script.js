
function myFunction(event) {
    let container = document.getElementById("myLinks");
    let icon = document.getElementById("changeIcon");
    if (container.style.display === "block") {
        container.style.display = "none";
        icon.className = "fa fa-bars";
    } else {
        container.style.display = "block";
        icon.className = "fa fa-times";
    }
}

function hiddenHeader(){
    let container = document.getElementById("myLinks");
    let icon = document.getElementById("changeIcon");
    let w = window.innerWidth;

    if(w < 1024){
        container.style.display = "none";
        icon.className = "fa fa-bars";
    }
}

let settings = {
    "url": "https://testimonialapi.toolcarton.com/api",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response){

    response.forEach(function (user){
        let comment = `<div class="main_users">
                        <div class="users_message_top">
                            <div id="users_photo_two" class="users_photo">
                                <img src="${user.avatar}">
                            </div>
                            <div>
                                <h4 class="users_name" id="users_name_two">${user.name}</h4>
                                    <p class="location" id="users_loc_two">${user.location}</p>
                                </div>
                                <div class="users_rating" id="users_rating_two">
                                    ${user.rating}
                                </div>
                            </div>
                            <div class="users_comment" id="users_comment_two">
                                    ${user.message}
                            </div>
                    </div>`;
        $('#js_slider').append(comment);

    })

    $(".owl-carousel").trigger('destroy.owl.carousel');
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        dotsContainer: ".dots",
        dots: true,

        nav: false,
        margin:30,

        responsive: {
            375: {
                items: 1,
                stagePadding: 50,
            },
            600: {
                items: 1,
                stagePadding: 100,
            },
            860: {
                items: 2,
                stagePadding: 90,
            },
        },
    });
});

$(".arrow_right").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
});

$(".arrow_left").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
});

$(".dot").click(function () {
    $(".owl-carousel").trigger("to.owl.carousel", [$(this).index()]);
});

