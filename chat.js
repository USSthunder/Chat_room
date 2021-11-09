var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var channel = new BroadcastChannel("foo");
channel.onmessage = function( e ) {
  // Process messages from other contexts.
};
// Send message to other listening contexts.
channel.postMessage({ value: 42, type: "bar"});
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

<script type="text/javascript">
// jQuery Document
$(document).ready(function(){
	//If user wants to end session
	$("#exit").click(function(){
		var exit = confirm("Are you sure you want to end the session?");
		if(exit==true){window.location = 'index.php?logout=true';}		
	});
});
</script>
jQuery(//If user submits the form
$("#submitmsg").click(function () {
    var clientmsg = $("#usermsg").val();
    $.post("post.php", { text: clientmsg });
    $("#usermsg").val("");
    return false;
});)
<script type="text/javascript">
if(isset($_GET['logout'])){	
	
	//Simple exit message
	$logout_message = "<div class='msgln'><span class='left-info'>User <b class='user-name-left'>". $_SESSION['name'] ."</b> has left the chat session.</span><br></div>";
    file_put_contents("log.html", $logout_message, FILE_APPEND | LOCK_EX);
	
	session_destroy();
	header("Location: index.php"); //Redirect the user
}
//If user submits the form
$("#submitmsg").click(function () {
    var clientmsg = $("#usermsg").val();
    $.post("post.php", { text: clientmsg });
    $("#usermsg").val("");
    return false;
});
<?
session_start();
if(isset($_SESSION['name'])){
	$text = $_POST['text'];
	
	$text_message = "<div class='msgln'><span class='chat-time'>".date("g:i A")."</span> <b class='user-name'>".$_SESSION['name']."</b> ".stripslashes(htmlspecialchars($text))."<br></div>";
    
    file_put_contents("log.html", $text_message, FILE_APPEND | LOCK_EX);
}
?>
//Load the file containing the chat log
function loadLog(){		
	$.ajax({
		url: "log.html",
		cache: false,
		success: function(html){		
			$("#chatbox").html(html); //Insert chat log into the #chatbox div				
	  	},
	});
}
//Load the file containing the chat log
function loadLog(){		
	var oldscrollHeight = $("#chatbox")[0].scrollHeight - 20; //Scroll height before the request
	$.ajax({
		url: "log.html",
		cache: false,
		success: function(html){		
			$("#chatbox").html(html); //Insert chat log into the #chatbox div	
			
			//Auto-scroll			
			var newscrollHeight = $("#chatbox")[0].scrollHeight - 20; //Scroll height after the request
			if(newscrollHeight > oldscrollHeight){
				$("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
			}				
	  	},
	});
}
