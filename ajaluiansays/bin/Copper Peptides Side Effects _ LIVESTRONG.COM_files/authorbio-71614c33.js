$(document).on("click",".js-author, .js-author_bio .close_icon",function(o){o.stopImmediatePropagation(),$(this).parents(".js-article_header").find(".js-author_bio").toggle()});