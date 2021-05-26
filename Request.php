<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 3/24/2019
 * Time: 8:24 AM
 */

class Request {
    public $r;
    public function method(){}
    public function is_get(){}
    public function is_post(){}
    public function post($name, $default=null){
        return isset($_POST[$name])?$_POST[$name]:$default;
    }
    public function get($name, $default=null){
        return isset($_GET[$name])?$_GET[$name]:$default;
    }
    public function get_post($index, $xss_clean = NULL){
        return isset($_GET[$index])
            ? $this->get($index, $xss_clean)
            : $this->post($index, $xss_clean);
    }

    public function post_get($index, $xss_clean = NULL){
        return isset($_POST[$index])
            ? $this->post($index, $xss_clean)
            : $this->get($index, $xss_clean);
    }
}

$req = new Request();