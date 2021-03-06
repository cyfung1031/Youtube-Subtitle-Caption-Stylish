// ==UserScript==
// @name Youtube Subtitle Caption Stylish
// @namespace http://userstyles.org
// @version 1.1
// @author CY Fung
// @description This is to replace the subtitle / caption style using in Youtube
// @license MIT
// @grant GM_addStyle
// @run-at document-start
// @include https://www.youtube.com*
// ==/UserScript==

(function $$() {
let css = `




  @font-face {
    font-family: 'cwTeXYen';
    src: url(https://fonts.gstatic.com/ea/cwtexyen/v3/cwTeXYen-zhonly.eot);
    src: url(https://fonts.gstatic.com/ea/cwtexyen/v3/cwTeXYen-zhonly.eot?#iefix) format('embedded-opentype'),
         url(https://fonts.gstatic.com/ea/cwtexyen/v3/cwTeXYen-zhonly.woff2) format('woff2'),
         url(https://fonts.gstatic.com/ea/cwtexyen/v3/cwTeXYen-zhonly.woff) format('woff'),
         url(https://fonts.gstatic.com/ea/cwtexyen/v3/cwTeXYen-zhonly.ttf) format('truetype');
  }
  @font-face {
    font-family: 'cwTeXHei';
    src: url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.eot);
    src: url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.eot?#iefix) format('embedded-opentype'),
         url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.woff2) format('woff2'),
         url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.woff) format('woff'),
         url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.ttf) format('truetype');
  }








  @import url(https://raw.githubusercontent.com/cyfung1031/Youtube-Subtitle-Caption-Stylish/main/css/noto-sans-cjk-400.css);















  
  ytd-watch-flexy .ytp-caption-segment{
      --font-size: 18px;
  }
  
  ytd-watch-flexy[theater] .ytp-caption-segment{
      --font-size: 2vw;
  }
  
  ytd-watch-flexy[fullscreen] .ytp-big-mode .ytp-caption-segment{
      --font-size: 2.6vw;
  }
  
  
  
  #ytp-caption-window-container .caption-window.ytp-caption-window-bottom[style*="text-align:"][style*="center"][style*="bottom:"][style*="margin-left:"][style*="left:"]{
      width:auto !important;
      width:100% !important;
      left:0 !important;
      margin-left:0 !important;
      padding-bottom:0 !important;
      margin-bottom:0 !important;
      bottom:calc(40px + 2%) !important;
      touch-action: none !important; 
      pointer-events:none !important;
      cursor:default !important;
  }
  
  #ytp-caption-window-container .caption-window.ytp-caption-window-bottom[style*="text-align:"][style*="center"][style*="bottom:"][style*="margin-left:"][style*="left:"] .captions-text .caption-visual-line .ytp-caption-segment{
  
      
      --scale: 2.15;
      --base-font-size:13.6233px;  
      
      --text-color:rgba(221, 221, 221, 0.863);
      --text-color:rgba(244, 244, 244, 1);
      
      
      --text-shadow-h-shadow: 0px;
      --text-shadow-v-shadow: 0px;
      --text-shadow-blur-radius: 1.7px;
      --text-shadow-color:rgb(0, 120, 255);
      --text-outline-color:rgb(0, 0, 255);
      
      --text-shadow: var(--text-shadow-color) var(--text-shadow-h-shadow) var(--text-shadow-v-shadow) var(--text-shadow-blur-radius);
      
      --text-font: "Noto Sans CJK", "YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif;
      --font-weight:400;
      --letter-spacing: 0px;
      
      
      --text-shadow-black-outline: rgb(0, 60, 127);
      
      margin:2px 0 !important;
      display: inline-block !important;
      white-space: nowrap !important;
      background: transparent !important;
      
      font-size: var(--font-size) !important; 
      transform:none !important;
      
      text-shadow: 
                                              var(  --text-shadow-color) 0 0 1.5px,
                                              var(  --text-shadow-color) 0 0 2px,
                                              var(  --text-shadow-color) 0 0 2.5px,
                                              var(  --text-shadow-color) 0 0 3px,
                                              var(  --text-shadow-color) 0 0 3.5px,
                                              var(  --text-shadow-color) 0 0 4px,
                                              var( --text-outline-color) -1px -1px 0,
                                              var( --text-outline-color) -1px 1px 0,
                                              var( --text-outline-color) 1px -1px 0,
                                              var( --text-outline-color) 1px 1px 0,
                                              var( --text-shadow-black-outline) -2px -2px 2px,
                                              var( --text-shadow-black-outline) 2px 2px 2px,
                                              var( --text-shadow-black-outline) 2px -2px 2px,
                                              var( --text-shadow-black-outline) -2px 2px 2px
                                              !important; 
      
      
      color: var(--text-color) !important;
      fill: var(--text-color)  !important;
      font-family: var(--text-font) !important;
      font-weight: var(--font-weight) !important;
      letter-spacing: var(--letter-spacing) !important; 
      touch-action: none !important; 
      pointer-events:none !important;
      cursor:default !important;
  }
`;
if(!document.documentElement) return requestAnimationFrame($$);
try{
    GM_addStyle(css);
}catch(e){
    let styleNode = document.createElement("style");
    styleNode.type = 'text/css';
    styleNode.textContent = css;
    (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
