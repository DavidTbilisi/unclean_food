

<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once 'Request.php';

class Email {
    public static $to;
    public static $subject;
    public static $msg;
    public static $from;
    public static $cc;
    public static $reply_to;
    public static $headers;
    public static $gamgzavneli;

        // Additional headers
//    protected   $headers[] = 'From: Birthday Reminder <birthday@example.com>';
//    protected   $headers[] = 'Cc: birthdayarchive@example.com';
//    protected   $headers[] = 'Bcc: birthdaycheck@example.com';
    private static function  h () {
        self::$headers[] = 'MIME-Version: 1.0';
        self::$headers[] = 'Content-type: text/html; charset=iso-8859-1';
        self::$headers[] = 'X-Mailer: PHP/' . phpversion();

        self::$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
        self::$headers[] = 'From: Birthday Reminder <birthday@example.com>';
        
        if(isset(self::$from) ) {
            self::$headers[] =  "From: <". self::$from .">";
        }
        if( isset(self::$cc) ) {
            self::$headers[] =  "Cc: ". self::$cc ;
        }
        if( isset(self::$replay_to) ) {
            self::$headers[] =  'Reply-To: '. self::$replay_to;
        } else {
            self::$headers[] =  'Reply-To: '. self::$to;
        }
    }

    public static function send() {
        self::h();
       return mail(self::$to, self::$subject, self::$msg, implode("\r\n", self::$headers));
    }
}

class File {

    public static function save($path="request.txt",$text="",$mode = FILE_APPEND) {
        file_put_contents($path,$text,$mode);
    }
    
    
    
    }



if ($req->get_post('search')):
    Email::$to = 'davidchincharashvili@gmail.com';
    Email::$subject = "add too";
    Email::$msg = "<b>" . $req->get_post('search','s'). "</b>";
    echo Email::send()? "შეკვეთა მიღებულია" : "შეკვეთა ვერ გაიგზავნა";
    File::save("request.txt",$req->get_post('search','s') . "\n");

endif;