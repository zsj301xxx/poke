$(function () {
    let poke=[];
    let colorArr = ['s','h','d','c'];
    let flag ={};

    for(let i= 0 ;i<52 ; i++){
        let index = Math.floor(Math.random() * colorArr.length);
        let color =colorArr[index];
        let number =Math.round(Math.random() *12+1);

        while (flag[color+'_'+number]){
            index = Math.floor(Math.random()*colorArr.length);
            color =colorArr[index];
            number = Math.round(Math.random()*12+1);
        }
        poke.push({color,number});
        flag[color+'_'+number]=true;
    }
    console.log(poke);
    let  index=-1;
    for (let i=0;i<7;i++){
        for (let j=0;j<=i;j++){
        index++;
        let obj=poke[index];
        let lefts=350-50*i+100*j;
        let tops=50*i;
         $('<div>').addClass('poke').css({backgroundImage:`url(./img/${obj.number}${obj.color}.jpg)`})
             .appendTo('.box')
             .attr('id',i+'_'+j)
             .data('number',obj.number)
             .delay(index*100)
             .animate({left:lefts,top:tops,opacity:1})
         ;
    }}
    for (let index=0;index<52;index++){

            let obj=poke[index];

            $('<div>').addClass('poke').css({backgroundImage:`url(./img/${obj.number}${obj.color}.jpg)`})
                .appendTo('.box')
                .attr('id','-1_-2')
                .addClass('lefttt')
                .data('number',obj.number)
                .delay(index*100)
                .animate({left:20,top:460,opacity:1})
            ;
        }

let first=null;
    $('.box').on('click',".poke",function () {
        let thiss=$(this);
        let [i,j]=thiss.attr('id').split('_');
        let id1=i*1+1+'_'+j;
        let id2=i*1+1+'_'+(j*1+1);


        if($('#'+id1).length||$('#'+id2).length){
            return;
        }
        if(thiss.hasClass('active')){
            $(this).removeClass('active').animate({top:'+=30px'});
            first=null;
        }else {
            $(this).addClass('active').animate({top:'-=30px'})


            if(!first){
                first=thiss;
            }else {
                let number1=first.data('number');
                console.log(number1);
                let number2=$(this).data('number');
                console.log(number1 + number2);
                if (number1+number2==14) {
                    console.log(1);
                    $('.active').animate({top:'0px'},function () {
                        $('.active').remove();
                        first=null;
                    })
                }else {
                    $('.active').removeClass('active').animate({top:'+=30px'});
                    first=null;
                }
            }
        }


    })



  let z=0;
    $('.right').on('click',function () {
        console.log(1);
        console.log($('.lefttt'));
        $('.lefttt').last().animate({left:700},function () {
            $('.lefttt').last().removeClass('lefttt').css('zIndex',z++).addClass('righttt');
        })
    })
    $('.left').on('click',function () {

        $('.righttt').last().animate({left:20},function () {
            $('.righttt').last().removeClass('righttt').addClass('lefttt').css('zIndex',z++);
        })
    })

    // let poke2=[];
    // for(let i= 0 ;i<4 ; i++){
    //     for(let j= 1 ;j<14 ; j++){
    //         let color =colorArr[i];
    //         poke2.push({color,j});
    //     }
    // }
    // console.log(poke2);
});
