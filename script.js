document.addEventListener('DOMContentLoaded', () => {
    var age = document.getElementById("age");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var male = document.getElementById("m");
    var female = document.getElementById("f");
    var resultArea = document.querySelector(".comment");

    var modal = document.getElementById("myModal");
    var modalText = document.querySelector("#modalText");
    var span = document.getElementsByClassName("close")[0];

    // Language selector
    var languageSelect = document.getElementById("language");

    function changeLanguage() {
        var lang = languageSelect.value;
        if (lang === "en") {
            document.querySelector("h1").textContent = "BMI Calculator";
            document.querySelector("label[for='age']").textContent = "Age";
            document.querySelector("label[for='height']").textContent = "Height(cm)";
            document.querySelector("label[for='weight']").textContent = "Weight(kg)";
            document.querySelector(".gender .container:nth-child(1) .text").textContent = "Male";
            document.querySelector(".gender .container:nth-child(2) .text").textContent = "Female";
            document.querySelector("button.calculate").textContent = "Calculate BMI";
            document.querySelector("#bmiLabel").textContent = "Your BMI is";
        } else if (lang === "id") {
            document.querySelector("h1").textContent = "Kalkulator BMI";
            document.querySelector("label[for='age']").textContent = "Usia";
            document.querySelector("label[for='height']").textContent = "Tinggi(cm)";
            document.querySelector("label[for='weight']").textContent = "Berat(kg)";
            document.querySelector(".gender .container:nth-child(1) .text").textContent = "Pria";
            document.querySelector(".gender .container:nth-child(2) .text").textContent = "Wanita";
            document.querySelector("button.calculate").textContent = "Hitung BMI";
            document.querySelector("#bmiLabel").textContent = "BMI Anda adalah";
        }
    }

    function calculate() {
        if (age.value === '' || height.value === '' || weight.value === '' || (male.checked === false && female.checked === false)) {
            modal.style.display = "block";
            modalText.innerHTML = `All fields are required!`;
        } else {
            countBmi();
        }
    }

    function countBmi() {
        var p = [age.value, height.value, weight.value];
        if (male.checked) {
            p.push("male");
        } else if (female.checked) {
            p.push("female");
        }

        var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
        var result = '';
        if (bmi < 18.5) {
            result = 'Underweight';
        } else if (18.5 <= bmi && bmi <= 24.9) {
            result = 'Healthy';
        } else if (25 <= bmi && bmi <= 29.9) {
            result = 'Overweight';
        } else if (30 <= bmi && bmi <= 34.9) {
            result = 'Obese';
        } else if (35 <= bmi) {
            result = 'Extremely obese';
        }

        resultArea.style.display = "block";
        document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
        document.querySelector("#result").innerHTML = bmi.toFixed(2);
    }

    // Event listeners
    document.getElementById("submit").addEventListener("click", calculate);
    languageSelect.addEventListener('change', changeLanguage);

    // Initialize language on page load
    changeLanguage();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
