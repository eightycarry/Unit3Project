$(document).ready(function () {
    //user validation rules
    var myRules = {
        name: {
            required: true,
            text: true,
        },

        income: {
            required: true,
            min: 0,
            digits: true,
        },

        necessities: {
            required: true,
            min: 0,
            digits: true,

        },

        wants: {
            required: true,
            min: 0,
            digits: true,
        },

        save: {
            required: true,
            min: 0,
            digits: true,
        },
    }

    //user validation messages
    var myMessages = {
        name: {
            required: "Must enter your full name",
            text: "Must enter a valid name"
        },

        income: {
            required: "Must enter your monthly income",
            min: "Please enter a number greater than or equal to zero",
            digits: "Please enter a number"
        },

        necessities: {
            required: "Must enter an amount",
            min: "Please enter a number of at least zero",
            digits: "Please enter a number",

        },

        wants: {
            required: "Must enter an amount",
            min: "Please enter a number of at least zero",
            digits: "Please enter a number",
        },

        save: {
            required: "Must enter an amount",
            min: "Please enter a number of at least zero",
            digits: "Please enter a number",
        },
    }

    $("form").validate(
        {
            submitHandler: financeCalc,
            rules: myRules,
            messages: myMessages
        }
    );

    $("#financeButton").click(financeCalc);
    $("#tabs a").click(showTab);

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    function financeCalc(event) {
        event.preventDefault();

        //declare a const to store name
        const userData = {
            name: $("#name").val()
        }

        //store income in a var
        var income = parseFloat($("#income").val()).toFixed(2);


        //split the user's income using the 50/30/20 rule
        var necessities = parseFloat(income * 0.50).toFixed(2);
        var wants = parseFloat(income * 0.30).toFixed(2);
        var save = parseFloat(income * 0.20).toFixed(2);

        // store necessary expenses
        var bills = parseFloat($("#bills").val());
        var food = parseFloat($("#food").val());
        var housing = parseFloat($("#housing").val());
        var transportation = parseFloat($("#transportation").val());
        var utilities = parseFloat($("#utilities").val());
        var otherNeeds = parseFloat($("#otherNecessities").val());

        //sum the user's monthly necessities
        var needsTotal = parseFloat(bills + food + housing + transportation + utilities + otherNeeds).toFixed(2);

        //store wanted expenses
        var subs = parseFloat($("#subs").val());
        var travel = parseFloat($("#travel").val());
        var entertainment = parseFloat($("#entertainment").val());
        var mealsOut = parseFloat($("#mealsOut").val());
        var otherWants = parseFloat($("#otherWants").val());

        //sum the user's monthly wants
        var wantsTotal = parseFloat(subs + travel + entertainment + mealsOut + otherWants).toFixed(2);

        //store user's amount put into savings per month
        var savings = parseFloat($("#savings").val());
        var debt = parseFloat($("#debt").val());
        var otherSaves = parseFloat($("#otherSavings").val());


        //sum the user's monthly savings
        var savesTotal = parseFloat(savings + debt + otherSaves).toFixed(2);

        //give the user advise based on the amount spent on necessities/wants/savings in comparison to their monthly income
        if (wantsTotal > wants) {
            $("#adviceW").text("You should reduce spending");
        } else if (wantsTotal < wants) {
            $("#adviceW").text("You're on the right track");
        }

        //display data
        $("#necessities").text(necessities);
        $("#wants").text(wants);
        $("#save").text(save);
        $("#nameOutput").text(userData.name + ',');
        $("#necessitiesOverview").text('Total spent on necessities: ' + '$' + needsTotal);
        $("#wantsOverview").text('Total spent on wants: ' + '$' + wantsTotal);
        $("#saveOverview").text('Total put into savings: ' + '$' + savesTotal);
    }

});