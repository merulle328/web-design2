var HeaderText= '<div class="test"><div class="logo"> <a href="index5.html"> <img src="img/ICONS/3.png" alt=""></a></div> <nav class="navgrid"><a href="index8.html">Меню</a><a href="index2.html">Адреса</a><a href="index.html">О нас</a><a href="index4.html">Связаться</a></nav>  <div class="icons1"><img src="img/ICONS/1.png" alt=""><img src="img/ICONS/2.png" alt=""></div></div>';
    function SetHeader(){
        var header = document.createElement("header");
        header.className="header2";
        header.innerHTML=HeaderText;
        document.body.insertAdjacentElement('afterbegin', header);
    }
    SetHeader();

