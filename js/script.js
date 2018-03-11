$(document).ready(function () {
    console.log("Jquery Loaded");
    /* This code is for the navigation radiobuttons in the footer */
    $('#nav i').click(function () { //Checks if there is a mouse onclick event on the i-tags in the nav id.
        //Need to get the last i-tag that is checked
        $lastID = $('#nav i:contains("radio_button_checked")').attr('id');
        if ($(this).html() == "radio_button_checked") { //If the html contents in the i-tag is checked, then
            /* What happens after the button is check is here */
            navigation(this);
        } else { //Else, if its not checked then
            $('#nav i').html("radio_button_unchecked"); //First uncheck every button, to ensure that there is no doubling
            $(this).html("radio_button_checked"); //Then set the selected i-tag to checked.
            navigation(this);
        }
        return $lastID;
    });
    $('#menuItems a').click(function () {
        $lastID = $('#nav i:contains("radio_button_checked")').attr('id');
        $menuID = $(this).attr('id').toLowerCase().replace('menu', '');
        // pass til navigation
        if ($('#' + $menuID).html() == "radio_button_checked") { //If the html contents in the i-tag is checked, then
            /* What happens after the button is check is here */
            navigation('#' + $menuID);
        } else { //Else, if its not checked then
            $('#nav i').html("radio_button_unchecked"); //First uncheck every button, to ensure that there is no doubling
            $('#' + $menuID).html("radio_button_checked"); //Then set the selected i-tag to checked.
            navigation('#' + $menuID);
        }
        return $lastID;

    });

    function navigation($element) {
        $element = $($element).attr('id');
        $('.' + $lastID).css('display', 'none');
        $('.' + $element).css('display', 'block');
        //$($element).css('display','block');
    }

});