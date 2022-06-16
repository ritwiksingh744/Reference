
//_______window Ready function
// $(document).ready(function(){
//     console.log("window loaded....");
// });
//or
// $(window).on('load', ()=>{
//     console.log("window loaded.....");
// });

//element select by id and apply css
$("#head").css("color", "red");

// myElement = $("#para");
// myElement.text("hello, this is new text.");

//select all <p> and  on click paragraph will hide
$('p').click(function(){
    $(this).hide();
});

// // show para on click
// $('#btn').click(myFun);

// function myFun(){
//     if($('#paraN').show()){
//         $('#paraN').hide();
//     }else{
//         $('#paraN').show();
//     }
// }

//class selector with ".para" name
// $('.para').css("color", "purple");

//attribute selector
// $('p[name="spl"]').css("font-style","italic")

//___________ADD Element________//
//create element and append at top of body
// const head = $('<h1></h1>').text("Welcome to jQery world.");
// head.css("color", "purple")
// head.css("text-align","center")
// $("body").prepend(head);

//selctor
// $('p:even').css("background-color", "LightGray");

//all button slector <button> and <input type="button"> both
// $(':button').css("background-color", "red")

//double click 
// $('#head').dblclick(function(){
//     $(this).css("color", "blue");
// });

//___mouseenter()_____//
// $('p').mouseenter(function(){
//     $('p').css("color", "blue");
// });
//_______mouseleave()____//
// $('p').mouseleave(function(){
//     $('p').css("color", "black");
// });

//_________mousedown()______//
// $("#head").mousedown(function(){
//     alert("Mouse down over h1!");
//   });

//_________mouseup()________//
// $("#head").mouseup(function(){
//     alert("Mouse up over h1!");
//   });

//______mousehover()_______//
// $("#btn").hover(function(){
//     alert("You entered btn!");
//   },
//   function(){
//     alert("Bye! You now leave btn!");
//   });

//_____onfocus()_______//
// $("#btn").focus(function(){
//     $(this).css("background-color", "#cccccc");
//   });

//   $("#btn").mouseleave(function(){
//     $(this).css("background-color", "#0d6efd");
//   });

//_____________** ADDING MORE THAN ONE Event Listner **_______//
// $("#head").on({
//     mouseenter: function(){
//       $(this).css("background-color", "lightgray");
//     },
//     mouseleave: function(){
//       $(this).css("background-color", "lightblue");
//     },
//     click: function(){
//       $(this).css("background-color", "yellow");
//     }
//   });
//_______________________***********___________________________//

//________hide(),show()___________//
// $('.divTest').click(function(){
//     hide();
// });
// function hide(){
//     $('.divTest').hide(1000);//hide slowly within 1sec
// }
// $('.divTest').click(function(){
//     hide();
// });
// function hide(){
//     $('.divTest').toggle();//hide slowly within 1sec
// }

//___________fade()________//
//to hide or dissapear
// $("button").click(function(){
//     $("#div1").fadeToggle();
//     $("#div2").fadeToggle("slow");
//     $("#div3").fadeToggle(3000);
//   });

//to decrease opacity
// $("button").click(function(){
//     $("#div1").fadeTo("slow", 0.15);
//     $("#div2").fadeTo("slow", 0.4);
//     $("#div3").fadeTo("slow", 0.7);
//   });

//slide up and down on click
// $("#button").click(function(){
//     $("#slide").slideDown(1000);
//   });
//   $("#button").click(function(){
//     $("#slide").slideUp(2000);
//   });

//_________slide funtion start and stop
//on click slide-down and onclick slide-up
// $("#btn-start").click(function(){
//     $("#slide").slideToggle(1000);
//   });
// $("#btn-stop").click(function(){
//     $("#slide").stop();
// });



//___________animation with jQuery_____________//
// $('#btnAnimate').click(function(){
//     $('#animate').animate({
//         left: '250px',
//         opacity: '0.5',
//         // height: '+=150px',
//         // width: '+=150px',
//         height: '150px',
//         width: '150px',
//         height: 'toggle' //dissapear
//     },2000);  //add slow or slow time in ms
// });

//____________Callback function_____________//
// callback function is second function inside fist funciton and second function is called
// after completly execution of first function.
// $("#hideDiv").click(function(){
//     $("#hdiv").hide("slow", function(){//callback funtion
//       alert("The content of div is now hidden"); 
//     });
//   });

//without callback funtion
// $("#hideDiv").click(function(){
//     $("#hdiv").hide("slow");
//     alert("The content of div is now hidden"); 
    
//   });