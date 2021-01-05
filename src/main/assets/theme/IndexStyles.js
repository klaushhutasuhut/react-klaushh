import {createGlobalStyle} from 'styled-components';
import BGpic from '../img/bg.jpg';

const IndexStyles = createGlobalStyle`
    html{ 
        font-size: 100%; 
        height: 100%; 
        overflow-x: hidden; 
        margin: 0px;  
        padding: 0px; 
        touch-action: manipulation; 
    }


    body{ 
        font-size: 16px; 
        font-family: 'Poppins', serif; 
        width: 100%; 
        height: 100%; 
        margin: 0; 
        font-weight: 400;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale; 
        word-wrap: break-word; 
        color: #333; 
    }

    h1, h2, h3, h4, h5, h6, p, a, ul, span, li, img, inpot, button{ 
        margin: 0; 
        padding: 0; 
    }

    h1,h2,h3,h4,h5,h6{ 
        line-height: 1.5; 
        font-weight: inherit; 
    }

    h1,h2,h3{ 
        font-family: 'Poppins', cursive; 
    }

    p{ 
        line-height: 1.6; 
        font-size: 1em; 
        font-weight: 400; 
        color: #777; 
    }

    h1{ 
        font-size: 4em; 
        line-height: 1; 
    }
    h2{ 
        font-size: 2.2em; 
        line-height: 1.1; 
    }
    h3{ 
        font-size: 1.8em; 
    }
    h4{ 
        font-size: 1.3em; 
    }
    h5{ 
        font-size: 1em; 
    }
    h6{ 
        font-size: .9em; 
        letter-spacing: 1px; 
    }

    a, button{ 
        display: inline-block; 
        text-decoration: none; 
        color: inherit; 
        line-height: 1; 
        -webkit-transition: all .25s ease-in-out; 
        transition: all .25s ease-in-out; 
    }

    a:focus, a:active, a:hover,
    button:focus, button:active, button:hover,
    a b.light-color:hover{ 
        text-decoration: none; 
        color: #FFA804; 
    }

    b{ 
        font-weight: 600; 
    }

    img{ 
        width: 100%; 
    }

    li{ 
        list-style: none; 
        display: inline-block; 
    }

    span{ 
        display: inline-block; 
    }

    button{ 
        outline: 0; 
        border: 0; 
        background: none; 
        cursor: pointer; 
    }

    .icon{ 
        font-size: 1.1em; 
        display: inline-block; 
        line-height: inherit; 
    }

    [class^="icon-"]:before, [class*=" icon-"]:before{ 
        line-height: inherit; 
    }

    b.max-bold{ 
        font-weight: 700; 
    }

    .section{ 
        padding: 100px 0 50px; 
        border-bottom: 1px solid #ddd; 
    }

    .section .heading{ 
        margin-bottom: 60px; 
    }

    .section .heading:before{ 
        content:''; 
        height: 10px; 
        width: 50px; 
        border-radius: 5px;
        margin-bottom: 20px; 
        display: block; background: #FFA804; 
    }
        
    .margin-t-10{ 
        margin-top: 10px; 
    }

    .margin-b-30{ 
        margin-bottom: 30px; 
    }

    .margin-b-50{ 
        margin-bottom: 50px; 
    }

    .margin-tb-30{
        margin-top: 30px; 
        margin-bottom: 30px; 
    }

    .font-yellow{ 
        color: #FFA600; 
    }

    .font-semi-white{ 
        color: #ddd; 
    }

    .font-lite-black{ 
        color: #999; 
    }

    .intro-section{ 
        padding: 50px 0; 
        position: relative; 
        background-size: cover; 
        z-index: 1;
        background-image: url(${BGpic});
    }
    
    .intro-section:before{ 
        content:''; 
        z-index: -1; 
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0; 
        background: rgba(0,0,0, .2); 
    }

    .intro-section .heading-wrapper{ 
        border-radius: 5px; 
        padding: 30px 40px 20px; 
        margin-bottom: 50px;
        background: #FFAD01; 
        color: #fff; 
    }
    
    .intro-section .info{ 
        margin-bottom: 10px; 
    }
    
    .intro-section .info .icon{ 
        float: left; 
        font-size: 30px; 
    }
    
    .intro-section .info .right-area{ 
        margin-left: 45px; 
    }

    .intro{ 
        color: #fff; 
    }

    .intro .profile-img{ 
        max-width: 400px; 
        border-radius: 5px; 
        overflow: hidden; 
    }

    .intro .information > li{ 
        display: block; 
        margin: 5px 0; 
    }

    .intro .social-icons > li > a{ 
        height: 35px; 
        line-height: 35px; 
        width: 35px; 
        border-radius: 20px; 
        overflow: hidden; 
        z-index: 1; 
        position: relative; 
        margin: 0 5px 5px; 
        text-align: center;
        background: #887392; 
        color: #fff; 
    }

    .intro .social-icons > li > a:after{ 
        content: ''; 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        right: 0;
        top: 0; 
        z-index: -1; 
        border-radius: 20px; 
        background: #FFA804; 
        -webkit-transition: all .2s ease; 
        transition: all .2s ease;
        -webkit-transform: scale(0); 
        transform: scale(0); 
    }

    .intro .social-icons > li > a:hover:after{ 
        -webkit-transform: scale(1); 
        transform: scale(1); 
    }

    .intro .downlad-btn{ 
        padding: 15px 30px; 
        border-radius: 4px; 
        float: right; 
        margin-top: 30px;
        box-shadow: inset 0 0px 4px rgba(0,0,0,.3); 
        background: #FFAD01; 
        color: #fff; 
        -webkit-transition: all .2s ease; 
        transition: all .2s ease; 
    }

    .intro .downlad-btn:hover{ 
        -webkit-transform: translateY(-4px); 
        transform: translateY(-4px); 
    }

    .radial-progress{ 
        position: relative; 
        max-width: 200px; 
        margin: 0 auto; 
    }

    .radial-progress .progressbar-text{ 
        font-size: 2.2em; 
        font-weight: 500; 
        padding-bottom: 25px!important; 
        color: #333!important; 
    }

    .radial-progress .progressbar-text:after{ 
        content:'%'; 
    }

    .radial-progress .progress-title{ 
        position: absolute; 
        top: 50%; 
        left: 50%; 
        width: 100%;
        letter-spacing: 0; 
        text-align: center; 
        transform: translate(-50%, 15px); 
        color: #777; 
    }

    .experience .list > li{ 
        display: block; 
        position: relative; 
        margin-bottom: 10px; 
        padding-left: 20px; 
    }

    .experience .list > li:before{ 
        content: ''; 
        position: absolute; 
        top: 50%; 
        left: 0; 
        height: 10px; 
        width: 10px; 
        margin-top: -5px; 
        display: block; 
        border-radius: 10px; 
        border: 2px solid #555; 
    }

    .portfolio-section{ 
        position: relative; 
    }

    .portfolio-section .portfolioFilter{ 
        margin-top: 60px; 
        color: #666; 
    }

    .portfolio-section .portfolioFilter a{ 
        margin: 10px 10px 0 0; 
    }

    .portfolio-section .portfolioFilter a.current{ 
        color: #FFA804; 
    }

    .portfolio-section .portfolioContainer{ 
        margin-left: -15px; 
        margin-right: -15px; 
    }

    .portfolio-section .p-item{ 
        width: 25%; 
        padding: 0 7.5px 0px; 
        margin-top: 15px; 
    }

    .portfolio-section .p-item a{ 
        display: inline-block; 
        position: relative; 
    }

    .education-wrapper{ 
        position: relative; 
    }

    .education-wrapper:after{ 
        content:''; 
        position: absolute; 
        top: 8px; 
        bottom: 0; 
        left: -51px;
        width: 2px; 
        background: #ccc; 
    }

    .education-wrapper .education{ 
        position: relative; 
    }

    .education-wrapper .education:after{ 
        content:''; 
        position: absolute; 
        top: 8px; 
        left: -58px; 
        width: 16px; 
        height: 16px; 
        border-radius: 10px; 
        z-index: 1;
        box-shadow: 0 0 0 8px rgba(255,171,0, .4); 
        background: #FFAB00; 
    }

    .copyright{ 
        text-align: center; 
        padding: 30px 0; 
        background: #28023D; 
    }
`;

export default IndexStyles;