$(function () {
  //hide left menu
  $(".fa-bars").click(function () {
    $(".hright").toggleClass("hide");
    $(".change").toggleClass("smallSize");
  });

  //hide child MEnu
  $("li.HRM .titleOfHRM , li.HRM>i").click(function () {
    $(".childOfHRM").toggleClass("hide");
  });
  $("li.Project .titleOfProject , li.Project>i").click(function () {
    $(".childOfProject").toggleClass("hide");
  });

  $("li.JobPortal .titleOfJobPortal ,li.JobPortal>i").click(function () {
    $(".childOfJobPortal").toggleClass("hide");
  });
  $("li.Authentication .titleOfAuthentication ,li.Authentication>i").click(
    function () {
      $(".childOfAuthentication").toggleClass("hide");
    }
  );
  $(".right-menu li ul>li").click(function () {
    var checkArrow = $(this).find(".fa-solid").css("display", "none");
    $(this).prepend('<i class="fa-solid fa-arrow-right"></i>');
    if (checkArrow) {
      $(".right-menu li ul>li").find(".fa-solid").css("display", "inline-block");
      $(".right-menu li ul>li").find(".fa-arrow-right").css("display", "none");
      $(this).find(".fa-solid").css("display", "none");
      $(this).prepend('<i class="fa-solid fa-arrow-right"></i>');
    }

    var checkBorder = $(".right-menu li ul>li").css("border", "outset 2px");
    if (checkBorder) {
      //reset
      $(".right-menu li ul>li").css("border", "none");
      $(".right-menu li ul>li").css("background-color", "white");
      $(".right-menu li ul>li").find("i").css("color", "#5a5278");
      $(".right-menu li ul>li").find("p").css("color", "#5a5278");
      //set
      $(this).css("background-color", "#5a5278");
      $(this).find("i").css("color", "white");
      $(this).find("p").css("color", "white");
      $(this).css("border", "outset 2px");     
    }
    var changeTitleOfHeader = $(this).text();

    $("h2.titleOfHeader").text(changeTitleOfHeader);
  });

  //hide right menu
  $(".Country-dropDownNode").click(function(){
    $(".menuLanguages").toggleClass("hide");
  });
  $(".Tool-Options").click(function(){
    $(".menuReports").toggleClass("hide");
  });
  $(".profiles").click(function(){
    $(".profile").toggleClass("hide");
  });
  $(".right-menu li ul>li").click(function(){
    $(".main-content >div").addClass("hide");
    var check_content = $(this).attr('class');
    $(`.main-content >div.${check_content}`).removeClass('hide');    
  });
  $(".setting").click(function(){
    $(".main-content >div").addClass("hide");
    $(".Setting").removeClass('hide');
  });
  $("li.Users").click(function(){
    $(".tab-content").find("#user-list").addClass("active");
  });
  $(".nav-item").click(function(){
    $(".nav-item").find(".nav-link").removeClass('active');
    $(this).find('.nav-link').addClass('active');
    var nameOfTab = $(this).find(".nav-link").attr('hre');
    $(".tab-content>div").removeClass('active');
    $(".tab-content").find(`${nameOfTab}`).removeClass("hide");
    $(".tab-content").find(`${nameOfTab}`).addClass("active");
  });
  $(".second3Dot").click(function(){
    $(".DropDown").css("display","none!");
  });
  
  //======top-right menu 
  // $(".right-header ul li   , .right-header .profiles .fa-user").click(function(){
  //   const checkIsShow = $(".right-header ul li .childOfOptions").hasClass("hide");
  //   const checkProfile=  $(".right-header .profiles .fa-user .childOfOptions").hasClass("hide");
  //     // if($(this)== $(".right-header .profiles .fa-user") &&  $(".right-header ul li .menuReports").hasClass("hide") &&$(".right-header ul li .childOfOptions .menuLanguages").hasClass("hide")){
  //     //   $(".right-header ul li .childOfOptions").addClass("hide");
  //     // }
  //   if(!checkIsShow || !checkProfile){
  //     $(".right-header .profiles .fa-user .childOfOptions").addClass("hide");    
  //     $(".right-header ul li .childOfOptions").addClass("hide");
  //     $(this).find(".childOfOptions").removeClass("hide");
  //   }
  // });
});