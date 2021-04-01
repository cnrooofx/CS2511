
window.addEventListener("DOMContentLoaded", initialise, false);

function initialise() {
    $("#slider").slider({values:[20, 80]});

    $("#slider").on(
        {slide:
            function() {
                var setting = $("#slider").slider("option", "values");
                document.getElementById("textBox").value = setting[0] + ", " + setting[1];
            }
        }
    );
}
