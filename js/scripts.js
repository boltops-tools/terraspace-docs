$(document).ready(function() {
  /*
  * Carousel
  */
  $(".quotes-carousel").owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    loop: true,
    responsive: {
      992: {
        margin: 20,
      }
    }
  });

  /*
  * Copy code
  */
  const textOriginal = 'Copy code';
  const textCopied = 'Code copied!';
  $('.copy-code').on('click', function() {
    let copyBtn = $(this);
    let copyId = $(this).attr('id');

    let clipboard = new ClipboardJS( '#' + copyId );
    clipboard.on('success', function(e) {
      copyBtn.find('a').text(textCopied);
      copyBtn.addClass('copied');
      copyBtn.find('img').attr('src', '/img/copy-code-copied.svg');
      setTimeout(function() {
        copyBtn.find('a').text(textOriginal);
        copyBtn.find('img').attr('src', '/img/copy-code.svg');
        copyBtn.removeClass('copied');
      }, 2000);
    });

  });

  /*
  * Sub title link
   */
  $('#content h2').each(function() {
    let linkId = $(this).attr('id');
    let linkText = $(this).text();
    let link = window.location.href + '#' + linkId;

    /**
     * Set url to page h2 for copy
     */
    $(this).append('<svg class="copy-link" id="'+linkId+'" data-clipboard-text="'+link+'" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.3 6.8C22.4 5.3 20.8 4.2 18.8 4.2H13C11.1 4.2 9.5 5.2 8.6 6.8C8.5 7 8.4 7.2 8.3 7.4H10.6C10.8 7.2 11 7 11.2 6.8C11.7 6.4 12.3 6.2 13 6.2H14H16H18.8C19.5 6.2 20.1 6.4 20.6 6.8C21.5 7.4 22 8.3 22 9.4C22 11.2 20.6 12.6 18.8 12.6H13C12 12.6 11.1 12.1 10.6 11.4H8.2C9 13.3 10.8 14.6 13 14.6H18.8C21.7 14.6 24 12.3 24 9.4C24 8.4 23.7 7.5 23.3 6.8ZM12.2 10.2C13.8 9.8 15.1 8.7 15.7 7.2H13.4C13.1 7.6 12.7 7.9 12.2 8.1C11.8 8.3 11.4 8.4 10.9 8.4H5.2C4.2 8.4 3.3 7.9 2.7 7.2C2.3 6.6 2 5.9 2 5.2C2 3.4 3.4 2 5.2 2H11C12 2 12.9 2.5 13.4 3.2H15.7C15 1.3 13.1 0 11 0H5.2C2.3 0 0 2.3 0 5.2C0 5.9 0.1 6.6 0.4 7.2C1.2 9.1 3 10.4 5.2 10.4H11C11.4 10.4 11.8 10.3 12.2 10.2Z" fill="black"/></svg>')

    /**
     * Set page menu items
     */
    $('#page-menu ul').append('<li><a href="'+link+'">'+linkText+'</a></li>');
  });

  $('.copy-link').on('click', function() {
    let copyBtn = $(this);
    let linkCopied = $('#link-copied');
    let copyId = $(this).attr('id');

    window.location.href = "#" + copyId; // also go to the anchor
    let clipboard = new ClipboardJS( '#' + copyId );
    clipboard.on('success', function(e) {
      copyBtn.addClass('copied');
      linkCopied.show();
      setTimeout(function() {
        copyBtn.removeClass('copied');
        linkCopied.fadeOut(300);
      }, 2000);
    });

  });

  // load with pure js here beause its faster than waiting for opal. opal shows again
  $('#page-menu').each(function() {
    if ($(this).find('li').length !== 0) {
      $(this).show();
    }
  })

  // adjust edit-page link
  var github_base = $('#edit-page').attr('href');
  var md_page = window.location.pathname.replace('/','_').replace(/\/$/,'.md');
  var href = github_base + md_page;
  $('#edit-page').attr('href', href);

});
