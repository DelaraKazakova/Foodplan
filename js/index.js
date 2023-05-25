$(document).ready(function () {

  // multi-carousel
  // if (window.matchMedia("(min-width: 768px)").matches) {
  //   let items = document.querySelectorAll('#multi-carousel .carousel-item');

  //   items.forEach((el) => {
  //     // number of slides per carousel-item
  //     const minPerSlide = 3
  //     let next = el.nextElementSibling
  //     for (var i = 1; i < minPerSlide; i++) {
  //       if (!next) {
  //         // wrap carousel by using first child
  //         next = items[0]
  //       }
  //       let cloneChild = next.cloneNode(true)
  //       el.appendChild(cloneChild.children[0])
  //       next = next.nextElementSibling
  //     }
  //   })
  // }
  ///-------------------
});

$(document).ready(function () {
  //radio filter
  $('input[name="filter"]').change(function () {
    const value = $(this).val();
    $('#list>div').fadeOut(500, function () {
      if ($(this).hasClass(value)) {
        $(this).fadeIn(500);
      }
    });
  }).filter(':checked').trigger('change');

  //button-filter
  // $(".filter-button").click(function () {
  //   var value = $(this).attr('data-filter');

  //   if (value == "all") {
  //     // $('.filter').removeClass('hidden');
  //     $('.filter').show('1000');
  //   }
  //   else {
  //     //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //     //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
  //     $(".filter").not('.' + value).hide('3000');
  //     $('.filter').filter('.' + value).show('3000');
  //   }
  // });


  $('.open-info').click(function () {
    var $card = $(this).closest('.card');
    var cardTitle = $card.find('.card-title').text();
    // update the expanded card with the title and text
    $('.card-info .card-title').text(cardTitle);

    $card.find('.card-info').fadeIn();
  });

  $(document).on('click', '.btn-close', function () {
    $(this).closest('.card-info').fadeOut();
  });





  $('.plus-button, .minus-button').on('click', function () {
    // Get input element and current value
    var $input = $(this).siblings('input[type="number"]');
    var currentValue = parseInt($input.val());
    // Determine the new value based on the button clicked
    var newValue = (this.classList.contains('plus-button')) ? currentValue + 1 : currentValue - 1;
    newValue = (newValue < 0) ? 0 : newValue; // Minimum value is 0
    // Set the new value
    $input.val(newValue);
  });
  // Set default value as 1 in the input field
  $('input[type="number"]').val(1);






  (() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
});


