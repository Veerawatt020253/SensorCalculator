$(document).ready(function() {
    // Function to add a new input field
    $('#add-sensor').click(function() {
        $('#sensor-inputs').append('<input type="number" class="form-control mt-3 sensor-value" placeholder="Enter sensor value">');
    });

    // Function to calculate the average value
    $('#calculate-average').click(function() {
        let total = 0;
        let count = 0;

        $('.sensor-value').each(function() {
            let value = parseFloat($(this).val());
            if (!isNaN(value)) {
                total += value;
                count++;
            }
        });

        if (count > 0) {
            let average = total / count;
            $('#average-value').text(average.toFixed(2));
        } else {
            $('#average-value').text('0');
        }
    });
});
