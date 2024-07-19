function showVideos(sport) {
  const videoLists = document.querySelectorAll(".video-list");
  videoLists.forEach((list) => {
    list.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
    btn.classList.remove("opac");
  });

  switch (sport) {
    case "volleyball":
      setActive("volleyball", "volley");
      break;
    case "basketball":
      setActive("basketball", "bask");
      break;
    case "badminton":
      setActive("badminton", "badm");
      break;
    case "football":
      setActive("football", "footb");
      break;
    case "boxing":
      setActive("boxing", "box");
      break;
  }

  function setActive(sportId, buttonId) {
    document.getElementById(sportId).classList.add("active");
    document.getElementById(buttonId).classList.add("opac");
  }

  const activeButton = document.querySelector(
    `.button[onclick="showVideos('${sport}')"]`
  );
  activeButton.classList.add("selected");
}

document.addEventListener("DOMContentLoaded", () => {
  showVideos("volleyball");
});

function showVideo(videoId) {
  var iframeSrc = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  var iframe = document.getElementById("pb-video-iframe");

  if (!iframe.getAttribute("src")) {
    iframe.setAttribute("src", iframeSrc);
  }

  document.getElementById("pb-video-modal").style.display = "flex";
}

function hideVideo() {
  var iframe = document.getElementById("pb-video-iframe");
  iframe.setAttribute("src", "");
  document.getElementById("pb-video-modal").style.display = "none";
}

$(function () {
  $(document).on("click", "a.page-scroll", function (event) {
    var $anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

function toggleNav(button) {
  var nav = document.getElementById("myNav");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    button.classList.remove("open");
  } else {
    nav.classList.add("open");
    button.classList.add("open");
  }
}
