let contentImage=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex">
Image Settings
<a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
    <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
    </svg>
</a>
</div>
<div class="loopple-w-100 loopple-mt-3">
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-2">Select Image</div>
<button data-modal="modal-images" class="w-full transition bg-zinc-50 border flex border-zinc-200 loopple-font-plus-jakarta text-zinc-900 !h-12 font-medium text-sm p-2 px-3 items-center justify-center !rounded-[6px] hover:!bg-zinc-100 loopple-btn-select-file">
  <span class="mt-0.5 me-1 text-zinc-900">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#18181b"><path d="M444-444H276q-15.3 0-25.65-10.29Q240-464.58 240-479.79t10.35-25.71Q260.7-516 276-516h168v-168q0-15.3 10.29-25.65Q464.58-720 479.79-720t25.71 10.35Q516-699.3 516-684v168h168q15.3 0 25.65 10.29Q720-495.42 720-480.21t-10.35 25.71Q699.3-444 684-444H516v168q0 15.3-10.29 25.65Q495.42-240 480.21-240t-25.71-10.35Q444-260.7 444-276v-168Z"/></svg>
  </span> 
  Upload Image
</button>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Style</div>
<select name="imgStyle" id="imgStyle" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="imgStyleSelect(this.value)">
<option value="rectangle" selected="selected">Rectangle</option>
<option value="circle">Circle</option>
<option value="simple">Simple</option>
</select>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1">Alt Text<span class="loopple-text-xs loopple-font-plus-jakarta text-zinc-500 loopple-ml-1">(optional)</span></div>
<input class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500" type="text" id="imageAltText" onkeyup="addAltToImage(this)"/>
</div>
`,contentText=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Text Settings 
    <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="loopple-w-100 loopple-mt-3">
  <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">
      Text
  </div>
  <textarea class="loopple-form-control loopple-mt-1 loopple-mb-4" rows="5" onkeyup="changeTextValue(this)" value="this"></textarea>
  <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">
      Font
  </div>
  <select name="fontStyle" id="fontStyle" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="fontStyleSelect(this.value)">
    <option value="open sans" selected="selected">Open Sans</option>
    <option value="inter">Inter</option>
    <option value="roboto">Roboto</option>
    <option value="plus jakarta sans" selected="selected">Plus Jakarta Sans</option>
    <option value="lora" selected="selected">Lora</option>
    <option value="poppins" selected="selected">Poppins</option>
    <option value="playfair display" selected="selected">Playfair Display</option>
  </select>
  <div class="loopple-w-100 loopple-mt-3">
    <div id="headingStyleWrapper" class="d-none">
      <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">Heading Size</div>
      <select name="headingStyle" id="headingStyle" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="headingStyleSelect(this.value)">
        <option value="h1" selected="selected">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="h4">H4</option>
        <option value="h5">H5</option>
        <option value="h6">H6</option>
      </select>
    </div>
  </div>
  <div class="loopple-w-100 loopple-mt-3">
    <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">Transform</div>
    <select name="transformStyle" id="transformStyle" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="transformStyleSelect(this.value)">
      <option value="normal" selected="selected">Normal</option>
      <option value="capitalize">Capitalize</option>
      <option value="lowercase">Lowercase</option>
      <option value="uppercase">Uppercase</option>
    </select>
  </div>
  <div class="loopple-w-100 loopple-mt-3">
    <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">Align</div>
    <select name="textAlign" id="textAlign" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="textAlignSelect(this.value)">
      <option value="center" selected="selected">Center</option>
      <option value="end">End</option>
      <option value="start">Start</option>
    </select>
  </div>
  <div class="loopple-w-100 loopple-mt-3">
    <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">Color</div>
    <input type="text" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-200 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" id="textColor">
  </div>
  <div id="lineHeightWrapper">
    <div class="loopple-w-100 loopple-mt-3">
      <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">Line Height</div>
      <select name="lineHeight" id="lineHeight" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="lineHeightSelect(this.value)">
        <option value="default" selected="selected">1</option>
        <option value="medium">1.25</option>
        <option value="large">1.5</option>
        <option value="xlarge">1.75</option>
      </select>
    </div>
  </div>
</div>
`,contentLogo=`
    <ul class="loopple-nav loopple-nav-tabs !grid !grid-cols-2 gap-1 loopple-nav-tabs-sites justify-between nav nav-tabs items-center gap-0 bg-zinc-100 w-full p-2 !h-fit rounded-[6px] border-0 mb-4">
        <li class="loopple-nav-item h-fit w-full" role="presentation">
            <button class="loopple-nav-link loopple-px-3 w-full btn-sm loopple-font-plus-jakarta !px-4 active" 
                    id="logo-content-text-tab-btn" 
                    data-toggle="tab" 
                    data-target="#logo-content-text-tab" 
                    type="button" 
                    role="tab" 
                    aria-controls="logo-content-text-tab" 
                    aria-selected="true"
                    onclick="changeImageToText()">
                Text
            </button>
        </li>
        <li class="loopple-nav-item h-fit w-full" role="presentation">
            <button class="loopple-nav-link loopple-px-3 w-full btn-sm loopple-font-plus-jakarta !px-4" 
                    id="logo-content-image-tab-btn" 
                    data-toggle="tab" 
                    data-target="#logo-content-image-tab" 
                    type="button" 
                    role="tab" 
                    aria-controls="logo-content-image-tab" 
                    aria-selected="false"
                    onclick="changeTextToImage()">
                Image
            </button>
        </li>
    </ul>
    <div class="loopple-tab-content">
      <div class="loopple-tab-pane fade show active" id="logo-content-text-tab" role="tabpanel" aria-labelledby="logo-content-text-tab-btn">
          ${contentText} 
        </div>
      <div class="loopple-tab-pane fade" id="logo-content-image-tab" role="tabpanel" aria-labelledby="logo-content-image-tab-btn">
          ${contentImage} 
        </div>
    </div>
`,logoTextContent='<span class="font-bold draggable border-radius-lg" data-component-type="logo">LOGO COMPANY</span>',logoImageContent=`<img class="h-fit draggable" data-component-type="logo" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/refs/heads/main/ai/ai-website-builder/logo-placeholder.png" alt="logo image" width="120" style="
" />`,changeImageToText=()=>{elementCurr&&(elementCurr.outerHTML=logoTextContent,elementCurr=document.querySelector('[data-component-type="logo"]'),document.querySelector('[onkeyup="changeTextValue(this)"]').value=elementCurr.textContent.trim())},changeTextToImage=()=>{elementCurr&&(elementCurr.outerHTML=logoImageContent,elementCurr=document.querySelector('[data-component-type="logo"]')),modalOpen()},contentSections=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Add section
    <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('headers')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Header</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('features')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M714-162 537-339l84-84 177 177q17 17 17 42t-17 42q-17 17-42 17t-42-17Zm-552 0q-17-17-17-42t17-42l234-234-68-68q-11 11-28 11t-28-11l-23-23v90q0 14-12 19t-22-5L106-576q-10-10-5-22t19-12h90l-22-22q-12-12-12-28t12-28l114-114q20-20 43-29t47-9q20 0 37.5 6t34.5 18q8 5 8.5 14t-6.5 16l-76 76 22 22q11 11 11 28t-11 28l68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q8 0 15 .5t14 2.5q9 3 11.5 12.5T737-809l-65 65q-6 6-6 14t6 14l44 44q6 6 14 6t14-6l65-65q7-7 16.5-5t12.5 12q2 7 2.5 14t.5 15q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L246-162q-17 17-42 17t-42-17Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Features</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('testimonials')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="m480-461 76 46q11 7 22-.5t8-20.5l-20-87 68-59q10-9 6-21.5T622-617l-89-7-35-82q-5-12-18-12t-18 12l-35 82-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 8 20.5t22 .5l76-46ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Testimonials</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('contacts')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h160q17 0 28.5 11.5T680-120q0 17-11.5 28.5T640-80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Contact</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('call-to-actions')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M120-560h40q17 0 28.5 11.5T200-520q0 17-11.5 28.5T160-480h-40q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560Zm68 216 28-28q12-12 28-11.5t28 11.5q12 12 12.5 28.5T273-315l-28 28q-12 12-28.5 11.5T188-288q-11-12-11.5-28t11.5-28Zm28-324-28-28q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T245-753l28 28q12 12 11.5 28.5T272-668q-12 11-28 11.5T216-668Zm476 480L530-350l-30 90q-2 7-7.5 10.5T481-246q-6 0-11.5-4t-7.5-11l-86-286q-2-8 .5-16t7.5-13q5-5 13-7.5t16-.5l288 86q7 2 10.5 7.5T715-479q0 6-3 11.5t-10 7.5l-90 32 160 160q12 12 12 28t-12 28l-24 24q-12 12-28 12t-28-12ZM400-760v-40q0-17 11.5-28.5T440-840q17 0 28.5 11.5T480-800v40q0 17-11.5 28.5T440-720q-17 0-28.5-11.5T400-760Zm207 35 29-29q11-11 27.5-11.5T692-754q11 11 11.5 27.5T693-698l-29 30q-11 12-27.5 11.5T608-668q-12-12-12.5-28.5T607-725Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Call to Action</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('teams')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Team</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('galleries')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="m530-460-46-60q-6-8-16-8t-16 8l-67 88q-8 10-2.5 21t18.5 11h318q13 0 18.5-11t-2.5-21l-97-127q-6-8-16-8t-16 8l-76 99ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Gallery</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>

  <div class="flex items-center border rounded p-3 cursor-pointer" onClick="openContentSection('statistics')">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M160-120q-17 0-28.5-11.5T120-160v-40q0-17 11.5-28.5T160-240q17 0 28.5 11.5T200-200v40q0 17-11.5 28.5T160-120Zm160 0q-17 0-28.5-11.5T280-160v-220q0-17 11.5-28.5T320-420q17 0 28.5 11.5T360-380v220q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160v-140q0-17 11.5-28.5T480-340q17 0 28.5 11.5T520-300v140q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160v-200q0-17 11.5-28.5T640-400q17 0 28.5 11.5T680-360v200q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160v-360q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v360q0 17-11.5 28.5T800-120ZM560-481q-16 0-30.5-6T503-504L400-607 188-395q-12 12-28.5 11.5T131-396q-11-12-10.5-28.5T132-452l211-211q12-12 26.5-17.5T400-686q16 0 31 5.5t26 17.5l103 103 212-212q12-12 28.5-11.5T829-771q11 12 10.5 28.5T828-715L617-504q-11 11-26 17t-31 6Z"/></svg>
    <span class="ml-2 font-semibold text-zinc-900">Statistics</span>
    <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
  </div>
</div>
`,navigation01=`
<div class="container px-4 lg:px-0 mx-auto" data-section-type="navigation">
  <div class="relative flex items-center justify-between w-full px-2 bg-whte py-9 group shrink-0">
    <div class="shrink-0">
      <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
    </div>
    <div class="items-center hidden text-sm font-medium gap-8 md:flex">
      <a href="javascript:void(0)">Home</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a class="box-content hidden md:flex items-center px-4 py-2 text-sm font-bold border rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:text-white focus:ring-4 focus:ring-primary transition duration-300" href="#contact"> Contact </a>
    </div>
    <button onclick="(() => { this.closest('.group').classList.toggle('open')})()" class="flex md:hidden rounded-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
      </svg>
    </button>
    <div class="z-[1000] absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
      <a href="#home>Home</a>
			<a href="#services"="">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a class="box-content flex items-center px-4 py-2 text-sm font-bold border rounded-md border-primary text-primary hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary transition duration-300" href="#contact"> Contact </a>
    </div>
  </div>
</div>
`,navigation02=`
<div class="container px-4 lg:px-0 mx-auto" data-section-type="navigation">
    <div class="relative flex items-center justify-between w-full px-2 group py-9 shrink-0">
      <div class="shrink-0">
         <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
      </div>
      <div class="items-center justify-between hidden gap-12 text-sm font-medium md:flex">
        <a href="#home">Home</a>
			  <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <a class="box-content hidden md:flex items-center px-4 py-2 text-sm font-bold border rounded-md border-primary text-primary hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary transition duration-300" href="#contact"> Contact </a>
      <button onclick="(() => { this.closest('.group').classList.toggle('open')})()" class="flex md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"/>
        </svg>
      </button>
      <div class="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-md group-[.open]:max-h-64 top-full">
        <a class="text-zinc-900" href="#home">Home</a>
        <a class="text-zinc-900" href="#services">Services</a>
        <a class="text-zinc-900" href="#testimonials">Testimonials</a>
        <a class="box-content flex items-center px-4 py-2 text-sm font-bold border rounded-md border-primary text-primary hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary transition duration-300" href="#contact"> Contact </a>
      </div>
    </div>
  </div>
`,navigation03=`
<div class="container px-4 lg:px-0 mx-auto" data-section-type="navigation">
    <div class="grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full px-2 group relative py-9">
      <div class="items-center hidden gap-12 text-sm font-medium md:flex">
        <a href="#home">Home</a>
			  <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <div class="shrink-0 mx-auto">
         <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
      </div>
      <a class="box-content hidden md:flex items-center px-4 py-2 text-sm font-bold border rounded-md border-primary text-primary hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary transition duration-300 ml-auto" href="#contact"> Contact </a>
      <button onclick="(() => { this.closest('.group').classList.toggle('open')})()" class="flex md:hidden ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
        </svg>
      </button>
      <div class="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-md group-[.open]:max-h-64 top-full">
        <a class="text-zinc-900" href="#home">Home</a>
        <a class="text-zinc-900" href="#services">Services</a>
        <a class="text-zinc-900" href="#testimonials">Testimonials</a>
        <a class="box-content flex items-center px-4 py-2 text-sm font-bold border rounded-md border-primary text-primary hover:bg-primary hover:text-white focus:ring-4 focus:ring-primary transition duration-300" href="#contact"> Contact </a>
      </div>
    </div>
  </div>
`,contentSectionsNavigations=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Navigation
    <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(navigation01)">
     <img src="../../img/ai-website-builder/sections/navigations/navigation-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Navigation 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(navigation02)">
     <img src="../../img/ai-website-builder/sections/navigations/navigation-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Navigation 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(navigation03)">
     <img src="../../img/ai-website-builder/sections/navigations/navigation-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Navigation 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,header01=`
<div class="container px-4 lg:px-0 flex flex-col mx-auto py-14" id="home" data-section-type="header">
  <div class="grid w-full grid-cols-1 my-auto md:grid-cols-2 xl:gap-14 md:gap-5">
    <div class="flex flex-col justify-center col-span-1 text-center md:!text-start lg:!text-start xl:!text-start">
      <h1 class="break-word mb-8 text-4xl font-bold leading-tight lg:text-6xl font-display text-center md:!text-start lg:!text-start xl:!text-start draggable" data-component-field="title">This is a Heading text example</h1>
      <p class="break-word mb-6 text-muted font-normal leading-7 lg:w-3/4 draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
      <div class="flex flex-col items-center gap-4 md:flex-row mb-5">
        <a class="flex items-center py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 px-7 focus:ring-purple-blue-100 transition duration-300 rounded-md draggable" href="#services"> View our services </a>
      </div>
    </div>
    <div class="bg-cover bg-center rounded-xl h-[500px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
  </div>
</div>
`,header02=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" id="home" data-section-type="header">
  <div class="flex w-full flex-col items-center justify-center my-auto mt-32 mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col justify-center items-center max-w-full mb-8 col-span-1 text-center">
      <h1 class="break-word mb-6 text-4xl font-bold leading-tight lg:text-6xl text-wrap font-display text-center draggable" data-component-field="title">This is a Heading text example</h1>
      <p class="break-word mb-8 text-muted font-normal leading-7 lg:w-3/4 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
      <a class="flex items-center py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 px-7 focus:ring-purple-blue-100 transition duration-300 rounded-md draggable" href="#services">View our Services</a>
    </div>
    <div class="bg-cover bg-center rounded-xl h-[700px] w-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
  </div>
</div>
`,header03=`
<div class="relative flex flex-col mx-auto px-4 lg:px-0 bg-cover bg-center content-bg-image draggable" style="background-image: url(&quot;../../img/sites/placeholder-bg.png&quot;);" id="home" data-section-type="header">
    <div class="absolute inset-0 bg-black opacity-70 mask z-0"></div>
    <div class="flex w-full flex-col items-center justify-center py-32 mb-8 xl:gap-14 md:gap-5 z-10">
      <div class="flex flex-col justify-center items-center col-span-1 text-center">
        <h1 class="break-word mb-8 text-4xl font-bold leading-tight lg:text-6xl font-display text-center text-white draggable" data-component-field="title">This is a Heading text example</h1>
        <p class="break-word mb-6 text-muted font-normal leading-7 lg:w-3/4 text-white draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
        <a class="flex items-center py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 px-7 focus:ring-purple-blue-100 transition duration-300 rounded-md draggable" href="#services">View our Services</a>
      </div>
    </div>
  </div>
`,header04=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto" id="home" data-section-type="header">
  <div class="flex w-full flex-col items-center justify-center py-32 xl:gap-14 md:gap-5 z-10">
    <div class="flex flex-col justify-center items-center col-span-1 text-center">
      <h1 class="break-word mb-8 text-4xl font-bold leading-tight lg:text-6xl font-display text-center draggable" data-component-field="title">This is a Heading text example</h1>
      <p class="break-word mb-6 text-muted font-normal leading-7 lg:w-3/4 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
      <a class="flex items-center py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 px-7 focus:ring-purple-blue-100 transition duration-300 rounded-md draggable" href="#services">View our Services</a>
    </div>
  </div>
</div>
`,header05=`
<div class="container px-4 lg:px-0 flex flex-col py-14 mx-auto" id="home" data-section-type="header">
    <div class="flex flex-col-reverse md:grid w-full grid-cols-1 my-auto mt-32 md:grid-cols-2 xl:gap-20 md:gap-10">
      <div class="items-center justify-end col-span-1 flex">
        <div class="bg-cover bg-center rounded-xl h-[700px] w-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      </div>
      <div class="flex flex-col justify-center col-span-1 text-center md:!text-start lg:!text-start xl:!text-start">
         <h1 class="break-word mb-8 text-4xl font-bold leading-tight lg:text-6xl font-display text-center md:!text-start lg:!text-start xl:!text-start draggable" data-component-field="title">This is a Heading text example</h1>
         <p class="break-word mb-6 text-muted font-normal leading-7 lg:w-3/4 draggable" data-component-field="paragraph">
           This is a body text example. You can change your fonts, colors, theme, and images in the editor.
         </p>
         <div class="flex flex-col items-center gap-4 md:flex-row mb-5">
          <a class="flex items-center py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 px-7 focus:ring-purple-blue-100 transition duration-300 rounded-md draggable" href="#services">View our Services</a>
         </div>  
        </div>
    </div>
  </div>
`,contentSectionsHeaders=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Header
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(header01)">
     <img src="../../img/ai-website-builder/sections/headers/header-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Header 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(header02)">
     <img src="../../img/ai-website-builder/sections/headers/header-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Header 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(header03)">
     <img src="../../img/ai-website-builder/sections/headers/header-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Header 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(header04)">
     <img src="../../img/ai-website-builder/sections/headers/header-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Header 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(header05)">
     <img src="../../img/ai-website-builder/sections/headers/header-5.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Header 05</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,feature01=`
