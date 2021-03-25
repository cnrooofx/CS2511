
window.addEventListener("DOMContentLoaded", initialise, false);

function initialise() {
    $("#slider").slider({value:[50]});

    $("#slider").on(
        {slide:
            function() {
                var setting = $("#slider").slider("option", "value");
                document.getElementById("textBox").value = setting;
            }
        }
    );
}
