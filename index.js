$(function() {
    $('.portfolio-item').css('opacity', 0).each(function(i) {
        $(this).delay(300 * i).animate({ opacity: 1 }, 600);
    });

    $('.portfolio-item').on('click', function() {
        const videoSrc = $(this).data('video');
        if (videoSrc) {
            $('.video-modal video')
                .attr('src', videoSrc)
                .get(0)
                .play();
            $('.video-modal')
                .css('display', 'flex') // ← ここでflexに指定
                .hide()
                .fadeIn();
        }
    });

    $('.video-modal').on('click', function(e) {
        if (e.target.tagName !== 'VIDEO') {
            $(this).fadeOut();
            const video = $(this).find('video').get(0);
            video.pause();
            video.currentTime = 0;
            video.src = '';
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hero-letter").forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });
});

$(function () {
  $('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - $('.navbar').outerHeight() }, 700); 
    }
  });
});

$(function () {
  $('.demo-box').on('click', function (e) {
    if (!$(e.target).closest('a').length) {
      const url = $(this).data('href');
      if (url) window.open(url, '_blank');
    }
  });
});