<div class="container px-4 lg:px-0 mx-auto py-14 h-fit" id="services" data-section-type="services">
  <div class="text-center">
    <h2 class="w-full mb-4 text-4xl font-extrabold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
    <p class="break-word mb-10 text-lg font-normal md:w-7/12 lg:w-6/12 text-muted mx-auto draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
    <div class="grid grid-cols-1 md:gap-0 lg:gap-10 md:grid-cols-3" data-section-type="services-description">
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z" fill="hsl(var(--primary-foreground))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-1 lg:px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">First Service</h4>
          <p class="break-word text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14 bg-primary text-primary-foreground border rounded-md">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.28996 14.78L3.19996 14.69C2.80996 14.3 2.80996 13.67 3.19996 13.28L9.28996 7.18C9.67996 6.79 10.31 6.79 10.7 7.18L13.99 10.47L20.38 3.29C20.76 2.86 21.43 2.85 21.83 3.25C22.2 3.63 22.22 4.23 21.87 4.62L14.7 12.69C14.32 13.12 13.66 13.14 13.25 12.73L9.99996 9.48L4.69996 14.78C4.31996 15.17 3.67996 15.17 3.28996 14.78ZM4.69996 20.78L9.99996 15.48L13.25 18.73C13.66 19.14 14.32 19.12 14.7 18.69L21.87 10.62C22.22 10.23 22.2 9.63 21.83 9.25C21.43 8.85 20.76 8.86 20.38 9.29L13.99 16.47L10.7 13.18C10.31 12.79 9.67996 12.79 9.28996 13.18L3.19996 19.28C2.80996 19.67 2.80996 20.3 3.19996 20.69L3.28996 20.78C3.67996 21.17 4.31996 21.17 4.69996 20.78Z" fill="hsl(var(--primary))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-1 lg:px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">Second Service</h4>
          <p class="break-word draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M15.8766 12.71C16.857 11.9387 17.5726 10.8809 17.9239 9.68394C18.2751 8.48697 18.2445 7.21027 17.8364 6.03147C17.4283 4.85267 16.6629 3.83039 15.6467 3.10686C14.6305 2.38332 13.4141 1.99451 12.1666 1.99451C10.9192 1.99451 9.70274 2.38332 8.68655 3.10686C7.67037 3.83039 6.90497 4.85267 6.49684 6.03147C6.0887 7.21027 6.05814 8.48697 6.40938 9.68394C6.76063 10.8809 7.47623 11.9387 8.45662 12.71C6.7767 13.383 5.31091 14.4994 4.21552 15.9399C3.12012 17.3805 2.43619 19.0913 2.23662 20.89C2.22218 21.0213 2.23374 21.1542 2.27065 21.2811C2.30756 21.4079 2.36909 21.5263 2.45173 21.6293C2.61864 21.8375 2.86141 21.9708 3.12662 22C3.39184 22.0292 3.65778 21.9518 3.86595 21.7849C4.07411 21.618 4.20745 21.3752 4.23662 21.11C4.45621 19.1552 5.38831 17.3498 6.85484 16.0388C8.32137 14.7278 10.2195 14.003 12.1866 14.003C14.1537 14.003 16.0519 14.7278 17.5184 16.0388C18.9849 17.3498 19.917 19.1552 20.1366 21.11C20.1638 21.3557 20.2811 21.5827 20.4657 21.747C20.6504 21.9114 20.8894 22.0015 21.1366 22H21.2466C21.5088 21.9698 21.7483 21.8373 21.9132 21.6313C22.078 21.4252 22.1547 21.1624 22.1266 20.9C21.9261 19.0962 21.2385 17.381 20.1375 15.9382C19.0364 14.4954 17.5635 13.3795 15.8766 12.71ZM12.1666 12C11.3755 12 10.6021 11.7654 9.94434 11.3259C9.28655 10.8864 8.77385 10.2616 8.4711 9.53074C8.16835 8.79983 8.08914 7.99557 8.24348 7.21964C8.39782 6.44372 8.77879 5.73099 9.3382 5.17158C9.89761 4.61217 10.6103 4.2312 11.3863 4.07686C12.1622 3.92252 12.9665 4.00173 13.6974 4.30448C14.4283 4.60724 15.053 5.11993 15.4925 5.77772C15.932 6.43552 16.1666 7.20888 16.1666 8C16.1666 9.06087 15.7452 10.0783 14.9951 10.8284C14.2449 11.5786 13.2275 12 12.1666 12Z" fill="hsl(var(--primary-foreground))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">Third Service</h4>
          <p class="break-word text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`,feature02=`
<div class="container px-4 lg:px-0 mx-auto py-14 h-fit" id="services" data-section-type="services">
  <div class="text-center">
    <div class="grid grid-cols-1 md:gap-0 lg:gap-10 md:grid-cols-3" data-section-type="services-description">
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M22.8233 8C22.8233 7.28 22.4533 6.65 21.8833 6.3L12.8333 1L3.78331 6.3C3.21331 6.65 2.83331 7.28 2.83331 8V18C2.83331 19.1 3.73331 20 4.83331 20H20.8333C21.9333 20 22.8333 19.1 22.8333 18L22.8233 8ZM20.8233 8V8.01L12.8333 13L4.83331 8L12.8333 3.32L20.8233 8ZM4.83331 18V10.34L12.8333 15.36L20.8233 10.37L20.8333 18H4.83331Z" fill="hsl(var(--primary-foreground))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-1 lg:px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">First Service</h4>
          <p class="break-word text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14 bg-primary text-primary-foreground border rounded-md">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.28996 14.78L3.19996 14.69C2.80996 14.3 2.80996 13.67 3.19996 13.28L9.28996 7.18C9.67996 6.79 10.31 6.79 10.7 7.18L13.99 10.47L20.38 3.29C20.76 2.86 21.43 2.85 21.83 3.25C22.2 3.63 22.22 4.23 21.87 4.62L14.7 12.69C14.32 13.12 13.66 13.14 13.25 12.73L9.99996 9.48L4.69996 14.78C4.31996 15.17 3.67996 15.17 3.28996 14.78ZM4.69996 20.78L9.99996 15.48L13.25 18.73C13.66 19.14 14.32 19.12 14.7 18.69L21.87 10.62C22.22 10.23 22.2 9.63 21.83 9.25C21.43 8.85 20.76 8.86 20.38 9.29L13.99 16.47L10.7 13.18C10.31 12.79 9.67996 12.79 9.28996 13.18L3.19996 19.28C2.80996 19.67 2.80996 20.3 3.19996 20.69L3.28996 20.78C3.67996 21.17 4.31996 21.17 4.69996 20.78Z" fill="hsl(var(--primary))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-1 lg:px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">Second Service</h4>
          <p class="break-word draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-6 px-2 lg:px-10 py-14">
        <div>
          <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M15.8766 12.71C16.857 11.9387 17.5726 10.8809 17.9239 9.68394C18.2751 8.48697 18.2445 7.21027 17.8364 6.03147C17.4283 4.85267 16.6629 3.83039 15.6467 3.10686C14.6305 2.38332 13.4141 1.99451 12.1666 1.99451C10.9192 1.99451 9.70274 2.38332 8.68655 3.10686C7.67037 3.83039 6.90497 4.85267 6.49684 6.03147C6.0887 7.21027 6.05814 8.48697 6.40938 9.68394C6.76063 10.8809 7.47623 11.9387 8.45662 12.71C6.7767 13.383 5.31091 14.4994 4.21552 15.9399C3.12012 17.3805 2.43619 19.0913 2.23662 20.89C2.22218 21.0213 2.23374 21.1542 2.27065 21.2811C2.30756 21.4079 2.36909 21.5263 2.45173 21.6293C2.61864 21.8375 2.86141 21.9708 3.12662 22C3.39184 22.0292 3.65778 21.9518 3.86595 21.7849C4.07411 21.618 4.20745 21.3752 4.23662 21.11C4.45621 19.1552 5.38831 17.3498 6.85484 16.0388C8.32137 14.7278 10.2195 14.003 12.1866 14.003C14.1537 14.003 16.0519 14.7278 17.5184 16.0388C18.9849 17.3498 19.917 19.1552 20.1366 21.11C20.1638 21.3557 20.2811 21.5827 20.4657 21.747C20.6504 21.9114 20.8894 22.0015 21.1366 22H21.2466C21.5088 21.9698 21.7483 21.8373 21.9132 21.6313C22.078 21.4252 22.1547 21.1624 22.1266 20.9C21.9261 19.0962 21.2385 17.381 20.1375 15.9382C19.0364 14.4954 17.5635 13.3795 15.8766 12.71ZM12.1666 12C11.3755 12 10.6021 11.7654 9.94434 11.3259C9.28655 10.8864 8.77385 10.2616 8.4711 9.53074C8.16835 8.79983 8.08914 7.99557 8.24348 7.21964C8.39782 6.44372 8.77879 5.73099 9.3382 5.17158C9.89761 4.61217 10.6103 4.2312 11.3863 4.07686C12.1622 3.92252 12.9665 4.00173 13.6974 4.30448C14.4283 4.60724 15.053 5.11993 15.4925 5.77772C15.932 6.43552 16.1666 7.20888 16.1666 8C16.1666 9.06087 15.7452 10.0783 14.9951 10.8284C14.2449 11.5786 13.2275 12 12.1666 12Z" fill="hsl(var(--primary-foreground))"></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2 px-2 text-center">
          <h4 class="text-2xl font-extrabold font-display draggable" data-component-field="title">Third Service</h4>
          <p class="break-word text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`,feature03=`
<div class="container px-4 lg:px-0 mx-auto py-14" id="services" data-section-type="services">
    <div class="flex flex-col xl:flex-row items-center gap-16 justify-center">
      <div class="flex flex-col w-full xl:w-1/2">
        <div class="flex flex-col justify-start md:items-start col-span-1 text-center md:text-left">
          <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display text-center md:text-left" data-component-field="title">This is a Heading example</h2>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
        </div>
        <div class="flex flex-col gap-16 mt-20 lg:mt-20">
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                  <path d="M448-85q-70-13-136-45t-117.5-89q-51.5-57-83-141T80-560v-8q0-14 9-23t23-9h8q51 0 105 13t101 39q11-74 44-152t79-141q12-17 31-17t31 17q46 63 79 141t44 152q47-26 101-39t105-13h4q15 0 25.5 10.5T880-564v4q0 116-31.5 200t-83 141Q714-162 648-130T512-85q-13 2-32 2t-32-2Zm30-77q-11-165-99.5-250.5T162-518q-2 0 0 0 11 169 102.5 254T478-162q2 1 0 .5t0-.5Zm-76-340q20 17 42 40.5t36 45.5q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742v.5-.5q-35 59-55.5 121T402-502Zm122 170q12 32 20.5 70t13.5 82q36-12 76-36t74-64q34-40 59-98.5T798-518q0-2 0 0-94 14-165 62.5T524-332Z" fill="hsl(var(--primary-foreground))"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">First Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                  <path d="M200-320v-200q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v200q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320Zm240 0v-200q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v200q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm560-200v-200q0-17 11.5-28.5T720-560q17 0 28.5 11.5T760-520v200q0 17-11.5 28.5T720-280q-17 0-28.5-11.5T680-320Zm160-320H116q-15 0-25.5-10.5T80-676v-22q0-11 5.5-19t14.5-13l344-172q17-8 36-8t36 8l342 171q11 5 16.5 15t5.5 21v15q0 17-11.5 28.5T840-640Zm-582-80h444-444Zm0 0h444L480-830 258-720Z" fill="hsl(var(--primary-foreground))"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">Second Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                <path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" fill="hsl(var(--primary-foreground))"/>
              </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">First Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="items-center mt-14 md:mt-0 justify-center col-span-1 w-full xl:w-1/2 flex">
        <div class="bg-cover bg-center rounded-xl h-[700px] w-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      </div>
    </div>
  </div>
`,feature04=`
<div class="container px-4 lg:px-0 mx-auto py-14" id="services" data-section-type="services">
    <div class="flex flex-col xl:flex-row items-center gap-16 justify-center">
      <div class="items-center justify-center col-span-1 w-full xl:w-1/2 flex">
        <div class="bg-cover bg-center rounded-xl h-[700px] w-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      </div>
      <div class="flex flex-col w-full xl:w-1/2">
        <div class="flex flex-col justify-start md:items-start col-span-1 text-center md:text-left">
          <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
        </div>
        <div class="flex flex-col gap-16 mt-20 lg:mt-20">
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                  <path d="M448-85q-70-13-136-45t-117.5-89q-51.5-57-83-141T80-560v-8q0-14 9-23t23-9h8q51 0 105 13t101 39q11-74 44-152t79-141q12-17 31-17t31 17q46 63 79 141t44 152q47-26 101-39t105-13h4q15 0 25.5 10.5T880-564v4q0 116-31.5 200t-83 141Q714-162 648-130T512-85q-13 2-32 2t-32-2Zm30-77q-11-165-99.5-250.5T162-518q-2 0 0 0 11 169 102.5 254T478-162q2 1 0 .5t0-.5Zm-76-340q20 17 42 40.5t36 45.5q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742v.5-.5q-35 59-55.5 121T402-502Zm122 170q12 32 20.5 70t13.5 82q36-12 76-36t74-64q34-40 59-98.5T798-518q0-2 0 0-94 14-165 62.5T524-332Z" fill="hsl(var(--primary-foreground))"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">First Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                  <path d="M200-320v-200q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v200q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320Zm240 0v-200q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v200q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm560-200v-200q0-17 11.5-28.5T720-560q17 0 28.5 11.5T760-520v200q0 17-11.5 28.5T720-280q-17 0-28.5-11.5T680-320Zm160-320H116q-15 0-25.5-10.5T80-676v-22q0-11 5.5-19t14.5-13l344-172q17-8 36-8t36 8l342 171q11 5 16.5 15t5.5 21v15q0 17-11.5 28.5T840-640Zm-582-80h444-444Zm0 0h444L480-830 258-720Z" fill="hsl(var(--primary-foreground))"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">Second Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-start col-span-1 gap-2">
            <div>
              <div class="flex items-center justify-center w-16 h-16 rounded-md bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                <path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" fill="hsl(var(--primary-foreground))"/>
              </svg>
              </div>
            </div>
            <div class="flex flex-col gap-2 ms-4 text-start">
              <h4 class="text-2xl mb-1 font-bold draggable" data-component-field="title">First Service</h4>
              <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
                This is a body text example. You can change your fonts, colors, theme, and images in the editor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,contentSectionsFeatures=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Feature
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(feature01)">
     <img src="../../img/ai-website-builder/sections/features/feature-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Feature 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(feature02)">
     <img src="../../img/ai-website-builder/sections/features/feature-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Feature 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(feature03)">
     <img src="../../img/ai-website-builder/sections/features/feature-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Feature 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(feature04)">
     <img src="../../img/ai-website-builder/sections/features/feature-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Feature 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,testimonial01=`
<div class="container px-4 lg:px-0 flex flex-col gap-20 py-14" id="testimonials" data-section-type="testimonials-header">
  <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
    <h2 class="w-full mb-4 text-4xl font-extrabold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
    <p class="break-word text-lg font-normal text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
  </div>
  <div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2" data-section-type="testimonials">
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
        <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-6.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Daniel Mitchell </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
        <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-5.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Emily Parker </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
        </div>
      </div>
    </div>
  </div>
</div>
`,testimonial02=`
<div class="container flex px-4 lg:px-0 flex-col lg:flex-row gap-16 justify-center items-center lg:items-start mx-auto py-14" id="testimonials" data-section-type="testimonials-header">
    <div class="flex flex-col w-full justify-center text-center items-center lg:justify-start lg:items-start col-span-1 lg:text-start">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="w-full flex flex-col gap-5 xl:gap-10" data-section-type="testimonials">
      <div class="flex flex-col items-center w-full px-4 md:px-16 lg:px-16 xl:px-20 py-10 gap-9 rounded-md bg-card text-card-foreground border">
        <p class="break-word text-lg font-medium leading-8 text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
        <div class="flex flex-col items-center gap-4">
        <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-6.jpg&quot;);"></div>
          <div class="flex flex-col items-center">
            <p class="break-word text-lg font-semibold mb-1 text-center draggable">Rares Toma</p>
            <p class="break-word text-sm font-medium leading-normal text-center draggable">CEO &amp; Founder at Loopple</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full px-4 md:px-16 lg:px-16 xl:px-20 py-10 gap-9 rounded-md  bg-card text-card-foreground border">
        <p class="break-word text-lg font-medium leading-8 text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
        <div class="flex flex-col items-center gap-4">
        <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-5.jpg&quot;);"></div>
          <div class="flex flex-col items-center">
            <p class="break-word text-lg font-semibold mb-1 text-center draggable">Rares Toma</p>
            <p class="break-word text-sm font-medium leading-normal text-center draggable">CEO &amp; Founder at Loopple</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`,testimonial03=`
<div class="container px-4 lg:px-0 flex flex-col gap-20 py-14" id="testimonials" data-section-type="testimonials-header">
  <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
    <h2 class="w-full mb-4 text-4xl font-extrabold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
    <p class="break-word text-lg font-normal text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
  </div>
  <div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-3" data-section-type="testimonials">
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
      <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-6.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Daniel Mitchell </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
      <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-5.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Emily Parker </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
      <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-7.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Rares Toma </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO & Founder at Loopple </p>
        </div>
      </div>
    </div>
  </div>
</div>
`,testimonial04=`
<div class="container px-4 lg:px-0 flex flex-col gap-20 py-14" id="testimonials" data-section-type="testimonials-header">
  <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
    <h2 class="w-full mb-4 text-4xl font-extrabold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
    <p class="break-word text-lg font-normal text-muted draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
  </div>
  <div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2" data-section-type="testimonials">
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
      <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-6.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Daniel Mitchell </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
          <div class="flex flex-row mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full p-8 gap-9 rounded-xl bg-card text-card-foreground border">
      <p class="break-word text-xl font-semibold leading-normal text-center draggable" data-component-field="paragraph">“This is a body text example. You can change your fonts, colors, theme, and images in the editor.”</p>
      <div class="flex flex-col items-center gap-4">
      <div class="bg-cover bg-center w-10 h-10 rounded-full draggable" style="background-image: url(&quot;https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/avatars/avatar-5.jpg&quot;);"></div>
        <div class="flex flex-col items-center">
          <h3 class="text-lg font-bold text-center font-display draggable"> Emily Parker </h3>
          <p class="break-word text-xs font-medium leading-normal text-center text-muted draggable"> CEO &amp; Founder </p>
          <div class="flex flex-row mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,contentSectionsTestimonials=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Testimonial
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(testimonial01)">
     <img src="../../img/ai-website-builder/sections/testimonials/testimonial-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Testimonial 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(testimonial02)">
     <img src="../../img/ai-website-builder/sections/testimonials/testimonial-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Testimonial 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(testimonial03)">
     <img src="../../img/ai-website-builder/sections/testimonials/testimonial-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Testimonial 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(testimonial04)">
     <img src="../../img/ai-website-builder/sections/testimonials/testimonial-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Testimonial 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,contact01=`
