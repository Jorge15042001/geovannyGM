const afterPhotosList = document.getElementById("afterPhotosList");
const beforePhotoList = document.getElementById("beforePhotoList");
const processPhotoList = document.getElementById("processPhotoList");

dones.forEach(workDone => {
  console.log(workDone.Name, afterPhotosList.dataset.projectname);
  if (workDone.Name === afterPhotosList.dataset.projectname) {

    workDone.after.split(";").forEach(imageSrc => {

      const photoItem = " <div bind=\"4173c9de-1777-8017-04dc-9904f7c73b79\" role=\"listitem\" class=\"blog-thumbnail w-dyn-item w-col w-col-4\">" +
        "   <a href=\"#\" class=\"thumbnail-wrapper w-inline-block\">" +
        "     <div class=\"image-wrapper\"><img data-sizes=\"[{&quot;max&quot;:479,&quot;size&quot;:&quot;90vw&quot;},{&quot;max&quot;:767,&quot;size&quot;:&quot;57vw&quot;},{&quot;max&quot;:991,&quot;size&quot;:&quot;222.83334350585938px&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;296px&quot;}]\" loading=\"lazy\" bind=\"bc8d5539-0dd5-db22-5f0b-415a8ae888ac\" src=\"" + imageSrc + "\" alt=\"\" class=\"image-4\"></div>" +
        "   </a>" +
        " </div>"

      afterPhotosList.innerHTML += photoItem;

    });
    workDone.Before.split(";").forEach(imageSrc => {


      const photoItem = " <div bind=\"96785a30-e2fb-a919-14ca-1f3772dc588e\" role=\"listitem\" class=\"collection-item blog-thumbnail w-dyn-item w-col w-col-4\">" +
        "   <div class=\"thumbnail-wrapper\">" +
        "     <div class=\"image-wrapper\"><img bind=\"4b1094a5-56e3-8273-d09d-37356a6e1c9e\" loading=\"lazy\" width=\"299\" src=\"" + imageSrc + "\" data-sizes=\"[{&quot;max&quot;:479,&quot;size&quot;:&quot;90vw&quot;},{&quot;max&quot;:767,&quot;size&quot;:&quot;29vw&quot;},{&quot;max&quot;:991,&quot;size&quot;:&quot;222.83334350585938px&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;296px&quot;}]\" alt=\"\" class=\"image-2\"></div>" +
        "   </div>" +
        " </div>"

      beforePhotoList.innerHTML += photoItem;

    });

    workDone.process.split(";").forEach(imageSrc => {

       const photoItem =" <div bind=\"66cfc2cd-587e-41c1-ca6a-9289a4ad2bbd\" role=\"listitem\" class=\"blog-thumbnail w-dyn-item w-col w-col-4\">"+
       "   <a href=\"#\" class=\"thumbnail-wrapper w-inline-block\">"+
       "     <div class=\"image-wrapper\"><img data-sizes=\"[{&quot;max&quot;:479,&quot;size&quot;:&quot;90vw&quot;},{&quot;max&quot;:767,&quot;size&quot;:&quot;29vw&quot;},{&quot;max&quot;:991,&quot;size&quot;:&quot;222.83334350585938px&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;296px&quot;}]\" loading=\"lazy\" bind=\"264fe91b-2db6-6db5-0d14-946947a73fca\" src=\""+imageSrc+"\" alt=\"\" class=\"image-5\"></div>"+
       "   </a>"+
       " </div>"

      processPhotoList.innerHTML += photoItem;

    });

  }

})


