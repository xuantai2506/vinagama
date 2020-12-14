document.addEventListener("DOMContentLoaded", () => {
    const menuChild = document.querySelectorAll('.menu_child');
    const menuItem = document.querySelectorAll('.menu_item');
    console.log(menuItem);
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', () => {

            const id = menuItem[i].getAttribute('id');
            if (id) {
                for (let j = 0; j < menuItem.length; j++) {
                    menuItem[j].classList.remove('active');
                    // menuChild[j].classList.remove('active');
                }
                menuItem[i].classList.add('active');
                if (menuChild[i].classList.contains(id)) {
                    menuChild[i].classList.toggle('active');
                }
            } else {
                for (let j = 0; j < menuItem.length; j++) {
                    menuItem[j].classList.remove('active');
                }
                menuItem[i].classList.add('active');
            }


        })
    }
}, false)