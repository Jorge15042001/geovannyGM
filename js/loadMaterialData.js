const materialList = document.getElementById("materialList");
console.log(materialList);

Posts.forEach(material => {
  if (material.Category === materialList.dataset.material) {

    console.log(material.Name,material.Category);

    const html = " <div bind=\"38b11e64-7f9c-5678-eb8d-f7c1065372b8\" role=\"listitem\" class=\"blog-thumbnail w-dyn-item w-col w-col-3\">" +
      "   <a href=\"#\" bind=\"549e20ee-7ffd-01c2-d429-984ecc291bb9\" data-w-id=\"549e20ee-7ffd-01c2-d429-984ecc291bb9\" class=\"thumbnail-wrapper w-inline-block\">" +
      "     <div class=\"image-wrapper\">" +
      "       <div bind=\"dd8cc0a4-34c5-da68-09cb-2a5a8edd0ad2\" style=\"-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0) ; background-image: url("+material["Main Image"]+");\" class=\"ima\"></div>" +
      "     </div>" +
      "     <div class=\"thumbnail-text\">" +
      "       <div bind=\"5d9a9d04-dc70-5036-1bee-f8ba55684fea\" class=\"blog-title\">"+material.Name+"</div>" +
      // "       <div bind=\"7764f8fe-acb5-d379-3821-2c6286f0c60d\" class=\"preview-text\"><div>" +
      "     </div>" +
      "   </a>" +
      " </div>"
    materialList.innerHTML += html;
  }


});
