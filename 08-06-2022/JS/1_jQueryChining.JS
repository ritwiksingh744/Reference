// $('#para').click(function(){
//     $(this).hide();
// });

// $('#para').css('color','red');

// $(document).ready(function(){
//     $("button").click(function(){
//       $("#p1").css("color", "red")
//         .slideUp(2000)
//         .slideDown(2000);
//     });
//   });

// HTML get set property
//get text to element
// console.log($('#para4').text());

//set text to element
// $('#para4').text('this is new text in para 4');

// $('#btn1').click(function(){
//     alert('text: '+$('#para4').text());
// })

//set html element:
// let b = `<ul><li>some</li><li>some</li><li>some</li></ul>`;
// $('#para5').html(b)

// $('#click').click(()=>{
//     // console.log('btn clicked');
//     alert('value:'+$('#input').val());
// })

//_____get attr of <a> tage on click button
// $('#click').click(()=>{
//     console.log($('a').attr('href'));
// })

//set value of element
// $('#para').text("hello, this is new text");
// $('#para').html(`<h1>welcome to this page.</h1>`);
// $('#input').val('This is value')

// $(document).ready(()=>{
//     $('#button1').click(()=>{
//         $('#test1').text(function(i, origText){
//             return 'Old text:'+ origText +" New Text: Hello this is new text"+ i +")";
//         })
//     })
//     $('#button2').click(()=>{
//         $('#test2').html(function(i, origText){
//             return 'Old text:'+ origText +" New HTML: Hello <b>world</b> (index:  "+ i +")";
//         })
//     })
    
// });

//_Set Attribute to the element
// $('#button2').attr('class','btn btn-primary');

//crate dynamic list
let arr = ['ram', 'shyam', 'rahul', 'roshni','siddharth']
const ul = $('<ul></ul>');
ul.attr('id', 'UList')
ul.attr('class', 'list-group  shadow ');
for(let i=0;i<arr.length;i++){
    if(i==1){
        const li = $('<li></li>');
        li.text(`${i}. ${arr[i]}`);
        li.attr('id',`li${i}`);
        li.attr('class','list-group-item list-group-item-action p-3 active')
        const delbtn = $('<button></button>');
        delbtn.attr('id', `bt${i}`);
        delbtn.text('delete')
        delbtn.attr('class', 'btn btn-danger')
        li.append(delbtn);
        ul.append(li);
        
    }else{
        const li = $('<li></li>');
        li.text(`${i}. ${arr[i]}`);
        li.attr('id',`li${i}`);
        li.attr('class','list-group-item list-group-item-action p-3')
        const delbtn = $('<button></button>');
        delbtn.attr('id', `bt${i}`);
        delbtn.text('delete')
        delbtn.attr('class', 'btn btn-danger')
        li.append(delbtn);
        ul.append(li);
        
    }
}

//add element from top in list element
const item = $('<li></li>');
item.text(`SN. Name`);
item.attr('id',`li10`);
item.attr('class','list-group-item  p-3')
ul.prepend(item);

$('.inputElement').append(ul);
//setting width of list
$('.list-group').width(400);


$('.inputElement').prepend("List of Name:");


//delete element from parent element 
// $('li').remove('#li0, #li2');

$('ul li button').click(function(){
    console.log('btn clicked');
    // $('ul li button').parent().remove();
})


//add class
// $('p').click(()=>{
//     $('p').addClass('bg-light');
// })

//remove class
// $('#btn').click(()=>{
//     $('#btn').removeClass('btn-primary');
// })

//add toggle class: add remove class on toggle/click
$('#para5').click(function(){
    $('#para5').text('class adding and removing on toggle to this para')
    $('#para5').toggleClass('bg-danger')
})

//get and set width
// console.log("width of #para",$('#para').width());
// $('.list-group').width(400)

//return parent of element
// console.log('parent of li: ',$('li').parent());

//all ancestor as on order selector
// console.log('parents of btn-danger',$('.btn-danger').parents());
// console.log('parents of btn-danger',$('.btn-danger').parents('ul'));

// console.log('parents of btn-danger',$('.btn-danger').parentsUntil('div'));

//jQuery Descendents
//return all children
// console.log('parents of btn-danger',$('div').children());
// console.log('parents of btn-danger',$('div').children());
// console.log('parents of btn-danger',$('.inputElement').children());
// console.log('parents of btn-danger',$('#test').children());

//find element method in elment: returns all child of that element of parent
// console.log($('div').find('button'));

//find all child of element
// console.log($('div').find('*'));
// console.log($('ul').find('*'));

//siblings: returns all sibling
// console.log($("p").siblings());
// console.log($("div").siblings("p"));
//prev()
// console.log($('#para1').prev());
// console.log($('#para5').prevAll());
// console.log($('#para5').prevUntil('#para1'));
//next()
// console.log($('#para1').next());
// console.log($('#para1').nextAll());
// console.log($('#para1').nextUntil('#para5'));

//___________Filter__________//
//first() return first element
// console.log($('div').first()); //returns first 'div'
// console.log($('div').last()); //returns last 'div'

//eq() retruns element with 0 indexing
// console.log($('li').eq(0)); //returns first 'li'
// console.log($('li').eq(2)); //returns first 'li'

//filter()
// console.log($('li').filter('.list-group-item'));

//not() //returns all except this
// console.log($('li').not('.active'));










