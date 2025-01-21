import{i as n,S as d}from"./assets/vendor-De63neY_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=s=>{const a=[...new Set(s.tags.split(",").map(t=>t.trim()))].join(", ");return`
    <li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <figure class="gallery-figure">
          <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="${a}"
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
  `},h="48294006-48b6aa90621f9de3d5d79819e",g="https://pixabay.com/api/",y=s=>{const a=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},c=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),m=document.querySelector(".loader-wrapper"),u={messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1,maxWidth:"360px"},b=s=>{s.preventDefault();const a=s.currentTarget.elements.search_query.value.trim();if(a===""){n.show({message:"The field must be filled!",...u});return}v(),i.innerHTML="",y(a).then(t=>{if(t.total===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",...u}),i.innerHTML="",c.reset(),p();return}const l=t==null?void 0:t.hits.map(r=>f(r)).join("");i.innerHTML=l,c.reset(),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log(t)}).finally(()=>{p()})};c.addEventListener("submit",b);function v(){m.style.display="flex"}function p(){m.style.display="none"}
//# sourceMappingURL=index.js.map
