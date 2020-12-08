$(document).ready(function () {
    $("#tabs a").click(showTab);

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
        $("#financeButton").click(financeCalc);
    }

    function financeCalc(event) {
        event.preventDefault();

        const userData = {
            name: $("#name").val(),
            income: parseFloat($("#income").val()),
        }

        const userNeeds = {
            bills: parseFloat($("#bills").val()),
            food: parseFloat($("#food").val()),
            housing: parseFloat($("#housing").val()),
            transportation: parseFloat($("#transportation").val()),
            utilities: parseFloat($("#utilities").val()),
        }

        const userWants = {
            subs: parseFloat($("#subs").val()),
            travel: parseFloat($("#travel").val()),
            entertainment: parseFloat($("#entertainment").val()),
            mealsOut: parseFloat($("#mealsOut").val()),
        }

        const userSaves = {
            savings: parseFloat($("#savings").val()),
            debt: parseFloat($("#debt").val()),
        }

        var necessities = parseFloat(userData.income * 0.50).toFixed(2);
        var wants = parseFloat(userData.income * 0.30).toFixed(2);
        var save = parseFloat(userData.income * 0.20).toFixed(2);

        $("#necessities").text(necessities);
        $("#wants").text(wants);
        $("#save").text(save);
    }

});