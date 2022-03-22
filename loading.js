$(document).ready(function(){
    $('.percent').each(function () {
        $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
        }, {
        duration: 4000,
        easing: 'linear',
        step: function (now) {
    //   console.log(now)
            $(this).html(Math.ceil(now) + '%')
    //   console.log(this.now_percent)
        }
        })
    })


    let timer = 0;
    setInterval(()=>{
    // seconds = timer
        timer++;
        if(timer>=5){
        $("#loading").css("display","none")
        }else{
        }
    },1000);
})