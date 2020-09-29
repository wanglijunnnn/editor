$(function() {
    $(".edit-resume-left, .edit-resume-right")
        .sortable({
            connectWith: ".connectedSortable",
            handle: ".item-toolbar .drag",
            items: ".base-item",
            cancel: "a,button,div[contenteditable]",
        });
    $("div[contenteditable]").attr("contenteditable", true);
    $("div[contenteditable]").focusin(function(e) {
        e.stopPropagation();
        // offsetLeft: 832
        // offsetParent: body
        // offsetTop: 540
        if ($(this).parents(".base-item").hasClass("edit-item")) {
            var itemOffsetTop = $(this).parents(".edit-item").offset().top,
                itemOffsetLeft = $(this).parents(".edit-item").offset().left;
            $(".edit-toolbar").css({
                position: 'absolute',
                top: itemOffsetTop - 15,
                left: itemOffsetLeft,
                display: 'block'
            })

        } else {
            $(".edit-toolbar").css({
                display: 'none'
            });
        }
    });
    $(".base-item").hover(function() {
        var itemOffsetTop = $(this).offset().top,
            itemOffsetLeft = $(this).offset().left;
        itemOuterWidth = $(this).outerWidth(true);
        itemWidth = $(".item-toolbar").width();
        $(this).find("dl").before($(".item-toolbar"));
        $(".item-toolbar").css({
            position: "absolute",
            top: 0,
            right: 0,
            display: "block",
        });
    })

})