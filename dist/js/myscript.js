var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;
document.getElementById("currentTime").innerHTML = strTime;

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 200000); // Change image every 2 seconds
}
var events = [
    { 'Date': new Date(2016, 6, 7), 'Title': 'Doctor appointment at 3:25pm.' },
    { 'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com' },
    { 'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts' },
];
var settings = {
    Color: '',
    LinkColor: '',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: [],
    ModelChange: model
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);




// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "content";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }


var myIndex = 0;
var slideIndex = 1;

carousel2(slideIndex);

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 0 }
    x[myIndex].style.display = "block";
    setTimeout(carousel2, 1000); // Change image every 2 seconds
}



function plusSlides(n) {
    carousel2(slideIndex += n);
}

function currentSlide(n) {
    carousel2(slideIndex += n);
}







// if no Webkit browser
(function() {
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    let scrollbarDiv = document.querySelector('.scrollbar');
    if (!isChrome && !isSafari) {
        scrollbarDiv.innerHTML = 'You need Webkit browser to run this code';
    }
})();




function changehtml() {
    var x = document.getElementById("para1");
    var y = document.getElementById("dot");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

}

function hidehtml() {
    var x = document.getElementById("para1");
    var y = document.getElementById("dot2");
    var z = document.getElementById("dot");
    if (x.style.display === "block") {
        x.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "block";
    }

}

function changeicons() {
    var a, b, c, d;
    a = document.getElementById("ul1");
    b = document.getElementById("ul2");
    c = document.getElementById("ul3");
    d = document.getElementById("ul4");



    if (a.style.display == "block" && b.style.display == "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "block";
    } else {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
    }

}
changeicons()