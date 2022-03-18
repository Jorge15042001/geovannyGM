const workDoneList = document.getElementById("workDoneList");

dones.forEach(workDone => {
  const html = "<div bind=\"2d92acd2-f855-93d3-948a-cec391dd3330\" role=\"listitem\" class=\"collection-item-2 w-dyn-item\">" +
    "  <a href=\"#\" class=\"text-block link\">" + workDone.Name + "</a>" +
    "  <div bind=\"9df2a22d-3199-4345-30c3-6089153abca5\" class=\"w-dyn-list\">" +
    "    <div bind=\"9df2a22d-3199-4345-30c3-6089153abca6\" role=\"list\" class=\"collection-list-4 collection-list-8 w-dyn-items w-row\">" +
    function () {

      let res = "";
      workDone.after.split(";").forEach(
        imgSrc => {
          res += "      <div bind=\"9df2a22d-3199-4345-30c3-6089153abca7\" role=\"listitem\" class=\"blog-thumbnail gallerimagework w-dyn-item w-col w-col-4\">" +
            "        <a href=\"#\" target=\"_blank\" class=\"thumbnail-wrapper w-inline-block\">" +
            "          <div class=\"image-wrapper\"><img data-sizes=\"[{&quot;max&quot;:767,&quot;size&quot;:&quot;95vw&quot;},{&quot;max&quot;:991,&quot;size&quot;:&quot;225.33334350585938px&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;296px&quot;}]\" loading=\"lazy\" bind=\"e0d92d21-5e46-aad8-c059-6fc185181182\" src=\"" + imgSrc + "\" alt=\"\" class=\"image-6\"></div>" +
            "        </a>" +
            "      </div>"
        }
      );
      return res;
    }() +
    "    </div>" +
    "  </div>" +
    "</div>"
  workDoneList.innerHTML += html;


});
