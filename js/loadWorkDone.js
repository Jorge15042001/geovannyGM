const collection = document.getElementById("workDone");
console.log(collection);


dones.forEach(wordDone=>{

  console.log(wordDone);
  const mainImageSrc = wordDone.after.split(";")[0];
  const workName = wordDone.Name;
  const html_code = "<div bind=\"2bede8f4-443b-c4f6-03a6-1dacf577239a\" role=\"listitem\" class=\"blog-thumbnail w-dyn-item w-col w-col-4\">"+
              "<a bind=\"c97e4046-fc5a-c832-dc91-9175010803ae\" href=\""+"work/"+workName+".html\" class=\"thumbnail-wrapper w-inline-block\">"+
                "<div class=\"image-wrapper\">"+
                  "<div bind=\"7d8cc3e7-ecdb-f44d-56fb-652dca72aa04\" class=\"category-tag\"></div><img data-sizes=\"[{&quot;max&quot;:479,&quot;size&quot;:&quot;78vw&quot;},{&quot;max&quot;:767,&quot;size&quot;:&quot;276px&quot;},{&quot;max&quot;:991,&quot;size&quot;:&quot;222.828125px&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;295.984375px&quot;}]\" loading=\"lazy\" bind=\"15f81df7-0039-2f8f-4da2-9ee0da2bdee1\" src=\""+mainImageSrc+"\" alt=\"\" class=\"ima\">"+
                "</div>"+
                "<div class=\"thumbnail-text\">"+
                  "<div bind=\"987b72c9-3b56-62de-ddaa-50f9200e8b05\" class=\"blog-title\">"+workName+"</div>"+
                "</div>"+
              "</a>"+
            "</div>"

  collection.innerHTML+=html_code

});


