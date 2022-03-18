const materialsList = document.getElementById("materialsList");

Posts.forEach(material => {
  const color = material.Category ==="granite" ? "#dd783f":"#4aaec2";
  const html = " <div bind=\"eb93ac78-214e-1d8a-68f0-793d6f3d4b9f\" role=\"listitem\" class=\"blog-thumbnail w-dyn-item w-col w-col-4\">" +
    "   <a href=\"#\" bind=\"46150442-4efa-9d36-3a4c-20d527e7a6bc\" data-w-id=\"46150442-4efa-9d36-3a4c-20d527e7a6bc\" class=\"thumbnail-wrapper w-inline-block\">" +
    "     <div class=\"image-wrapper\">" +
    "       <div bind=\"32db3287-1e76-9453-b043-7c980540a158\" style=\"-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0) ; background-image: url("+material["Main Image"]+")\" class=\"ima\"></div>" +
    "       <div bind=\"6e325873-776d-f9a2-415d-26ca982ae715\" class=\"category-tag\" style=\"background-color:"+color+";\">"+material.Category+"</div>" +
    "     </div>" +
    "     <div class=\"thumbnail-text\">" +
    "       <div bind=\"8c3b7b64-5733-59e3-b783-9cc193c3795f\" class=\"blog-title\">"+material.Name+"</div>" +
    "     </div>" +
    "   </a>" +
    " </div>"
  materialsList.innerHTML += html;
});