<div class="container flex px-4 lg:px-0 flex-col items-center gap-16 py-14" id="contact" data-section-type="contact">
  <div class="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col w-10/12 gap-2 text-center mx-auto md:text-left md:ml-0">
        <h2 class="text-4xl font-bold font-display draggable" data-component-field="title">Get in Touch Today</h2>
        <p class="break-word text-base font-medium leading-7 text-muted draggable" data-component-field="paragraph">Ready to enhance your brand with compelling copy? Contact me now to discuss your project needs.</p>
      </div>
      <div class="grid w-full md:grid-cols-2 gap-x-5 gap-y-16">
        <div class="flex flex-col items-center gap-3 text-center md:text-left md:items-start">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.21 9.17135L14 3.13135C13.474 2.6312 12.7759 2.3523 12.05 2.3523C11.3241 2.3523 10.626 2.6312 10.1 3.13135L3.89 9.13135C3.61408 9.37221 3.39216 9.66866 3.23879 10.0013C3.08541 10.3339 3.00404 10.6951 3 11.0613V19.6413C3.01054 20.369 3.30904 21.0627 3.83012 21.5707C4.35119 22.0786 5.05235 22.3594 5.78 22.3513H18.22C18.9476 22.3594 19.6488 22.0786 20.1699 21.5707C20.691 21.0627 20.9895 20.369 21 19.6413V11.0613C20.9992 10.7098 20.929 10.3619 20.7935 10.0376C20.6579 9.71324 20.4596 9.41887 20.21 9.17135ZM11.44 4.57135C11.593 4.43151 11.7927 4.35397 12 4.35397C12.2073 4.35397 12.407 4.43151 12.56 4.57135L18 9.85135L12.53 15.1313C12.377 15.2712 12.1773 15.3487 11.97 15.3487C11.7627 15.3487 11.563 15.2712 11.41 15.1313L6 9.85135L11.44 4.57135ZM19 19.6413C18.9871 19.8376 18.8987 20.0213 18.7532 20.1537C18.6078 20.2861 18.4166 20.3569 18.22 20.3513H5.78C5.58338 20.3569 5.39225 20.2861 5.24678 20.1537C5.10132 20.0213 5.01286 19.8376 5 19.6413V11.7014L9.05 15.6013L7.39 17.2014C7.20375 17.3887 7.09921 17.6422 7.09921 17.9064C7.09921 18.1705 7.20375 18.424 7.39 18.6113C7.48295 18.7089 7.59463 18.7866 7.71836 18.8398C7.84208 18.8931 7.9753 18.9208 8.11 18.9213C8.36747 18.9203 8.61462 18.82 8.8 18.6413L10.57 16.9413C11.0096 17.21 11.5148 17.3521 12.03 17.3521C12.5452 17.3521 13.0504 17.21 13.49 16.9413L15.26 18.6413C15.4454 18.82 15.6925 18.9203 15.95 18.9213C16.0847 18.9208 16.2179 18.8931 16.3416 18.8398C16.4654 18.7866 16.5771 18.7089 16.67 18.6113C16.8563 18.424 16.9608 18.1705 16.9608 17.9064C16.9608 17.6422 16.8563 17.3887 16.67 17.2014L15 15.6013L19 11.7014V19.6413Z" fill="hsl(var(--foreground))"></path>
            </svg>
          </span>
          <h3 class="text-xl lg:text-2xl font-extrabold font-display draggable">Email</h3>
          <span class="text-lg font-medium text-muted draggable rounded-none">hello@loopple.com</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center md:text-left md:items-start">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M19.41 13.7027C19.1901 13.7027 18.96 13.6308 18.74 13.5795C18.2949 13.4772 17.8572 13.3434 17.43 13.1789C16.9661 13.0056 16.4562 13.0146 15.9984 13.2042C15.5405 13.3938 15.1671 13.7506 14.95 14.2059L14.73 14.6784C13.7589 14.1127 12.8617 13.4225 12.0601 12.6243C11.2829 11.801 10.6108 10.8796 10.0601 9.88216L10.5201 9.66648C10.9634 9.44353 11.3108 9.06006 11.4954 8.58984C11.6801 8.11963 11.6888 7.59591 11.5201 7.11946C11.3612 6.67684 11.231 6.22397 11.13 5.76378C11.08 5.53784 11.04 5.30162 11.01 5.07567C10.8886 4.35226 10.5197 3.69714 9.96967 3.2283C9.41967 2.75946 8.72475 2.5077 8.01005 2.51838H5.00005C4.5773 2.51781 4.1592 2.60901 3.77317 2.786C3.38714 2.963 3.04189 3.22178 2.76005 3.5454C2.47237 3.8778 2.25817 4.27023 2.13215 4.69571C2.00614 5.12119 1.97131 5.56965 2.03005 6.01027C2.57364 10.2849 4.47526 14.2559 7.44005 17.3076C10.4114 20.3525 14.2779 22.3055 18.4401 22.8638C18.5699 22.874 18.7002 22.874 18.83 22.8638C19.5675 22.8649 20.2794 22.587 20.83 22.0832C21.1452 21.7938 21.3971 21.4392 21.5695 21.0427C21.7418 20.6463 21.8306 20.2169 21.83 19.7827V16.7016C21.8247 15.992 21.5809 15.306 21.14 14.7596C20.6991 14.2132 20.088 13.8399 19.41 13.7027ZM19.9 19.8649C19.8997 20.0082 19.8702 20.1498 19.8134 20.2807C19.7565 20.4116 19.6736 20.5288 19.57 20.6249C19.4604 20.7274 19.33 20.8037 19.1882 20.8481C19.0464 20.8925 18.8967 20.9039 18.75 20.8816C15.0183 20.3811 11.5503 18.6345 8.88005 15.9108C6.20752 13.166 4.49208 9.59189 4.00005 5.74324C3.97833 5.59261 3.98949 5.43891 4.03272 5.29325C4.07596 5.1476 4.1502 5.01364 4.25005 4.90108C4.34467 4.7934 4.46043 4.70752 4.5897 4.6491C4.71897 4.59069 4.85882 4.56106 5.00005 4.56216H8.00005C8.23121 4.55636 8.45719 4.63301 8.63951 4.77907C8.82184 4.92513 8.94925 5.13156 9.00005 5.36324C9.00005 5.64054 9.09005 5.92811 9.15005 6.2054C9.26563 6.74342 9.41937 7.27204 9.61005 7.78702L8.21005 8.46486C7.96941 8.57831 7.78241 8.78514 7.69005 9.04C7.59003 9.29004 7.59003 9.5705 7.69005 9.82054C9.12925 12.9866 11.6073 15.5316 14.69 17.0097C14.9335 17.1124 15.2066 17.1124 15.45 17.0097C15.6982 16.9149 15.8996 16.7228 16.01 16.4757L16.64 15.0378C17.156 15.231 17.6838 15.3889 18.22 15.5103C18.48 15.5719 18.76 15.6232 19.0301 15.6643C19.2556 15.7165 19.4566 15.8473 19.5989 16.0346C19.7411 16.2219 19.8157 16.4539 19.81 16.6913L19.9 19.8649ZM14 2.4054C13.7701 2.4054 13.53 2.4054 13.3 2.4054C13.0348 2.42856 12.7894 2.55896 12.6178 2.76794C12.4462 2.97692 12.3625 3.24734 12.385 3.51973C12.4076 3.79211 12.5346 4.04414 12.738 4.22038C12.9415 4.39661 13.2048 4.48261 13.47 4.45946H14C15.5913 4.45946 17.1175 5.10868 18.2427 6.26431C19.3679 7.41994 20 8.98731 20 10.6216C20 10.8065 20 10.9811 20 11.1659C19.9779 11.4369 20.0612 11.7058 20.2318 11.9137C20.4024 12.1216 20.6463 12.2516 20.91 12.2751H20.99C21.2404 12.2762 21.482 12.1807 21.6671 12.0077C21.8523 11.8347 21.9675 11.5966 21.99 11.3405C21.99 11.1043 21.99 10.8578 21.99 10.6216C21.9901 8.44432 21.1486 6.35605 19.6504 4.81551C18.1523 3.27496 16.12 2.40812 14 2.4054ZM16 10.6216C16 10.894 16.1054 11.1552 16.2929 11.3478C16.4805 11.5404 16.7348 11.6486 17 11.6486C17.2653 11.6486 17.5196 11.5404 17.7072 11.3478C17.8947 11.1552 18 10.894 18 10.6216C18 9.53208 17.5786 8.48717 16.8285 7.71675C16.0783 6.94633 15.0609 6.51351 14 6.51351C13.7348 6.51351 13.4805 6.62172 13.2929 6.81432C13.1054 7.00693 13 7.26815 13 7.54054C13 7.81292 13.1054 8.07415 13.2929 8.26676C13.4805 8.45936 13.7348 8.56756 14 8.56756C14.5305 8.56756 15.0392 8.78397 15.4143 9.16918C15.7893 9.55439 16 10.0769 16 10.6216Z" fill="hsl(var(--foreground))"></path>
            </svg>
          </span>
          <h3 class="text-xl lg:text-2xl font-extrabold font-display draggable">Phone</h3>
          <span class="text-lg font-medium text-muted draggable rounded-none">+516-486-5135</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center md:text-left md:items-start">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.46 9.89026C20.3196 8.38969 19.8032 6.95202 18.9612 5.71727C18.1191 4.48251 16.9801 3.49274 15.655 2.84434C14.3299 2.19594 12.8639 1.911 11.3997 2.01728C9.93555 2.12356 8.52314 2.61743 7.3 3.45081C6.2492 4.17244 5.36706 5.12414 4.71695 6.23753C4.06684 7.35092 3.6649 8.59837 3.54 9.89026C3.41749 11.1737 3.57468 12.469 4.00017 13.6823C4.42567 14.8956 5.1088 15.9964 6 16.9049L11.3 22.3584C11.393 22.4546 11.5036 22.531 11.6254 22.5832C11.7473 22.6353 11.878 22.6622 12.01 22.6622C12.142 22.6622 12.2727 22.6353 12.3946 22.5832C12.5164 22.531 12.627 22.4546 12.72 22.3584L18 16.9049C18.8912 15.9964 19.5743 14.8956 19.9998 13.6823C20.4253 12.469 20.5825 11.1737 20.46 9.89026ZM16.6 15.4568L12 20.1811L7.4 15.4568C6.72209 14.7605 6.20281 13.9186 5.87947 12.9916C5.55614 12.0647 5.43679 11.0757 5.53 10.0957C5.62382 9.10059 5.93177 8.13935 6.43157 7.28145C6.93138 6.42356 7.61056 5.69045 8.42 5.13513C9.48095 4.41132 10.7263 4.02522 12 4.02522C13.2737 4.02522 14.5191 4.41132 15.58 5.13513C16.387 5.6883 17.0647 6.41817 17.5644 7.27231C18.064 8.12644 18.3733 9.08364 18.47 10.0751C18.5663 11.0584 18.4484 12.0514 18.125 12.9822C17.8016 13.9129 17.2807 14.7582 16.6 15.4568ZM12 6.16216C11.11 6.16216 10.24 6.43321 9.49994 6.94104C8.75992 7.44887 8.18314 8.17067 7.84255 9.01516C7.50195 9.85965 7.41284 10.7889 7.58647 11.6854C7.7601 12.5819 8.18869 13.4054 8.81802 14.0518C9.44736 14.6981 10.2492 15.1383 11.1221 15.3166C11.995 15.4949 12.8998 15.4034 13.7221 15.0536C14.5443 14.7038 15.2471 14.1114 15.7416 13.3514C16.2361 12.5914 16.5 11.6978 16.5 10.7838C16.4974 9.55888 16.0224 8.38493 15.1791 7.51879C14.3357 6.65266 13.1927 6.16487 12 6.16216ZM12 13.3513C11.5055 13.3513 11.0222 13.2008 10.6111 12.9186C10.2 12.6365 9.87952 12.2355 9.6903 11.7663C9.50109 11.2972 9.45158 10.7809 9.54804 10.2829C9.6445 9.78481 9.88261 9.32731 10.2322 8.96823C10.5819 8.60915 11.0273 8.36462 11.5123 8.26555C11.9972 8.16648 12.4999 8.21732 12.9567 8.41165C13.4135 8.60599 13.804 8.93508 14.0787 9.35731C14.3534 9.77955 14.5 10.276 14.5 10.7838C14.5 11.4647 14.2366 12.1178 13.7678 12.5993C13.2989 13.0808 12.663 13.3513 12 13.3513Z" fill="hsl(var(--foreground))"></path>
            </svg>
          </span>
          <h3 class="text-xl lg:text-2xl font-extrabold font-display draggable">Location</h3>
          <span class="text-lg font-medium text-muted draggable rounded-none">San Francisco, CA 10924</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center md:text-left md:items-start">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M11 2.05405C9.02219 2.05405 7.08879 2.65639 5.4443 3.7849C3.79981 4.91341 2.51809 6.51741 1.76121 8.39405C1.00433 10.2707 0.806299 12.3357 1.19215 14.3279C1.578 16.3202 2.53041 18.1502 3.92894 19.5865C5.32746 21.0228 7.10929 22.001 9.0491 22.3972C10.9889 22.7935 12.9996 22.5901 14.8268 21.8128C16.6541 21.0355 18.2159 19.7191 19.3147 18.0302C20.4135 16.3412 21 14.3556 21 12.3243C21 10.9756 20.7413 9.6401 20.2388 8.39405C19.7363 7.14801 18.9997 6.01582 18.0711 5.06214C17.1425 4.10846 16.0401 3.35195 14.8268 2.83582C13.6136 2.3197 12.3132 2.05405 11 2.05405ZM11 20.5405C9.41775 20.5405 7.87104 20.0587 6.55544 19.1558C5.23985 18.253 4.21447 16.9698 3.60897 15.4685C3.00347 13.9672 2.84504 12.3152 3.15372 10.7214C3.4624 9.12762 4.22433 7.66363 5.34315 6.51457C6.46197 5.36552 7.88743 4.583 9.43928 4.26597C10.9911 3.94895 12.5997 4.11166 14.0615 4.73352C15.5233 5.35539 16.7727 6.40848 17.6518 7.75963C18.5308 9.11078 19 10.6993 19 12.3243C19 14.5034 18.1572 16.5932 16.6569 18.1341C15.1566 19.6749 13.1217 20.5405 11 20.5405ZM14.1 12.9713L12 11.7286V7.18918C12 6.9168 11.8946 6.65557 11.7071 6.46296C11.5196 6.27036 11.2652 6.16215 11 6.16215C10.7348 6.16215 10.4804 6.27036 10.2929 6.46296C10.1054 6.65557 10 6.9168 10 7.18918V12.3243C10 12.3243 10 12.4065 10 12.4476C10.0059 12.5183 10.0228 12.5877 10.05 12.653C10.0706 12.7139 10.0974 12.7724 10.13 12.8276C10.1574 12.8859 10.1909 12.941 10.23 12.9919L10.39 13.1254L10.48 13.2178L13.08 14.7584C13.2324 14.8471 13.4048 14.8931 13.58 14.8919C13.8014 14.8935 14.0171 14.8195 14.1932 14.6817C14.3693 14.5438 14.4959 14.3499 14.5531 14.1302C14.6103 13.9105 14.5948 13.6775 14.5092 13.4678C14.4236 13.2581 14.2726 13.0835 14.08 12.9713H14.1Z" fill="hsl(var(--foreground))"></path>
            </svg>
          </span>
          <h3 class="text-xl lg:text-2xl font-extrabold font-display draggable"> Working Hours </h3>
          <span class="text-lg font-medium text-muted draggable">08:00 AM-10:00 PM</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 p-10 bg-card text-card-foreground rounded-xl border">
      <h3 class="text-2xl font-bold font-display draggable"> Send a message </h3>
      <form class="flex flex-col gap-6">
        <label class="flex flex-col gap-2 text-sm font-medium draggable" for="first-name"> First Name </label>
        <input class="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your first name " type="text" id="first-name">
        <label class="flex flex-col gap-2 text-sm font-medium draggable" for="email"> Your Email </label>
        <input class="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your email address " type="email" id="email">
        <label class="flex flex-col gap-2 text-sm font-medium draggable" for="message"> Message </label>
        <textarea rows="5" class="p-4 border border-solid outline-none rounded-xl placeholder:text-sm placeholder:font-medium placeholder:text-dark-grey-500 border-grey-500 focus:border-grey-600" placeholder="Your message" id="message"></textarea>
        <a href="javascript:void(0)" class="flex items-center justify-center py-4 text-center text-primary-foreground px-7 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 font-semibold draggable"> Submit message </a>
      </form>
    </div>
  </div>
</div>
`,contact02=`
<div class="container flex px-4 lg:px-0 flex-col items-center gap-16 mx-auto py-14" id="contact" data-section-type="contact">
    <div class="items-center flex flex-col justify-center gap-16">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
          <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Let's get in touch</h2>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-5 p-5 md:p-10 w-full bg-white rounded-xl border border-zinc-200">
          <p class="break-word text-2xl font-bold mb-2 draggable font-display">Send a message</p>
          <form class="flex flex-col gap-6">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="first-name">
              Full Name
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your full name " type="text" id="first-name">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="email">
              Your Email
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your email address " type="email" id="email">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="message">
              Message
            </label>
            <textarea rows="5" class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your message" id="message"></textarea>
            <a href="javascript:void(0)" class="flex items-center justify-center py-4 text-center text-primary-foreground px-7 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 font-semibold draggable"> Submit message </a>
          </form>
      </div>
    </div>
  </div>
`,contact03=`
<div class="container flex px-4 lg:px-0 flex-col items-center gap-16 mx-auto py-14" id="contact" data-section-type="contact">
  <div class="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-center justify-center md:items-start md:justify-start w-full text-center md:text-left md:w-7/12 mx-auto md:ml-0">
        <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Contact us</h2>
        <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
      </div>
      <div class="flex flex-col gap-5 p-5 md:p-10 bg-white rounded-xl border border-zinc-200">
          <p class="break-word text-2xl font-bold mb-2 draggable font-display">Send a message</p>
          <form class="flex flex-col gap-6">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="first-name">
              Full Name
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your full name " type="text" id="first-name">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="email">
              Your Email
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your email address " type="email" id="email">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="message">
              Message
            </label>
            <textarea rows="5" class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your message" id="message"></textarea>
            <a href="javascript:void(0)" class="flex items-center justify-center py-4 text-center text-primary-foreground px-7 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 font-semibold draggable"> Submit message </a>
          </form>
      </div>
    </div>
    <div class="items-center justify-center col-span-1 w-full h-full flex">
      <div class="bg-cover bg-center rounded-xl w-full h-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
  </div>
</div>
`,contact04=`
<div class="container flex px-4 lg:px-0 flex-col items-center gap-16 mx-auto py-14" id="contact" data-section-type="contact">
  <div class="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
    <div class="items-center justify-center col-span-1 w-full h-full flex">
      <div class="bg-cover bg-center rounded-xl w-full h-full draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-center justify-center w-full md:items-start md:justify-start md:text-left text-center md:w-7/12 mx-auto md:ml-0">
        <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Contact us</h2>
        <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
      </div>
      <div class="flex flex-col gap-5 p-5 md:p-10 bg-white rounded-xl border border-zinc-200">
          <p class="break-word text-2xl font-bold mb-2 draggable font-display">Send a message</p>
          <form class="flex flex-col gap-6">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="first-name">
              Full Name
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your full name " type="text" id="first-name">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="email">
              Your Email
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your email address " type="email" id="email">
            <label class="flex flex-col gap-2 text-sm font-medium draggable" for="message">
              Message
            </label>
            <textarea rows="5" class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your message" id="message"></textarea>
            <a href="javascript:void(0)" class="flex items-center justify-center py-4 text-center text-primary-foreground px-7 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 font-semibold draggable"> Submit message </a>
          </form>
      </div>
    </div>
  </div>
