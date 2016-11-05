$(document).ready( function() {
 var domain = 'saralmt.com'
 var prefix = 'sara'
 $(".nospam").attr('href', 'mailto:' + prefix + '@' + domain).text(prefix + '@' + domain);
});