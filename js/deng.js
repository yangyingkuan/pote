function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
window.onload=function(){
	$(".tehui").mouseover(function(){
		$(".tehuiBox").css({
			"display":"block"
		});
	})
	$(".tehui").mouseout(function(){
		$(".tehuiBox").css({
			"display":"none"
		});
	})
	$(".zuixin").mouseover(function(){
		$(".zuixinBox").css({
			"display":"block"
		});
	})
	$(".zuixin").mouseout(function(){
		$(".zuixinBox").css({
			"display":"none"
		});
	})
	
//	-------------------------------------------------------
$(".pinpai").mouseover(function(){
		$(".pinpaiBox").css({
			"display":"block"
		});
	})
	$(".pinpai").mouseout(function(){
		$(".pinpaiBox").css({
			"display":"none"
		});
	})
//	-------------------------------------	
$(".fuzhuang").mouseover(function(){
		$(".fuzhuangBox").css({
			"display":"block"
		});
	})
	$(".fuzhuang").mouseout(function(){
		$(".fuzhuangBox").css({
			"display":"none"
		});
	})
//	----------------------------------
$(".xielv").mouseover(function(){
		$(".xielvBox").css({
			"display":"block"
		});
	})
	$(".xielv").mouseout(function(){
		$(".xielvBox").css({
			"display":"none"
		});
	})
//	----------------------------
$(".baodai").mouseover(function(){
		$(".baodaiBox").css({
			"display":"block"
		});
	})
	$(".baodai").mouseout(function(){
		$(".baodaiBox").css({
			"display":"none"
		});
	})
//	--------------------------------------
	$(".peishi").mouseover(function(){
		$(".peishiBox").css({
			"display":"block"
		});
	})
	$(".peishi").mouseout(function(){
		$(".peishiBox").css({
			"display":"none"
		});
	})
//	----------------------------
$(".zhubao").mouseover(function(){
		$(".zhubaoBox").css({
			"display":"block"
		});
	})
	$(".zhubao").mouseout(function(){
		$(".zhubaoBox").css({
			"display":"none"
		});
	})
//	-------------------------
$(".baibian").mouseover(function(){
		$(".baibianBox").css({
			"display":"block"
		});
	})
	$(".baibian").mouseout(function(){
		$(".baibianBox").css({
			"display":"none"
		});
	})
}