</div>
`,contact05=`
<div class="container flex px-4 lg:px-0 flex-col items-center gap-16 mx-auto py-14" id="contact" data-section-type="contact">
  <div class="lg:w-7/12">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col items-center justify-center w-full text-center mx-auto">
          <h2 class="mb-4 text-4xl font-bold leading-tight font-display draggable" data-component-field="title">Example Title here</h2>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">Read more details here</p>
        </div>
      </div>
   </div>
   <div class="lg:w-9/12">
      <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-16">
        <div class="flex flex-col items-center gap-3 text-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.21 9.17135L14 3.13135C13.474 2.6312 12.7759 2.3523 12.05 2.3523C11.3241 2.3523 10.626 2.6312 10.1 3.13135L3.89 9.13135C3.61408 9.37221 3.39216 9.66866 3.23879 10.0013C3.08541 10.3339 3.00404 10.6951 3 11.0613V19.6413C3.01054 20.369 3.30904 21.0627 3.83012 21.5707C4.35119 22.0786 5.05235 22.3594 5.78 22.3513H18.22C18.9476 22.3594 19.6488 22.0786 20.1699 21.5707C20.691 21.0627 20.9895 20.369 21 19.6413V11.0613C20.9992 10.7098 20.929 10.3619 20.7935 10.0376C20.6579 9.71324 20.4596 9.41887 20.21 9.17135ZM11.44 4.57135C11.593 4.43151 11.7927 4.35397 12 4.35397C12.2073 4.35397 12.407 4.43151 12.56 4.57135L18 9.85135L12.53 15.1313C12.377 15.2712 12.1773 15.3487 11.97 15.3487C11.7627 15.3487 11.563 15.2712 11.41 15.1313L6 9.85135L11.44 4.57135ZM19 19.6413C18.9871 19.8376 18.8987 20.0213 18.7532 20.1537C18.6078 20.2861 18.4166 20.3569 18.22 20.3513H5.78C5.58338 20.3569 5.39225 20.2861 5.24678 20.1537C5.10132 20.0213 5.01286 19.8376 5 19.6413V11.7014L9.05 15.6013L7.39 17.2014C7.20375 17.3887 7.09921 17.6422 7.09921 17.9064C7.09921 18.1705 7.20375 18.424 7.39 18.6113C7.48295 18.7089 7.59463 18.7866 7.71836 18.8398C7.84208 18.8931 7.9753 18.9208 8.11 18.9213C8.36747 18.9203 8.61462 18.82 8.8 18.6413L10.57 16.9413C11.0096 17.21 11.5148 17.3521 12.03 17.3521C12.5452 17.3521 13.0504 17.21 13.49 16.9413L15.26 18.6413C15.4454 18.82 15.6925 18.9203 15.95 18.9213C16.0847 18.9208 16.2179 18.8931 16.3416 18.8398C16.4654 18.7866 16.5771 18.7089 16.67 18.6113C16.8563 18.424 16.9608 18.1705 16.9608 17.9064C16.9608 17.6422 16.8563 17.3887 16.67 17.2014L15 15.6013L19 11.7014V19.6413Z" fill="#18181b"></path>
            </svg>
          </span>
          <p class="break-word text-xl font-semibold draggable">Email</p>
          <span class="text-base font-normal draggable">michael@loopple.com</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M19.41 13.7027C19.1901 13.7027 18.96 13.6308 18.74 13.5795C18.2949 13.4772 17.8572 13.3434 17.43 13.1789C16.9661 13.0056 16.4562 13.0146 15.9984 13.2042C15.5405 13.3938 15.1671 13.7506 14.95 14.2059L14.73 14.6784C13.7589 14.1127 12.8617 13.4225 12.0601 12.6243C11.2829 11.801 10.6108 10.8796 10.0601 9.88216L10.5201 9.66648C10.9634 9.44353 11.3108 9.06006 11.4954 8.58984C11.6801 8.11963 11.6888 7.59591 11.5201 7.11946C11.3612 6.67684 11.231 6.22397 11.13 5.76378C11.08 5.53784 11.04 5.30162 11.01 5.07567C10.8886 4.35226 10.5197 3.69714 9.96967 3.2283C9.41967 2.75946 8.72475 2.5077 8.01005 2.51838H5.00005C4.5773 2.51781 4.1592 2.60901 3.77317 2.786C3.38714 2.963 3.04189 3.22178 2.76005 3.5454C2.47237 3.8778 2.25817 4.27023 2.13215 4.69571C2.00614 5.12119 1.97131 5.56965 2.03005 6.01027C2.57364 10.2849 4.47526 14.2559 7.44005 17.3076C10.4114 20.3525 14.2779 22.3055 18.4401 22.8638C18.5699 22.874 18.7002 22.874 18.83 22.8638C19.5675 22.8649 20.2794 22.587 20.83 22.0832C21.1452 21.7938 21.3971 21.4392 21.5695 21.0427C21.7418 20.6463 21.8306 20.2169 21.83 19.7827V16.7016C21.8247 15.992 21.5809 15.306 21.14 14.7596C20.6991 14.2132 20.088 13.8399 19.41 13.7027ZM19.9 19.8649C19.8997 20.0082 19.8702 20.1498 19.8134 20.2807C19.7565 20.4116 19.6736 20.5288 19.57 20.6249C19.4604 20.7274 19.33 20.8037 19.1882 20.8481C19.0464 20.8925 18.8967 20.9039 18.75 20.8816C15.0183 20.3811 11.5503 18.6345 8.88005 15.9108C6.20752 13.166 4.49208 9.59189 4.00005 5.74324C3.97833 5.59261 3.98949 5.43891 4.03272 5.29325C4.07596 5.1476 4.1502 5.01364 4.25005 4.90108C4.34467 4.7934 4.46043 4.70752 4.5897 4.6491C4.71897 4.59069 4.85882 4.56106 5.00005 4.56216H8.00005C8.23121 4.55636 8.45719 4.63301 8.63951 4.77907C8.82184 4.92513 8.94925 5.13156 9.00005 5.36324C9.00005 5.64054 9.09005 5.92811 9.15005 6.2054C9.26563 6.74342 9.41937 7.27204 9.61005 7.78702L8.21005 8.46486C7.96941 8.57831 7.78241 8.78514 7.69005 9.04C7.59003 9.29004 7.59003 9.5705 7.69005 9.82054C9.12925 12.9866 11.6073 15.5316 14.69 17.0097C14.9335 17.1124 15.2066 17.1124 15.45 17.0097C15.6982 16.9149 15.8996 16.7228 16.01 16.4757L16.64 15.0378C17.156 15.231 17.6838 15.3889 18.22 15.5103C18.48 15.5719 18.76 15.6232 19.0301 15.6643C19.2556 15.7165 19.4566 15.8473 19.5989 16.0346C19.7411 16.2219 19.8157 16.4539 19.81 16.6913L19.9 19.8649ZM14 2.4054C13.7701 2.4054 13.53 2.4054 13.3 2.4054C13.0348 2.42856 12.7894 2.55896 12.6178 2.76794C12.4462 2.97692 12.3625 3.24734 12.385 3.51973C12.4076 3.79211 12.5346 4.04414 12.738 4.22038C12.9415 4.39661 13.2048 4.48261 13.47 4.45946H14C15.5913 4.45946 17.1175 5.10868 18.2427 6.26431C19.3679 7.41994 20 8.98731 20 10.6216C20 10.8065 20 10.9811 20 11.1659C19.9779 11.4369 20.0612 11.7058 20.2318 11.9137C20.4024 12.1216 20.6463 12.2516 20.91 12.2751H20.99C21.2404 12.2762 21.482 12.1807 21.6671 12.0077C21.8523 11.8347 21.9675 11.5966 21.99 11.3405C21.99 11.1043 21.99 10.8578 21.99 10.6216C21.9901 8.44432 21.1486 6.35605 19.6504 4.81551C18.1523 3.27496 16.12 2.40812 14 2.4054ZM16 10.6216C16 10.894 16.1054 11.1552 16.2929 11.3478C16.4805 11.5404 16.7348 11.6486 17 11.6486C17.2653 11.6486 17.5196 11.5404 17.7072 11.3478C17.8947 11.1552 18 10.894 18 10.6216C18 9.53208 17.5786 8.48717 16.8285 7.71675C16.0783 6.94633 15.0609 6.51351 14 6.51351C13.7348 6.51351 13.4805 6.62172 13.2929 6.81432C13.1054 7.00693 13 7.26815 13 7.54054C13 7.81292 13.1054 8.07415 13.2929 8.26676C13.4805 8.45936 13.7348 8.56756 14 8.56756C14.5305 8.56756 15.0392 8.78397 15.4143 9.16918C15.7893 9.55439 16 10.0769 16 10.6216Z" fill="#18181b"></path>
            </svg>
          </span>
          <p class="break-word text-xl font-semibold draggable">Phone</p>
          <span class="text-base font-normal draggable">+924-542-8012</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M20.46 9.89026C20.3196 8.38969 19.8032 6.95202 18.9612 5.71727C18.1191 4.48251 16.9801 3.49274 15.655 2.84434C14.3299 2.19594 12.8639 1.911 11.3997 2.01728C9.93555 2.12356 8.52314 2.61743 7.3 3.45081C6.2492 4.17244 5.36706 5.12414 4.71695 6.23753C4.06684 7.35092 3.6649 8.59837 3.54 9.89026C3.41749 11.1737 3.57468 12.469 4.00017 13.6823C4.42567 14.8956 5.1088 15.9964 6 16.9049L11.3 22.3584C11.393 22.4546 11.5036 22.531 11.6254 22.5832C11.7473 22.6353 11.878 22.6622 12.01 22.6622C12.142 22.6622 12.2727 22.6353 12.3946 22.5832C12.5164 22.531 12.627 22.4546 12.72 22.3584L18 16.9049C18.8912 15.9964 19.5743 14.8956 19.9998 13.6823C20.4253 12.469 20.5825 11.1737 20.46 9.89026ZM16.6 15.4568L12 20.1811L7.4 15.4568C6.72209 14.7605 6.20281 13.9186 5.87947 12.9916C5.55614 12.0647 5.43679 11.0757 5.53 10.0957C5.62382 9.10059 5.93177 8.13935 6.43157 7.28145C6.93138 6.42356 7.61056 5.69045 8.42 5.13513C9.48095 4.41132 10.7263 4.02522 12 4.02522C13.2737 4.02522 14.5191 4.41132 15.58 5.13513C16.387 5.6883 17.0647 6.41817 17.5644 7.27231C18.064 8.12644 18.3733 9.08364 18.47 10.0751C18.5663 11.0584 18.4484 12.0514 18.125 12.9822C17.8016 13.9129 17.2807 14.7582 16.6 15.4568ZM12 6.16216C11.11 6.16216 10.24 6.43321 9.49994 6.94104C8.75992 7.44887 8.18314 8.17067 7.84255 9.01516C7.50195 9.85965 7.41284 10.7889 7.58647 11.6854C7.7601 12.5819 8.18869 13.4054 8.81802 14.0518C9.44736 14.6981 10.2492 15.1383 11.1221 15.3166C11.995 15.4949 12.8998 15.4034 13.7221 15.0536C14.5443 14.7038 15.2471 14.1114 15.7416 13.3514C16.2361 12.5914 16.5 11.6978 16.5 10.7838C16.4974 9.55888 16.0224 8.38493 15.1791 7.51879C14.3357 6.65266 13.1927 6.16487 12 6.16216ZM12 13.3513C11.5055 13.3513 11.0222 13.2008 10.6111 12.9186C10.2 12.6365 9.87952 12.2355 9.6903 11.7663C9.50109 11.2972 9.45158 10.7809 9.54804 10.2829C9.6445 9.78481 9.88261 9.32731 10.2322 8.96823C10.5819 8.60915 11.0273 8.36462 11.5123 8.26555C11.9972 8.16648 12.4999 8.21732 12.9567 8.41165C13.4135 8.60599 13.804 8.93508 14.0787 9.35731C14.3534 9.77955 14.5 10.276 14.5 10.7838C14.5 11.4647 14.2366 12.1178 13.7678 12.5993C13.2989 13.0808 12.663 13.3513 12 13.3513Z" fill="#18181b"></path>
            </svg>
          </span>
          <p class="break-word text-xl font-semibold draggable">Location</p>
          <span class="text-base font-normal draggable">Los Angeles, CA 10428</span>
        </div>
        <div class="flex flex-col items-center gap-3 text-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M11 2.05405C9.02219 2.05405 7.08879 2.65639 5.4443 3.7849C3.79981 4.91341 2.51809 6.51741 1.76121 8.39405C1.00433 10.2707 0.806299 12.3357 1.19215 14.3279C1.578 16.3202 2.53041 18.1502 3.92894 19.5865C5.32746 21.0228 7.10929 22.001 9.0491 22.3972C10.9889 22.7935 12.9996 22.5901 14.8268 21.8128C16.6541 21.0355 18.2159 19.7191 19.3147 18.0302C20.4135 16.3412 21 14.3556 21 12.3243C21 10.9756 20.7413 9.6401 20.2388 8.39405C19.7363 7.14801 18.9997 6.01582 18.0711 5.06214C17.1425 4.10846 16.0401 3.35195 14.8268 2.83582C13.6136 2.3197 12.3132 2.05405 11 2.05405ZM11 20.5405C9.41775 20.5405 7.87104 20.0587 6.55544 19.1558C5.23985 18.253 4.21447 16.9698 3.60897 15.4685C3.00347 13.9672 2.84504 12.3152 3.15372 10.7214C3.4624 9.12762 4.22433 7.66363 5.34315 6.51457C6.46197 5.36552 7.88743 4.583 9.43928 4.26597C10.9911 3.94895 12.5997 4.11166 14.0615 4.73352C15.5233 5.35539 16.7727 6.40848 17.6518 7.75963C18.5308 9.11078 19 10.6993 19 12.3243C19 14.5034 18.1572 16.5932 16.6569 18.1341C15.1566 19.6749 13.1217 20.5405 11 20.5405ZM14.1 12.9713L12 11.7286V7.18918C12 6.9168 11.8946 6.65557 11.7071 6.46296C11.5196 6.27036 11.2652 6.16215 11 6.16215C10.7348 6.16215 10.4804 6.27036 10.2929 6.46296C10.1054 6.65557 10 6.9168 10 7.18918V12.3243C10 12.3243 10 12.4065 10 12.4476C10.0059 12.5183 10.0228 12.5877 10.05 12.653C10.0706 12.7139 10.0974 12.7724 10.13 12.8276C10.1574 12.8859 10.1909 12.941 10.23 12.9919L10.39 13.1254L10.48 13.2178L13.08 14.7584C13.2324 14.8471 13.4048 14.8931 13.58 14.8919C13.8014 14.8935 14.0171 14.8195 14.1932 14.6817C14.3693 14.5438 14.4959 14.3499 14.5531 14.1302C14.6103 13.9105 14.5948 13.6775 14.5092 13.4678C14.4236 13.2581 14.2726 13.0835 14.08 12.9713H14.1Z" fill="#18181b"></path>
            </svg>
          </span>
          <p class="break-word text-xl font-semibold draggable">Event Time</p>
          <span class="text-base font-normal draggable">10:00 AM-18:00 PM</span>
        </div>
      </div>
      </div>
      <div class="md:w-10/12 w-full">
      <div class="flex flex-col gap-5 p-5 md:p-10 w-full bg-white rounded-xl border border-zinc-200">
          <p class="break-word text-2xl font-bold mb-2 font-display draggable">Send a message</p>
          <form class="flex flex-col gap-6">
            <label class="flex flex-col gap-2 text-sm font-medium" for="first-name">
              Full Name
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your full name " type="text" id="first-name">
            <label class="flex flex-col gap-2 text-sm font-medium" for="email">
              Your Email
            </label>
            <input class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your email address " type="email" id="email">
            <label class="flex flex-col gap-2 text-sm font-medium" for="message">
              Message
            </label>
            <textarea rows="5" class="p-4 border border-solid outline-none rounded-md placeholder:text-sm placeholder:font-medium placeholder:text-zinc-500 border-zinc-200 focus:border-zinc-300" placeholder="Enter your message" id="message"></textarea>
            <a href="javascript:void(0)" class="flex items-center justify-center py-4 text-center text-primary-foreground px-7 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 font-semibold draggable"> Submit message </a>
          </form>
      </div>
  </div>
`,contentSectionsContacts=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Contact
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(contact01)">
     <img src="../../img/ai-website-builder/sections/contacts/contact-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Contact 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(contact02)">
     <img src="../../img/ai-website-builder/sections/contacts/contact-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Contact 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(contact03)">
     <img src="../../img/ai-website-builder/sections/contacts/contact-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Contact 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(contact04)">
     <img src="../../img/ai-website-builder/sections/contacts/contact-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Contact 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(contact05)">
     <img src="../../img/ai-website-builder/sections/contacts/contact-5.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Contact 05</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,callToAction01=`
<div class="bg-primary text-primary-foreground" data-section-type="call-to-action">
  <div class="container px-4 lg:px-0 mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full text-center md:text-left md:items-start justify-content-md-between py-28">
      <div class="w-full md:w-3/6">
        <h2 class="mb-4 text-4xl font-bold leading-tight font-display text-primary-foreground draggable" data-component-field="title">This is a Heading example</h2>
        <p class="break-word font-medium text-primary-foreground/80 draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
      </div>
      <div class="lg:justify-start w-full justify-center gap-4 mb-4 py-4 md:w-2/6">
        <a href="#contact" class="py-4 text-sm font-semibold border bg-primary-foreground text-primary px-7 hover:bg-primary-foreground/80 focus:ring-4 focus:ring-white-200 transition duration-300 text-center block w-full draggable">Contact Us</a>
      </div>
    </div>
  </div>
</div>
`,callToAction02=`
<div data-section-type="call-to-action">
  <div class="container px-4 lg:px-0 mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full text-center md:text-left md:items-start justify-content-md-between py-28">
      <div class="w-full md:w-3/6">
        <h2 class="mb-4 text-4xl font-bold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
        <p class="break-word font-medium draggable" data-component-field="paragraph">This is a body text example. You can change your fonts, colors, theme, and images in the editor.</p>
      </div>
      <div class="lg:justify-start w-full justify-center gap-4 mb-4 py-4 md:w-2/6">
        <a href="#contact" class="py-4 text-sm font-semibold border bg-primary text-primary-foreground px-7 hover:bg-primary/80 focus:ring-4 focus:ring-white-200 transition duration-300 text-center block w-full draggable">Contact Us</a>
      </div>
    </div>
  </div>
</div>
`,callToAction03=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14 min-w-full" data-section-type="call-to-action">
    <div class="flex w-full flex-col items-center justify-center xl:gap-14 md:gap-5 md:w-7/12 mx-auto">
      <div class="flex flex-col justify-center items-center col-span-1 text-center">
        <h2 class="mb-4 text-4xl font-bold leading-tight font-display w-full draggable" data-component-field="title">This is a Heading example</h2>
        <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
        <a href="#contact" class="py-4 px-20 text-sm font-semibold border bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-4 focus:ring-white-200 transition duration-300 text-center block rounded draggable">Contact Us</a>
      </div>
    </div>
  </div>
`,callToAction04=`
<div class="container flex px-4 lg:px-0 flex-col py-14 mx-auto relative min-w-full content-bg-image bg-cover bg-center" style="background-image: url(&quot;../../img/sites/placeholder-bg.png&quot;);" data-section-type="call-to-action">
    <div class="absolute inset-0 bg-black opacity-70 z-0 mask"></div>
    <div class="flex w-full flex-col items-center justify-center xl:gap-14 md:gap-5 md:w-7/12 mx-auto z-10">
      <div class="flex flex-col justify-center items-center col-span-1 text-center">
        <h2 class="mb-4 text-4xl font-bold leading-tight w-full font-display text-white draggable" data-component-field="title">This is a Heading example</h2>
        <p class="break-word mb-10 text-base font-normal leading-7 text-white draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
        <a href="#contact" class="py-4 px-20 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-4 focus:ring-white-200 transition duration-300 text-center block rounded draggable">Contact Us</a>
      </div>
    </div>
  </div>
`,contentSectionsCallToActions=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Call to action
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(callToAction01)">
     <img src="../../img/ai-website-builder/sections/call-to-actions/call-to-action-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Call to Action 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(callToAction02)">
     <img src="../../img/ai-website-builder/sections/call-to-actions/call-to-action-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Call to Action 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(callToAction03)">
     <img src="../../img/ai-website-builder/sections/call-to-actions/call-to-action-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Call to Action 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(callToAction04)">
     <img src="../../img/ai-website-builder/sections/call-to-actions/call-to-action-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Call to Action 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,team01=`
<div class="container px-4 lg:px-0 mx-auto py-14" data-section-type="team">
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Our team</h2>
      <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 lg:gap-10 mt-10 lg:mt-20 lg:grid-cols-3">
      <div class="flex flex-col items-center col-span-1 gap-2 px-10 py-16 md:px-40 md:py-16 lg:px-3 lg:py-10 xl:px-10 xl:py-16">
        <div class="flex flex-col gap-2 px-2 py-5 text-center items-center">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-center">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-center my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2 px-10 py-16 md:px-40 bg-white md:py-16 lg:px-3 lg:py-10 xl:px-10 xl:py-16 border border-zinc-200 rounded-md">
        <div class="flex flex-col gap-2 px-2 py-5 text-center items-center">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-center">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-center my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2 px-10 py-16 md:px-40 md:py-16 lg:px-3 lg:py-10 xl:px-10 xl:py-16">
        <div class="flex flex-col gap-2 px-2 py-5 text-center items-center">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-center">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-center my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,team02=`
<div class="container px-4 lg:px-0 mx-auto py-14" data-section-type="team">
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Our team</h2>
      <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-20 mt-10 lg:mt-20 lg:grid-cols-3">
      <div class="flex flex-col items-center col-span-1 gap-2 w-full">
        <div class="flex flex-col gap-2 text-start items-start w-full">
          <div class="bg-cover bg-center rounded-xl w-full h-[400px] mb-4 draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2 w-full">
        <div class="flex flex-col gap-2 text-start items-start w-full">
          <div class="bg-cover bg-center rounded-xl w-full h-[400px] mb-4 draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2 w-full">
        <div class="flex flex-col gap-2 text-start items-start w-full">
          <div class="bg-cover bg-center rounded-xl w-full h-[400px] mb-4 draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,team03=`
<div class="container px-4 lg:px-0 mx-auto py-14" data-section-type="team">
  <div class="flex flex-col items-center lg:items-start justify-center">
     <div class="flex flex-col w-full text-center lg:text-left align-items-center align-items-lg-start justify-content-center justify-content-lg-start md:w-7/12">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Our team</h2>
      <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-20 mt-10 lg:mt-20 lg:grid-cols-3">
      <div class="flex flex-col items-center col-span-1 gap-2">
        <div class="flex flex-col gap-2 text-start items-start">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2">
        <div class="flex flex-col gap-2 text-start items-start">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center col-span-1 gap-2">
        <div class="flex flex-col gap-2 text-start items-start">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 mb-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col items-start">
            <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
            <p class="break-word text-base font-medium leading-normal text-start my-1 draggable">Job title</p>
          </div>
          <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
            This is a body text example. You can change your fonts, colors, theme, and images in the editor.
          </p>
          <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,team04=`
<div class="container px-4 lg:px-0 mx-auto py-14" data-section-type="team">
    <div class="flex flex-col items-center lg:items-start justify-center">
      <div class="flex flex-col text-center lg:text-left align-items-center align-items-lg-start justify-content-center justify-content-lg-start w-full md:w-7/12">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">Our team</h2>
      <p class="break-word text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
      <div class="flex flex-row gap-20 mt-10 lg:mt-20 flex-wrap items-center justify-center lg:justify-between w-full">
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
         <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
         <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
        <div class="flex flex-row items-start col-span-1 gap-2 lg:w-1/4">
          <div class="bg-cover bg-center rounded-xl w-16 h-16 me-3 draggable" style="background-image: url(&quot;../../img/sites/avatar.png&quot;);"></div>
          <div class="flex flex-col gap-2 text-start items-start">
            <div class="flex flex-col items-start">
              <p class="break-word text-xl font-semibold mb-1 text-center draggable font-display">Full name</p>
              <p class="break-word text-base font-normal leading-normal text-start my-1 draggable">Add your Job Title here</p>
            </div>
            <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">
            <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
              <i class="fab fa-facebook me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
              <i class="fab fa-instagram me-5" aria-hidden="true"></i>
            </a>
            <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
              <i class="fab fa-twitter me-5" aria-hidden="true"></i>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,contentSectionsTeams=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Team
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(team01)">
     <img src="../../img/ai-website-builder/sections/teams/team-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Team 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(team02)">
     <img src="../../img/ai-website-builder/sections/teams/team-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Team 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(team03)">
     <img src="../../img/ai-website-builder/sections/teams/team-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Team 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(team04)">
     <img src="../../img/ai-website-builder/sections/teams/team-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Team 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,gallery01=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="gallery">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full h-fit gap-5 lg:gap-10">
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
  </div>
</div>
`,gallery02=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="gallery">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full h-fit gap-5 lg:gap-10">
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
  </div>
</div>
`,gallery03=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="gallery">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit gap-5 lg:gap-10">
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
  </div>
</div>
`,gallery04=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="gallery">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit gap-5 lg:gap-10">
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
      <div class="bg-cover bg-center rounded-xl w-full h-[400px] draggable" style="background-image: url(&quot;../../img/sites/placeholder.png&quot;);"></div>
    </div>
  </div>
