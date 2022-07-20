function replaceLanguage() {
    window.location.replace("#fr")
    replaceFrench()

}

function getImageDirectoryByFullURL() {
    return window.location.href.split('#').pop()
}


function replaceFrench() {
    if (getImageDirectoryByFullURL() === "fr") {
        if (window.location.href.split('/').pop() === "#fr") {
            // 1st

            // Title
            document.getElementById('language_title').style.display = "none";
            document.getElementById('language_title_fr').style.display = "block";


            //Navbar 1
            document.getElementById('language_navbar_home').style.display = "none";
            document.getElementById('language_navbar_home_fr').style.display = "block";

            document.getElementById('language_navbar_resume').style.display = "none";
            document.getElementById('language_navbar_resume_fr').style.display = "block";

            document.getElementById('language_navbar_about').style.display = "none";
            document.getElementById('language_navbar_about_fr').style.display = "block";

            document.getElementById('language_navbar_projet').style.display = "none";
            document.getElementById('language_navbar_projet_fr').style.display = "block";

            document.getElementById('language_description').style.display = "none";
            document.getElementById('language_description_fr').style.display = "block";

            document.getElementById('language_letter').style.display = "none";
            document.getElementById('language_letter_fr').style.display = "block";

            //2nd

            document.getElementById('language_about').style.display = "none";
            document.getElementById('language_about_fr').style.display = "block";

            document.getElementById('language_about_second').style.display = "none";
            document.getElementById('language_about_second_fr').style.display = "block";

            document.getElementById('language_about_third').style.display = "none";
            document.getElementById('language_about_third_fr').style.display = "block";

            document.getElementById('language_about_four').style.display = "none";
            document.getElementById('language_about_four_fr').style.display = "block";

            document.getElementById('language_work').style.display = "none";
            document.getElementById('language_work_fr').style.display = "block";


            document.getElementById('language_work_second').style.display = "none";
            document.getElementById('language_work_second_fr').style.display = "block";

            document.getElementById('language_undercube').style.display = "none";
            document.getElementById('language_undercube_fr').style.display = "block";

            document.getElementById('language_latestproject').style.display = "none";
            document.getElementById('language_latestproject_fr').style.display = "block";

            document.getElementById('language_photoproject').style.display = "none";
            document.getElementById('language_photoproject_fr').style.display = "block";

            document.getElementById('language_codingproject').style.display = "none";
            document.getElementById('language_codingproject_fr').style.display = "block";

            document.getElementById('language_musicproject').style.display = "none";
            document.getElementById('language_musicproject_fr').style.display = "block";

            // 3rd

            document.getElementById('language_allproject').style.display = "none";
            document.getElementById('language_allproject_fr').style.display = "block";

            //Navbar 2
            document.getElementById('language_navbar_home_second').style.display = "none";
            document.getElementById('language_navbar_home_fr_second').style.display = "block";

            document.getElementById('language_navbar_resume_second').style.display = "none";
            document.getElementById('language_navbar_resume_fr_second').style.display = "block";

            document.getElementById('language_navbar_about_second').style.display = "none";
            document.getElementById('language_navbar_about_fr_second').style.display = "block";

            document.getElementById('language_navbar_projet_second').style.display = "none";
            document.getElementById('language_navbar_projet_fr_second').style.display = "block";


            document.getElementById('language_projet_musical').style.display = "none";
            document.getElementById('language_projet_musical_fr').style.display = "block";

            document.getElementById('language_projet_photo').style.display = "none";
            document.getElementById('language_projet_photo_fr').style.display = "block";

            document.getElementById('language_projet_code').style.display = "none";
            document.getElementById('language_projet_code_fr').style.display = "block";

            document.getElementById('language_sartre').style.display = "none";
            document.getElementById('language_sartre_fr').style.display = "block";
            // document.getElementById('language_sartre_fr').setAttribute('style',"display:block");


            document.getElementById('language_redpanda').style.display = "none";
            document.getElementById('language_redpanda_fr').style.display = "block";

            document.getElementById('language_lonewolf').style.display = "none";
            document.getElementById('language_lonewolf_fr').style.display = "block";

            document.getElementById('language_getintouch').style.display = "none";
            document.getElementById('language_getintouch_fr').style.display = "block";

            document.getElementById('home-slider').style.display = "none";
            document.getElementById('home-slider_fr').style.display = "block";

            document.getElementById('language_form').style.display = "none";
            document.getElementById('language_form_fr').setAttribute('style',"display:flex!important");



        }

        if (window.location.href.split('/').pop() === "izanami.html#fr") {
            console.log("good boy")

        } else {
            console.log("good")
        }
    }
}

replaceFrench()