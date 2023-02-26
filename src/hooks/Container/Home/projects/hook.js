function useProjectsDetail() {
  const projects = {
    updated: "2023-02-26",
    icons: {
      closeBtn: "./static/icons/close_btn.png"
    },
    data: [ // 230226 주현준: Django 사용 시 models 사용하여 DB화 해야 할 듯.
      {
        index: 0,
        title: "뽀모도로",
        imgUrl: "./static/images/pomodoro.png",
        gen: 1,
        link: "https://pomodoro.pythonanywhere.com/"
      },
      {
        index: 1,
        title: "Tastory",
        imgUrl: "./static/images/tastory.png",
        gen: 1,
        link: "https://tastory.pythonanywhere.com/"
      },
      {
        index: 2,
        title: "Mr.Qr",
        imgUrl: "./static/images/mrqr.png",
        gen: 1,
        link: "http://oshmos.pythonanywhere.com/"
      },
      {
        index: 3,
        title: "CAMPLUS",
        imgUrl: "./static/images/camplus.png",
        gen: 2,
        link: "http://camsplus.site"
      },
      {
        index: 4,
        title: "깐부.GG",
        imgUrl: "./static/images/gganbugg.png",
        gen: 2,
        link: "https://wkdrhkdwls.github.io/doubleup/"
      },
      {
        index: 5,
        title: "BLOGNAVI",
        imgUrl: "./static/images/blognavi.png",
        gen: 2,
        link: "http://blognavi.pythonanywhere.com/"
      },
      {
        index: 6,
        title: "Rolling Paper",
        imgUrl: "./static/images/rollpaper.png",
        gen: 2,
        link: "http://ansoonho.pythonanywhere.com/"
      },
      {
        index: 7,
        title: "채스모스",
        imgUrl: null,
        gen: 1,
        link: "http://15.164.163.193/"
      },
    ]
  };

  return { projects };
}

export default useProjectsDetail;