document.addEventListener('DOMContentLoaded', function(){
    const toggleBtn = document.querySelector('.toggle-menu');
    const headerMenu = document.querySelector('.header-menu');
    const bodyLock = document.body;

    toggleBtn.addEventListener('click', function(){
        if(this.classList.contains('toggle-menu--active')) {
            this.classList.remove('toggle-menu--active');
            headerMenu.classList.remove('header-menu--active');
            bodyLock.classList.remove('lock');
        } else {
            this.classList.add('toggle-menu--active');
            headerMenu.classList.add('header-menu--active');
            bodyLock.classList.add('lock');
        }
    });

    headerMenu.addEventListener('click', function(){
        this.classList.remove('header-menu--active');
        toggleBtn.classList.remove('toggle-menu--active');
        bodyLock.classList.remove('lock');
    });

    //Плавная анимация скролла
    $(".nav, .footer__nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });

    //phoneMask
    mask('[data-tel-input]');

    // Удаляем "+"
    const phoneInputs = document.querySelectorAll('[data-tel-input]');
    phoneInputs.forEach((input)=>{
        input.addEventListener('input', ()=>{
            if (input.value == '+') input.value = '';
        });

        input.addEventListener('blur', ()=>{
            if (input.value == '+') input.value = '';
        });
    });

    // Убираем возможность скролла карты, 
    document.addEventListener('click', function(event) {
        const map = document.querySelector('#map-card iframe')
        if(event.target.id === 'map-card') {
            map.style.pointerEvents = 'all';
        } else {
            map.style.pointerEvents = 'none';
        }
    })
});