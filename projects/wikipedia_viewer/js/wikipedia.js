$(document).ready(function() {
    function getCrit() {
        var criteria = $('#search input').val();
        console.log(criteria);

        if (criteria.length > 0) {
            $('#title').html('I want to know about ' + criteria);
            return criteria;
        } else {
            $('#wrapper').removeClass('active');
            $('#title').html('I want to know about...');
            $('#results').empty();
            $('#results').hide();
        }
    };

    function search() {
        var criteria = getCrit();

        if (criteria) {
            $('#results').empty();
            $('#results').show();
            $('#wrapper').addClass('active');

            $.ajax({
                url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + criteria,
                dataType: 'jsonp',
                headers: { 'Api-User-Agent': 'Example/1.0' },
                success: function(data) {
                    console.log(data);
                    var data = data.query.search;
                    console.log(data);
                    for (i in data) {
                        $('#results').append(
                            '<a href="' + 'https://en.wikipedia.org/wiki/' + data[i].title +
                            '" target="_blank"' + '"><h1 class="text-left">' + data[i].title +
                            '</h1><p class="text-right">' + data[i].snippet + '</p></a>');
                    }
                }
            }); // ajax
        } // if
    };

    $('#search i').on('click', function() {
        search();
    });

    $('#search').mouseleave(function() {
        if ($('input').val().length > 0) {
            $('input').addClass('active-input');
            $('#search .icon').addClass('active-search');
        } else {
            $('input').removeClass('active-input');
            $('#search .icon').removeClass('active-search');
        }
    });

    $('input').keypress(function(e) {
        if (e.which == 13) search();
    });

    $('#results').hide();
});
