(function($) {
    $.medit = function(options) {
        var init = {
            toolbar: [{
                    type: "bold",
                    name: "加粗",
                },
                {
                    type: "table",
                    name: "表格",
                },
                {
                    type: "italic",
                    name: "斜体",
                },
                {
                    type: "underline",
                    name: "下划线",
                },
                {
                    type: "removeFormat",
                    name: "清除格式",
                },
                {
                    type: "insertOrderedList",
                    name: "有序列表",
                },
                {
                    type: "insertUnorderedList",
                    name: "无序列表",
                },
                {
                    type: "justifyFull",
                    name: "文本对齐",
                },
                {
                    type: "justifyLeft",
                    name: "居左对齐",
                },
                {
                    type: "justifyRight",
                    name: "居右对齐",
                },
                {
                    type: "indent",
                    name: "增加缩进",
                },
                {
                    type: "outdent",
                    name: "减少缩进",
                },
            ],
        };
        var settings = $.extend({}, init, options);

        var fn = fn || {};
        $(".edit-toolbar").remove();
        fn = {
            init: function() {
                fn._event();
            },
            _event: function() {
                var toolbar_str = "",
                    item_str = "";
                $.each(settings.toolbar, function(index, item) {
                    console.log(item);
                    item_str +=
                        '<input type="button" data-type="' +
                        item.type +
                        '" value="' +
                        item.name +
                        '"/>';
                });
                toolbar_str = '<div class="edit-toolbar">' + item_str + "</div>";
                $("body").append(toolbar_str);
                $(document).on("click", 'input[data-type="bold"]', function() {
                    fn.bold();
                });
                $(document).on("click", 'input[data-type="italic"]', function() {
                    fn.italic();
                });
                $(document).on(
                    "click",
                    'input[data-type="underline"]',
                    function() {
                        fn.underline();
                    }
                );
                $(document).on(
                    "click",
                    'input[data-type="removeFormat"]',
                    function() {
                        fn.removeFormat();
                    }
                );
                $(document).on(
                    "click",
                    'input[data-type="insertOrderedList"]',
                    function() {
                        fn.insertOrderedList();
                    }
                );
                $(document).on(
                    "click",
                    'input[data-type="insertUnorderedList"]',
                    function() {
                        fn.insertUnorderedList();
                    }
                );
                $(document).on(
                    "click",
                    'input[data-type="justifyFull"]',
                    function() {
                        fn.justifyFull();
                    }
                );
                $(document).on(
                    "click",
                    'input[data-type="justifyLeft"]',
                    function() {
                        fn.justifyLeft();
                    }
                );

                $(document).on(
                    "click",
                    'input[data-type="justifyRight"]',
                    function() {
                        fn.justifyRight();
                    }
                );
                $(document).on("click", 'input[data-type="indent"]', function() {
                    fn.indent();
                });
                $(document).on("click", 'input[data-type="outdent"]', function() {
                    fn.outdent();
                });
            },
            bold: function() {
                document.execCommand("Bold");
            },
            italic: function() {
                document.execCommand("italic");
            },
            underline: function() {
                document.execCommand("underline");
            },
            removeFormat: function() {
                document.execCommand("removeFormat");
            },
            insertOrderedList: function() {
                document.execCommand("insertOrderedList");
            },
            insertUnorderedList: function() {
                document.execCommand("insertUnorderedList");
            },
            justifyFull: function() {
                document.execCommand("justifyFull");
            },
            justifyLeft: function() {
                document.execCommand("justifyLeft");
            },
            justifyRight: function() {
                document.execCommand("justifyRight");
            },
            indent: function() {
                document.execCommand("indent");
            },
            outdent: function() {
                document.execCommand("outdent");
            },
        };

        fn.init();
    };
})($);