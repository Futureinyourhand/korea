$(document).ready(function () {

    var secs = document.querySelectorAll('.qna-sec');
    const nextBtn = document.querySelectorAll('.selector-item_radio');

    var selectedValues = {
        country: "",
        intake: "",
        level: "",
        specialization: "",
        fullName: "",
        mobileNumber: "",
        emailId: "",
        branch:""
    };

    function IsValidMailId(id) {
        var emailpat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        return emailpat.test(id);
    }

    function nextQuestion(i) {
        secs.forEach((element) => {
            element.classList.remove('show');
        });
        document.getElementById(`qna-${i + 1}`).classList.remove('show');
        document.getElementById(`qna-${i + 2}`).classList.add('show');

        if (i == 5) {
            updateSummary();
        }
    }

    function updateSummary() {
        document.getElementById("summaryCountry").value = selectedValues.country.trim();
        document.getElementById("summaryIntake").value = selectedValues.intake.trim();
        document.getElementById("summaryLevel").value = selectedValues.level.trim();
        document.getElementById("summarySpecailisation").value = selectedValues.specialization.trim();
        document.getElementById("summaryName").value = selectedValues.fullName.trim();
        document.getElementById("summaryMobile").value = selectedValues.mobileNumber.trim();
        document.getElementById("summaryEmail").value = selectedValues.emailId.trim();
        document.getElementById("summaryBranch").value = selectedValues.branch.trim();
    }

    function prevQuestion(i) {
        secs.forEach((element) => {
            element.classList.remove('show');
        });
        document.getElementById(`qna-${i + 2}`).classList.remove('show');
        document.getElementById(`qna-${i + 1}`).classList.add('show');
    }

    $(document).on('click', '.next-btn, .selector-item_radio', function () {

        var currentSec = $(this).closest('.qna-sec');
        var nextSec = currentSec.next('.qna-sec');
        var i = currentSec.index('.qna-sec');

        setTimeout(function () {

        $(".error").hide()
        $(".errors").hide()
        if (i == 0 && $("input:radio[name='solutions']").is(":checked")) {
            if ($("input:radio[name='solutions']:checked").next('label').text() === 'Other') {
                if ($("input:text[name='popupcountryName']").val().trim() === "") {
                    $(".errors").show();
                }
                else {
                    selectedValues.country = $("input:text[name='popupcountryName']").val().trim();
                    nextQuestion(0)
                }
            }
            else {
                selectedValues.country = $("input:radio[name='solutions']:checked").next('label').text();
                nextQuestion(0)
            }
        } else if (i == 1 && $("input:radio[name='desire']").is(":checked")) {
            selectedValues.intake = $("input:radio[name='desire']:checked").next('label').text();
            nextQuestion(i);
        } else if (i == 2 && $("input:radio[name='level']").is(":checked")) {
            selectedValues.level = $("input:radio[name='level']:checked").next('label').text();
            nextQuestion(i);
        } else if (i == 3 && $("input:text[name='course']").val() != "") {
            selectedValues.specialization = $("input:text[name='course']").val();
            nextQuestion(i);
        } else if (i == 4 && $("input:text[name='popupfirstName']").val() != "" && $("input:text[name='popuplastName']").val() != "") {
            selectedValues.fullName = $("input:text[name='popupfirstName']").val() + " " + $("input:text[name='popuplastName']").val();
            nextQuestion(i);
        } else if (i == 5 && ($("input:text[name='email']").val() != "" && IsValidMailId($("input:text[name='email']").val()))
                            && ($("input:text[name='mobile']").val() != "") && !isNaN($("input:text[name='mobile']").val())
                            && ($('#branch').find(":selected").val() != 0)) {
            selectedValues.mobileNumber = $("input:text[name='mobile']").val();
            selectedValues.emailId = $("input:text[name='email']").val();            
            selectedValues.branch = $('#branch').find(":selected").val();            
            nextQuestion(i);
        } else {
            $(".error").show();
        }
        }, 250);
    });

    $(document).on('click', '.back-btn, .bk-btn', function () {
        var currentSec = $(this).closest('.qna-sec');
        var i = currentSec.index('.qna-sec');        
        prevQuestion(i - 1);
    });

    $(".selector-item_label").click(function () {
        $(".error").hide();
    });

    $(document).on('click', '.submit-btn', function () {
        $('#summaryBranch').removeAttr('disabled');
        if ($("input:text[name='summaryCountry']").val() == "" )
        {            
            $("input:text[name='summaryCountry']").attr('placeholder', 'Enter Country');
            return false;
        }
        else if ($("input:text[name='summaryIntake']").val() == "") {
            $("input:text[name='summaryIntake']").attr('placeholder', 'Enter Intake');
            return false;
        }
        else if ($("input:text[name='summaryLevel']").val() == "") {
            $("input:text[name='summaryLevel']").attr('placeholder', 'Enter Level');
            return false;
        }
        else if ($("input:text[name='summarySpecailisation']").val() == "") {
            $("input:text[name='summarySpecailisation']").attr('placeholder', 'Enter Course');
            return false;
        }
        else if ($("input:text[name='summaryName']").val() == "") {
            $("input:text[name='summaryName']").attr('placeholder', 'Enter Name');
            return false;
        }
        else if ($("input:text[name='summaryMobile']").val() == "" || isNaN($("input:text[name='summaryMobile']").val())) {
            console.log('invalid mobile');
            $("input:text[name='summaryMobile']").val('');
            $("input:text[name='summaryMobile']").attr('placeholder', 'Enter Valid Mobile');
            return false;
        }
        else if ($("input:text[name='summaryEmail']").val() == "" || !IsValidMailId($("input:text[name='summaryEmail']").val())) {
            console.log('invalid email');
            $("input:text[name='summaryEmail']").val('');
            $("input:text[name='summaryEmail']").attr('placeholder', 'Enter Valid Email');
            return false;
        }
        else if ($('#summaryBranch').find(":selected").val() == 0)
        {
            $('#summaryBranch').style.borderColor = "red";
            return false;
        }
    });





});
