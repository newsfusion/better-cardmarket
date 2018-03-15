import jQuery from "./lib/jquery-3.3.1.min";

import ext from "./utils/ext";

let $ = jQuery;


jQuery("table.MKMTable.skm-oneEdgeShadow div.centered > span.icon, table.SearchTable td:first-child > span.icon").each(function(i,img){
  var imageFile = jQuery(img).attr("onmouseover")
  if(imageFile) {
    imageFile = imageFile.replace('setAndShowImgBox(this,\'','').replace('\')','');
    var newElement = jQuery( img ).replaceWith( "<img style=\"  background-image: url("+imageFile+");\" class=\"cardimg\" onmouseout=\"hideImgBox()\" onmouseover=\"setAndShowImgBox(this,'"+imageFile+"')\">" );
  }
});

jQuery(".MKMTable.fullWidth.mb-2.skm-oneEdgeShadow tbody tr td div.algn-r.nowrap").each(function(i,price){
  var cardprice = "<span class=\"cardprice\">"+$(price).text()+"</span>"; 

  $(price).parent().prev().append(cardprice);
  $(price).parent().remove();
});

