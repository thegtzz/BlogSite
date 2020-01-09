$(function (){

    $('#search').keyup(function() {

        $.ajax({
            type: "GET",
            url: "/search/",
            data: {
                'q': $('#search').val(),
                'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()
            },
            success: searchSuccess,
            dataType: 'html'
        });
    });
});

function searchSuccess(data, textStatus, jqXHR) {
    $('#search-results').html(data);
}