</div>
`,contentSectionsGaleries=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Gallery
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(gallery01)">
     <img src="../../img/ai-website-builder/sections/galleries/gallery-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Gallery 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(gallery02)">
     <img src="../../img/ai-website-builder/sections/galleries/gallery-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Gallery 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(gallery03)">
     <img src="../../img/ai-website-builder/sections/galleries/gallery-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Gallery 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(gallery04)">
     <img src="../../img/ai-website-builder/sections/galleries/gallery-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Gallery 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,statistics01=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="statistics">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
      <h2 class="mb-4 text-4xl font-bold leading-tight draggable font-display" data-component-field="title">This is a Heading example</h2>
      <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
        This is a body text example. You can change your fonts, colors, theme, and images in the editor.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center lg:grid-cols-4" data-section-type="statistics-stats">
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 text-xl font-medium leading-8 draggable" data-component-field="title">
          First service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 text-xl font-medium leading-8 draggable" data-component-field="title">
          Second service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 text-xl font-medium leading-8 draggable" data-component-field="title">
          Third service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 text-xl font-medium leading-8 draggable" data-component-field="title">
          Fourth service
        </p>
      </div>
    </div>
  </div>
</div>
`,statistics02=`
<div class="bg-primary text-primary-foreground" data-section-type="statistics" id="statistics">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto py-14">
    <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
      <div class="flex flex-col items-center justify-center w-full text-center md:w-7/12 mx-auto">
        <h2 class="mb-4 text-4xl font-bold leading-tight font-display draggable" data-component-field="title">This is a Heading example</h2>
        <p class="break-word mb-10 text-base font-normal leading-7 draggable" data-component-field="paragraph">
          This is a body text example. You can change your fonts, colors, theme, and images in the editor.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center lg:grid-cols-4" data-section-type="statistics-stats">
        <div class="flex flex-col justify-center items-center text-center">
          <h2 class="mb-4 font-bold text-6xl w-full font-display draggable" data-component-field="number">50%</h2>
          <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
            First service
          </p>
        </div>
        <div class="flex flex-col justify-center items-center text-center">
          <h2 class="mb-4 font-bold text-6xl w-full font-display draggable" data-component-field="number">50%</h2>
          <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
            Second service
          </p>
        </div>
        <div class="flex flex-col justify-center items-center text-center">
          <h2 class="mb-4 font-bold text-6xl w-full font-display draggable" data-component-field="number">50%</h2>
          <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
            Third service
          </p>
        </div>
        <div class="flex flex-col justify-center items-center text-center">
          <h2 class="mb-4 font-bold text-6xl w-full font-display draggable" data-component-field="number">50%</h2>
          <p class="break-word mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
            Fourth service
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`,statistics03=`
<div class="container flex px-4 lg:px-0 flex-col mx-auto py-14" data-section-type="statistics">
  <div class="flex w-full flex-col items-center justify-center mb-8 xl:gap-14 md:gap-5">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center lg:grid-cols-4" data-section-type="statistics-stats">
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
          First service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
          Second service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-10 mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
          Third service
        </p>
      </div>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="mb-4 font-bold text-6xl w-full draggable font-display" data-component-field="number">50%</h2>
        <p class="break-word mb-md-0 text-xl font-medium leading-8 draggable" data-component-field="title">
          Fourth service
        </p>
      </div>
    </div>
  </div>
</div>
`,contentSectionsStatistics=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Statistics
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(statistics01)">
     <img src="../../img/ai-website-builder/sections/statistics/statistics-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Statistics 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(statistics02)">
     <img src="../../img/ai-website-builder/sections/statistics/statistics-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Statistics 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(statistics03)">
     <img src="../../img/ai-website-builder/sections/statistics/statistics-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Statistics 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,footer01=`
<div class="w-full" data-section-type="footer">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-20 lg:flex-row">
            <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
      <div class="flex items-center gap-8">
        <a href="#home" class="rounded-none">Home</a>
        <a href="#services" class="rounded-none">Services</a>
        <a href="#testimonials" class="rounded-none">Testimonials</a>
      </div>
    </div>
  </div>
  <hr class="w-full h-0 border-solid">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-12 lg:flex-row">
      <span class="font-medium text-muted text-sm draggable mb-4 md:mb-0"> © 2024 Loopple. All rights reserved. </span>
      <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">              
        <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
          <i class="fab fa-facebook me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
          <i class="fab fa-instagram me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
          <i class="fab fa-twitter me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="pinterest" class="text-muted text-lg rounded-none" data-id="3">
          <i class="fab fa-pinterest" aria-hidden="true"></i>
        </a>            
      </div>
    </div>
  </div>
</div>
`,footer02=`
<div class="w-full" data-section-type="footer">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex items-center flex-col justify-between w-full px-2 group py-9 shrink-0">
      <span class="font-bold draggable border-radius-lg mb-6" data-component-type="logo"> LOGO COMPANY </span>
      <div class="flex items-center gap-8">
        <a href="#home" class="rounded-none">Home</a>
        <a href="#services" class="rounded-none">Services</a>
        <a href="#testimonials" class="rounded-none">Testimonials</a>
      </div>
    </div>
  </div>
  <hr class="w-full h-0 border-solid">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-12 lg:flex-row">
      <span class="font-medium text-muted text-sm draggable mb-4 md:mb-0"> © 2024 Loopple. All rights reserved. </span>
      <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">              
        <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
          <i class="fab fa-facebook me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
          <i class="fab fa-instagram me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
          <i class="fab fa-twitter me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="pinterest" class="text-muted text-lg rounded-none" data-id="3">
          <i class="fab fa-pinterest" aria-hidden="true"></i>
        </a>            
      </div>
    </div>
  </div>
</div>
`,footer03=`
<div class="w-full" data-section-type="footer">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-20 lg:flex-row">
      <div class="flex items-center gap-8">
        <a href="#home" class="rounded-none">Home</a>
        <a href="#services" class="rounded-none">Services</a>
        <a href="#testimonials" class="rounded-none">Testimonials</a>
      </div>
      <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
    </div>
  </div>
  <hr class="w-full h-0 border-solid">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-12 lg:flex-row">
      <span class="font-medium text-muted text-sm draggable mb-4 md:mb-0"> © 2024 Loopple. All rights reserved. </span>
      <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">              
        <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
          <i class="fab fa-facebook me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
          <i class="fab fa-instagram me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
          <i class="fab fa-twitter me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="pinterest" class="text-muted text-lg rounded-none" data-id="3">
          <i class="fab fa-pinterest" aria-hidden="true"></i>
        </a>            
      </div>
    </div>
  </div>
</div>
`,footer04=`
<div class="w-full" data-section-type="footer">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-20 lg:flex-row">
      <div class="flex items-center gap-8">
        <a href="#home" class="rounded-none">Home</a>
        <a href="#services" class="rounded-none">Services</a>
        <a href="#testimonials" class="rounded-none">Testimonials</a>
      </div>
      <div class="d-flex justify-content-center social-zone gap-4 animate__animated animate__fadeIn animate__fast draggable">              
        <a href="https://yourlink.com" data-social="facebook" class="text-muted text-lg rounded-none" data-id="0">
          <i class="fab fa-facebook me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="instagram" class="text-muted text-lg rounded-none" data-id="1">
          <i class="fab fa-instagram me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="twitter" class="text-muted text-lg rounded-none" data-id="2">
          <i class="fab fa-twitter me-5" aria-hidden="true"></i>
        </a>              
        <a href="https://yourlink.com" data-social="pinterest" class="text-muted text-lg rounded-none" data-id="3">
          <i class="fab fa-pinterest" aria-hidden="true"></i>
        </a>            
      </div>
    </div>
  </div>
  <hr class="w-full h-0 border-solid">
  <div class="container flex px-4 lg:px-0 flex-col mx-auto">
    <div class="flex flex-col items-center justify-between w-full col-span-12 my-12 lg:flex-row">
      <span class="font-medium text-muted text-sm draggable mb-4 md:mb-0"> © 2024 Loopple. All rights reserved. </span>
      <span class="font-bold draggable border-radius-lg" data-component-type="logo"> LOGO COMPANY </span>
    </div>
  </div>
