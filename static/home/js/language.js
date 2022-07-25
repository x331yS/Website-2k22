function replaceLanguage() {
    if (window.location.href.split('#').pop() === "fr") {
        window.location.replace("#en")
        replaceEnglish()
    } else {
        window.location.replace("#fr")
        replaceFrench()
    }
}


function replaceFrench() {
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

        document.getElementById('language_getintouch').style.display = "none";
        document.getElementById('language_getintouch_fr').style.display = "block";

        document.getElementById('language_preloader').style.display = "none";
        document.getElementById('language_preloader_fr').style.display = "block";

        // document.getElementById('language_last_project').style.display = "none";
        document.getElementById('language_last_project').setAttribute('style', "display:none!important");

        // document.getElementById('language_last_project_fr').style.display = "block";
        document.getElementById('language_last_project_fr').setAttribute('style', "display:block!important");


        document.getElementById('language_form').style.display = "none";
        document.getElementById('language_form_fr').setAttribute('style', "display:flex!important");


    }

    if (window.location.href.split('/').pop() === "izanami.html#fr") {
        document.getElementById('language_izanami_navbar').style.display = "none";
        document.getElementById('language_izanami_navbar_fr').style.display = "block";

        document.getElementById('language_description').style.display = "none";
        document.getElementById('language_description_fr').style.display = "block";

        document.getElementById('language_description_second').style.display = "none";
        document.getElementById('language_description_second_fr').style.display = "block";


        document.getElementById('language_use').style.display = "none";
        document.getElementById('language_use_fr').style.display = "block";

        document.getElementById('language_use_second').style.display = "none";
        document.getElementById('language_use_second_fr').style.display = "block";


        document.getElementById('language_izanami_navbar_second').style.display = "none";
        document.getElementById('language_izanami_navbar_second_fr').style.display = "block";

        document.getElementById('language_name').style.display = "none";
        document.getElementById('language_name_fr').style.display = "block";

        document.getElementById('language_izanami_mikoto').style.display = "none";
        document.getElementById('language_izanami_mikoto_fr').style.display = "block";

        document.getElementById('language_information').style.display = "none";
        document.getElementById('language_information_fr').style.display = "block";

        document.getElementById('language_trailer').style.display = "none";
        document.getElementById('language_trailer_fr').style.display = "block";


    }
    if (window.location.href.split('/').pop() === "aris.html#fr") {
        document.getElementById('language_h2one').style.display = "none";
        document.getElementById('language_h2one_fr').style.display = "block";

        document.getElementById('language_h2second').style.display = "none";
        document.getElementById('language_h2second_fr').style.display = "block";

        document.getElementById('language_aris_project').style.display = "none";
        document.getElementById('language_aris_project_fr').style.display = "block";

        document.getElementById('language_moreabout').style.display = "none";
        document.getElementById('language_moreabout_fr').style.display = "block";

    }else {
        console.log("good")
    }

}

