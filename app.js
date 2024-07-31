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
        '#discoverText', '#cashbackText', '#debitText'], {
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

    return tl;


}

let master = gsap.timeline()
    .add(introCirclesScene())
    .add(frameOne(), '=-1.5')