</div>
`,contentSectionsFooters=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex" id="settingsDrawerTitle"> 
    Footer
     <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
      </svg>
    </a>
</div>
<div class="flex flex-col gap-5 sm:mb-0 mb-16">
  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(footer01)">
     <img src="../../img/ai-website-builder/sections/footers/footer-1.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Footer 01</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(footer02)">
     <img src="../../img/ai-website-builder/sections/footers/footer-2.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Footer 02</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

  <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(footer03)">
     <img src="../../img/ai-website-builder/sections/footers/footer-3.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Footer 03</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>

   <div class="border rounded p-3 cursor-pointer" onclick="addNewSection(footer04)">
     <img src="../../img/ai-website-builder/sections/footers/footer-4.png" class="mb-2" />
     <div class="flex items-center">
      <span class="font-semibold text-sm">Footer 04</span>
      <svg class="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>
    </div>
  </div>
</div>
`,elementAddSection=document.querySelector("#element-add-section"),buttonAddSection=document.querySelector("#button-add-section"),elementRemoveSection=document.querySelector("#element-remove-section"),buttonRemoveSection=document.querySelector("#button-remove-section"),buttonDrawerBack=document.querySelector("#button-drawer-back"),sectionCurrent,showAddNewSectionAndRemoveSectionButtons=e=>{var t=getBuilderContainerRectValues().builderContainerDistanceTop,l=e.getBoundingClientRect();"footer"!==e.getAttribute("data-section-type")?(elementAddSection.classList.remove("hidden"),elementAddSection.classList.add("flex"),elementAddSection.style.border="2px solid #6023FF",elementAddSection.style.top=l.top+l.height-t+73+"px"):(elementAddSection.classList.add("hidden"),elementAddSection.style.border="none"),"navigation"!==e.getAttribute("data-section-type")&&"footer"!==e.getAttribute("data-section-type")?(elementRemoveSection.classList.remove("hidden"),elementRemoveSection.style.top=l.top-t+73+10+"px",buttonRemoveSection.style.left=l.right-buttonRemoveSection.getBoundingClientRect().width-15+"px"):(console.log("add hidden"),elementRemoveSection.classList.add("hidden"))},openContentSection=(buttonAddSection.addEventListener("click",function(){sectionCurrent=elementCurrHover,openDrawer("#settingsDrawer"),setSettingsContentDrawerContent(contentSections)}),buttonRemoveSection.addEventListener("click",function(){(sectionCurrent=elementCurrHover).remove(),elementRemoveSection.classList.add("hidden"),elementAddSection.classList.add("hidden"),closeDrawer();let e=document.querySelector("body").getAttribute("data-project");setTimeout(()=>actionSave(e,!1),500)}),e=>{switch(e){case"navigations":setSettingsContentDrawerContent(contentSectionsNavigations);break;case"headers":setSettingsContentDrawerContent(contentSectionsHeaders);break;case"features":setSettingsContentDrawerContent(contentSectionsFeatures);break;case"testimonials":setSettingsContentDrawerContent(contentSectionsTestimonials);break;case"contacts":setSettingsContentDrawerContent(contentSectionsContacts);break;case"call-to-actions":setSettingsContentDrawerContent(contentSectionsCallToActions);break;case"teams":setSettingsContentDrawerContent(contentSectionsTeams);break;case"galleries":setSettingsContentDrawerContent(contentSectionsGaleries);break;case"statistics":setSettingsContentDrawerContent(contentSectionsStatistics);break;case"footers":setSettingsContentDrawerContent(contentSectionsFooters)}buttonDrawerBack.setAttribute("onclick","setSettingsContentDrawerContent(contentSections)")}),addNewSection=async e=>{sectionCurrent.insertAdjacentHTML("afterend",e);var e=sectionCurrent.nextElementSibling,t=e.getAttribute("id");e.setAttribute("id","new-section");let l;await $.ajax({url:"/get-ai-website-prompt/"+document.querySelector("body").getAttribute("data-site"),method:"GET",data:{_token:$('meta[name="csrf-token"]').attr("content")},success:function(e){l=e},error:function(e){console.log(e.responseText)}});try{await generateAndReplaceTexts("#new-section",l,()=>{})}catch(e){}selectedItem();let a=document.querySelector("body").getAttribute("data-project");setTimeout(()=>actionSave(a,!1),500),e.setAttribute("id",t),closeDrawer(),document.querySelector('button[data-target="#details"]').click(),addPreventDefaultToAllLinkInsideBuilderContainer();initDraggables(document.querySelectorAll(".draggable"));e=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();switch(e){case"333 71% 51%":setButtonsBorderRadius("rounded-full");break;case"240 6% 10%":setButtonsBorderRadius("rounded-sm");break;case"226 71% 40%":case"25 95% 53%":case"163 88% 20%":setButtonsBorderRadius("rounded-none");break;case"0 0% 100%":setButtonsBorderRadius("rounded-md")}},states=(selectedItem(),[]),min=0,max=20,position,body=document.querySelector("body"),showLeavePopup=!0,navbarPublishButton=document.querySelector("#navbar-publish-button"),navbarSaveChangesButton=document.querySelector("#navbar-save-changes-button"),navbarSaveChangesSeparator=document.querySelector("#navbar-save-changes-separator");window.addEventListener("load",async()=>{observerBody.disconnect();var e=getQueryParam("website"),t=document.querySelector("#loopple-sites-loading .material-icon-parent"),l=document.querySelector("#loopple-sites-loading .material-symbols-rounded"),a=document.querySelector("#loopple-sites-progress"),o=document.querySelector("#loopple-sites-loading-text");let s=document.querySelector("#loading-percentage-text"),i=document.querySelector("#loading-progress-bar");e&&(t.classList.remove("hidden"),o.classList.remove("hidden"),await generateAndReplaceTexts(".builder-container",e,e=>{s.innerText=e+"%",i.style.width=e+"%",console.log("Loading percentage upd`${percentage}%`ated: ",e)}),(t=new URL(window.location)).searchParams.delete("website"),window.history.replaceState({},document.title,t),actionSave(site,!1)),e&&(l.innerHTML="check",a.innerHTML='<p class="text-3xl font-extrabold text-center mx-auto">Your website is ready!</p>',o.innerHTML="You can now take a look at your new website.",(t=document.getElementById("confetti-canvas")).confetti=t.confetti||await confetti.create(t,{resize:!0}),t.confetti({particleCount:200,spread:160}),await new Promise(e=>setTimeout(e,3e3))),s.innerText="100%",i.style.width="100%",await new Promise(e=>setTimeout(e,500)),document.querySelector("#loopple-sites-loading").remove(),startObserverBody()});var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(e){return new bootstrap.Tooltip(e)});function openDrawer(e){var e=document.querySelector(e),t=document.querySelectorAll(".loopple-drawer.loopple-drawer-open");document.querySelector("#sites-navbar").classList.add("loopple-sites-navbar-pinned"),t&&t.forEach((e,t)=>{e.classList.remove("loopple-drawer-open")}),e&&e.classList.toggle("loopple-drawer-open"),window.innerWidth<1025&&body.classList.add("loopple-overflow-hidden")}function closeDrawer(){document.querySelector("#sites-navbar");var e=document.querySelectorAll(".loopple-drawer"),t=document.querySelector("#publishDrawer");e&&(e.forEach((e,t)=>{e.classList.remove("loopple-drawer-open")}),1025<window.innerWidth)&&t.classList.add("loopple-drawer-open"),body.classList.remove("loopple-overflow-hidden")}function changeSEOTextValue(e,t){""!=e.value?document.querySelector(t).innerHTML=e.value:document.querySelector(t).innerHTML=e.defaultValue}function changeTextValue(e){elementCurr.textContent=e.value,resizeElementClickSelection(elementCurr)}function initFormGroup(e){e.closest(".loopple-form-group").classList.toggle("loopple-form-group-focused")}function getCharactersNumber(e,t){e=e.value.length;document.querySelector(t).getAttribute("maxLength")<(document.querySelector(t).innerHTML=e)?(document.querySelector(t).classList.add("loopple-text-danger"),document.querySelector(t).classList.remove("loopple-text-success")):(document.querySelector(t).classList.remove("loopple-text-danger"),document.querySelector(t).classList.add("loopple-text-success"))}function setResponsive(e,t){var l=document.querySelector(".edit-buttons"),a=e.parentNode.querySelectorAll(".loopple-btn"),o=document.querySelector("#responsive-modal .loopple-modal-body"),s=(a.forEach((e,t)=>{e.classList.remove("active")}),e.classList.add("active"),l&&l.remove(),document.querySelector(".card-selection").style.border="0",document.querySelector(".iframe-container"));switch(t){case"mobile":s.style.maxWidth="400px",s.style.left="calc(50vw - 200px)";break;case"tablet":s.style.maxWidth="700px",s.style.left="calc(50vw - 350px)";break;case"desktop":s.style.maxWidth=null,s.style.left=null}if(window.innerWidth<1025)switch(o.style.transformOrigin="top left",t){case"mobile":s.style.maxWidth=null,s.style.left="calc(50vw - 200px)",o.style.transform=null,o.style.width=null,o.style.height=null;break;case"tablet":s.style.maxWidth=null,s.style.left="calc(50vw - 350px)",o.style.transform="scale(0.45)",o.style.width="222%",o.style.height="220%";break;case"desktop":s.style.maxWidth=null,s.style.left=null,o.style.transform="scale(0.295)",o.style.width="340%",o.style.height="340%"}}function modalOpen(){document.querySelectorAll("[data-modal]").forEach(function(l){l.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById(l.dataset.modal);t.classList.add("loopple-modal-open"),t.querySelectorAll(".loopple-modal-exit").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("loopple-modal-open")})})})})}let selectedImage;function selectImage(e){document.querySelector(".loopple-choose-image").classList.remove("loopple-opacity-6"),document.querySelectorAll(".loopple-select-image").forEach((e,t)=>{e.classList.remove("loopple-border-primary")}),e.classList.add("loopple-border-primary"),selectedImage=e}function chooseImage(e){e.classList.contains("loopple-opacity-6")||(e.closest(".loopple-modal-open").classList.remove("loopple-modal-open"),selectedImage&&!e.closest(".loopple-images-pexels")?elementCurr.style.backgroundImage||elementCurr.classList.value.includes("builder-container")?elementCurr.style.backgroundImage="url("+selectedImage.src+")":(elementCurr.classList.contains("image-gallery-item")?elementCurr.firstElementChild:elementCurr).setAttribute("src",selectedImage.src):(selectedItemImage=e.previousElementSibling.getAttribute("src"),elementCurr.style.backgroundImage||elementCurr.classList.value.includes("builder-container")?elementCurr.style.backgroundImage="url("+selectedItemImage+")":(elementCurr.classList.contains("image-gallery-item")?elementCurr.firstElementChild:elementCurr).setAttribute("src",selectedItemImage)))}let activateLinkOption=e=>{var t=document.getElementById("linkType"),e=e.checked,l=document.createElement("a"),a=document.createElement("button"),o=document.getElementById("inputAddLink"),s=elementCurr.classList.value.split(" "),i=elementCurr.innerHTML,n=document.getElementById("linkTypeLabel");e?(o.removeAttribute("disabled"),t.removeAttribute("disabled"),"A"!==elementCurr.tagName&&(l.innerHTML=i,l.classList.add(...s),elementCurr.parentNode.replaceChild(l,elementCurr),(elementCurr=l).addEventListener("click",e=>{e.preventDefault()})),elementCurr.setAttribute("href",""===o.value?"":o.value)):(o.setAttribute("disabled","disabled"),t.setAttribute("disabled","disabled"),t.value="default",o.value="",elementCurr.removeAttribute("href"),n.innerHTML="Link","BUTTON"!==elementCurr.tagName&&(a.innerHTML=i,a.classList.add(...s),elementCurr.parentNode.replaceChild(a,elementCurr),elementCurr=a))},addLink=(window.addEventListener("load",()=>{addPreventDefaultToAllLinkInsideBuilderContainer()}),e=>{var t;0!==e.value.length?(t=document.getElementById("linkType").value,elementCurr.setAttribute("href","emailto"===t?"mailto:"+e.value:e.value)):elementCurr.setAttribute("href","javascript:;")}),linkTypeSelect=e=>{var t;"external"===e?(elementCurr.setAttribute("data-type-link","external"),elementCurr.setAttribute("target","_blank"),elementCurr.setAttribute("href",""===inputAddLink.value?"":inputAddLink.value)):"emailto"===e?(t=elementCurr.getAttribute("href"),elementCurr.setAttribute("data-type-link","emailto"),elementCurr.setAttribute("href","mailto:"+t),elementCurr.removeAttribute("target")):"default"===e&&(elementCurr.setAttribute("data-type-link","default"),elementCurr.removeAttribute("target"),elementCurr.setAttribute("href",""===inputAddLink.value?"":inputAddLink.value))};function pinSitesNavbar(){document.querySelector("#sites-navbar").classList.toggle("loopple-sites-navbar-pinned")}let buildWebsiteConfig=()=>{var t=document.documentElement,l={theme_variables:""};for(let e=0;e<t.style.length;e++){var a,o=t.style[e];o.startsWith("--")&&(a=getComputedStyle(t).getPropertyValue(o).trim(),l.theme_variables+=o+`: ${a}; `)}return l},actionSave=function(e,t,l=!1){for(var a=document.querySelector(".builder-container").innerHTML,o=document.createElement("div"),s=document.querySelector(".loopple-save-changes-dot"),i=buildWebsiteConfig(),n=(s&&s.classList.add("loopple-d-none"),o.innerHTML=a,o.getElementsByClassName("drop-zone")),r=[],d=0;d<n.length;d++)r.push(n[d]);for(d=0;d<r.length;d++)r[d].classList.remove("drop-zone");for(var c=o.getElementsByClassName("draggable"),p=[],d=0;d<c.length;d++)p.push(c[d]);for(d=0;d<p.length;d++)p[d].classList.remove("draggable"),p[d].removeAttribute("draggable");for(var m=o.getElementsByClassName("loopple-sites-drag-zone-border"),g=[],d=0;d<m.length;d++)g.push(m[d]);for(d=0;d<g.length;d++)g[d].remove();for(var u=o.querySelectorAll("[contenteditable]"),f=[],d=0;d<u.length;d++)f.push(u[d]);for(d=0;d<f.length;d++)f[d].removeAttribute("contenteditable");null==t&&(t=!0),route="../builder/"+e,axios.patch(route,{body:a,bodyClean:o.innerHTML,websiteConfig:i}).then(function(e){1==t&&$.notify({message:"Site saved!"},{element:"body",type:"success",showProgressbar:!1,placement:{from:"top",align:"center"},offset:20,spacing:10,z_index:1031,delay:10,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="w-3/4 lg:w-1/4 loopple-alert !bg-green-500 loopple-border !mt-16 loopple-border-white loopple-py-2 loopple-px-3 loopple-font-weight-400 loopple-shadow-xs loopple-text-md animated fadeInDown loopple-d-flex" role="alert"><button type="button" aria-hidden="true" class="loopple-btn !bg-green-500 loopple-close loopple-text-md loopple-btn-simple loopple-text-white loopple-p-0 loopple-mt-0.5 loopple-mr-0 loopple-top-0" data-notify="dismiss"><span class="material-symbols-outlined text-lg">\n                                close\n                            </span></button><span data-notify="icon"></span> <span data-notify="title"></span> <span data-notify="message" class="loopple-text-sm loopple-text-white">Changes saved successfully!</span><a href="#" target="_blank" data-notify="url"></a></div>'})}).catch(function(e){console.log(e.response.data.message),"Please login in your account to modify website."===e.response.data.message&&$.notify({message:e.response.data.message},{element:"body",type:"error",showProgressbar:!1,placement:{from:"top",align:"center"},offset:20,spacing:10,z_index:1031,delay:10,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="w-3/4 lg:w-1/4 loopple-alert !bg-red-500 loopple-border !mt-16 loopple-border-white loopple-py-2 loopple-px-3 loopple-font-weight-400 loopple-shadow-xs loopple-text-md animated fadeInDown loopple-d-flex" role="alert"><button type="button" aria-hidden="true" class="loopple-btn !bg-red-500 loopple-close loopple-text-md loopple-btn-simple loopple-text-white loopple-p-0 loopple-mt-0.5 loopple-mr-0 loopple-top-0" data-notify="dismiss"><span class="material-symbols-outlined text-lg">\n                                    close\n                                </span></button><span data-notify="icon"></span> <span data-notify="title"></span> '+`<span data-notify="message" class="loopple-text-sm loopple-text-white">${e.response.data.message}</span>`+'<a href="#" target="_blank" data-notify="url"></a></div>'})}),l&&(showLeavePopup=!1),t&&(navbarPublishButton.classList.remove("loopple-d-none"),navbarSaveChangesButton.classList.add("loopple-d-none")),console.log("save"),document.querySelector("#responsive-modal iframe")&&(console.log("refresh ifram"),setTimeout(()=>document.querySelector("#responsive-modal iframe").contentWindow.location.reload(!0),500))};function addAltToImage(e){elementCurr.setAttribute("alt",e.value)}function addAltToImageGallery(e){elementCurr.firstElementChild.setAttribute("alt",e.value)}navbarPublishButton.addEventListener("click",()=>{openDrawer("#publishDrawer");var e=document.getElementById("settings-tab");navbarPublishButton.classList.add("loopple-d-none"),navbarSaveChangesSeparator.classList.add("loopple-d-none"),e.click()}),document.addEventListener("keydown",function(e){document.querySelector("body").getAttribute("data-site")&&(window.navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)&&83==e.keyCode&&(e.preventDefault(),actionSave(site))},!1);let imgStyleSelect=e=>{"circle"===e?(elementCurr.classList.add("rounded-circle"),elementCurr.classList.remove("border-radius-lg")):"rectangle"===e?(elementCurr.classList.remove("rounded-circle"),elementCurr.classList.add("border-radius-lg")):"simple"===e&&(elementCurr.classList.remove("rounded-circle"),elementCurr.classList.remove("border-radius-lg"))},listStyleSelect=e=>{"simple"===e?(elementCurr.closest(".loopple-list").classList.add("list-group-flush"),elementCurr.closest(".loopple-list").classList.remove("list-group-numbered")):"numbered"===e&&(elementCurr.closest(".loopple-list").classList.remove("list-group-flush"),elementCurr.closest(".loopple-list").classList.add("list-group-numbered"))},listChangeElements=e=>{var t,l=elementCurr,a=document.querySelector(".card-selection"),o=(elementCurr.innerHTML=" ",e.value.split("\n")),s=o.length;for(let e=0;e<s;++e)(t=document.createElement("li")).classList.add("list-group-item"),t.innerHTML="<span>\n"+o[e]+"\n</span>",l.appendChild(t);a.style.height=elementCurr.offsetHeight+4+"px"};function setSiteCategory(e){document.querySelectorAll(".loopple-settings-categories").forEach((e,t)=>{e.classList.add("loopple-d-none")}),e&&document.querySelector(e).classList.remove("loopple-d-none")}function changeEditorComponentsSizes(e){var t=document.querySelector(".card-selection"),l=document.querySelector(".card-selection-button"),a=document.querySelector(".edit-buttons"),o=document.querySelector(".builder-container").getBoundingClientRect().top,s=document.querySelector(".builder-container").getBoundingClientRect().left,i=document.querySelector(".builder-container").scrollTop;t&&e&&(t.style.border="1px solid #5e72e4",t.style.height=e.closest(".draggable").offsetHeight+4+"px",t.style.width=e.closest(".draggable").offsetWidth+4+"px",t.style.top=e.closest(".draggable").getBoundingClientRect().top+75-o-2+"px",t.style.left=e.closest(".draggable").getBoundingClientRect().left-s-2+"px"),l&&e&&(l.style.top=e.closest(".draggable").getBoundingClientRect().top-o+e.closest(".draggable").offsetHeight-i+1+"px",l.style.left=e.closest(".draggable").getBoundingClientRect().left-s-i-2+"px"),a&&e&&(a.style.top=e.closest(".draggable").getBoundingClientRect().top+75-o+"px",a.style.left=e.closest(".draggable").getBoundingClientRect().left+e.closest(".draggable").offsetWidth-104+"px")}function executeChangeFunction(){var e=document.querySelectorAll(".loopple-button-revert"),t=document.querySelector(".builder-container"),l=document.querySelector(".loopple-save-changes-dot");if(t.innerHTML!==states[position]&&(min<max&&(states[min]=t.innerHTML),t.innerHTML!==states[position])){if(min>max){for(var a=1;a<20;a++)states[a]=states[a+1];states[19]=t.innerHTML}1<states.length&&(e.forEach(e=>e.classList.remove("loopple-btn-disabled")),l.classList.remove("loopple-d-none"),navbarPublishButton.classList.add("loopple-d-none"),navbarSaveChangesButton.classList.remove("loopple-d-none"),navbarSaveChangesSeparator.classList.remove("loopple-d-none")),min++,position=states.length-1}}MutationObserver=window.MutationObserver||window.WebKitMutationObserver;let timeout,observerBody=new MutationObserver(function(e,t){e.forEach(e=>{if(!e.target.classList||!e.target.classList.contains("dnXmp"))switch(e.type){case"attributes":switch(e.attributeName){case"class":case"style":executeChangeFunction();break;case"src":clearTimeout(timeout),timeout=setTimeout(()=>{executeChangeFunction()},700)}case"childList":var t=e.addedNodes,l=e.removedNodes;0<t.length?t.forEach((e,t)=>{e.nodeType===Node.TEXT_NODE?(clearTimeout(timeout),timeout=setTimeout(()=>{executeChangeFunction()},500)):"dnXmp"!=e.className&&executeChangeFunction()}):0<l.length&&0==t.length&&l.forEach((e,t)=>{"dnXmp"!=e.className&&executeChangeFunction()});break;case"characterData":e.target.nodeType==Node.TEXT_NODE&&(clearTimeout(timeout),timeout=setTimeout(()=>{executeChangeFunction()},500))}}),changeEditorComponentsSizes(elementCurr),actionSave(site,!1)});function startObserverBody(){observerBody.observe(document.querySelector("body .builder-container"),{childList:!0,subtree:!0,characterData:!0,attributeFilter:["class","src","style"]})}function revert(){document.querySelectorAll(".tooltip").forEach(e=>{e.remove()});var e=document.querySelectorAll(".loopple-button-append"),t=document.querySelectorAll(".loopple-button-revert"),l=document.querySelector(".builder-container"),a=document.querySelector(".loopple-save-changes-dot");e.forEach(e=>e.classList.remove("loopple-btn-disabled")),0<position&&(observerBody.disconnect(),l.innerHTML=states[position-1],position--),0==position&&(t.forEach(e=>e.classList.add("loopple-btn-disabled")),a.classList.add("loopple-d-none")),startObserverBody(),document.querySelectorAll(".builder-container a[href]:not([data-bs-toggle='dropdown']:not([data-toggle='dropdown']").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})}),navbarSaveChangesButton.classList.remove("loopple-d-none"),navbarSaveChangesSeparator.classList.remove("loopple-d-none"),navbarPublishButton.classList.add("loopple-d-none"),actionSave(site,!1)}function redo(){document.querySelectorAll(".tooltip").forEach(e=>{e.remove()});var e=document.querySelectorAll(".loopple-button-append"),t=document.querySelectorAll(".loopple-button-revert"),l=document.querySelector(".builder-container"),a=document.querySelector(".loopple-save-changes-dot");t.forEach(e=>e.classList.remove("loopple-btn-disabled")),a.classList.remove("loopple-d-none"),position<states.length-1&&(observerBody.disconnect(),l.innerHTML=states[position+1],position++),position==states.length-1&&e.forEach(e=>e.classList.add("loopple-btn-disabled")),startObserverBody(),document.querySelectorAll(".builder-container a[href]:not([data-bs-toggle='dropdown']:not([data-toggle='dropdown']").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})}),navbarSaveChangesButton.classList.remove("loopple-d-none"),navbarSaveChangesSeparator.classList.remove("loopple-d-none"),navbarPublishButton.classList.add("loopple-d-none"),actionSave(site,!1)}startObserverBody(),window.onbeforeunload=()=>!!(1<states.length&&showLeavePopup)||null;let apikey="563492ad6f91700001000001dc6affa2e9ca4859bac4126a62054f5c",input=document.querySelector("#inputImageSearch"),search_btn=document.querySelector("#imageSearchBtn"),showmore_btn=document.querySelector("#imageSearchMore"),looppleImagesLoader=document.querySelector(".loopple-images-loader-container"),page_num=1,search_text="",search=!1;function cleargallery(){document.querySelector(".display_images").innerHTML="",page_num=1}async function CuratedPhotos(e){display_images(await(await fetch("https://api.pexels.com/v1/curated?page="+e,{method:"GET",headers:{Accept:"application/json",Authorization:apikey}})).json())}function display_images(e){let l=document.querySelector(".loopple-images-loader-container");0==e.photos.length?(document.querySelector(".display_images").innerHTML='<p class="loopple-text-gray loopple-text-sm"> No photos found :( </p>',l.classList.add("loopple-d-none")):e.photos.forEach(e=>{let t=document.createElement("div");t.classList.add("loopple-col-3","loopple-pr-2"),t.innerHTML=`<div class="loopple-images-pexels loopple-mb-3"><img class="loopple-w-100 object-fit-cover loopple-border-radius-sm" src=${e.src.large2x}><a class="loopple-btn loopple-btn-sm loopple-btn-white" onclick="chooseImage(this)">Insert image</a></div>`,setTimeout(function(){l.classList.add("loopple-d-none"),document.querySelector(".display_images").appendChild(t)},500)})}async function SearchPhotos(e,t){display_images(await(await fetch(`https://api.pexels.com/v1/search?query=${e}&page=`+t,{method:"GET",headers:{Accept:"application/json",Authorization:apikey}})).json())}input.addEventListener("keyup",e=>{13===e.keyCode&&(search_text=input.value,cleargallery(),search=!0,looppleImagesLoader.classList.remove("loopple-d-none"),""==search_text?(CuratedPhotos(page_num),looppleImagesLoader.classList.add("loopple-d-none")):SearchPhotos(search_text,page_num))}),search_btn.addEventListener("click",e=>{search_text=input.value,cleargallery(),search=!0,looppleImagesLoader.classList.remove("loopple-d-none"),""==search_text?(CuratedPhotos(page_num),looppleImagesLoader.classList.add("loopple-d-none")):SearchPhotos(search_text,page_num)}),showmore_btn.addEventListener("click",()=>{search?""!==search_text.value&&(page_num++,SearchPhotos(search_text,page_num)):CuratedPhotos(++page_num)}),CuratedPhotos(page_num),selectedItem(),selectedItemHover(),modalOpen();let elementCurr;var editorButton='<button class="loopple-btn loopple-btn-icon loopple-btn-primary loopple-mr-0 loopple-btn-sm loopple-border loopple-border-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Move element above" onclick="moveElementAbove(this)"><span class="loopple-btn-inner--icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V4Z" fill="#fff"/><path d="M6.70711 10.7071C6.31658 11.0976 5.68342 11.0976 5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289L11.2929 3.29289C11.6715 2.91431 12.2811 2.90107 12.6757 3.26285L18.6757 8.76285C19.0828 9.13604 19.1103 9.76861 18.7372 10.1757C18.364 10.5828 17.7314 10.6103 17.3243 10.2372L12.0301 5.38414L6.70711 10.7071Z" fill="#fff"/></svg></span></button><button class="loopple-btn loopple-btn-icon loopple-btn-primary loopple-mr-0 loopple-btn-sm loopple-border loopple-border-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Move element below" onclick="moveElementBelow(this)"><span class="loopple-btn-inner--icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V6Z" fill="#fff"/><path d="M6.70711 11.2929C6.31658 10.9024 5.68342 10.9024 5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071L11.2929 18.7071C11.6715 19.0857 12.2811 19.0989 12.6757 18.7372L18.6757 13.2372C19.0828 12.864 19.1103 12.2314 18.7372 11.8243C18.364 11.4172 17.7314 11.3897 17.3243 11.7628L12.0301 16.6159L6.70711 11.2929Z" fill="#fff"/></svg></span></button><button class="loopple-btn loopple-btn-icon loopple-btn-primary loopple-mr-0 loopple-btn-sm loopple-border loopple-border-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Duplicate element" onclick="duplicateElement(this)"><span class="loopple-btn-inner--icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M14.25 6.75H17.25V9.75C17.25 10.1644 17.5856 10.5 18 10.5H19.5C19.9144 10.5 20.25 10.1644 20.25 9.75V6.75H23.25C23.6644 6.75 24 6.41437 24 6V4.5C24 4.08563 23.6644 3.75 23.25 3.75H20.25V0.75C20.25 0.335625 19.9144 0 19.5 0H18C17.5856 0 17.25 0.335625 17.25 0.75V3.75H14.25C13.8356 3.75 13.5 4.08563 13.5 4.5V6C13.5 6.41437 13.8356 6.75 14.25 6.75ZM23.4183 17.0672L20.6742 15.8236L13.1184 19.2483C12.7641 19.4091 12.3877 19.4906 12 19.4906C11.6123 19.4906 11.2364 19.4091 10.8816 19.2483L3.32578 15.8236L0.581714 17.0672C-0.194067 17.4188 -0.194067 18.5906 0.581714 18.9422L11.5008 23.8917C11.8195 24.0361 12.18 24.0361 12.4987 23.8917L23.4183 18.9422C24.1941 18.5906 24.1941 17.4188 23.4183 17.0672ZM0.581714 12.9328L11.5008 17.8823C11.8195 18.0267 12.18 18.0267 12.4987 17.8823L21 14.0287V13.1578C20.2819 13.3631 19.5342 13.4995 18.75 13.4995C14.6245 13.4995 11.2162 10.4681 10.6069 6.51328L0.581714 11.0578C-0.194067 11.4094 -0.194067 12.5812 0.581714 12.9328Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></button><button class="loopple-btn loopple-btn-icon loopple-btn-dark loopple-mr-0 loopple-btn-sm loopple-border loopple-border-white" onclick="deleteElement(this)"><span class="loopple-btn-inner--icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8H18L17.1065 19.615C17.0464 20.3965 16.3948 21 15.611 21H8.38905C7.60524 21 6.95358 20.3965 6.89347 19.615L6 8ZM8 10L8.45438 14.0894L15.5518 14.0339L16 10H8Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5V3.5C14 3.22386 13.7761 3 13.5 3H10.5C10.2239 3 10 3.22386 10 3.5V4.5H5.5C5.22386 4.5 5 4.72386 5 5V5.5C5 5.77614 5.22386 6 5.5 6H18.5C18.7761 6 19 5.77614 19 5.5V5C19 4.72386 18.7761 4.5 18.5 4.5H14Z" fill="#fff"/></svg></span></button>',contentBgImage=`
<div class="loopple-w-100">
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-mb-4">Background Image</div>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-2">Select Image</div>
<button data-modal="modal-images" class="w-full transition bg-zinc-50 border flex border-zinc-200 loopple-font-plus-jakarta text-zinc-900 !h-12 font-medium text-sm p-2 px-3 items-center justify-center !rounded-[6px] hover:!bg-zinc-100 loopple-btn-select-file">
  <span class="mt-0.5 me-1 text-zinc-900">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#18181b"><path d="M444-444H276q-15.3 0-25.65-10.29Q240-464.58 240-479.79t10.35-25.71Q260.7-516 276-516h168v-168q0-15.3 10.29-25.65Q464.58-720 479.79-720t25.71 10.35Q516-699.3 516-684v168h168q15.3 0 25.65 10.29Q720-495.42 720-480.21t-10.35 25.71Q699.3-444 684-444H516v168q0 15.3-10.29 25.65Q495.42-240 480.21-240t-25.71-10.35Q444-260.7 444-276v-168Z"/></svg>
  </span> 
  Upload Image
</button>
<div class="loopple-w-100 loopple-mt-3">
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Mask Color</div>
<select name="maskColor" id="maskColor" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" onchange="maskColorSelect(this.value)">
<option value="bg-dark" selected="selected">Dark</option>
<option value="bg-danger">Red</option>
<option value="bg-white">White</option>
<option value="bg-success">Green</option>
<option value="bg-warning">Orange</option>
<option value="bg-primary">Purple</option>
</select>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Mask Opacity</div>
<div class="slidecontainer w-100">
  <input type="range" min="1" max="10" value="5" class="slider w-100" id="myOpacityRange">
</div>
<div class="loopple-h5">Opacity: <span id="outputOpacityRange"></span></div>
`,contentBody=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4">Body</div>
<div class="loopple-w-100 loopple-mt-3">
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1">Background Color</div>
<input type="text" class="form-control form-control-sm border-0 letter-spacing-1 text-white" id="BgColor">
<div class="loopple-h5 loopple-text-dark loopple-mb-2 loopple-mt-3 loopple-font-weight-600">Background Image</div>
<input class="form-control form-control-sm loopple-mb-2" onkeyup="changeBackgroundImage(this)" placeholder="Change background image" id="bgImage" value="">
<button class="loopple-btn loopple-btn-sm loopple-btn-dark loopple-mb-4 mt-2" data-modal="modal-images">Upload image</button>
`,contentButton='<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4">Button Settings</div><label class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4" for="linkType">Link</label><input type="url" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" disabled placeholder="https://www.loopple.com" onkeyup="addLink(this)" id="inputAddLink" value=""></div><div class="loopple-mt-4 loopple-d-flex loopple-align-items-center jloopple-ustift-content-between"><label class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4" for="linkType">Link Type</label></div><select name="linkType" id="linkType" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" disabled onchange="linkTypeSelect(this.value)"><option value="default" selected="selected">Default</option><option value="external">Open link in new tab</option><option value="emailto">Email To</option></select></div>',contentLink=`<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex">
    Text Settings
    <a onclick="closeDrawer()" class="loopple-ml-auto lg:hidden loopple-cursor-pointer" type="button">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2426 6.34317L6.34315 16.2427C5.95262 16.6332 5.95262 17.2664 6.34315 17.6569C6.73367 18.0474 7.36684 18.0474 7.75736 17.6569L17.6569 7.75738C18.0474 7.36686 18.0474 6.73369 17.6569 6.34317C17.2663 5.95264 16.6332 5.95264 16.2426 6.34317Z" fill="#212529"></path>
        <path d="M17.6569 16.2426L7.75736 6.34315C7.36683 5.95263 6.73367 5.95263 6.34315 6.34315C5.95262 6.73368 5.95262 7.36684 6.34315 7.75737L16.2426 17.6569C16.6332 18.0474 17.2663 18.0474 17.6569 17.6569C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426Z" fill="#212529"></path>
        </svg>
    </a>
 </div>
 <div>
    <div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta">
        Text
    </div>
    <textarea class="loopple-form-control loopple-mt-1 loopple-mb-4" rows="5" onkeyup="changeTextValue(this)" value="this"></textarea>
 </div>
 <div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-d-flex">
    Link Settings
 </div>
