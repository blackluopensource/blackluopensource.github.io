(()=>{var l={disqus:{shortname:"hugo-minima"},enable:!0,giscus:{category:"Comments",categoryid:"DIC_kwDOFxMJvc4CScQm",inputposition:"buttom",mapping:"pathname",metadata:!1,reactions:!0,repo:"mivinci/hugo-theme-minima",repoid:"MDEwOlJlcG9zaXRvcnkzODcxMjM2NDU="},provider:"utterances",utterances:{issueterm:"pathname",label:"comment",repo:"blackluopensource/coolshellx-comments"}},u="light";var h=!0;var r=["\u{1F31A}","\u{1F31D}"];var w=l.provider,p=u,d=r[1],f=r[0],n=p==="system"?"light":p,k="dark",s,c,i;function g(e){s||(s=document.getElementById(e)),s.innerHTML=localStorage.theme===n?d:f,s.addEventListener("click",y)}function y(){let e=localStorage.getItem("theme"),t=e===n?k:n;switch(v(e,t),w){case"utterances":E(`github-${t}`);break;case"giscus":M(t);break;default:}}function v(e,t){let{classList:o}=document.documentElement,b=t===n?d:f;o.remove(e),o.add(t),localStorage.setItem("theme",t),s.innerHTML=b}function E(e){e!=="dark"&&(e="light"),c=c||document.querySelector("iframe.utterances-frame"),c&&c.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function M(e){e!=="dark"&&(e="light_protanopia"),i=i||document.querySelector("iframe.giscus-frame"),i&&i.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}function _(){h||(document.documentElement.style="user-select:none")}g("theme-switch");_();})();
