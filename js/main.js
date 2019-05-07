$(function() {
    var nameHash = window.location.hash;
    var newHashName = nameHash.replace("#","");

    var req = $.getJSON('tea.json', function(data) {
        $.each(data, function(i, f) {
            var innerRow = "<div class='col-md-12'><div class='tea-wrapper tea-item' data-source='" + f.citation + "' data-name='" + f.name + "' data-effects='" + f.effects + "' data-description='" + f.description + "' data-link='" + f.link + "' data-img='" + f.img + "'data-origin='" + f.origin + "' data-type='" + f.type + "' data-steep='" + f.steep + "'><div class='row'>" +
                         "<div class='col-md-3 tea-column'>" + "<h3 class='tea-item-data tea-name'>" + f.name + "</h3>" + "</div>" +
                         "<div class='col-md-3 tea-column'>" + "<h3 class='tea-item-data tea-type coin-price'>" + f.type + "</h3>" + "</div>" +
                         "<div class='col-md-3 tea-column'>" + "<h3 class='tea-item-data tea-effects coin-price'>" + f.effects + "</h3>" + "</div>" +
                         "<div class='col-md-3'>" + "<h3 class='tea-item-data coin-price'>" + "<div class='btn view-details btn-cta'>View</div><a href='" + f.link + "' target='_blank'><div class='btn btn-cta buy-link'>Buy</div></a>" + "</h3>" + "</div>" +
                         "</div></div></div>";
            $(innerRow).prependTo(".row-content");
            if (f.name = newHashName) {
                $('html,body').animate({ scrollTop: 0 }, 400);
                $(".wrap-details").css("display", "block");
                $(".wrap-list").removeClass("fade-in-down");
                $(".row-filters").removeClass("fade-in-down");
                $(".wrap-list").addClass("fade-out-up");
                $(".row-filters").addClass("fade-out-up");
                $(".wrap-details").removeClass("fade-out-down");
                $(".wrap-details").addClass("fade-in-up");
                setTimeout(function(){
                    $(".wrap-list").css("display","none");
                }, 400);

                // setting content
                var replaceSpace = f.name;
                var replaceSpaceName = f.name.replace("%20", " ");

                $(".tea-details-title").html(replaceSpaceName);
                $(".tea-details-buy").attr("href", f.link);
                $(".tea-details-origin").html(f.origin);
                $(".tea-details-effects").html(f.effects);
                $(".tea-details-type").html(f.type);
                $(".tea-details-steep").html(f.steep);
                $(".tea-details-description").html(f.description);
                $(".tea-details-img").attr("src", f.img);
                $(".tea-details-source").html(f.citation);

            }
        });
    }).done(function(data){
        $('#Search').keydown(function(e){
            if (e.keyCode == 13) {
                if ($(window).width() < 992) {
                    $("html").toggleClass("no-flow");
                    $("body").toggleClass("no-flow");
                    $(".nav").toggleClass("active");
                    $(".row-filters").toggleClass("active");
                }
                $("#Search").blur();
            }
        });
        // $('#Search').keyup(function(){
        //     var valThis = $(this).val().toLowerCase();
        //     $('.tea-name').each(function(){
        //         if ($(this).is(':contains("' + valThis + '")')) {
        //             $(this).closest(".tea-item").show();
        //         } else {
        //             $(this).closest(".tea-item").hide();
        //         }
        //         if($(".tea-item:visible").length == 0) {
        //             $(".no-results").show();
        //         } else {
        //             $(".no-results").hide();
        //         }
        //     });
        // });
        $('#Search').keyup(function(){
            $('.box-filter-type > span').text("type");
            $('.box-filter-effects > span').text("effects");
            var valThis = $(this).val().toLowerCase();
            $('.tea-item').each(function(){
                if ($(this).find(".tea-name").is(":contains('" + valThis + "')")) {
                    $(this).closest(".tea-item").show();
                } else if ($(this).find(".tea-type").is(":contains('" + valThis + "')")) {
                    $(this).closest(".tea-item").show();
                } else if ($(this).find(".tea-effects").is(":contains('" + valThis + "')")) {
                    $(this).closest(".tea-item").show();
                } else {
                    $(this).closest(".tea-item").hide();
                }
                if($(".tea-item:visible").length == 0) {
                    $(".no-results").show();
                } else {
                    $(".no-results").hide();
                }
            });
        });

        $(".view-details").click(function(i, f){
            $('html,body').animate({ scrollTop: 0 }, 400);
            $(".wrap-details").css("display", "block");
            $(".wrap-list").removeClass("fade-in-down");
            $(".row-filters").removeClass("fade-in-down");
            $(".wrap-list").addClass("fade-out-up");
            $(".row-filters").addClass("fade-out-up");
            $(".wrap-details").removeClass("fade-out-down");
            $(".wrap-details").addClass("fade-in-up");
            setTimeout(function(){
                $(".wrap-list").css("display","none");
            }, 400);
            
            // setting content

            window.location.hash = "#" + $(this).closest(".tea-wrapper").attr("data-name");
            $(".tea-details-title").html($(this).closest(".tea-wrapper").attr("data-name"));
            $(".tea-details-buy").attr("href", $(this).closest(".tea-wrapper").attr("data-link"));
            $(".tea-details-origin").html($(this).closest(".tea-wrapper").attr("data-origin"));
            $(".tea-details-effects").html($(this).closest(".tea-wrapper").attr("data-effects"));
            $(".tea-details-type").html($(this).closest(".tea-wrapper").attr("data-type"));
            $(".tea-details-steep").html($(this).closest(".tea-wrapper").attr("data-steep"));
            $(".tea-details-description").html($(this).closest(".tea-wrapper").attr("data-description"));
            $(".tea-details-img").attr("src", $(this).closest(".tea-wrapper").attr("data-img"));
            $(".tea-details-source").html($(this).closest(".tea-wrapper").attr("data-source"));
        });
        $(".go-back").click(function(){
            window.location.hash = "";
            $('html,body').animate({ scrollTop: 0 }, 400);
            $(".wrap-list").css("display", "block");
            $(".wrap-list").removeClass("fade-out-up");
            $(".wrap-list").addClass("fade-in-down");
            $(".row-filters").removeClass("fade-out-up");
            $(".row-filters").addClass("fade-in-down");
            $(".wrap-details").removeClass("fade-in-up");
            $(".wrap-details").addClass("fade-out-down");
            setTimeout(function(){
                $(".wrap-details").css("display","none");
            }, 400);
        });
        $(".btn-reset").click(function(){
            $("#Search").val('');
            $(".nav").toggleClass("active");
            $(".row-filters").toggleClass("active");
            $('.box-filter-type > span').text("type");
            $('.box-filter-effects > span').text("effects");
            $(".tea-item").show();
            $(".no-results").hide();
            $("html").removeClass("no-flow");
            $("body").removeClass("no-flow");
        });
        $(".filter-item-type").click(function(){
            $(".nav").toggleClass("active");
            $(".row-filters").toggleClass("active");
            var elText = $(this).html().toLowerCase();
            $(".tea-item").show();
            $('.box-filter-effects > span').text("effects");
            $('.box-filter-type > span').text("" + elText + "");
            if($(this).text().indexOf('-') === -1) {
                $(".tea-item:not([data-type='" + elText +"'])").hide();
            } else {
                $('.box-filter-type > span').text('type');
            }
        });
        $(".filter-item-effects").click(function(){
            $(".nav").toggleClass("active");
            $(".row-filters").toggleClass("active");
            var elText = $(this).html().toLowerCase();
            $(".tea-item").show();
            $('.box-filter-type > span').text("type");
            $('.box-filter-effects > span').text("" + elText + "");
            if($(this).text().indexOf('-') === -1) {
                $(".tea-item:not([data-effects='" + elText +"'])").hide();
            } else {
                $('.box-filter-effects > span').text('effects');
            }
        });
        $(".search-submit").click(function(){
            $(".nav").toggleClass("active");
            $(".row-filters").toggleClass("active");
            $("html").removeClass("no-flow");
            $("body").removeClass("no-flow");
        });
        $(".overlay-trigger").click(function(){
            if ($(this).hasClass("overlay-open")) {
                $(".overlay-open").hide();
                $(".overlay-close").show();
                $(".overlay").toggleClass("active");
                $("html").addClass("no-flow");
                $("body").addClass("no-flow");
            } else {
                $(".overlay-close").hide();
                $(".overlay-open").show();
                $(".overlay").toggleClass("active");
                if ($(".row-filters").hasClass("active")) {
                    return;
                } else {
                    $("html").removeClass("no-flow");
                    $("body").removeClass("no-flow");
                }
            }
        });
    });
});
$(document).ready(function(){
    $(".nav").click(function(){
        $(this).toggleClass("active");
        $(".row-filters").toggleClass("active");
        $("html").toggleClass("no-flow");
        $("body").toggleClass("no-flow");
        $(".drop-down").removeClass("active");
    });
    $(".box-filter").click(function(e){
        $(this).siblings(".drop-down").css("display","block");
        $(this).siblings(".drop-down").addClass("active");
        $(".box-filter").not($(this)).siblings(".drop-down").removeClass("active");
        e.stopPropagation();
    });
    $(".drop-down").click(function(){
        $(this).removeClass("active");
        $(".nav").toggleClass("active");
        $(".row-filters").toggleClass("active");
    });
    $("body").click(function(){
        setTimeout(function(){
            if ($(".drop-down").hasClass("active")) {
                $(".drop-down").removeClass("active");
            }
        }, 50);
    });
    // $('body').bind( "touchstart", function(e){
    //     setTimeout(function(){
    //         if ($(".drop-down").hasClass("active")) {
    //             $(".drop-down").removeClass("active");
    //         }
    //     }, 50);
    // });
    $(".box-filter-type").click(function(){
        if ($(".tea-item:visible").length == 0) {
            $(".no-results").show();
        } else {
            $(".no-results").hide();
        }
    });
    $(".box-filter-effects").click(function(){
        if ($(".tea-item:visible").length == 0) {
            $(".no-results").show();
        } else {
            $(".no-results").hide();
        }
    });
});