<div>
    <input type="url" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500 loopple-mb-4" disabled placeholder="https://www.loopple.com" onkeyup="addLink(this)" id="inputAddLink" value="">
</div>
<div class="loopple-mt-4 loopple-d-flex loopple-align-items-center jloopple-ustift-content-between">
    <label class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta" for="linkType">
        Link Type
    </label>
</div>
<select name="linkType" id="linkType" class="loopple-form-control loopple-form-control-sm loopple-font-plus-jakarta font-medium !text-zinc-900 !h-12 loopple-w-100 loopple-mt-2 !border !border-zinc-200 !px-3 !rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500" disabled onchange="linkTypeSelect(this.value)">
    <option value="default" selected="selected">Default</option>
    <option value="external">Open link in new tab</option>
    <option value="emailto">Email To</option>
</select>`,contentList=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4">List</div>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Style</div>
<select name="listStyle" id="listStyle" class="loopple-form-control loopple-form-control-sm" onchange="listStyleSelect(this.value)">
<option value="numbered" selected="selected">Numbered</option>
<option value="simple">Simple</option>
</select>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Items</div>
<textarea class="loopple-form-control" rows="7" id="listTextarea" onkeyup="listChangeElements(this)">dasd</textarea>
`,contentSocial=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4">Social Settings</div>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1 loopple-mt-4">Links</div>

<div id="socialZone"></div>
<button class="transition bg-white border flex w-full mt-4 border-zinc-200 loopple-font-plus-jakarta text-zinc-900 !h-10 font-medium cursor-pointer text-sm p-2 px-3 items-center justify-center !rounded-[6px] hover:!bg-zinc-50" id="addSocial" onclick="addSocial()">
<span class="mt-0.5 me-1 text-zinc-900">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#18181b"><path d="M444-444H276q-15.3 0-25.65-10.29Q240-464.58 240-479.79t10.35-25.71Q260.7-516 276-516h168v-168q0-15.3 10.29-25.65Q464.58-720 479.79-720t25.71 10.35Q516-699.3 516-684v168h168q15.3 0 25.65 10.29Q720-495.42 720-480.21t-10.35 25.71Q699.3-444 684-444H516v168q0 15.3-10.29 25.65Q495.42-240 480.21-240t-25.71-10.35Q444-260.7 444-276v-168Z"/></svg>
  </span>
Add Social</button>
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4 loopple-mt-4">Website</div>
<div class="d-flex align-items-center mt-2" data-website-link="website">
  <i class="far fa-window-maximize me-2"></i>
  <input type="text" id="addWebsite" class="form-control disabled:bg-white loopple-form-control-sm loopple-font-plus-jakarta font-medium text-zinc-900 loopple-w-100 loopple-mr-2 !border !border-zinc-200 !py-2 !px-4 rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500" onkeyup="addWebsite(this)" placeholder="Your website link here...">
  <i class="fas fa-trash-alt ms-2 cursor-pointer" onclick="removeWebsiteElement(this)"></i>
