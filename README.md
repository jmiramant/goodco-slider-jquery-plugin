goodco-slider-jquery-plugin
===========================

An extension on jQuery UI Slider with style and effect for Good.Co slider

## Usage

**index.html**

    <html>
        <head>
            <link href="css/good-slider.css" rel="stylesheet" media="screen">
        </head>
        <body>
            <div class="good-slider"></div>
            <script src="js/lib/jquery.min.js"></script>
            <script src="js/lib/jquery-ui-1.10.4.slider.min.js"></script>
            <script src="js/good-slider.js"></script>
        </body>
    </html>


&nbsp;

**main.js**

    $('.good-slider').goodSlider();


### Additional Configurations ###


##### Responce Value #####

The respose value from each slideChange will be appended to the body in an input field with ID of '#good-slider-value'. Use jQuery.val() to retrieve the response value.

##### Click Event #####

The slider element contains an attribute 'clickEventEnabled' which will set to true once a user actively clicks the slider handle.
