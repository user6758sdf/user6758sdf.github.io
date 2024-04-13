
// let btnleft = document.querySelector("#mainbanner .btn-left");
// let btnright = document.querySelector("#mainbanner .btn-right");

// console.log("test");
// console.log(btnleft);
// console.log(btnright);

// btnleft.addEventListener("click", function () {
//     if (btnleft.classList.contains("anime")) {
//         btnleft.classList.remove("anime");
//     }
//     else {
//         btnleft.classlist.add("anime");
//     }
// });
// btnright.addEventListener("click", function () {
//     if (btnright.classList.contains("anime")) {
//         btnright.classList.remove("anime");
//     }
//     else {
//         btnright.classlist.add("anime");
//     }
// });



const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// //  var tabs = document.querySelectorAll(".products-block__tab");
//  var wrappers = document.querySelectorAll(".products-block__wrapper");
//  console.log(tabs);
//  console.log(wrappers);
// tabs.forEach(element => {
//     element.addEventListener("click", function (e) {
//       console.log(this.className)){

//        if (this.hasAttribute(`data-id`)) {
//             console.log(id);
//       }
//    });
//  });

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  // console.log(tabs);
  // console.log(contents);

  tabs.forEach((tab, index) => {
    console.log(tab);

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })

      tab.classList.add('active');
      contents[index].classList.add('active');
    })

  })

}

toggleContentByTab();

let burger = document.querySelector('.burger');
let mobile_menu = document.querySelector('#mobile-menu');
let menu_close = document.querySelector(".close")

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');

});
menu_close.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');

});