</div>
`,contentGallery=`
<div class="loopple-h4 loopple-text-dark font-semibold text-zinc-900 !text-lg loopple-font-plus-jakarta loopple-my-0 loopple-mb-4">Gallery Image</div>
<div class="loopple-w-100 loopple-mt-3">
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1">Select Image</div>
<button class="loopple-btn loopple-btn-sm loopple-btn-dark loopple-mb-4" data-modal="modal-images">Upload image</button>
<div class="loopple-h5 loopple-text-dark font-semibold text-zinc-900 !text-sm loopple-font-plus-jakarta loopple-mb-1">Alt Text</div>
<input class="loopple-form-control loopple-form-control-sm" type="text" id="imageAltText" onkeyup="addAltToImageGallery(this)"/>
</div>
`;function scrollContent(){var e,t,l,a;elementCurr&&(e=elementCurr.getBoundingClientRect(),t=document.querySelector(".edit-buttons"),l=document.querySelector(".selector"),a=document.querySelector(".card-selection"),document.querySelector(".builder-container").getBoundingClientRect().top,document.querySelector(".builder-container").getBoundingClientRect().left,document.querySelector(".builder-container").scrollTop,a.style.top=e.top+"px",l.style.border="",l.children[0].innerHTML="",t)&&(t.style.top=e.top+"px")}function selectedItemHover(){var l=document.querySelector(".card-selection-hover"),a=document.querySelector(".card-selection-button"),o=document.querySelector(".builder-container").getBoundingClientRect().top,s=document.querySelector(".builder-container").getBoundingClientRect().left,i=document.querySelector(".builder-container").scrollTop;document.onmouseover=function(t){var e,t=t.target||t.srcElement;if(t.closest(".draggable")&&t.closest(".drop-zone")||t.closest(".button-add-hover"))e=t.closest(".draggable").getBoundingClientRect(),elementCurrHover=t.closest(".draggable"),l.style.border="1px dashed #5e72e4",a.style.borderBottom="3px solid #212529",a.style.display="flex",l.style.height=t.closest(".draggable").offsetHeight+4+"px",l.style.width=t.closest(".draggable").offsetWidth+4+"px",a.style.width=t.closest(".draggable").offsetWidth+4+"px",l.style.top=e.top-o-i-2+"px",l.style.left=e.left-s-i-2+"px",a.style.top=e.top-o+t.closest(".draggable").offsetHeight-i+1+"px",a.style.left=e.left-s-i-2+"px";else{if(t.closest("[data-section-type]")){let e=t;for(;e;)e.hasAttribute("data-section-type")&&(elementWithDataSectionType=e),e=e.parentElement;elementCurrHover=elementWithDataSectionType,showAddNewSectionAndRemoveSectionButtons(elementWithDataSectionType)}l.style.border="none",a.style.border="none",a.style.display="none"}}}function selectedItem(){document.querySelectorAll(".builder-container .btn,.builder-container p,.builder-container a,.builder-container h1,.builder-container h2,.builder-container h3,.builder-container h4,.builder-container h5,.builder-container h6,.builder-container span,.builder-container th,.builder-container td").forEach((e,t)=>{!e.classList.contains("draggable")&&!e.closest(".draggable")||e.getAttribute("contenteditable")||e.classList.contains(".fa",".fas",".fab",".far")||e.getAttribute("data-social")||(e.setAttribute("contenteditable","true"),e.parentElement.getAttribute("contenteditable")&&e.parentElement.setAttribute("contenteditable","false"))}),document.onclick=function(e){e||window.event;var l=e.target||e.srcElement;if((l=l.closest(".loopple-button-revert")||l.closest(".loopple-button-append")?elementCurr:l).classList.contains("builder-container")||l.classList.contains("drop-zone")||l.classList.contains("tab-content-builder"))for(var t=document.querySelectorAll(".edit-buttons"),a=0;a<t.length;a++)t[a].remove(),document.querySelector(".card-selection").style.border="0";if(p=(l.closest(".draggable")?l.closest(".draggable"):l).getBoundingClientRect(),l.parentElement){if((l.closest(".draggable")||l.closest(".removable"))&&!l.closest(".drag-start")&&!l.classList.contains("button-add-hover")){l.closest(".draggable")?(elementCurr=l.closest(".draggable"),p=l.closest(".draggable").getBoundingClientRect()):l.closest(".removable")&&(elementCurr=l.closest(".removable"),p=l.closest(".removable").getBoundingClientRect());for(var o=document.querySelector(".builder-container").getBoundingClientRect().top,t=(document.querySelector(".builder-container").getBoundingClientRect().left,document.querySelector(".builder-container").scrollTop,document.querySelectorAll(".edit-buttons")),a=0;a<t.length;a++)t[a].remove();var s=document.createElement("div"),s=(s.classList.add("edit-buttons","d-flex"),s.style.top=p.top+75-o+"px",s.style.left=p.left+elementCurr.offsetWidth-104+"px",s.innerHTML="",document.querySelector("body").appendChild(s),document.querySelector(".card-selection")),o=document.querySelector(".builder-container").getBoundingClientRect().top,i=document.querySelector(".builder-container").getBoundingClientRect().left;document.querySelector(".builder-container").scrollTop;s.style.border="1px solid #5e72e4",s.style.height=elementCurr.offsetHeight+4+"px",s.style.width=elementCurr.offsetWidth+4+"px",s.style.top=p.top+75-o-2+"px",s.style.left=p.left-i-2+"px";[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)})}}else for(t=document.querySelectorAll(".edit-buttons"),a=0;a<t.length;a++)t[a].remove();l.closest(".drop-zone")||l.closest("#sidenav-main")||l.closest("#sidebar");var n,r,d,o=l.getAttribute("class")?.includes("mask"),s=((l.parentElement.classList.value.includes("page-header")||l.parentElement.classList.value.includes("content-bg-image")||o)&&(console.log("enters here"),elementCurr=document.querySelector(".content-bg-image .mask")?.parentElement,s=document.querySelector(".card-selection"),(p=document.querySelector(".edit-buttons"))&&p.remove(),s.style.height=elementCurr.offsetHeight+4+"px",s.style.width=elementCurr.offsetWidth+4+"px",s.style.top=0,s.style.left=0,openDrawer("#settingsDrawer"),o&&(elementCurr=l.parentElement),document.querySelector("#settingsContent").innerHTML=contentBgImage,modalOpen(),i=document.getElementById("maskColor"),elementCurr.children[0].classList.value.includes("dark")?i.value="bg-dark":elementCurr.children[0].classList.value.includes("danger")?i.value="bg-danger":elementCurr.children[0].classList.value.includes("warning")?i.value="bg-warning":elementCurr.children[0].classList.value.includes("success")?i.value="bg-success":elementCurr.children[0].classList.value.includes("primary")&&(i.value="bg-primary"),p=document.getElementById("myOpacityRange"),(n=document.getElementById("outputOpacityRange")).innerHTML=p.value,p.oninput=function(){removeClassByPrefix(elementCurr.children[0],"opacity-"),elementCurr.children[0].classList.add("opacity-"+10*this.value),n.innerHTML=this.value}),"H1"==l.tagName||"H2"==l.tagName||"H3"==l.tagName||"H4"==l.tagName||"H5"==l.tagName||"H6"==l.tagName);if(("P"==l.tagName||"SPAN"==l.tagName&&!o||"SMALL"==l.tagName||s)&&!l.classList.contains("loopple-span")&&!l.parentNode.classList.contains("draggable")&&!l.closest(".loopple-drawer")&&l.closest(".draggable")){elementCurr=l,openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentText,document.querySelector('[onkeyup="changeTextValue(this)"]').value=l.textContent.trim(),l.onkeyup=function(){document.querySelector('[onkeyup="changeTextValue(this)"]').value=l.textContent.trim()},s?document.getElementById("lineHeightWrapper").classList.add("d-none"):document.getElementById("lineHeightWrapper").classList.remove("d-none");var c=document.querySelector("#lineHeight");switch(elementCurr.style.lineHeight){case"1":c.value="default";break;case"1.25":c.value="medium";break;case"1.5":c.value="large";break;case"1.75":c.value="xlarge"}var i=document.getElementById("textColor");let t=e=>"#"+e.match(/\d+/g).map(e=>(+e).toString(16).padStart(2,0)).join``;var p=window.getComputedStyle(elementCurr),i=(r=i,o=elementCurr.style.color?t(elementCurr.style.color).toUpperCase():p.color?t(p.color).toUpperCase():"#1C265A",Pickr.create({el:r,theme:"monolith",default:o,defaultRepresentation:"HEX",position:"top",useAsButton:!0,components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,input:!0,save:!0}}}).on("init",e=>{elementCurr.style.color?(r.value=t(elementCurr.style.color).toUpperCase(),r.style.backgroundColor=elementCurr.style.color):(r.value=e.getSelectedColor().toHEXA().toString(),r.style.backgroundColor=e.getSelectedColor().toHEXA().toString())}).on("save",(e,t)=>{e=e.toHEXA().toString();r.value=e,r.style.backgroundColor=e,elementCurr.style.color=e,t.hide()}).on("change",e=>{elementCurr.classList.forEach((e,t)=>{"text-white"!=e&&"text-dark"!=e&&"text-primary"!=e&&"text-secondary"!=e&&"text-info"!=e&&"text-warning"!=e&&"text-danger"!=e&&"text-success"!=e||elementCurr.classList.remove(e)}),elementCurr.style.color=e.toHEXA().toString()}),document.querySelector("#textAlign")),p=(elementCurr.classList.value.split(" ").includes("text-center")?i.value="center":elementCurr.classList.value.split(" ").includes("text-end")?i.value="end":i.value="start",document.querySelector("#transformStyle"));if(elementCurr.classList.value.split(" ").includes("text-lowercase")?p.value="lowercase":elementCurr.classList.value.split(" ").includes("text-uppercase")?p.value="uppercase":elementCurr.classList.value.split(" ").includes("text-capitalize")?p.value="capitalize":p.value="normal",s){document.getElementById("headingStyleWrapper").classList.remove("d-none");var m=document.querySelector("#headingStyle");switch(elementCurr.tagName){case"H1":m.value="h1";break;case"H2":m.value="h2";break;case"H3":m.value="h3";break;case"H4":m.value="h4";break;case"H5":m.value="h5";break;case"H6":m.value="h6"}}var g=document.querySelector("#fontStyle");switch(elementCurr.style.fontFamily){case"inter":g.value="inter";break;case"roboto":g.value="roboto";break;case"poppins":g.value="poppins";break;case"plus jakarta sans":g.value="plus jakarta sans";break;case"lora":g.value="lora";break;case"playfair display":g.value="playfair display";break;case"":g.value="open sans"}}if(l.closest(".social-zone")&&(elementCurr=l,openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentSocial,(i=elementCurr.querySelector('[data-website="website"]'))&&(document.getElementById("addWebsite").value=i.getAttribute("href")),getSocialZone(),modalOpen()),"IMG"==l.tagName&&l.closest(".image-gallery-item")&&(elementCurr=l.closest(".image-gallery-item"),openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentGallery,p=elementCurr.firstElementChild.getAttribute("alt"),document.querySelector("#imageAltText").value=p,modalOpen()),"IMG"!=l.tagName&&!l.style.backgroundImage||!l.closest(".draggable")||l.closest(".image-gallery-item")||(elementCurr=l,openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentImage,s=document.querySelector("#imgStyle"),i=l.getAttribute("alt"),document.querySelector("#imageAltText").value=i,s&&(elementCurr.classList.contains("rounded-circle")?s.value="circle":elementCurr.classList.contains("border-radius-lg")?s.value="rectangle":s.value="simple"),modalOpen()),l.classList.contains("btn")&&l.closest(".draggable")&&!l.closest(".social-zone")&&(elementCurr=l,openDrawer("#settingsDrawer"),elementCurr.addEventListener("click",e=>{e.preventDefault()}),document.querySelector("#settingsContent").innerHTML=contentButton),("A"==l.tagName&&l.closest(".draggable")&&!l.classList.contains("btn")&&!l.closest(".social-zone")||"A"===l.tagName&&l.closest('[data-section-type = "navigation"]'))&&(elementCurr=l,openDrawer("#settingsDrawer"),elementCurr.addEventListener("click",e=>{e.preventDefault()}),document.querySelector("#settingsContent").innerHTML=contentLink,document.querySelector('[onkeyup="changeTextValue(this)"]').value=l.textContent.trim(),l.onkeyup=function(){document.querySelector('[onkeyup="changeTextValue(this)"]').value=l.textContent.trim()}),l.closest(".loopple-list")&&l.closest(".draggable")){elementCurr=l.closest(".loopple-list"),openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentList;var p=document.querySelector("#listTextarea"),u=elementCurr.textContent.replace(/(^[ \t]*\n)/gm,"").trim().split("\n");let e="";for(a=0;a<u.length;a++)e=e+u[a].trim()+"\n";p.value=e}if(l.closest('[data-component-type = "logo"]')&&l.closest(".draggable")&&(elementCurr=l.closest('[data-component-type = "logo"]'),document.querySelector("#settingsContent").innerHTML=contentLogo,i=document.getElementById("logo-content-text-tab-btn"),s=document.getElementById("logo-content-image-tab-btn"),"SPAN"===elementCurr.tagName?(e.preventDefault(),p=i.getAttribute("onclick"),i.removeAttribute("onclick"),i.click(),elementCurr.click(),i.setAttribute("onclick",p),document.querySelector('[onkeyup="changeTextValue(this)"]').value=l.textContent.trim()):"IMG"===elementCurr.tagName&&(e.preventDefault(),i=s.getAttribute("onclick"),s.removeAttribute("onclick"),s.click(),elementCurr.click(),s.setAttribute("onclick",i),modalOpen())),l.classList.contains("builder-container")){elementCurr=l,openDrawer("#settingsDrawer"),document.querySelector("#settingsContent").innerHTML=contentBody;p=document.getElementById("BgColor");let t=e=>"#"+e.match(/\d+/g).map(e=>(+e).toString(16).padStart(2,0)).join``;d=p,e=elementCurr.style.backgroundColor?t(elementCurr.style.backgroundColor).toUpperCase():"#67748E",Pickr.create({el:d,theme:"monolith",default:e,defaultRepresentation:"HEX",useAsButton:!0,components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,input:!0,save:!0}}}).on("init",e=>{elementCurr.style.backgroundColor?(d.value=t(elementCurr.style.color).toUpperCase(),d.style.backgroundColor=elementCurr.style.color):(d.value=e.getSelectedColor().toHEXA().toString(),d.style.backgroundColor=e.getSelectedColor().toHEXA().toString())}).on("save",(e,t)=>{e=e.toHEXA().toString();d.value=e,d.style.backgroundColor=e,elementCurr.style.backgroundColor=e,t.hide()}).on("change",e=>{elementCurr.style.backgroundColor=e.toHEXA().toString()}),l.style.backgroundImage&&(document.querySelector("#bgImage").value=l.style.backgroundImage.split('"')[1]),modalOpen()}if(document.querySelector("#inputAddLink")){var s=document.querySelector("#inputAddLink"),f=(document.getElementById("switchAddLink"),document.getElementById("linkType"));if(elementCurr.hasAttribute("href")){switch(s.value="mailto"===elementCurr.getAttribute("href").split(":")[0]?elementCurr.getAttribute("href").split(":")[1]:elementCurr.getAttribute("href"),s.removeAttribute("disabled"),f.removeAttribute("disabled"),elementCurr.dataset.typeLink){case"default":f.value="default";break;case"external":f.value="external";break;case"emailto":f.value="emailto"}"emailto"===elementCurr.dataset.typeLink&&(linkTypeLabel.innerHTML="Email")}"BUTTON"===elementCurr.tagName&&s.setAttribute("disabled","disabled")}}}function duplicateElement(e){elementCurr.classList.contains("draggable")||(l=elementCurr.cloneNode(!0),elementCurr.parentNode.insertBefore(l,elementCurr.nextSibling),document.dispatchEvent(event));var t,l=elementCurr.closest(".draggable");l&&(t=l.cloneNode(!0),l.parentNode.insertBefore(t,l.nextSibling),document.dispatchEvent(event))}function deleteElement(e){document.querySelector(".edit-buttons").remove(),document.querySelector(".card-selection").style.border="0",document.querySelector(".tooltip").remove(),elementCurr.closest(".draggable")?elementCurr.closest(".draggable").remove():elementCurr.closest(".removable")&&elementCurr.closest(".removable").remove()}function moveElementAbove(e){var t=elementCurr.previousElementSibling;t&&(elementCurr.parentNode.insertBefore(elementCurr.closest(".draggable"),t),document.querySelector(".edit-buttons").remove(),document.querySelector(".card-selection").style.border="0",document.querySelectorAll(".tooltip").forEach(e=>{e.remove()}))}function moveElementBelow(e){var t=elementCurr.closest(".draggable").nextElementSibling;t&&(elementCurr.parentNode.insertBefore(t,elementCurr.closest(".draggable")),document.querySelector(".edit-buttons").remove(),document.querySelector(".card-selection").style.border="0",document.querySelectorAll(".tooltip").forEach(e=>{e.remove()}))}function fontLoader(e){var t=document.createElement("link");t.rel="stylesheet",document.head.appendChild(t),t.href="https://fonts.googleapis.com/css?family="+e+"&display=swap"}function fontStyleSelect(e){switch(e){case"roboto":fontLoader("Roboto:wght@300;400;500;700;900"),elementCurr.style.fontFamily=e;break;case"inter":fontLoader("Inter:wght@300;400;500;700;900"),elementCurr.style.fontFamily=e;break;case"poppins":case"lora":case"plus jakarta sans":case"playfair display":elementCurr.style.fontFamily=e;break;case"open sans":elementCurr.removeAttribute("style")}}let observer=new MutationObserver(callback);function callback(e){for(var t of e)"childList"===t.type&&(elementCurr=t.addedNodes[0])}function headingStyleSelect(e){var t=elementCurr.innerHTML,e=document.createElement(e);e.innerHTML=t,e.classList.add(...elementCurr.classList.value.split(" ")),e.setAttribute("draggable","true"),e.setAttribute("contenteditable","true"),observer.observe(elementCurr.parentElement,{childList:!0}),elementCurr.replaceWith(e)}function transformStyleSelect(e){var t="text-capitalize",l="text-uppercase",a="text-lowercase";switch(e){case"normal":elementCurr.classList.remove(l,t,a);break;case"lowercase":elementCurr.classList.remove(l,t),elementCurr.classList.add(a);break;case"uppercase":elementCurr.classList.remove(t,a),elementCurr.classList.add(l);break;case"capitalize":elementCurr.classList.remove(l,a),elementCurr.classList.add(t)}}function textAlignSelect(e){var t=elementCurr.classList.value.includes("d-flex"),l=t?"justify-content-center":"text-center",a=t?"justify-content-start":"text-start",o=t?"justify-content-end":"text-end";switch(e){case"center":elementCurr.classList.remove(a,o),elementCurr.classList.add(l);break;case"start":elementCurr.classList.remove(l,o),elementCurr.classList.add(a);break;case"end":elementCurr.classList.remove(l,a),elementCurr.classList.add(o)}}function lineHeightSelect(e){switch(e){case"default":elementCurr.style.lineHeight="1";break;case"medium":elementCurr.style.lineHeight="1.25";break;case"large":elementCurr.style.lineHeight="1.5";break;case"xlarge":elementCurr.style.lineHeight="1.75"}}let socials=["instagram","facebook","discord","pinterest","twitter","linkedin","github","codepen","gitlab"];if(document.getElementsByClassName("social-zone")){let socialChildren=Array.from(document.getElementsByClassName("social-zone")[0].children).filter(e=>e.dataset.social);socialChildren.forEach((e,t)=>{e.getAttribute("data-id")||e.setAttribute("data-id",t)})}function getSocialZone(){Array.from(elementCurr.closest(".social-zone").children).filter(e=>e.dataset.social).forEach((e,t)=>{var l=e.dataset.social.match(/\d+/g),a=document.createElement("div"),t='<div class="d-flex align-items-center mt-2" data-social-link='+e.dataset.social+" data-id="+t+`>
            <div class="social-icon bg-white border flex border-zinc-200 loopple-font-plus-jakarta me-2 text-zinc-900 !h-10 !w-14 font-medium text-sm p-2 px-3 items-center justify-center rounded-[6px] hover:!bg-zinc-100">
            <i class="fab fa-`+(l?e.dataset.social.slice(0,-1):e.dataset.social)+` ms-3 me-2"></i>
            <select id="`+e.dataset.social+`" class="form-select w-5 border-0 cursor-pointer bg-transparent me-2" onchange="socialChange(this.value, this)">
                `+socials.map(e=>'<option value="'+e+'">'+e+"</option>").join("")+`
            </select>
            </div>

            <input type="text" class="form-control disabled:bg-white loopple-form-control-sm loopple-font-plus-jakarta font-medium text-zinc-900 loopple-w-100 loopple-mr-2 !border !border-zinc-200 !py-2 !px-4 rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500" onkeyup="changeLink(this)" value=`+e.getAttribute("href")+` placeholder="Your link here..." />
            <i class="fas fa-trash-alt ms-2 cursor-pointer" onclick="removeSocialElement(this)"></i>
        </div>`;a.innerHTML=t,a.classList.add("test-rares"),document.getElementById("socialZone").appendChild(a)})}function socialChange(e,t){var l=elementCurr.closest(".social-zone").querySelector('[data-social="'+t.parentElement.parentElement.dataset.socialLink+'"]');l.dataset.social=e+t.parentElement.parentElement.dataset.id,removeClassByPrefix(l.querySelector("i"),"fa-"),l.querySelector("i").classList.add("fa-"+e),l.querySelector("span")&&(l.querySelector("span").innerHTML=e),t.parentElement.parentElement.dataset.socialLink=e+t.parentElement.parentElement.dataset.id,removeClassByPrefix(t.parentElement.children[0],"fa-"),t.parentElement.children[0].classList.add("fa-"+e)}function changeLink(e){elementCurr.closest(".social-zone").querySelector('[data-id="'+e.parentElement.dataset.id+'"]').setAttribute("href",e.value)}function removeSocialElement(e){document.getElementById("addSocial").classList.remove("d-none");var t=elementCurr.closest(".social-zone");1!==t.querySelectorAll("[data-social]").length&&(t.querySelector('[data-id="'+e.parentElement.dataset.id+'"]').remove(),e.parentElement.parentElement.remove(),document.querySelector("#addSocial").classList.remove("loopple-d-none"))}function addSocialInput(e){var t=document.createElement("div"),e='<div class="d-flex align-items-center mt-2" data-social-link='+e+" data-id="+(parseInt(document.querySelector("#socialZone").lastChild.children[0].dataset.id)+1)+`>
        <div class="social-icon d-flex align-items-center justify-content-center transition bg-white me-2 border !border-zinc-200 loopple-font-plus-jakarta text-zinc-900 !h-10 !w-14 font-medium cursor-pointer text-sm p-2 px-3 items-center justify-center !rounded-[6px] hover:!bg-zinc-50">
          <i class="fab fa-`+e+` ms-3 me-2"></i>
          <select class="form-select w-5 border-0 me-2 bg-transparent cursor-pointer" onchange="socialChange(this.value, this)">
            `+socials.map(e=>'<option value="'+e+'">'+e+"</option>").join("")+`
          </select>
        </div>

        <input type="text" class="form-control disabled:bg-white loopple-form-control-sm loopple-font-plus-jakarta font-medium text-zinc-900 loopple-w-100 loopple-mr-2 !border !border-zinc-200 !py-2 !px-4 rounded-[6px] placeholder:loopple-font-plus-jakarta placeholder:font-medium placeholder:text-zinc-500" onkeyup="changeLink(this)" placeholder="Your link here..." />
        <i class="fas fa-trash-alt ms-2 cursor-pointer" onclick="removeSocialElement(this)"></i>
      </div>`;return t.innerHTML=e,t}function removeClassByPrefix(e,t){t=new RegExp("\\b"+t+"[^ ]*[ ]?\\b","g");e.className=e.className.replace(t,"")}function addSocial(){var e=elementCurr.closest(".social-zone"),t=e.children[0].cloneNode(!0),l=t.classList.value.split(" ");let a=socials;Array.from(document.getElementById("socialZone").children).forEach(t=>{a=a.filter(e=>e!==(t.children[0]?t.children[0].dataset.socialLink:null))});var o=parseInt(Array.from(e.children).at(-1).dataset.id)+1;let s=document.createElement("a");s.classList.add(...l),s.setAttribute("target","_blank"),s.setAttribute("rel","nofollow"),s.setAttribute("href","https://yourlink.com"),s.setAttribute("data-id",o),0<a.length?(document.getElementById("socialZone").appendChild(addSocialInput(""+a[0])),s.setAttribute("data-social",""+a[0]),s.classList.add("me-1"),Array.from(t.children).forEach(e=>{""!==e.innerHTML&&(void 0!==e.children[0]&&"I"===e.children[0].tagName?(removeClassByPrefix(e.children[0],"fa-"),e.children[0].classList.add("fa-"+a[0])):e.innerHTML=a[0]),e.classList.value.includes("fa")&&(removeClassByPrefix(e,"fa"),e.classList.add("fab"),e.classList.add("fa-"+a[0])),s.appendChild(e)}),e.appendChild(s)):document.getElementById("addSocial").classList.add("d-none")}function changeSectionBackgroundImage(e){elementCurr.style.backgroundImage="url("+e.value+")"}function maskColorSelect(e){let l=[e];elementCurr.children[0].classList.forEach((e,t)=>{e.includes("bg-")||l.push(e)}),elementCurr.children[0].removeAttribute("class"),elementCurr.children[0].classList.add(...l)}function addWebsite(e){var l=elementCurr.closest(".social-zone"),a=l.children[0].cloneNode(!0),o=parseInt(Array.from(l.children).at(-1).dataset.id)+1,s=a.classList.value.split(" "),i=document.querySelector("[data-website]");if(i&&i.setAttribute("href",e.value),0!==e.value.length){let t=document.createElement("a");t.classList.add(...s),t.setAttribute("target","_blank"),t.setAttribute("rel","nofollow"),t.setAttribute("href",e.value),t.setAttribute("data-website","website"),t.setAttribute("data-id",o),Array.from(a.children).forEach(e=>{""!==e.innerHTML&&(e.innerHTML="website"),e.classList.value.includes("fa")&&(removeClassByPrefix(e,"fa"),e.classList.add("far"),e.classList.add("fa-window-maximize")),t.appendChild(e)}),i||l.appendChild(t)}else l.removeChild(i)}function removeWebsiteElement(){var e=elementCurr.closest(".social-zone"),t=e.querySelector("[data-website]");document.getElementById("addWebsite").value="",t&&e.removeChild(t)}function changeBackgroundImage(e){elementCurr.style.backgroundImage="url("+e.value+")"}let draggables=document.querySelectorAll(".draggable"),dropZones=document.querySelectorAll(".drop-zone");function initDraggables(e){for(var t of e)initDraggable(t)}function initDropZones(e){for(var t of e)initDropZone(t)}function initDraggable(e){e.addEventListener("paste",draggablePasteEvent)}function initDropZone(e){e.addEventListener("dragenter",dropZoneEnterHandler),e.addEventListener("dragover",dropZoneOverHandler),e.addEventListener("dragleave",dropZoneLeaveHandler),e.addEventListener("drop",dropZoneDropHandler)}function draggablePasteEvent(e){e.preventDefault();e=(e.clipboardData||window.clipboardData).getData("text");document.execCommand("insertText",!1,e)}function dropZoneEnterHandler(e){document.querySelector(".dragged");e.dataTransfer.types.includes("type/dragged-box")&&(this.classList.add("sites-over-zone"),e.preventDefault())}function dropZoneOverHandler(e){e.dataTransfer.types.includes("type/dragged-box")&&e.preventDefault()}function dropZoneLeaveHandler(e){e.dataTransfer.types.includes("type/dragged-box")&&null!==e.relatedTarget&&e.currentTarget!==e.relatedTarget.closest(".drop-zone")&&this.classList.remove("sites-over-zone")}function dropZoneDropHandler(e){e.preventDefault(),e.stopPropagation();let draggedElement=document.querySelector(".dragged");var nodeCopy,element,nodeCopy;if(draggedElement&&(draggedElement.classList.contains("drag-start")?(nodeCopy=draggedElement.cloneNode(!0),nodeCopy.innerHTML="",element=nodeCopy.getAttribute("data-component"),$.ajax({url:document.querySelector("body").getAttribute("data-project"),method:"POST",data:{component:element,_token:$('meta[name="csrf-token"]').attr("content")},dataType:"JSON",success:function(data){var html=data.component;if(html){nodeCopy.outerHTML=html,nodeCopy.classList.remove("draggable"),document.dispatchEvent(event);let test=data.init}data.init&&eval(data.init)}})):nodeCopy=draggedElement,nodeCopy.classList.remove("dragged")),this.classList.contains("sites-over-zone"))if(teq){let rr=teq.getBoundingClientRect(),middle=rr.height/2+rr.y;e.clientY>middle?teq.parentNode.insertBefore(nodeCopy,teq.nextSibling):teq.parentNode.insertBefore(nodeCopy,teq)}else e.currentTarget.appendChild(nodeCopy);if(nodeCopy)return nodeCopy.classList.contains("loopple-text-component")?getTextComponent(nodeCopy):nodeCopy.classList.contains("loopple-divider-component")?getDividerComponent(nodeCopy):nodeCopy.classList.contains("loopple-image-component")?getImageComponent(nodeCopy):nodeCopy.classList.contains("loopple-link-component")?getLinkComponent(nodeCopy):nodeCopy.classList.contains("loopple-button-component")?getButtonComponent(nodeCopy):nodeCopy.classList.contains("loopple-list-component")?getListComponent(nodeCopy):void 0}function setDropZonesHighlight(e=!0){var t;for(t of document.querySelectorAll(".drop-zone"))e?t.classList.add("sites-active-zone"):(t.classList.remove("sites-active-zone"),t.classList.remove("sites-over-zone"))}function deferredOriginChanges(e,t){setTimeout(()=>{e.classList.remove(t)})}function dropElementOnClick(e){document.querySelector("#modal-button-hover").classList.remove("loopple-modal-open");var t=elementCurrHover.closest(".draggable"),l=e.cloneNode(!0);return l.innerHTML="",console.log(l.classList),e.classList.contains("loopple-text-component")?(t.parentNode.insertBefore(l,t.nextSibling),getTextComponent(l)):e.classList.contains("loopple-divider-component")?(t.parentNode.insertBefore(l,t.nextSibling),getDividerComponent(l)):e.classList.contains("loopple-image-component")?(t.parentNode.insertBefore(l,t.nextSibling),getImageComponent(l)):e.classList.contains("loopple-link-component")?(t.parentNode.insertBefore(l,t.nextSibling),getLinkComponent(l)):e.classList.contains("loopple-button-component")?(t.parentNode.insertBefore(l,t.nextSibling),getButtonComponent(l)):void(e.classList.contains("loopple-list-component")&&(t.parentNode.insertBefore(l,t.nextSibling),getListComponent(l)))}function getTextComponent(e){e.outerHTML='<p class="draggable">Add your text here</p>',e.classList.remove("draggable"),document.dispatchEvent(event)}function getDividerComponent(e){e.outerHTML='<div class="py-1 draggable"><hr class="horizontal dark divider my-2"/></div>',e.classList.remove("draggable"),document.dispatchEvent(event)}function getImageComponent(e){e.outerHTML='<img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/sites/image-state-empty.svg" alt="image" class="draggable border-radius-lg"/>',e.classList.remove("draggable"),document.dispatchEvent(event)}function getLinkComponent(e){e.outerHTML='<a href="javascript:;" class="draggable">Link</a>',e.classList.remove("draggable"),document.dispatchEvent(event)}function getButtonComponent(e){e.outerHTML='<a href="javascript:;" class="btn btn-primary draggable">Button</a>',e.classList.remove("draggable"),document.dispatchEvent(event)}function getListComponent(e){e.outerHTML=`
    <ol class="list-group list-group-numbered mb-3 draggable loopple-list">
      <li class="list-group-item">
        <span>My lovelly website</span>
      </li>
      <li class="list-group-item">
        <span>I really like this</span>
      </li>
      <li class="list-group-item">
        <span>Hmm, love this</span>
      </li>
    </ol>
    `,e.classList.remove("draggable"),document.dispatchEvent(event)}initDraggables(draggables),initDropZones(dropZones);let iframe=document.querySelector("iframe");function changeTheme(e){switch(observerBody.disconnect(),e){case"modern":setRootColor("333 71% 51%","0 0% 100%","240 4% 46%","327 73% 97%","240 6% 10%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-full"),setDisplayFontFamily("Plus Jakarta Sans");break;case"minimal":setRootColor("240 6% 10%","0 0% 100%","240 4% 46%","0 0% 100%","240 6% 10%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-sm"),setDisplayFontFamily("Plus Jakarta Sans");break;case"classic":setRootColor("226 71% 40%","0 0% 100%","240 4% 46%","214 100% 97%","240 6% 10%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-none"),setDisplayFontFamily("Lora");break;case"bold":setRootColor("25 95% 53%","0 0% 100%","240 4% 46%","33 100% 96%","240 6% 10%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-none"),setDisplayFontFamily("Poppins");break;case"elegant":setRootColor("163 88% 20%","0 0% 100%","240 4% 46%","152 81% 96%","240 6% 10%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-none"),setDisplayFontFamily("Playfair Display");break;case"dark":setRootColor("0 0% 100%","240 6% 10%","240 5% 65%","240 6% 10%","0 0% 100%","0 0% 100%","240 6% 10%"),setButtonsBorderRadius("rounded-md"),setDisplayFontFamily("Plus Jakarta Sans")}copySiteStylesToIframe(),actionSave(site,!1),startObserverBody()}function setRootColor(e,t,l,a,o,s,i){document.documentElement.style.setProperty("--primary",e),document.documentElement.style.setProperty("--primary-foreground",t),document.documentElement.style.setProperty("--muted",l),document.documentElement.style.setProperty("--background",a),document.documentElement.style.setProperty("--foreground",o),document.documentElement.style.setProperty("--card",s),document.documentElement.style.setProperty("--card-foreground",i)}function setButtonsBorderRadius(e){applyBorderRadiusToButtons(document.querySelectorAll(".builder-container [href]"),e),iframe&&iframe.contentDocument&&applyBorderRadiusToButtons(iframe.contentDocument.querySelectorAll("[href]"),e)}function applyBorderRadiusToButtons(e,t){for(var l of e)l.classList.remove("rounded-sm","rounded","rounded-md","rounded-lg","rounded-full","rounded-none"),l.classList.add(t)}function setDisplayFontFamily(e){var t="--font-family-sans-serif";document.documentElement.style.setProperty(t,e),iframe&&iframe.contentDocument&&iframe.contentDocument.documentElement.style.setProperty(t,e)}function copySiteStylesToIframe(){try{var e=document.documentElement,t=iframe.contentDocument.documentElement,l=e.getAttribute("style");l&&t.setAttribute("style",l)}catch(e){console.log("Error applying styles to iframe:",e)}}function extractSectionsWithTextsNeeded(e){var e=document.querySelector(e),l={website:"website for a pet shop",sections:[]},a=[],e=(e.getAttribute("data-section-type")&&a.push(e),Array.from(e.querySelectorAll("[data-section-type]")));a.push(...e);for(let[e,t]of a.entries()){var o,s=t.getAttribute("data-section-type"),i=Array.from(t.querySelectorAll("[data-component-field]")).filter(e=>e.closest("[data-section-type]")===t),n=new Set;for(o of i)n.add(o.getAttribute("data-component-field"));i=i.length/n.size;l.sections.push({section:s,texts_needed:i,texts:Array.from(n).join(", ")})}return l}async function generateTexts(e,t,l){e.website=t;let a="",o=0;setInterval(()=>{o<90&&(o+=5,l(o))},500);return await $.ajax({url:"/ai-website-builder/ai-text-generator",method:"POST",data:{_token:$('meta[name="csrf-token"]').attr("content"),JSONObject:JSON.stringify(e)},dataType:"JSON",success:function(e){a=e.data},error:function(e){console.log(e.responseText)}}),a}async function generateAndReplaceTexts(t,e,l){var a,o,s=document.querySelector("#generate-texts-loader"),i=extractSectionsWithTextsNeeded(t),n=getBuilderContainerRectValues().builderContainerDistanceTop,r=document.querySelector(t).getBoundingClientRect();s.classList.remove("hidden"),s.style.top=r.top-n+73+"px",s.style.height=r.height+"px";for([a,o]of(AIResponse=await generateTexts(i,e,l)).sections.entries()){let e;e=document.querySelector(t).getAttribute("data-section-type")===o.section?document.querySelector(t):document.querySelector(t).querySelector(`[data-section-type="${o.section}"]`),console.log("section: ",e);var d,c,p=Array.from(e.querySelectorAll("[data-component-field]"));for([d,c]of o.content.entries())for(let t in c){var m=p.find(e=>e.getAttribute("data-component-field")===t);m&&(m.innerHTML=c[t],p.splice(p.indexOf(m),1))}l(Math.round((a+1)/AIResponse.sections.length*10+90))}s.classList.add("hidden"),s.style.top="0",s.style.height="0"}let site=document.querySelector("body").getAttribute("data-site");function getQueryParam(e){return new URLSearchParams(window.location.search).get(e)}function getBuilderContainerRectValues(){return{builderContainerDistanceTop:document.querySelector(".builder-container").getBoundingClientRect().top,builderContainerDistanceLeft:document.querySelector(".builder-container").getBoundingClientRect().left,builderContainerScrollHeight:document.querySelector(".builder-container").scrollTop}}function setSettingsContentDrawerContent(e){var t=document.querySelector("#settingsContent");buttonDrawerBack.setAttribute("onclick","closeDrawer()"),t.innerHTML=e}function addPreventDefaultToAllLinkInsideBuilderContainer(){document.querySelectorAll(".builder-container a[href]:not([data-bs-toggle='dropdown']:not([data-toggle='dropdown']").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})})}window.addEventListener("executeCommand",event=>{let command=event.detail.command;console.log("command: ",command),eval(command)});