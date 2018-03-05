(function($){
   $(function(){
   	var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay:3000,
            autoplayDisableOnInteraction:false,
            // 如果需要分页器
            pagination: '.swiper-pagination', 
            paginationClickable:true,        
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',           
           })     
  
   });
})(jQuery)