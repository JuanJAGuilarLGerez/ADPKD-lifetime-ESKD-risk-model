var units_general = "";
var units_creatinine = "";
var sex = "";
var age = "";
var height_input_m = "";
var height_input_ft = "";
var height_input_in = "";
var creatinine_input = "";
var rkh_input = "";
var rkw_input = "";
var rkd_input = "";
var lkh_input = "";
var lkw_input = "";
var lkd_input = "";
var height_output = "";
var creatinine_output = "";
var rkh_output = "";
var rkw_output = "";
var rkd_output = "";
var lkh_output = "";
var lkw_output = "";
var lkd_output = "";
var gfr_1 = "";
var tkv = "";
var adj_tkv = "";
var kgr_raw = "";
var kgr = "";
var kgr_mcc_raw = "";
var kgr_mcc = "";
var tkv_increase_raw = "";
var tkv_increase = "";
var gfr_2 = "";
var esrd = "";
var mcc = "";
var risk_category = "";
var display_gfr = "";
var display_tkv = "";
var display_kgr = "";
var display_esrd = "";
var units_gfr = " ml/min/1.73m&sup2;"
var units_tkv = " ml"
var units_kgr = "% annually"
var units_esrd = "%";
var pre_triangle = "";
var post_triangle = "";
var units_flexbasis = "%";
var sex_checked = "";
var age_checked = "";
var height_checked = "";
var creatinine_checked = "";
var rkh_checked = "";
var rkw_checked = "";
var rkd_checked = "";
var lkh_checked = "";
var lkw_checked = "";
var lkd_checked = "";

function adjust_body_height_and_hide_result() {
	var header_fixed = document.getElementById("header_fixed").offsetHeight;
	document.getElementById("section_introduction").style.marginTop=header_fixed+15;
	document.getElementById("calculator_output_results").style.display = "none";
	document.getElementById("calculator_predictor_value_height_imperial").style.display = "none";
}

