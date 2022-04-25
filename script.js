/*Book Appointment*/

document.querySelector('.red').addEventListener('click', function(){
    document.querySelector('.popup').classList.add('active');
});

document.querySelector('.popup .close-btn').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active');
});

document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active');
});

document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.booked').classList.add('active');
});


document.querySelector('.booked .close-btn2').addEventListener('click', function(){
    document.querySelector('.booked').classList.remove('active');
});


/*Responsiveness*/

$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});

/* Aboubacar Nguessan 
CSCE 3420 Internet Programming 
Prof: Dr Sultan Al Saif
Project */
