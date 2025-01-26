import{a as M,i as y,S as q}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const L=t=>{const e=[...new Set(t.tags.split(",").map(o=>o.trim()))].join(", ");return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${e}"
          />
          <figcaption class="image-stats">
            <div class="stat-item">
              <p class="stat-label">Likes</p>
              <p class="stat-value">${t.likes}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Views</p>
              <p class="stat-value">${t.views}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Comments</p>
              <p class="stat-value">${t.comments}</p>
            </div>
            <div class="stat-item">
              <p class="stat-label">Downloads</p>
              <p class="stat-value">${t.downloads}</p>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  `},E="48294006-48b6aa90621f9de3d5d79819e",$="https://pixabay.com/api/",b=(t,e)=>{const o={params:{key:E,q:t,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return M.get(`${$}?`,o)},m=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),v=document.querySelector(".loader-wrapper"),u=document.querySelector(".js-load-more-btn"),h={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let n="",c=1,g=0,l=0;d();const j=async t=>{try{if(t.preventDefault(),n=t.currentTarget.elements.search_query.value.trim(),n===""){y.show({message:"The field must be filled!",...h});return}c=1,w(),i.innerHTML="",d();const{data:e}=await b(n,c);if(e.total===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",...h}),i.innerHTML="",f(),m.reset();return}g=e.total,l=e.hits.length,console.log("Submit RendImgs: ",l),console.log("Submit TotatImgs: ",g),e.total>15&&T();const o=e==null?void 0:e.hits.map(r=>L(r)).join("");i.innerHTML=o,f(),m.reset(),u.addEventListener("click",S),x()}catch(e){console.log(e)}};m.addEventListener("submit",j);function w(){v.style.display="flex"}function f(){v.style.display="none"}const S=async t=>{try{c++,w(),d();const{data:e}=await b(n,c);l+=e.hits.length,console.log("After LoadMore RendImgs: ",l);const o=e==null?void 0:e.hits.map(r=>L(r)).join("");i.insertAdjacentHTML("beforeend",o),f(),x(),l<g?T():(d(),u.removeEventListener("click",S))}catch(e){console.log(e)}};function T(){u.style.display="block"}function d(){u.style.display="none"}function x(){new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=index.js.map
