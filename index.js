import{a as q,i as h,S as E}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const b=s=>{const e=[...new Set(s.tags.split(",").map(o=>o.trim()))].join(", ");return`
    <li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="${e}"
          />
          <figcaption class="image-stats">
            <div class="stat-item">
              <p class="stat-label">Likes</p>
              <p class="stat-value">${s.likes}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Views</p>
              <p class="stat-value">${s.views}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Comments</p>
              <p class="stat-value">${s.comments}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Downloads</p>
              <p class="stat-value">${s.downloads}</p>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  `},$="48294006-48b6aa90621f9de3d5d79819e",j="https://pixabay.com/api/",v=(s,e)=>{const o={params:{key:$,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return q.get(`${j}?`,o)},g=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),w=document.querySelector(".loader-wrapper"),u=document.querySelector(".js-load-more-btn"),L={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let n="",c=1,f=0,l=0,m;d();const B=async s=>{try{if(s.preventDefault(),n=s.currentTarget.elements.search_query.value.trim(),n===""){h.show({message:"The field must be filled!",...L});return}c=1,S(),i.innerHTML="",d();const{data:e}=await v(n,c);if(e.total===0){h.show({message:"Sorry, there are no images matching your search query. Please try again!",...L}),i.innerHTML="",y(),g.reset();return}f=e.total,l=e.hits.length,console.log("Submit RendImgs: ",l),console.log("Submit TotatImgs: ",f),e.total>15&&x();const o=e==null?void 0:e.hits.map(r=>b(r)).join("");i.innerHTML=o,y(),g.reset(),u.addEventListener("click",T),M()}catch(e){console.log(e)}};g.addEventListener("submit",B);function S(){w.style.display="flex"}function y(){w.style.display="none"}const T=async s=>{try{c++,S(),d();const{data:e}=await v(n,c);l+=e.hits.length,console.log("After LoadMore RendImgs: ",l);const o=e==null?void 0:e.hits.map(r=>b(r)).join("");i.insertAdjacentHTML("beforeend",o),y(),M(),l<f?x():(d(),u.removeEventListener("click",T))}catch(e){console.log(e)}};function x(){u.style.display="block"}function d(){u.style.display="none"}function M(){m?m.refresh():m=new E(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
