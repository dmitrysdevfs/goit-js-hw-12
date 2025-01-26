import{a as M,i as f,S as q}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const L=s=>{const e=[...new Set(s.tags.split(",").map(r=>r.trim()))].join(", ");return`
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
  `},$="48294006-48b6aa90621f9de3d5d79819e",j="https://pixabay.com/api/",b=(s,e)=>{const r={params:{key:$,q:s,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return M.get(`${j}?`,r)},g=document.querySelector(".js-form"),l=document.querySelector(".js-gallery"),v=document.querySelector(".loader-wrapper"),u=document.querySelector(".js-load-more-btn"),y={messageSize:"16",messageColor:"white",backgroundColor:" #E34234",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let i="",c=1,w=0,n=0,m;d();const B=async s=>{try{if(s.preventDefault(),i=s.currentTarget.elements.search_query.value.trim(),i===""){f.show({message:"The field must be filled!",...y});return}c=1,S(),l.innerHTML="",d();const{data:e}=await b(i,c);if(e.total===0){f.show({message:"Sorry, there are no images matching your search query. Please try again!",...y}),l.innerHTML="",h(),g.reset();return}w=e.total,n=e.hits.length,e.total>15&&T();const r=e==null?void 0:e.hits.map(o=>L(o)).join("");l.innerHTML=r,h(),g.reset(),u.addEventListener("click",E),x()}catch(e){console.log(e)}};g.addEventListener("submit",B);function S(){v.style.display="flex"}function h(){v.style.display="none"}const E=async s=>{try{c++,S(),d();const{data:e}=await b(i,c);n+=e.hits.length,console.log("After LoadMore RendImgs: ",n);const r=e==null?void 0:e.hits.map(o=>L(o)).join("");l.insertAdjacentHTML("beforeend",r),h(),x(),n<w?T():(d(),u.removeEventListener("click",E),f.show({message:"We're sorry, but you've reached the end of search results.",...y,backgroundColor:" #4169E1",icon:"fa-regular fa-bell"}))}catch(e){console.log(e)}};function T(){u.style.display="block"}function d(){u.style.display="none"}function x(){m?m.refresh():m=new q(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
