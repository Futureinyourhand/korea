$(document).ready(function () {
    $('#formDestination').select2({
        allowClear: true,
        placeholder: "Select Destination",
        closeOnSelect: false,
        templateSelection: function (selected) {
            let selectedData = $('#formDestination').select2('data');
            let selectedText = selectedData.map(option => option.text);
            if (selectedText.length > 2) {
                return selectedText.slice(0, 2).join(', ') + ' and ' + (selectedText.length - 2) + ' others';
            } else {
                return selectedText.join(', ');
            }
        }
    });

    $('#formDestination').on('change', function () {
        let selectedData = $('#formDestination').select2('data');
        let selectedText = selectedData.map(option => option.text);

        if (selectedText.length > 2) {
            $('.select2-selection__rendered').text(selectedText.slice(0, 2).join(', ') + ' and ' + (selectedText.length - 2) + ' others');
        } else {
            $('.select2-selection__rendered').text(selectedText.join(', '));
        }
    });
});