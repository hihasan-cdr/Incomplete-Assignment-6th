new TypeIt(".element",{
    strings:["I am learning Web Design", "Web Development", "And WordPress Development", "From LEDP"],
    breakLines:false,
    loop: true,
    cursorSpeed: 3000,
  
  
}).go();

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });
});

var mixer = mixitup('.filter-item',{
  
    animation: {
        duration: 1000
       
    }
});


