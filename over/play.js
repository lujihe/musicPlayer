window.onload = function () {
    var playbutton = document.getElementById('playbtn');
    var music = document.getElementById('mymusic');
    var prograssBar = document.getElementById("prograssBar");
    var processList = document.getElementById("wp_processBar");
    var wp_processBtn = document.getElementById("wp_processBtn");
    var circle = document.getElementById('circle');
    playbutton.onclick = function () {
        if (music.paused) {
            music.play();
            playbutton.style.background = 'url(images/7.png) ';
            playbutton.style.backgroundSize = 'cover';
            circle.style.animation = 'animate 15s linear infinite';
        } else {
            music.pause();
            playbutton.style.background = 'url(images/8.png)';
            playbutton.style.backgroundSize = 'cover';
            circle.style.animation = 'none';
        }
    }
    /* 鼠标滑过实现透明度变化 */
    playbutton.onmouseleave = function () {
        if (music.paused) {
            playbutton.style.background = 'url(images/7.png)';
            playbutton.style.backgroundSize = 'cover';
        } else {
            playbutton.style.background = 'url(images/8.png) ';
            playbutton.style.backgroundSize = 'cover';
        }
    }
    playbutton.onmouseover = function () {
        if (music.paused) {
            playbutton.style.background = 'url(images/15.png) ';
            playbutton.style.backgroundSize = 'cover';
        } else {
            playbutton.style.background = 'url(images/14.png)';
            playbutton.style.backgroundSize = 'cover';
        }
    }
    /* 获取声音的DOM结点 */
    var mutebutton = document.getElementById("wp_mute");
    /* 实现静音效果 */
    mutebutton.onclick = function () {
        if (music.muted) {
            music.muted = false;
            mutebutton.style.background = 'url(images/11.png)';
            mutebutton.style.backgroundSize = 'cover';

        } else {
            music.muted = true;
            mutebutton.style.background = 'url(images/16.png)';
            mutebutton.style.backgroundSize = 'cover';
        }
    }
    /* 时间变化 */
    /* 获取时间变化结点 */
    var playTime = document.getElementById("wp_playTime");
    /* 周期使时间发生变化 */
    var timer = setInterval(function () {
        var min = parseInt(music.currentTime / 60);
        var sec = parseInt(music.currentTime % 60);
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        playTime.innerHTML = min + ":" + sec;

        /* 总音频长度 */
        var duration = music.duration;
        var BarLength = prograssBar.offsetWidth;
        var BtnLeft = BarLength * (music.currentTime / duration);
        wp_processBtn.style.left = BtnLeft + "px";
        processList.style.width = BtnLeft + "px";
    }, 1000);
    /* 评论 */
    var userCommentTextarea = document.getElementById("user_comment_textarea");
    var greatCommentsBlock = document.querySelector(".great_comments_block");
    var commentWords = document.querySelector(".comment_words");
    var commentSubmitBtn = document.getElementById("comment_submit_btn");
    var firstPage = document.querySelector(".first_page");
    var secondPage = document.querySelector(".second_page");
    var thirdPage = document.querySelector(".third_page");
    var lastPage = document.querySelector(".last_page");
    var prevPageBtn = document.querySelector(".prev_page_btn");
    var nextPageBtn = document.querySelector(".next_page_btn");
    var count = document.getElementById('count');
    /* 获取当前时间函数 因为时间时刻在变 所以取得的为对象创建时的时间 需要实时变化*/
    function getTime() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        allinfos = d.getFullYear() + "-" + month + "-" + d.getDate() + " " + d.getHours() + ":" + minutes + ':' + d.getSeconds();
        return allinfos;
    }
    userCommentTextarea.addEventListener('keyup', function (e) {
        var sum = userCommentTextarea.value.length;
        count.innerHTML = sum;
    })
    var commentDatas = [{
        userName: "赵晓雯",
        commentWords: "喜欢吃羊肉咩",
        commentTime: "2017-05-20 07:00:42",
        thumbsUpCount: 165
    }, {
        userName: "Forget",
        commentWords: "我喜欢很多歌曲，喜欢过很多唱歌的人，那些有时不是我的爱好，已经成为我那段青春的回忆，我现在可以很骄傲",
        commentTime: "2017-06-03 16:58:02",
        thumbsUpCount: 149
    }, {
        userName: "亚里士多德",
        commentWords: "学校晚会表演这歌∰",
        commentTime: "2017-05-14 16:16:53",
        thumbsUpCount: 105
    }, {
        userName: "八个字",
        commentWords: "群星是当之无愧的第一歌手！4000多张专辑，200多个mv，歌手信息却一片空白。。",
        commentTime: "2014-11-16 19:19:42",
        thumbsUpCount: 960
    }, {
        userName: "sang",
        commentWords: "十万个冷笑话2做了一次很好的回忆杀，喜羊羊与灰太狼和柯南，想不到正常的画风在别人的电影出现，惊喜的同时还有一点点忧伤，国产动画片画风总是第一部经典，然后慢慢走3岁以下画风，不管剧情，只要美就行，场景浪漫就行，一部部优秀动画片从老少咸宜到现在不忍直视，难道动画片大人一定没有生存空间吗",
        commentTime: "2019-12-25 06:12:35",
        thumbsUpCount: 149
    }, {
        userName: "一",
        commentWords: "现在的小孩犯了什么错 干嘛要给他们听这个",
        commentTime: "2019-2-25 06:12:05",
        thumbsUpCount: 149
    }, {
        userName: "凌福运",
        commentWords: "我的一颗红心永远守在红太狼身旁，我的耳朵虽然有缺口，但能听到八方，羊羊们都称呼我，叫我灰太狼大王，我的帽子不是很新，还始终带条围巾，可那个爱因斯坦都没有我做的发明，我的臂膀不是很强壮，有人说我发育不良，但我额头的伤疤说明我过去很辉煌。",
        commentTime: "2016-4-6 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "康62",
        commentWords: "经过《喜羊羊与灰太狼》全集统计，灰太狼一共被红太狼的平底锅砸过9544次，被喜羊羊捉弄过2347次，被食人鱼追过769次，被电过1755次，捉羊想过2788个办法，奔波过19658次，足迹能绕地球954圈，至今一只羊也没吃到，他并没有放弃。",
        commentTime: "2005-06-03 18:58:02",
        thumbsUpCount: 24
    }, {
        userName: "贰",
        commentWords: "恒源详....不是中老年服装品牌吗感情你是来做广告的",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "向北",
        commentWords: "别看我是一只羊，我可以炖成一锅羊汤，加点葱就会变得很香，吃完再晒晒太阳",
        commentTime: "2019-08-14 08:24:35",
        thumbsUpCount: 49
    }, {
        userName: "凌福运",
        commentWords: "我的一颗红心永远守在红太狼身旁，我的耳朵虽然有缺口，但能听到八方，羊羊们都称呼我，叫我灰太狼大王，我的帽子不是很新，还始终带条围巾，可那个爱因斯坦都没有我做的发明，我的臂膀不是很强壮，有人说我发育不良，但我额头的伤疤说明我过去很辉煌。",
        commentTime: "2016-4-6 20:08:54",
        thumbsUpCount: 1651
    }, {
        userName: "康62",
        commentWords: "经过《喜羊羊与灰太狼》全集统计，灰太狼一共被红太狼的平底锅砸过9544次，被喜羊羊捉弄过2347次，被食人鱼追过769次，被电过1755次，捉羊想过2788个办法，奔波过19658次，足迹能绕地球954圈，至今一只羊也没吃到，他并没有放弃。",
        commentTime: "2005-06-03 18:58:02",
        thumbsUpCount: 24
    }, {
        userName: "贰",
        commentWords: "恒源详....不是中老年服装品牌吗感情你是来做广告的",
        commentTime: "2015-04-13 09:25:50",
        thumbsUpCount: 656
    }, {
        userName: "向北",
        commentWords: "别看我是一只羊，我可以炖成一锅羊汤，加点葱就会变得很香，吃完再晒晒太阳",
        commentTime: "2019-08-14 08:24:35",
        thumbsUpCount: 49
    }];

    function saveCommentDatas() {
        if (!window.localStorage) {
            alert("请更换支持localstorage的浏览器！");
        } else {
            if (localStorage.getItem("commentsDatasStr") === null) {
                console.log(localStorage.getItem("commentsDatasStr") === null);
                var commentsDatasStr = JSON.stringify(commentDatas);
                localStorage.setItem("commentsDatasStr", commentsDatasStr);
            }
        }
    }

    function readCommentDatas() {

        var json = localStorage.getItem("commentsDatasStr");
        var commentsDatasObj = JSON.parse(json);
        for (var i = 3 * Number(firstPage.innerHTML) - 3; i <= 3 * Number(firstPage.innerHTML) - 1 && i < commentsDatasObj.length; i++) {

            var liNode = document.createElement("li");
            greatCommentsBlock.appendChild(liNode)

            var greatCommentsUserPicture = document.createElement("div");
            liNode.appendChild(greatCommentsUserPicture);
            greatCommentsUserPicture.classList.add("great_comments_user_picture");

            var liCommentsRightBlock = document.createElement("div");
            liNode.appendChild(liCommentsRightBlock);
            liCommentsRightBlock.classList.add("li_comments_right_block");

            var h1Node = document.createElement("h1");
            liCommentsRightBlock.appendChild(h1Node);
            h1Node.innerHTML = commentsDatasObj[i].userName;

            var h1SpanNode = document.createElement("span");
            h1Node.appendChild(h1SpanNode);
            h1SpanNode.innerHTML = "分享";

            var h2Node = document.createElement("h2");
            liCommentsRightBlock.appendChild(h2Node);
            h2Node.innerHTML = commentsDatasObj[i].commentWords;

            var h3Node = document.createElement("h3");
            liCommentsRightBlock.appendChild(h3Node);
            h3Node.innerHTML = commentsDatasObj[i].commentTime;

            var h3SpanNode = document.createElement("span");
            h3Node.appendChild(h3SpanNode);
            h3SpanNode.innerHTML = "回复";

            var deleteCommentSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(deleteCommentSpan);
            deleteCommentSpan.classList.add("delete_comment");

            var thumbsUpCountSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(thumbsUpCountSpan);
            thumbsUpCountSpan.classList.add("thumbs_up_count");
            thumbsUpCountSpan.innerHTML = commentsDatasObj[i].thumbsUpCount;

            var thumbsUpPictureSpan = document.createElement("span");
            liCommentsRightBlock.appendChild(thumbsUpPictureSpan);
            thumbsUpPictureSpan.classList.add("thumbs_up_picture");

            if (commentsDatasObj[i].userName === "赵晓雯") {
                greatCommentsUserPicture.classList.add("great_comments_host_picture");
                deleteCommentSpan.innerHTML = "";
            }
        }
        lastPage.innerHTML = Math.ceil(commentsDatasObj.length / 3);
    }

    saveCommentDatas();
    readCommentDatas();

    commentSubmitBtn.addEventListener("click", function () {
        if (userCommentTextarea.value === '') {
            alert("提交的评论不能为空");
        } else {
            var hostCommentWords = userCommentTextarea.value;
            userCommentTextarea.value = "";
            count.innerHTML = '0';
            var hostCommentTime = getTime();
            var hostObj = {
                userName: "赵晓雯",
                commentWords: hostCommentWords,
                commentTime: hostCommentTime,
                thumbsUpCount: 0
            }
            var json = localStorage.getItem("commentsDatasStr");
            var commentsDatasObj = JSON.parse(json);
            commentsDatasObj.unshift(hostObj);
            json = JSON.stringify(commentsDatasObj);
            localStorage["commentsDatasStr"] = json;
            greatCommentsBlock.innerHTML = "";
            readCommentDatas();
        }
    })

    secondPage.addEventListener("click", function () {
        firstPage.innerHTML = secondPage.innerHTML;
        secondPage.innerHTML = Number(secondPage.innerHTML) + 1;
        if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
            secondPage.innerHTML = lastPage.innerHTML;
        }
        thirdPage.innerHTML = Number(secondPage.innerHTML) + 1;
        if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
            thirdPage.innerHTML = lastPage.innerHTML;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })

    thirdPage.addEventListener("click", function () {
        firstPage.innerHTML = thirdPage.innerHTML;
        secondPage.innerHTML = Number(thirdPage.innerHTML) + 1;
        if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
            secondPage.innerHTML = lastPage.innerHTML;
        }
        thirdPage.innerHTML = Number(thirdPage.innerHTML) + 2;
        if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
            thirdPage.innerHTML = lastPage.innerHTML;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })

    prevPageBtn.addEventListener("click", function () {
        if (Number(firstPage.innerHTML) > 1) {
            firstPage.innerHTML = Number(firstPage.innerHTML) - 1;
            secondPage.innerHTML = Number(firstPage.innerHTML) + 1;
            thirdPage.innerHTML = Number(firstPage.innerHTML) + 2;
        }
        greatCommentsBlock.innerHTML = "";
        readCommentDatas();
    })
    nextPageBtn.addEventListener("click", function () {
        if (Number(firstPage.innerHTML) < Number(lastPage.innerHTML)) {
            firstPage.innerHTML = Number(firstPage.innerHTML) + 1;
            secondPage.innerHTML = Number(firstPage.innerHTML) + 1;
            if (Number(secondPage.innerHTML) >= Number(lastPage.innerHTML)) {
                secondPage.innerHTML = lastPage.innerHTML;
            }
            thirdPage.innerHTML = Number(firstPage.innerHTML) + 2;
            if (Number(thirdPage.innerHTML) >= Number(lastPage.innerHTML)) {
                thirdPage.innerHTML = lastPage.innerHTML;
            }
            greatCommentsBlock.innerHTML = "";
            readCommentDatas();
        }
    })

}