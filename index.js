import{a as x,i as y,S as M}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const L=s=>{const e=[...new Set(s.tags.split(",").map(r=>r.trim()))].join(", ");return`
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
  `},q="48294006-48b6aa90621f9de3d5d79819e",E="https://pixabay.com/api/",b=(s,e)=>{const r={params:{key:q,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return x.get(`${E}?`,r)},m=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),v=document.querySelector(".loader-wrapper"),u=document.querySelector(".js-load-more-btn"),h={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let n="",c=1,g=0,l=0;d();const $=async s=>{try{if(s.preventDefault(),n=s.currentTarget.elements.search_query.value.trim(),n===""){y.show({message:"The field must be filled!",...h});return}c=1,w(),i.innerHTML="",d();const{data:e}=await b(n,c);if(e.total===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",...h}),i.innerHTML="",f(),m.reset();return}g=e.total,l=e.hits.length,console.log("Submit RendImgs: ",l),console.log("Submit TotatImgs: ",g),e.total>15&&T();const r=e==null?void 0:e.hits.map(t=>L(t)).join("");i.innerHTML=r,f(),m.reset(),u.addEventListener("click",S),new M(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(e){console.log(e)}};m.addEventListener("submit",$);function w(){v.style.display="flex"}function f(){v.style.display="none"}const S=async s=>{try{c++,w(),d();const{data:e}=await b(n,c);l+=e.hits.length,console.log("After LoadMore RendImgs: ",l);const r=e==null?void 0:e.hits.map(o=>L(o)).join("");i.insertAdjacentHTML("beforeend",r),f(),l<g?T():(d(),u.removeEventListener("click",S))}catch(e){console.log(e)}};function T(){u.style.display="block"}function d(){u.style.display="none"}
//# sourceMappingURL=index.js.map
