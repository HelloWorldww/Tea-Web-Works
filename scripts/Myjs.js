$(function () {
    var dists=[
        ['永康',"歸仁"],
        ["北屯"]
    ];
    var stores = [
        {
            cityId:'0',
            distId:'0',
            name:"大灣店",
            address:"710台南市永康區大灣路269號",
            tel:"06 205 2627"
        },
        {
            cityId:'0',
            distId:'0',
            name:"華興店",
            address:"710台南市永康區華興街115號",
            tel:"06 312 4242"
        },
        {
            cityId:'0',
            distId:'1',
            name:"歸仁店",
            address:"711台南市歸仁區中山路一段523號",
            tel:"06 230 6588"
        },
        {
            cityId:'1',
            distId:'0',
            name:"興安店",
            address:"406台中市北屯區興安路一段322號",
            tel:"04 2243 1188"
        }
    ]
    /**
     * 選擇縣市後，產生區域的選擇表單
     */
    var city;//全域因為之後區域選擇完後就會失效
    $("#city").change(function(){ 
        city = this.value;
        var $Dist = $("#Dist");
        $Dist.empty();
        $("#location div").remove(".store");
        if(city == -1){
            return;
        }
        var dist = dists[city];
        $Dist.append("<option value='-1'>請選擇區域</option>");
        $(dist).each(function(idx,data){
           $Dist.append("<option value='"+idx+"'>"+data+"</option>");
        });

    });
    $("#Dist").change(function(){
        var dist = this.value;
        if(dist == -1){
            return;
        }
        $("#location div").remove(".store");
        $(stores).each(function(idx,store){
            if(store.cityId == city && store.distId == dist){
                var information = "店家:"+ store.name + "</br>地址:" + store.address + "</br>訂購電話:"+store.tel+"<hr></br>";
                $("#Dist").after("<div class='store'>"+information+"</div>");
            }
        });
    });
});