//html5播放器
//		1）ajax加载数据
//		2）暂停/播放
//		3）上一曲/下一曲
//		4）点击歌曲列表播放
//		5）静音
//		6）点击改变播放进度
//		7）实时显现播放进度（时间显示）
//		8）支持播放模式：
//			0:单曲播放,1:单曲循环,2:列表播放,3:列表循环,4:随机播放
document.addEventListener("DOMContentLoaded",function(){
	var ePlayer = document.querySelector(".player");
	var eList = ePlayer.querySelector(".list");
	var btnPlay = ePlayer.querySelector("#btnPlay");
	var btnPrev = ePlayer.querySelector("#btnPrev");
	var btnNext = ePlayer.querySelector("#btnNext");
	var btnVolume = ePlayer.querySelector("#btnVolume");
	var eTitle = ePlayer.querySelector("h1.title");
	var eProgress = ePlayer.querySelector("progress");
	var eModel = ePlayer.querySelector(".play-model");
	var eAlbum = btnPlay.previousElementSibling;
	var eTime = eProgress.nextElementSibling;
	
	var playlist = [];
	var index = 0;
	var model = 2;//0:单曲播放,1:单曲循环,2:列表播放,3:列表循环,4:随机播放

	var player = new Audio();
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState===4&&xhr.status===200){
			var res = JSON.parse(xhr.responseText);
			playlist = res;
			var ol = document.createElement("ol");
			res.forEach(function(item,idx){
				var li = document.createElement("li");
				li.dataset.idx=idx;
				li.innerHTML = item.singer + "-" +item.name;
				ol.appendChild(li);
			});
			eList.appendChild(ol);
			player.src = playlist[index].src;
		}
	}
	xhr.open("get","playlist.json",true);
	xhr.send(null);
	btnPlay.onclick=function(){
		if(player.paused){
			player.play();
		}else{
			player.pause();
		}
	}
	btnNext.onclick=function(){
		index++;
		player.src=playlist[index].src;
		player.play();
	}
	btnPrev.onclick=function(){
		index--;
		player.src=playlist[index].src;
		player.play();
	}
	btnVolume.onclick=function(){
		player.muted=!player.muted;
		if(player.muted){
			this.classList.add("icon-mute");
		}else{
			this.classList.remove("icon-mute");
		}
	}
	
})