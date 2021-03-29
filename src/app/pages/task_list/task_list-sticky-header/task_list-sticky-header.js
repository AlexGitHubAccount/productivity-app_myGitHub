
export default function showStickyHeader (){
        let stickyHeader = document.querySelector('.header-sticky');
        let breakPointMobile = 520;
        let breakPointTablet = 768;
        let clientWidth = document.documentElement.clientWidth;
        window.addEventListener('scroll', function () {
            if (clientWidth >= breakPointMobile) {
                if (pageYOffset >= 72) {
                    stickyHeader.classList.add('show-block');
                } else {
                    stickyHeader.classList.remove('show-block');
                }
            } else if (clientWidth >= breakPointTablet) {
                if (pageYOffset >= 66) {
                    stickyHeader.classList.add('show-block');
                } else {
                    stickyHeader.classList.remove('show-block');
                }
            }
        });
    };
