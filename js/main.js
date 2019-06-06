!function(){
    var code = `
    /*首先，要准备皮卡丘的背景*/
    .preview{
        height: 100%;
        width:100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }

    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;

    }

    .wrapper > *:not(:last-child){
        z-index: 1;
    }

    /*接下来，要准备皮卡丘的鼻子*/

    .nose{
        width: 0px;
        height: 0px;
        position: absolute;
        left:50%;
        top:28px;
        transform: translateX(-50%);
        border:11px solid black;
        border-width: 10px 11px;
        border-radius:50%;
        border-color: black transparent transparent transparent;
    }

    /*然后画皮卡丘的眼睛*/

    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        border-radius: 50%;
        border:2px solid #000000;
        position: absolute;
    }

    /*画皮卡丘的眼珠*/

    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 5px;
        top: 1px;
        border:2px solid #000;
    }

    /*左眼在左边*/

    .eye.left{
        right: 50%;
        margin-right:90px;
    }

    /*右眼在左边*/

    .eye.right{
        left: 50%;
        margin-left:90px; 
    }

    /*然后画皮卡丘脸上的红晕*/

    .face{
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border:2px solid black;
        border-radius: 50%;
        position: absolute;
        top:85px;
    }

    /*左边的*/

    .face.left{
        right: 50%;
        margin-right: 116px;
    }

    /*右边的*/

    .face.right{
        left: 50%;
        margin-left: 116px;
    }

    /*上嘴唇*/

    .upperLip{
        height: 25px;
        width: 80px;
        border:2px solid black;
        position: absolute;
        top: 50px;
        background:#fee433;
        overflow: hidden;
    }

    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 47px 33px;
        transform: rotate(-20deg);
        border-top: none;
        border-right: none;
    }

    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 47px 33px;
        transform: rotate(20deg);
        border-top: none;
        border-left: none;
    }

    /*下嘴唇*/

    .lowLip{
        height: 134px;
        width: 100px;
        border: 2px solid black;
        border-bottom-left-radius: 50% 100%;
        border-bottom-right-radius: 50% 100%;
        background: #990513;
        position: absolute;
        bottom: 0;
        top: 58px;
        left: 50%;
        margin-left: -50px;
        overflow: hidden;
    }

    /*小舌头*/

    .lowLip::after{
        width: 100px;
        height: 100px;
        content: '';
        display: block;
        background: #FC4A62;
        border-radius: 50px;
        position: absolute;
        left: 50%;
        margin-left: -48px;
        bottom: -6px;
    }

    /*好了皮卡丘就画完了*/
    `

    var time = 50

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                time = 100
                break
            case 'normal':
                time = 50
                break   
            case 'fast':
                time = 10
                break  
        }
    })
    
    function writecode(prefix,code,fn){
        let contenter = document.querySelector('#code')
        let styTag = document.querySelector('#styleTag')
        let n = 0
        let id 
        id =  setTimeout(function run(){
            n += 1
            contenter.innerHTML = code.slice(0, n)
            contenter.scrollTop = contenter.scrollHeight
            styTag.innerHTML = code.slice(0, n)
            if(n<code.length){
               id = setTimeout(run,time)
            }else{
                fn && fn.call()
            }
        }, time);
    }
    writecode('',code)
}.call()