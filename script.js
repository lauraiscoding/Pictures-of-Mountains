function showPicture(picture){
      $(".mountain-picture").attr("src", picture);
    
}

$(".everest").click(function() {
   showPicture("https://user-images.githubusercontent.com/14214/42292528-246b57fe-7fa1-11e8-83fb-3a0daa76d08e.png");
});

$(".k2").click(function() {
   showPicture("https://user-images.githubusercontent.com/14214/42292614-ba367638-7fa1-11e8-8e94-97bc8b566232.png");
});

$(".kangchenjunga").click(function() {
   showPicture("https://user-images.githubusercontent.com/14214/42292634-e0fedbac-7fa1-11e8-9d56-6d12dcd7ab3c.png");
});

$(".trench").click(function() {
    showPicture("http://faculty.montgomerycollege.edu/gyouth/FP_examples/student_examples/sathya_ramachandran/images/marianaanim_whoi.jpg"); 
});