function check_fields(){
	
    var calculate = document.getElementById("calculate")
	
	age = document.getElementById("age").value;
	height_input_m = document.getElementById("height_international").value;
	height_input_ft = document.getElementById("height_imperial_ft").value;
	height_input_in = document.getElementById("height_imperial_in").value;
	creatinine_input = document.getElementById("creatinine").value;
	rkh_input = document.getElementById("rkh").value;
	rkw_input = document.getElementById("rkw").value;
	rkd_input = document.getElementById("rkd").value;
	lkh_input = document.getElementById("lkh").value;
	lkw_input = document.getElementById("lkw").value;
	lkd_input = document.getElementById("lkd").value;
	
	sex_checked = "";
	age_checked = "";
	height_checked = "";
	creatinine_checked = "";
	rkh_checked = "";
	rkw_checked = "";
	rkd_checked = "";
	lkh_checked = "";
	lkw_checked = "";
	lkd_checked = "";
	
	if (sex == "") {
		sex_checked = ""
	} else {
		sex_checked = 1
	}
	
	if (age == "") {
		document.getElementById("error_age").style.display = "none";
		document.getElementById("error_age_message").innerHTML = "";
	} else
	if (age < 18 || age > 79) {
		document.getElementById("error_age").style.display = "block";
		document.getElementById("error_age_message").innerHTML = "Age must be 18-79 years";
	} else {
		document.getElementById("error_age").style.display = "none";
		document.getElementById("error_age_message").innerHTML = "";
		age_checked = 1;
	}
	
	
	if (units_general == "international") {height_output = height_input_m}
	if (units_general == "imperial") {height_output = (height_input_ft * 0.3048)+(height_input_in * 0.0254)}	

	if (height_input_m == "" & height_input_ft == "" & height_input_in == "") {
		document.getElementById("error_height").style.display = "none";
		document.getElementById("error_height_message").innerHTML = "";
	} else
	if (units_general == "") {
		document.getElementById("error_height").style.display = "block";
		document.getElementById("error_height_message").innerHTML = "Please select units of measurement";
	} else
	if ((units_general == "imperial") & (height_output <1.30 || height_output >2.10)) {
		document.getElementById("error_height").style.display = "block";
		document.getElementById("error_height_message").innerHTML = "Height must be 4'4\" - 6'10\"";
	} else
	if ((units_general == "international")&(height_output <1.30 || height_output >2.10)) {
		document.getElementById("error_height").style.display = "block";
		document.getElementById("error_height_message").innerHTML = "Height must be 1.30-2.10 m";
	} else {
		document.getElementById("error_height").style.display = "none";
		document.getElementById("error_height_message").innerHTML = "";
		height_checked = 1;
	}
		
	if (units_creatinine == "mg") {creatinine_output = creatinine_input}
	if (units_creatinine == "mmol") {creatinine_output = creatinine_input / 88.4017}	
	
	if (sex == "male" & creatinine_output <= 0.9) {gfr_1 = (142 * ((creatinine_output/0.9) ** -0.302) * (0.9938 ** age))}
	if (sex == "male" & creatinine_output > 0.9) {gfr_1 = (142 * ((creatinine_output/0.9) ** -1.2) * (0.9938 ** age))}
	if (sex == "female" & creatinine_output <= 0.7) {gfr_1 = (142 * ((creatinine_output/0.7) ** -0.241) * (0.9938 ** age) * 1.012)}
	if (sex == "female" & creatinine_output > 0.7) {gfr_1 = (142 * ((creatinine_output/0.7) ** -1.2) * (0.9938 ** age) * 1.012)}
	
	if (sex == "" || creatinine_input == "" || age == "")  {
		document.getElementById("error_creatinine").style.display = "none";
		document.getElementById("error_creatinine_message").innerHTML = "";
	} else
	if (units_creatinine == "") {
		document.getElementById("error_creatinine").style.display = "block";
		document.getElementById("error_creatinine_message").innerHTML = "Please select units of creatinine";
	} else
	if ((units_creatinine == "mg") & (creatinine_input <0.1)) {
		document.getElementById("error_creatinine").style.display = "block";
		document.getElementById("error_creatinine_message").innerHTML = "Creatinine must be >0.1 mg/dl";
	} else
	if ((units_creatinine == "mmol") & (creatinine_input <8.8)) {
		document.getElementById("error_creatinine").style.display = "block";
		document.getElementById("error_creatinine_message").innerHTML = "Creatinine must be >8.8 μmol/l";
	} else
	if (gfr_1 <= 15) {
		document.getElementById("error_creatinine").style.display = "block";
		document.getElementById("error_creatinine_message").innerHTML = "Patient already in ESRD";
	} else {
		document.getElementById("error_creatinine").style.display = "none";
		document.getElementById("error_creatinine_message").innerHTML = "";
		creatinine_checked = 1;
	}
	
	if (units_general == "international") {rkh_output = rkh_input}
	if (units_general == "international") {rkw_output = rkw_input}
	if (units_general == "international") {rkd_output = rkd_input}
	if (units_general == "international") {lkh_output = lkh_input}
	if (units_general == "international") {lkw_output = lkw_input}
	if (units_general == "international") {lkd_output = lkd_input}
	if (units_general == "imperial") {rkh_output = rkh_input * 2.54}
	if (units_general == "imperial") {rkw_output = rkw_input * 2.54}
	if (units_general == "imperial") {rkd_output = rkd_input * 2.54}
	if (units_general == "imperial") {lkh_output = lkh_input * 2.54}
	if (units_general == "imperial") {lkw_output = lkw_input * 2.54}
	if (units_general == "imperial") {lkd_output = lkd_input * 2.54}
	
	if (rkh_input == "") {
		document.getElementById("error_rkh").style.display = "none";
		document.getElementById("error_rkh_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_rkh").style.display = "block";
		document.getElementById("error_rkh_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (rkh_input < 6 || rkh_input > 30)) {		
		document.getElementById("error_rkh").style.display = "block";
		document.getElementById("error_rkh_message").innerHTML = "Kidney height must be 6-30 cm";	
	} else
	if (units_general == "imperial" & (rkh_input < 2 || rkh_input > 12)) {		
		document.getElementById("error_rkh").style.display = "block";
		document.getElementById("error_rkh_message").innerHTML = "Kidney height must be 2-12 in";	
	} else {
		document.getElementById("error_rkh").style.display = "none";
		document.getElementById("error_rkh_message").innerHTML = "";
		rkh_checked = 1;
	}
	
	if (rkw_input == "") {
		document.getElementById("error_rkw").style.display = "none";
		document.getElementById("error_rkw_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_rkw").style.display = "block";
		document.getElementById("error_rkw_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (rkw_input < 4 || rkw_input > 20)) {		
		document.getElementById("error_rkw").style.display = "block";
		document.getElementById("error_rkw_message").innerHTML = "Kidney width must be 4-20 cm";	
	} else
	if (units_general == "imperial" & (rkw_input < 1 || rkw_input > 8)) {		
		document.getElementById("error_rkw").style.display = "block";
		document.getElementById("error_rkw_message").innerHTML = "Kidney width must be 1-8 in";	
	} else {
		document.getElementById("error_rkw").style.display = "none";
		document.getElementById("error_rkw_message").innerHTML = "";	
		rkw_checked = 1;
	}

	if (rkd_input == "") {
		document.getElementById("error_rkd").style.display = "none";
		document.getElementById("error_rkd_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_rkd").style.display = "block";
		document.getElementById("error_rkd_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (rkd_input < 4 || rkd_input > 20)) {		
		document.getElementById("error_rkd").style.display = "block";
		document.getElementById("error_rkd_message").innerHTML = "Kidney depth must be 4-20 cm";	
	} else
	if (units_general == "imperial" & (rkd_input < 1 || rkd_input > 8)) {		
		document.getElementById("error_rkd").style.display = "block";
		document.getElementById("error_rkd_message").innerHTML = "Kidney depth must be 1-8 in";	
	} else {
		document.getElementById("error_rkd").style.display = "none";
		document.getElementById("error_rkd_message").innerHTML = "";	
		rkd_checked = 1;
	}

	if (lkh_input == "") {
		document.getElementById("error_lkh").style.display = "none";
		document.getElementById("error_lkh_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_lkh").style.display = "block";
		document.getElementById("error_lkh_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (lkh_input < 6 || lkh_input > 30)) {		
		document.getElementById("error_lkh").style.display = "block";
		document.getElementById("error_lkh_message").innerHTML = "Kidney height must be 6-30 cm";	
	} else
	if (units_general == "imperial" & (lkh_input < 2 || lkh_input > 12)) {		
		document.getElementById("error_lkh").style.display = "block";
		document.getElementById("error_lkh_message").innerHTML = "Kidney height must be 2-12 in";	
	} else {
		document.getElementById("error_lkh").style.display = "none";
		document.getElementById("error_lkh_message").innerHTML = "";	
		lkh_checked = 1;
	}
	
	if (lkw_input == "") {
		document.getElementById("error_lkw").style.display = "none";
		document.getElementById("error_lkw_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_lkw").style.display = "block";
		document.getElementById("error_lkw_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (lkw_input < 4 || lkw_input > 20)) {		
		document.getElementById("error_lkw").style.display = "block";
		document.getElementById("error_lkw_message").innerHTML = "Kidney width must be 4-20 cm";	
	} else
	if (units_general == "imperial" & (lkw_input < 1 || lkw_input > 8)) {		
		document.getElementById("error_lkw").style.display = "block";
		document.getElementById("error_lkw_message").innerHTML = "Kidney width must be 1-8 in";	
	} else {
		document.getElementById("error_lkw").style.display = "none";
		document.getElementById("error_lkw_message").innerHTML = "";	
		lkw_checked = 1;
	}

	if (lkd_input == "") {
		document.getElementById("error_lkd").style.display = "none";
		document.getElementById("error_lkd_message").innerHTML = "";	
	} else
	if (units_general == "") {
		document.getElementById("error_lkd").style.display = "block";
		document.getElementById("error_lkd_message").innerHTML = "Please select units of measurement";	
	} else
	if (units_general == "international" & (lkd_input < 4 || lkd_input > 20)) {		
		document.getElementById("error_lkd").style.display = "block";
		document.getElementById("error_lkd_message").innerHTML = "Kidney depth must be 4-20 cm";	
	} else
	if (units_general == "imperial" & (lkd_input < 1 || lkd_input > 8)) {		
		document.getElementById("error_lkd").style.display = "block";
		document.getElementById("error_lkd_message").innerHTML = "Kidney depth must be 1-8 in";	
	} else {
		document.getElementById("error_lkd").style.display = "none";
		document.getElementById("error_lkd_message").innerHTML = "";	
		lkd_checked = 1;
	}
	
	if 	((sex_checked == 1) &
		(age_checked == 1) &
		(height_checked == 1) &
		(creatinine_checked == 1) &
		(rkh_checked == 1) &
		(rkw_checked == 1) &
		(rkd_checked == 1) &
		(lkh_checked == 1) &
		(lkw_checked == 1) &
		(lkd_checked == 1))

		{calculate.disabled = false} else {calculate.disabled = true};
	
}

function pressed_key(event) {
	
		if 	((sex_checked == 1) &
		(age_checked == 1) &
		(height_checked == 1) &
		(creatinine_checked == 1) &
		(rkh_checked == 1) &
		(rkw_checked == 1) &
		(rkd_checked == 1) &
		(lkh_checked == 1) &
		(lkw_checked == 1) &
		(lkd_checked == 1) &
		(event.key === "Enter"))
			
		{calculate()}
}

function units_international() {
	document.getElementById("units_international").classList.add("button_grey_clicked");
	document.getElementById("units_imperial").classList.remove("button_grey_clicked");
	document.getElementById("height_international_units").innerHTML = "m";
	document.getElementById("rkh_units").innerHTML = "cm";
	document.getElementById("rkw_units").innerHTML = "cm";
	document.getElementById("rkd_units").innerHTML = "cm";
	document.getElementById("lkh_units").innerHTML = "cm";
	document.getElementById("lkw_units").innerHTML = "cm";
	document.getElementById("lkd_units").innerHTML = "cm";
	document.getElementById("calculator_predictor_value_height_imperial").style.display = "none";
	document.getElementById("calculator_predictor_value_height_international").style.display = "flex";
	units_general = "international";
}

function units_imperial() {
	document.getElementById("units_imperial").classList.add("button_grey_clicked");
	document.getElementById("units_international").classList.remove("button_grey_clicked");
	document.getElementById("height_international_units").innerHTML = "";
	document.getElementById("rkh_units").innerHTML = "in";
	document.getElementById("rkw_units").innerHTML = "in";
	document.getElementById("rkd_units").innerHTML = "in";
	document.getElementById("lkh_units").innerHTML = "in";
	document.getElementById("lkw_units").innerHTML = "in";
	document.getElementById("lkd_units").innerHTML = "in";
	document.getElementById("calculator_predictor_value_height_international").style.display = "none";
	document.getElementById("calculator_predictor_value_height_imperial").style.display = "flex";
	units_general = "imperial";
}

function sex_male() {
	document.getElementById("sex_male").classList.add("button_grey_clicked");
	document.getElementById("sex_female").classList.remove("button_grey_clicked");
	sex = "male";
}

function sex_female() {
	document.getElementById("sex_female").classList.add("button_grey_clicked");
	document.getElementById("sex_male").classList.remove("button_grey_clicked");
	sex = "female";
}

function creatinine_units_mg() {
	document.getElementById("creatinine_units_mg").classList.add("button_grey_clicked");
	document.getElementById("creatinine_units_mmol").classList.remove("button_grey_clicked");
	units_creatinine = "mg";
}

function creatinine_units_mmol() {
	document.getElementById("creatinine_units_mmol").classList.add("button_grey_clicked");
	document.getElementById("creatinine_units_mg").classList.remove("button_grey_clicked");
	units_creatinine = "mmol";
}


function calculate() {
	
	age = document.getElementById("age").value;
	height_input_m = document.getElementById("height_international").value;
	height_input_ft = document.getElementById("height_imperial_ft").value;
	height_input_in = document.getElementById("height_imperial_in").value;
	creatinine_input = document.getElementById("creatinine").value;
	rkh_input = document.getElementById("rkh").value;
	rkw_input = document.getElementById("rkw").value;
	rkd_input = document.getElementById("rkd").value;
	lkh_input = document.getElementById("lkh").value;
	lkw_input = document.getElementById("lkw").value;
	lkd_input = document.getElementById("lkd").value;
	
	if (units_general == "international") {height_output = height_input_m}
	if (units_general == "imperial") {height_output = ((height_input_ft * 0.3048)+(height_input_in * 0.0254))}
	if (units_creatinine == "mg") {creatinine_output = creatinine_input}
	if (units_creatinine == "mmol") {creatinine_output = creatinine_input / 88.4017}
	if (units_general == "international") {rkh_output = rkh_input}
	if (units_general == "international") {rkw_output = rkw_input}
	if (units_general == "international") {rkd_output = rkd_input}
	if (units_general == "international") {lkh_output = lkh_input}
	if (units_general == "international") {lkw_output = lkw_input}
	if (units_general == "international") {lkd_output = lkd_input}
	if (units_general == "imperial") {rkh_output = rkh_input * 2.54}
	if (units_general == "imperial") {rkw_output = rkw_input * 2.54}
	if (units_general == "imperial") {rkd_output = rkd_input * 2.54}
	if (units_general == "imperial") {lkh_output = lkh_input * 2.54}
	if (units_general == "imperial") {lkw_output = lkw_input * 2.54}
	if (units_general == "imperial") {lkd_output = lkd_input * 2.54}
	
	
	if (sex == "male" & creatinine_output <= 0.9) {gfr_1 = (142 * ((creatinine_output/0.9) ** -0.302) * (0.9938 ** age))}
	if (sex == "male" & creatinine_output > 0.9) {gfr_1 = (142 * ((creatinine_output/0.9) ** -1.2) * (0.9938 ** age))}
	if (sex == "female" & creatinine_output <= 0.7) {gfr_1 = (142 * ((creatinine_output/0.7) ** -0.241) * (0.9938 ** age) * 1.012)}
	if (sex == "female" & creatinine_output > 0.7) {gfr_1 = (142 * ((creatinine_output/0.7) ** -1.2) * (0.9938 ** age) * 1.012)}
	
	tkv = ((3.1416/6) * rkh_output * rkw_output * rkd_output) + ((3.1416/6) * lkh_output * lkw_output * lkd_output)
	
	adj_tkv = tkv / height_output
	
	kgr_raw = (((adj_tkv / 200) ** (1 / age)) - 1) * 100
	if (kgr_raw < 0) {kgr = 0} else {kgr = kgr_raw}
	
	tkv_increase_raw = ((((adj_tkv / 200) ** (1 / age)) ** (80 - age)) - 1) * 100
	if (tkv_increase_raw < 0) {tkv_increase = 0} else {tkv_increase = tkv_increase_raw}
	
	gfr_2 = -98.822867 + (gfr_1 * 1.062850) + (tkv_increase * -1.339232) + (height_output * 55.219687)
	
	esrd = ((1 - (jStat.normal.cdf(gfr_2, 15, 16.04148917)))*100)
	
	kgr_mcc_raw = (((adj_tkv / 150) ** (1 / age)) - 1) * 100
	if (kgr_mcc_raw < 0) {kgr_mcc = 0} else {kgr_mcc = kgr_mcc_raw}
	
	if (kgr_mcc < 1.5) {mcc = "1A"}
	if (kgr_mcc >= 1.5 & kgr_mcc < 3) {mcc = "1B"}
	if (kgr_mcc >= 3 & kgr_mcc < 4.5) {mcc = "1C"}
	if (kgr_mcc >= 4.5 & kgr_mcc < 6) {mcc = "1D"}
	if (kgr_mcc >= 6) {mcc = "1E"}

	if (esrd == 0) {risk_category = "Lowest"}
	if (esrd > 0 & esrd < 5) {risk_category = "Very low"}
	if (esrd >= 5 & esrd < 35) {risk_category = "Low"}
	if (esrd >= 35 & esrd < 65) {risk_category = "Medium"}
	if (esrd >= 65 & esrd < 95) {risk_category = "High"}
	if (esrd >= 95 & esrd < 100) {risk_category = "Very high"}
	if (esrd == 100) {risk_category = "Highest"}
	
	display_gfr = (Math.floor(gfr_1)) + units_gfr
	display_tkv = (Math.floor(tkv)) + units_tkv
	display_kgr = ((Math.floor(kgr_mcc * 10))/10) + units_kgr
    display_esrd = (Math.floor(esrd)) + units_esrd
	
	pre_triangle = esrd + units_flexbasis
	post_triangle = (100-esrd) + units_flexbasis
	
	document.getElementById("calculator_output_results").style.display = "block";
	document.getElementById("result_gfr").innerHTML = display_gfr;
	document.getElementById("result_tkv").innerHTML = display_tkv;
	document.getElementById("result_kgr").innerHTML = display_kgr;
	document.getElementById("result_mcc").innerHTML = mcc;
	document.getElementById("result_risk").innerHTML = display_esrd;
	document.getElementById("result_risk_category").innerHTML = risk_category;
	document.getElementById("calculator_output_result_risk_box_1").style.borderWidth = "thin";	document.getElementById("calculator_output_result_risk_box_2").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_3").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_4").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_5").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_pre_triangle").style.flexBasis = pre_triangle;
	document.getElementById("calculator_output_result_risk_post_triangle").style.flexBasis = post_triangle;
	
	if (esrd == 0) {document.getElementById("calculator_output_result_risk_box_1").style.borderLeftWidth = "thick"}
	if (esrd > 0 & esrd < 5) {document.getElementById("calculator_output_result_risk_box_1").style.borderWidth = "thick"}
	if (esrd >= 5 & esrd < 35) {document.getElementById("calculator_output_result_risk_box_2").style.borderWidth = "thick"}
	if (esrd >= 35 & esrd < 65) {document.getElementById("calculator_output_result_risk_box_3").style.borderWidth = "thick"}
	if (esrd >= 65 & esrd < 95) {document.getElementById("calculator_output_result_risk_box_4").style.borderWidth = "thick"}
	if (esrd >= 95 & esrd < 100) {document.getElementById("calculator_output_result_risk_box_5").style.borderWidth = "thick"}
	if (esrd == 100) {document.getElementById("calculator_output_result_risk_box_5").style.borderRightWidth = "thick"}
}

function clean() {
	document.getElementById("calculator_output_results").style.display = "none";
	document.getElementById("age").value = "";
	document.getElementById("height_international").value = "";
	document.getElementById("height_imperial_ft").value = "";
	document.getElementById("height_imperial_in").value = "";
	document.getElementById("creatinine").value = "";
	document.getElementById("rkh").value = "";
	document.getElementById("rkw").value = "";
	document.getElementById("rkd").value = "";
	document.getElementById("lkh").value = "";
	document.getElementById("lkw").value = "";
	document.getElementById("lkd").value = "";
	sex = "";
	document.getElementById("sex_male").classList.remove("button_grey_clicked");
	document.getElementById("sex_female").classList.remove("button_grey_clicked");	
    document.getElementById("calculate").disabled = true;
	document.getElementById("calculator_output_result_risk_box_1").style.borderWidth = "thin";	document.getElementById("calculator_output_result_risk_box_2").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_3").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_4").style.borderWidth = "thin";
	document.getElementById("calculator_output_result_risk_box_5").style.borderWidth = "thin";
	
	sex_checked = "";
	age_checked = "";
	height_checked = "";
	creatinine_checked = "";
	rkh_checked = "";
	rkw_checked = "";
	rkd_checked = "";
	lkh_checked = "";
	lkw_checked = "";
	lkd_checked = "";
}
