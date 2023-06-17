$(document).ready(function(){
    var i=[0,0,0,0]
    var ht=["Less<br><i class='fa fa-angle-up ar4' style='font-size: 24px;'></i>","More<br><i class='fa fa-angle-down ar4' style='font-size: 24px;'></i>"]
    var cn=[".blog-extend",".news-extend",".events-extend",".jobs-extend"]
    for (let j = 1; j < 5; j++) {
        $(".more"+j).click(function(){
            $(cn[j-1]).slideToggle(500);
            $(this).html(ht[i[j-1]]);
            i[j-1]++;
            if(i[j-1]>1){i[j-1]=0}
          });
        
    }
  });