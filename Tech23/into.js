const swiper = new Swiper('.swiper', {

    autoplay: {
      delay: 3000,
      disableONIneraction:false,
    },
      // Optional parameters
      loop: true,
    
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
  pagination:{
    el:'.swiper-pagination'
    clickable:true,
  },
  
  