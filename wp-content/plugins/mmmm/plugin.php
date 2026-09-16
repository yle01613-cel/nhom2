<?php
/*
Plugin Name: 1. Tiện ích Đọc Văn Bản (Text-to-Speech)
Description: Hiển thị nút đọc âm thanh (Giọng nữ Google) khi người dùng bôi đen văn bản.
Version: 1.1
Author: Bạn
*/
if ( ! defined( 'ABSPATH' ) ) exit;

// Nhúng file JS
function wva_tts_enqueue_scripts() {
    wp_enqueue_script( 'wva-tts-script', plugin_dir_url( __FILE__ ) . 'assets/script.js', array(), '1.1', true );
}
add_action( 'wp_enqueue_scripts', 'wva_tts_enqueue_scripts' );

// Thêm HTML nút bấm và CSS trực tiếp vào footer
function wva_tts_add_ui() {
    ?>
    <style>
        #wva-read-tooltip {
            display: none;
            position: absolute;
            z-index: 999999;
            background-color: #4285f4; /* Màu xanh thân thiện */
            color: #fff;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            transition: background-color 0.2s ease;
        }
        #wva-read-tooltip:hover {
            background-color: #3367d6;
        }
    </style>
    
    <button id="wva-read-tooltip" title="Đọc đoạn văn bản này">🔊 Đọc</button>
    <?php
}
add_action( 'wp_footer', 'wva_tts_add_ui' );