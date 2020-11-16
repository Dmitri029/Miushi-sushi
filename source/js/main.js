'use strict';

const INITIAL_VALUE_COUNTER = 0;

$(document).ready(function () {
  const isMobile = $(document).width() < 750;
  const isTablet = $(document).width() < 1172;

  const main = $('.main-nav');
  const toggleNav = $('.main-nav__toggle');

  main.removeClass('main-nav--nojs');

  toggleNav.on('click', function () {
    if (main.hasClass('main-nav--closed')) {
      main.removeClass('main-nav--closed').addClass('main-nav--opened');
    } else {
      main.removeClass('main-nav--opened').addClass('main-nav--closed');
    }
  });

  const sliderCounters = $('.counter');
  const buttonMinus = $('.counter__minus');
  const buttonPlus = $('.counter__plus');

  sliderCounters.each(function () {
    const counter = $(this);
    const maxChars = 3;

    $('.counter__number').on('keydown', function () {
      if ($(this).val().length >= maxChars) {
        $(this).val($(this).val().substr(0, maxChars));
      }
    });

    counter.find(buttonPlus).on('click', function () {
      let counterValue = parseInt(counter.find('.counter__number').val(), 10);
      counterValue++;
      counter.find('.counter__number').val(counterValue);
    });

    counter.find(buttonMinus).on('click', function () {
      let counterValue = parseInt(counter.find('.counter__number').val(), 10);

      if (counterValue > INITIAL_VALUE_COUNTER) {
        counterValue--;
        counter.find('.counter__number').val(counterValue);
      }
    });
  });

  const featureButton = $('.features__btn');
  const features = $('.features__item:nth-child(n+4)');

  if (isMobile) {
    features.each(function () {
      $(this).hide();
    });
  }

  featureButton.on('click', function (evt) {
    evt.preventDefault();
    if ($('.features__item:nth-child(n+4):eq(0)').is(':hidden')) {
      featureButton.text('Скрыть');
      features.each(function () {
        $(this).show();
      })
    } else {
      featureButton.text('Показать все');
      features.each(function () {
        $(this).hide();
      })
    }
  });

  const aboutButton = $('.about__btn');
  const aboutText = $('.about__wrap-hide');

  if (isMobile) {
    aboutText.hide();
  }

  aboutButton.on('click', function (evt) {
    evt.preventDefault();
    if (aboutText.is(':hidden')) {
      aboutButton.text('Скрыть');
      aboutText.show();
    } else {
      aboutButton.text('Показать все');
      aboutText.hide();
    }
  });

  const productItems = $('.products__item');
  const productButton = $('.products__wrap');
  const productList = $('.products__sublist');
  const closeIndicator = $('.products__close');
  const openIndicator = $('.products__open');

     if (isTablet) {
    productItems.each(function () {
      let item = $(this);

      item.find(productList).hide();
      item.find(openIndicator).hide();

      item.find(productButton).on('click', function () {
        if (!productList.is(':visible')) {
          item.find(productList).slideDown();
          item.find(openIndicator).show();
          item.find(closeIndicator).hide();
        } else {
          item.find(productList).slideUp();
          item.find(closeIndicator).show();
          item.find(openIndicator).hide();
        }
      })
    });
  }

  $('.feedback__phone').mask('+7 (000) 000-0000');
});
