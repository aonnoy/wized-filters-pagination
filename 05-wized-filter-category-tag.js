window.Wized=window.Wized||[];window.Wized.push((Wized)=>{const t=(e,n)=>{const t=document.createElement("div");t.setAttribute("wized-filter-tag","tag-template");t.classList.add("filter_tag");const r=document.createElement("div");r.setAttribute("wized-filter-tag","tag-text");r.classList.add("filter_tag-text");r.textContent=`${e}: ${n}`;const i=document.createElement("div");i.setAttribute("wized-filter-tag","tag-remove");i.classList.add("filter_tag-remove");t.appendChild(r);t.appendChild(i);const o=document.querySelector('[wized-filter-tag="wrapper"]');o&&o.appendChild(t)};const r=(e)=>{const n=e.target;const r=n.closest("[wized-filter-tag-category]");if(r){const i=r.getAttribute("wized-filter-tag-category");"checkbox"===n.type?l(n,i):"radio"===n.type?c(n,i):"select"===n.tagName.toLowerCase()&&h(n,i)}};const i=(e,n)=>{const t=e.nextElementSibling;if(e.checked){t=e.nextElementSibling;t&&t.textContent.trim()&&t.textContent.trim().startsWith(`${n}: `)&&o(n,t.textContent.trim())}};const o=(e,n)=>{const t=document.querySelector('[wized-filter-tag="wrapper"]');const r=[...t.querySelectorAll('[wized-filter-tag="tag-template"]')].find((e)=>e.querySelector('[wized-filter-tag="tag-text"]').textContent===`${e}: ${n}`);r&&r.remove()};const c=(e,n)=>{d(n);if(e.checked){const t=e.nextElementSibling;t&&t.textContent.trim()&&t.textContent.trim().startsWith(`${n}: `)&&u(n,t.textContent.trim())}};const s=(e,n)=>{d(n);const t=e.options[e.selectedIndex];t&&t.value&&u(n,t.text.trim())};const u=(e,n)=>{const t=document.querySelector('[wized-filter-tag="wrapper"]');t&&t.classList.contains("filter_tags-wrapper")&&t.appendChild(t);const r=document.querySelectorAll(`[wized-filter-tag-category="${e}"]`);r.forEach((e)=>{"checkbox"===e.querySelector('input[type="checkbox"]').type?p(e,n):"radio"===e.querySelector('input[type="radio"]').type&&f(e,n),"select"===e.tagName.toLowerCase()&&(e.selectedIndex=0,e.dispatchEvent(new Event("change")))})};const p=(e,n)=>{const t=Array.from(e.querySelectorAll('input[type="checkbox"]')).find((e)=>e.nextElementSibling.textContent.trim()===n);t&&(t.checked=!1,t.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0})))};const f=(e,n)=>{g(n);if(e.querySelector('input[type="radio"]').checked){const t=Array.from(e.querySelectorAll('input[type="radio"]')).find((e)=>e.nextElementSibling.textContent.trim()===n);t&&(t.checked=!1,t.closest(`[wized-filter-tag-category="${n}"]`).querySelector(".w-radio-input").classList.contains("w--redirected-checked")&&t.closest(`[wized-filter-tag-category="${n}"]`).querySelector(".w-radio-input").classList.remove("w--redirected-checked"));const r=e.querySelector('input[type="radio"]').getAttribute("wized-variable");r&&(Wized.data.v[r]=null,window.executeWizedRequestDebounced&&window.executeWizedRequestDebounced())}};const h=(e,n)=>{g(n);e.selectedIndex=0,e.dispatchEvent(new Event("change"))};const d=(e)=>{const t=document.querySelector('[wized-filter-tag="wrapper"]');const r=[...t.querySelectorAll('[wized-filter-tag="tag-template"]')].filter((t)=>t.querySelector('[wized-filter-tag="tag-text"]').textContent.startsWith(`${e}:`));r.forEach((e)=>e.remove())};const l=(e,n)=>{const t=e.nextElementSibling;if(e.checked){const t=e.nextElementSibling;t&&t.textContent.trim()&&t.textContent.trim().startsWith(`${n}: `)&&o(n,t.textContent.trim())}};const g=(e)=>{const t=document.querySelector('[wized-filter-tag="wrapper"]');const r=[...t.querySelectorAll('[wized-filter-tag="tag-template"]')].filter((t)=>t.querySelector('[wized-filter-tag="tag-text"]').textContent.startsWith(`${e}:`));r.forEach((e)=>e.remove())};const m=(e,n)=>{const t=n.textContent.trim();const r=document.querySelector('[wized-filter-tag="wrapper"]');const i=[...r.querySelectorAll('[wized-filter-tag="tag-template"]')].find((e)=>e.querySelector('[wized-filter-tag="tag-text"]').textContent===`${e}: ${t}`);i&&i.remove()};const v=(e)=>{const t=e.target.closest('[wized-filter-tag="tag-remove"]');if(t){const n=t.closest('[wized-filter-tag="tag-template"]');const r=n.querySelector('[wized-filter-tag="tag-text"]').textContent.trim().split(":").map((e)=>e.trim());const i=r[0],o=r[1];c(i,o),m(n)}};document.addEventListener("change",r);document.addEventListener("click",v)});
