const introCirclesScene = ()=>{
    const tl = gsap.timeline();
     tl.to('.c-introBorderItem.fuchsia', {
        scale: 7,
        duration: 1,
        delay: 0.3,
    })
        .to('.introBorderItem.fuchsia', {
            borderWidth: '0px',
            duration: 1.5,
        }, '<')
        .to('.c-introBorderItem.orange',{
            scale: 7,
            duration: 1
        }, '-=1.5')
        .to('.introBorderItem.orange', {
            borderWidth: '0px',
            duration: 1.3,
        },  '-=1.2').to('.c-introBorderItem.white',{
        scale: 7,
        duration: 1
    }, '-=1.5')
        .to('.introBorderItem.white', {
            borderWidth: '0px',
            duration: 1.3,
        },  '-=1.2');

    return tl;
}

const frameOne = ()=>{

    const tl = gsap.timeline();
    tl.fromTo('#introducingText',{
        display:'none',
        x : '30px',
        y:'80px'
    },{
        display:'block',
        x : '0',
        y:'0',
        duration:0.8,
    }).from([
        '#discoverOrangeText', '#cashbackText', '#debitOrangeText'], {
        opacity: 0,
        x: '40px',
        duration: 0.5,
        stagger: 0.2,
    },'=-0.2').fromTo('#discoverBankMemberFDICText', {
        display:'none',
        z: 0,
    },{
        display:'block'
    }, '=-1.3').fromTo('#card', {
        y:'115px',
        rotation: 25,
    },{
        y:'0',
        rotation : 0,
        duration: 1.2,
        ease:"elastic.out(0.8,0.5)"
    }, '=-0.7')
        .fromTo('#middleCircleOrange', {
            scale: 0,
            rotation: 25,
        },{
            scale: 1,
            rotation : 0,
            duration: 0.4,
        }, '=-1.3').to('#middleCircleOrange', {
        x: '-80px',
        y: '-140px',
        scale: 0.5,
        borderWidth: 0,
        duration: 0.5
    }).to('#card', {
        scale: 1.6,
        x:'30px',
        y:'20px'
    },'<').to('.middleCircleItem.white', {
        alpha: 0,
        duration: 0.1
    }, '=-0.5').to(['#introducingText', '#discoverOrangeText', '#cashbackText', '#debitOrangeText'], {
        alpha: 0,
        duration: 0.1
    }, '=-0.3').to('#card',{
        rotation: -5,
        scale: 1.5,
        x:'25px',
        y:'-15px',
        duration: 0.2,
        ease: "power1.in",
        delay: 0.5,
    }).to('#card',{
        rotation: 0,
        scale: 1.6,
        duration: 0.3,
        x:'50',
        y:'25px',
        ease:"power1.out"

    }).fromTo('.circlePulseItem',{
        scale: 0.5,
        display:'none',
        width : gsap.getProperty('#middleCircleOrange', 'width','px'),
        height : gsap.getProperty('#middleCircleOrange', 'height','px'),
    }, {
        display:'block',
        scale: 0.8,
        borderWidth : 0,
        alpha : 0,
        duration: 0.9,
        stagger: 0.2
    }, '=-0.3')
        .to('#middleCircleOrange', {
            x : '15px',
            y: '-30px',
            scale : 1.4,
            borderWidth : 5,
        }).fromTo('.middleCircleItem.grey',{
            display:'none'
    },{
        scale: 20.5,
        display:'block',

    }, '<').to('#card', {
        rotation: 50,
        y: '170px'
    }, '<').fromTo('.realLifeObjectItem', {
        alpha: 0,
        scale: 0.5,
    }, {
        alpha: 1,
        scale: 1,
        duration: 0.3,
        stagger: 2,

    }, '=-0.1')
        .to('.realLifeObjectItem', {
            alpha: 0,
            y: '20px',
            stagger: 2,
            duration: 0.3

        }, '=-2.3').from(['#cashbackOnText', '#debitBlueText'], {
        x: '20px',
        alpha: 0,
        duration: 0.5,
        stagger: 0.2,
    },'<=-2').to('#middleCircleOrange',{
        scale: 0.6,
    }).fromTo('.middleCircleItem.white',{
        alpha: 1,
        scale: 0
    },{
        scale: 1.06,
        duration: 0.5,
    },'<').to(['#cashbackOnText', '#debitBlueText'],{
        alpha : 0,
        duration: 0.5,
    }).from(['#discoverBlueText', '#cashBackDebitText', '#cashBackOrangeText', '#isntJustForText', '#creditCardsText'], {
        alpha:0,
        x:'20px',
        duration: 0.5,
        stagger: 0.1,
    });

    return tl;
}

const seekTime = 13;

let master = gsap.timeline(
    {
    // onComplete : ()=>{
    //     master
    //         .seek(seekTime)
    //         .play();
    // }
}
)
    .add(introCirclesScene())
    .add(frameOne(), '=-1.5');

master.seek(seekTime)

