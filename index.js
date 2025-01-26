import{a as x,i as m,S as B}from"./assets/vendor-3h0fHshV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const b=t=>{const e=[...new Set(t.tags.split(",").map(a=>a.trim()))].join(", ");return`
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
  `},M="48294006-48b6aa90621f9de3d5d79819e",$="https://pixabay.com/api/",v=(t,e)=>{const a={params:{key:M,q:t,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return x.get(`${$}?`,a)},g=document.querySelector(".js-form"),l=document.querySelector(".js-gallery"),L=document.querySelector(".loader-wrapper"),u=document.querySelector(".js-load-more-btn"),f={messageSize:"16",messageColor:"white",backgroundColor:" #E34234",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"};let i="",n=1,w=0,y=0,p;c();const j=async t=>{try{if(t.preventDefault(),i=t.currentTarget.elements.search_query.value.trim(),i===""){m.show({message:"The field must be filled!",...f});return}n=1,S(),l.innerHTML="",c();const{data:e}=await v(i,n);if(e.total===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",...f}),l.innerHTML="",h(),g.reset();return}w=e.totalHits,y=e.hits.length,e.total>15&&T();const a=e==null?void 0:e.hits.map(o=>b(o)).join("");l.innerHTML=a,h(),g.reset(),u.addEventListener("click",E),q()}catch(e){console.log(e)}};g.addEventListener("submit",j);function S(){L.style.display="flex"}function h(){L.style.display="none"}const E=async t=>{try{n++,S(),c();const{data:e}=await v(i,n);y+=e.hits.length;const a=e==null?void 0:e.hits.map(o=>b(o)).join("");l.insertAdjacentHTML("beforeend",a),C(),h(),q(),y<w?T():(c(),u.removeEventListener("click",E),m.show({message:"We're sorry, but you've reached the end of search results.",...f,backgroundColor:" #4169E1",icon:"fa-regular fa-bell"}))}catch(e){console.log(e)}};function T(){u.style.display="block"}function c(){u.style.display="none"}function q(){p?p.refresh():p=new B(".gallery a",{captionsData:"alt",captionDelay:250})}function C(){const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect();window.scrollBy({top:e.height*3.25,left:0,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