function replaceEnglish() {
    if (window.location.href.split('/').pop() === "izanami.html#en") {
        document.getElementById('language_izanami_navbar').style.display = "block";
        document.getElementById('language_izanami_navbar_fr').style.display = "none";

        document.getElementById('language_description').style.display = "block";
        document.getElementById('language_description_fr').style.display = "none";

        document.getElementById('language_description_second').style.display = "block";
        document.getElementById('language_description_second_fr').style.display = "none";


        document.getElementById('language_use').style.display = "block";
        document.getElementById('language_use_fr').style.display = "none";

        document.getElementById('language_use_second').style.display = "block";
        document.getElementById('language_use_second_fr').style.display = "none";


        document.getElementById('language_izanami_navbar_second').style.display = "block";
        document.getElementById('language_izanami_navbar_second_fr').style.display = "none";

        document.getElementById('language_name').style.display = "block";
        document.getElementById('language_name_fr').style.display = "none";

        document.getElementById('language_izanami_mikoto').style.display = "block";
        document.getElementById('language_izanami_mikoto_fr').style.display = "none";

        document.getElementById('language_information').style.display = "block";
        document.getElementById('language_information_fr').style.display = "none";

        document.getElementById('language_trailer').style.display = "block";
        document.getElementById('language_trailer_fr').style.display = "none";

    }
    if (window.location.href.split('/').pop() === "#en") {
        // 1st

        // Title
        document.getElementById('language_title').style.display = "block";
        document.getElementById('language_title_fr').style.display = "none";


        //Navbar 1
        document.getElementById('language_navbar_home').style.display = "block";
        document.getElementById('language_navbar_home_fr').style.display = "none";

        document.getElementById('language_navbar_resume').style.display = "block";
        document.getElementById('language_navbar_resume_fr').style.display = "none";

        document.getElementById('language_navbar_about').style.display = "block";
        document.getElementById('language_navbar_about_fr').style.display = "none";

        document.getElementById('language_navbar_projet').style.display = "block";
        document.getElementById('language_navbar_projet_fr').style.display = "none";

        document.getElementById('language_description').style.display = "block";
        document.getElementById('language_description_fr').style.display = "none";

        document.getElementById('language_letter').style.display = "block";
        document.getElementById('language_letter_fr').style.display = "none";

        //2nd

        document.getElementById('language_about').style.display = "block";
        document.getElementById('language_about_fr').style.display = "none";

        document.getElementById('language_about_second').style.display = "block";
        document.getElementById('language_about_second_fr').style.display = "none";

        document.getElementById('language_about_third').style.display = "block";
        document.getElementById('language_about_third_fr').style.display = "none";

        document.getElementById('language_about_four').style.display = "block";
        document.getElementById('language_about_four_fr').style.display = "none";

        document.getElementById('language_work').style.display = "block";
        document.getElementById('language_work_fr').style.display = "none";


        document.getElementById('language_work_second').style.display = "block";
        document.getElementById('language_work_second_fr').style.display = "none";

        document.getElementById('language_undercube').style.display = "block";
        document.getElementById('language_undercube_fr').style.display = "none";

        document.getElementById('language_latestproject').style.display = "block";
        document.getElementById('language_latestproject_fr').style.display = "none";

        document.getElementById('language_photoproject').style.display = "block";
        document.getElementById('language_photoproject_fr').style.display = "none";

        document.getElementById('language_codingproject').style.display = "block";
        document.getElementById('language_codingproject_fr').style.display = "none";

        document.getElementById('language_musicproject').style.display = "block";
        document.getElementById('language_musicproject_fr').style.display = "none";

        // 3rd

        document.getElementById('language_allproject').style.display = "block";
        document.getElementById('language_allproject_fr').style.display = "none";

        //Navbar 2
        document.getElementById('language_navbar_home_second').style.display = "block";
        document.getElementById('language_navbar_home_fr_second').style.display = "none";

        document.getElementById('language_navbar_resume_second').style.display = "block";
        document.getElementById('language_navbar_resume_fr_second').style.display = "none";

        document.getElementById('language_navbar_about_second').style.display = "block";
        document.getElementById('language_navbar_about_fr_second').style.display = "none";

        document.getElementById('language_navbar_projet_second').style.display = "block";
        document.getElementById('language_navbar_projet_fr_second').style.display = "none";


        document.getElementById('language_projet_musical').style.display = "block";
        document.getElementById('language_projet_musical_fr').style.display = "none";

        document.getElementById('language_projet_photo').style.display = "block";
        document.getElementById('language_projet_photo_fr').style.display = "none";

        document.getElementById('language_projet_code').style.display = "block";
        document.getElementById('language_projet_code_fr').style.display = "none";

        document.getElementById('language_getintouch').style.display = "block";
        document.getElementById('language_getintouch_fr').style.display = "none";

        document.getElementById('language_preloader').style.display = "block";
        document.getElementById('language_preloader_fr').style.display = "none";


        document.getElementById('language_last_project').setAttribute('style', "display:block!important");


        document.getElementById('language_last_project_fr').setAttribute('style', "display:none!important");


        document.getElementById('language_form_fr').style.display = "none";
        document.getElementById('language_form').setAttribute('style', "display:flex!important");
    }
}


replaceFrench()