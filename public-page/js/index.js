$(document).ready(function() {
  $("#pentity").click(function() {
    $('#pentity').before('<div class="al-com al-2 sep">.........................</div><div class="al-com al-3"> <small>Link Type : In</small> <div class="al-combo dropdown"> <div class="first dropbtn"> <i class="fas fa-link" style="color: #A2E7C4;"></i> <i class="fas fa-caret-down"></i> </div><div class="dropdown-content"> <a href="#"> <i class="fas fa-link"></i>AND</a> <a href="#"> <i class="fas fa-link"></i>OR</a> </div><p>In</p><i class="fas fa-cog hvr-pulse-shrink"></i> </div><p>AND/OR</p></div><div class="al-com al-4 sep">.........................</div><div class="al-com al-5"> <small>Entity 1</small> <div class="al-combo dropdown"> <div class="first dropbtn"> <i class="fas fa-crosshairs"></i> <i class="fas fa-caret-down"></i> </div><div class="dropdown-content"> <a href="#"> <i class="fas fa-user"></i>Entity 1</a> <a href="#"> <i class="fas fa-crosshairs"></i>Entity 2</a> <a href="#"> <i class="fas fa-pencil-alt"></i>Entity 3</a> </div><p>Chicago</p><i class="fas fa-cog hvr-pulse-shrink"></i> </div><p>AND/OR</p></div>')
  });
  $('.fa-cog').click(function() {
    $('.al-modal').css('display', 'flex');
  });
  $('#al-ok, #al-cancel').click(function() {
    $('.al-modal').css('display', 'none');
  })
  $('body').on('click', '.dropbtn', function() {
    $(this).next().toggleClass('al-show')
  })
  .on('mouseleave', '.dropdown-content', function() {
    $(this).toggleClass('al-show')
  });

  $('.dropdown-content').on('click','a',function () {
    console.log($(this).html())
  })
});
