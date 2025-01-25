import{a as S,i as f,S as T}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const b=s=>{const e=[...new Set(s.tags.split(",").map(r=>r.trim()))].join(", ");return`
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
  `},x="48294006-48b6aa90621f9de3d5d79819e",M="https://pixabay.com/api/",L=(s,e)=>{const r={params:{key:x,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return S.get(`${M}?`,r)},u=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),v=document.querySelector(".loader-wrapper"),m=document.querySelector(".js-load-more-btn"),y={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let n="",c=1,p=0,l=0;g();const q=async s=>{try{if(s.preventDefault(),n=s.currentTarget.elements.search_query.value.trim(),n===""){f.show({message:"The field must be filled!",...y});return}c=1,E(),i.innerHTML="",g();const{data:e}=await L(n,c);if(e.total===0){f.show({message:"Sorry, there are no images matching your search query. Please try again!",...y}),i.innerHTML="",h(),u.reset();return}p=e.total,l=e.hits.length,console.log("Submit RendImgs: ",l),console.log("Submit TotatImgs: ",p),e.total>15&&w();const r=e==null?void 0:e.hits.map(t=>b(t)).join("");i.innerHTML=r,h(),u.reset(),m.addEventListener("click",$),new T(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(e){console.log(e)}};u.addEventListener("submit",q);function E(){v.style.display="flex"}function h(){v.style.display="none"}const $=async s=>{try{c++;const{data:e}=await L(n,c);l+=e.hits.length,console.log("After LoadMore RendImgs: ",l);const r=e==null?void 0:e.hits.map(o=>b(o)).join("");i.insertAdjacentHTML("beforeend",r),l<p?w():g()}catch(e){console.log(e)}};function w(){m.style.display="block"}function g(){m.style.display="none"}
//# sourceMappingURL=index.js.map
