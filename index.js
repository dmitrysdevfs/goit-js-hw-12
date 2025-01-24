import{a as m,i as n,S as f}from"./assets/vendor-3h0fHshV.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g=t=>{const a=[...new Set(t.tags.split(",").map(r=>r.trim()))].join(", ");return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${a}"
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
  `},y="48294006-48b6aa90621f9de3d5d79819e",h="https://pixabay.com/api/",b=t=>{const a=new URLSearchParams({key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`${h}?${a}`)},c=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),d=document.querySelector(".loader-wrapper"),u={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"},v=async t=>{try{t.preventDefault();const a=t.currentTarget.elements.search_query.value.trim();if(a===""){n.show({message:"The field must be filled!",...u});return}L(),i.innerHTML="";const{data:r}=await b(a);if(r.total===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",...u}),i.innerHTML="",p(),c.reset();return}const o=r==null?void 0:r.hits.map(s=>g(s)).join("");i.innerHTML=o,p(),c.reset(),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(a){console.log(a)}};c.addEventListener("submit",v);function L(){d.style.display="flex"}function p(){d.style.display="none"}
//# sourceMappingURL=index.js.map
