<?php


function load_stylesheets() {

  wp_register_style('awsome', 'https://use.fontawesome.com/releases/v5.11.2/css/all.css', array(), 1, 'all');
  wp_enqueue_style('awsome');

  wp_register_style('swiper', 'https://unpkg.com/swiper/css/swiper.min.css', array(), 1, 'all');
  wp_enqueue_style('swiper');

  wp_register_style('style', get_template_directory_uri().'/css/style.css', array(), 1, 'all');
  wp_enqueue_style('style');


    wp_register_style('customCss', get_template_directory_uri().'/custom.css', array(), 1, 'all');
    wp_enqueue_style('customCss');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');




function addjs() {

    wp_register_script('jQuery', 'https://code.jquery.com/jquery-3.3.1.slim.min.js', null, null, true);
    wp_enqueue_script('jQuery');

    wp_register_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', null, null, true);
    wp_enqueue_script('popper');

    wp_register_script('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', null, null, true);
    wp_enqueue_script('bootstrap');

    wp_register_script('main', get_template_directory_uri().'/js/main.js', array(), null, true);
    wp_enqueue_script('main');

    wp_register_script('custom', get_template_directory_uri().'custom.js', array(), null, true);
    wp_enqueue_script('custom');
}


add_action('wp_enqueue_scripts', 'addjs');


?>
