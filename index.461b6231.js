function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,r=document.querySelector("tbody"),o=document.querySelector("thead"),a=t(r.querySelectorAll("tr")),i=!1;o.addEventListener("click",function(e){var l=t(o.firstElementChild.children).findIndex(function(t){return t.textContent===e.target.textContent}),c=t(a).sort(function(t,n){return"age"===e.target.textContent.toLowerCase()?+t.children[l].textContent-+n.children[l].textContent:"salary"===e.target.textContent.toLowerCase()?+t.children[l].textContent.replace("$","").replace(",","")-+n.children[l].textContent.replace("$","").replace(",",""):t.children[l].textContent.localeCompare(n.children[l].textContent)});n!==e.target.textContent||i?i=!1:(c.reverse(),i=!0),c.forEach(function(e){r.append(e)}),n=e.target.textContent}),r.addEventListener("click",function(e){var t=e.target,n=r.querySelector(".active");n&&n.classList.remove("active"),t.closest("tr").classList.add("active")}),document.body.insertAdjacentHTML("beforeend",'<form method="get" action="#" class="new-employee-form" onsubmit="jsFunction();return false">\n<label>Name: <input type="text" name="name" data-qa="name" required></label>\n<label>Position: <input type="text" name="position" data-qa="position" required></label>\n<label>Office: <select name="office" data-qa="office" required>\n  <option value="tokyo">Tokyo</option>\n  <option value="singapore">Singapore</option>\n  <option value="london">London</option>\n  <option value="new york">New York</option>\n  <option value="edinburgh">Edinburgh</option>\n  <option value="san francisco">San Francisco</option>\n</select></label>\n<label>Age: <input type="number" name="age" data-qa="age" required></label>\n<label>Salary: <input type="number" name="salary" data-qa="salary" required></label>\n<button type="submit">Save to table</button>\n</form>'),document.querySelector("button").addEventListener("click",function(e){e.preventDefault();var n=document.querySelector('[name = "name"]').value,o=document.querySelector('[name = "position"]').value,i=document.querySelector('[name = "office"]').value.split(""),c=document.querySelector('[name = "age"]').value,u=(+document.querySelector('[name = "salary"]').value).toLocaleString("en-US");if(i=i.includes(" ")?i[0].toUpperCase()+i.slice(1,i.indexOf(" ")).join("")+" "+i.slice(i.indexOf(" "))[1].toUpperCase()+i.slice(i.indexOf(" ")+2).join(""):i[0].toUpperCase()+i.slice(1).join(""),n.length<4){l("Invalid name","The name is too short.\n \nPlease enter a valid name.","error");return}if(!o){l("Invalid position","Please fill position field","error");return}if(18>+c||+c>90){l("Invalid age","The age is inappropriate.\n \nAge should be more than 18 and not more than 90","error");return}if(0>=+u){l("Invalid salary","The salary should be more than 0\n","error");return}var d="<tr><td>".concat(n,"</td>\n<td>").concat(o,"</td>\n<td>").concat(i,"</td>\n<td>").concat(c,"</td>\n<td>$").concat(u,"</td>\n</tr>");r.insertAdjacentHTML("beforeend",d),a=t(a).concat([r.lastElementChild]),l("Success","The employee is successfully added","success"),document.querySelector('[name = "name"]').value="",document.querySelector('[name = "position"]').value="",document.querySelector('[name = "office"]').value="tokyo",document.querySelector('[name = "age"]').value="",document.querySelector('[name = "salary"]').value=""});var l=function(e,t,n){var r=document.createElement("div"),o=document.createElement("h2"),a=document.createElement("p");r.classList.add("notification","".concat(n)),r.dataset.qa="notification",o.classList.add("title"),o.textContent=e,a.innerText=t,r.append(o,a),document.body.append(r),setTimeout(function(){return r.style.visibility="hidden"},2e3),setTimeout(function(){return r.remove()},5e3)};r.addEventListener("dblclick",function(e){var t=e.target,n=r.querySelector(".cell-input"),o=document.createElement("input");if(o.classList.add("cell-input"),"td"===t.tagName.toLowerCase()){var a=t.textContent;if(n)return;t.textContent+=" replaced by:",t.append(o);var i=function(e){("Enter"===e.key||"blur"===e.type)&&(o.value?t.textContent=o.value:t.textContent=a,o.remove())};o.addEventListener("blur",i),o.addEventListener("keypress",i)}});
//# sourceMappingURL=index.461b6231.js.map