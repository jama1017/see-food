---
title: See-food
layout: page

seafood-options:
  - value: ahi
    label: Ahi Tuna
    taste-img: assets/img/atlantic_pollock.png
  - value: bluefin
    label: Bluefin Tuna
    taste-img: assets/img/atlantic_pollock.png
  - value: cod
    label: Cod
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: clam
    label: Clam
    taste-img: assets/img/atlantic_pollock.png
  - value: cuttlefish
    label: Cuttlefish
    taste-img: assets/img/atlantic_pollock.png
  - value: haddock
    label: Haddock
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: halibut
    label: Halibut
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: lobster
    label: Lobster
    taste-img: assets/img/atlantic_pollock.png
  - value: mahi
    label: Mahi-mahi
    taste-img: assets/img/atlantic_pollock.png
  - value: octopus
    label: Octopus
    taste-img: assets/img/atlantic_pollock.png
  - value: scallop
    label: Scallop
    taste-img: assets/img/atlantic_pollock.png
  - value: striped
    label: Striped Bass
    taste-img: assets/img/atlantic_pollock.png
  - value: stone
    label: Stone Crab
    taste-img: assets/img/atlantic_pollock.png

other-species-cod-haddock-halibut:
  [
    atlantic_pollock,
    fluke,
    grey_sole,
    red_hake,
    spiny_dogfish,
    white_hake,
    whiting,
    arcadian_redfish,
  ]
---

<div class="row w-100 h-100 justify-content-center m-0 p-0">
    <div class="col-11 col-md-5 h-100 m-0 p-0 align-items-center d-flex justify-content-center">
        <div id="cf-context" class="dark-theme" role="cf-context" cf-context></div>
        <img class="opening-img show" src="assets/img/open_cod.png" height="80px" >
        <img class="opening-img" src="assets/img/open_pollock.png" height="80px" >
        <img class="opening-img" src="assets/img/open_scallop.png" height="80px" >
        <img class="opening-img" src="assets/img/open_skate.png" height="80px" >
        <img class="opening-img" src="assets/img/open_frame.png" height="80px" >
        <img class="opening-img" src="assets/img/open_see.png" height="80px" >
    </div>
</div>

<form id="myform" cf-form>
    <fieldset cf-label="opening" name="cfc-opening" cf-input-placeholder="Select Seafood"
        cf-questions="Hey there, seafood adventurer!<br><br>Ready to spice up your shopping game with some local flair? Let's embark on a flavor-filled journey to discover exciting and lesser-known Massachusetts local options that keep that delicious familiarity intact!&&Let's kick things off by picking a species that tickles your taste buds or is making into your shopping list today!"
        />
        {% for option in page.seafood-options %}
            <input type="radio" name="cfc-opening" id="intro-{{ option.value }}" value="{{ option.value }}">
            <label for="intro-{{ option.value }}">{{ option.label }}</label>
        {% endfor %}
    </fieldset>

    {% for option in page.seafood-options %}
    <fieldset type="text" name="cfc-species"
        cf-questions="If {{ option.label }} is your jam, chances are you're into seafood with the following flavor traits...&&<img src='{{ option.taste-img }}' style='margin: 0px'>&&Ask the friendly counter folks for these lively Massachusetts arrivals you might just love.&&{% case option.value %}{% when 'cod', 'haddock', 'halibut' %}{% include other_species.html species-list=page.other-species-cod-haddock-halibut %}{% endcase %}"
        cf-input-placeholder="Type anything to select another seafood"
        >
            <input type="radio" 
                   cf-conditional-cfc-opening="{{ option.value }}" 
                   name="cfc-species-{{ option.value }}" 
                   id="species-{{ option.value }}-recipe" 
                   value="{{ option.value }}-recipe" 
                   cf-label="<img src='assets/img/action_spoon.png' class='action-icon'/>A ridiculously easy & tasty recipe for this list"
                   >

            <input type="radio" 
                   cf-conditional-cfc-opening="{{ option.value }}" 
                   name="cfc-species-{{ option.value }}" 
                   id="species-{{ option.value }}-eco" 
                   value="{{ option.value }}-eco" 
                   cf-label="<img src='assets/img/action_fish.png' class='action-icon'/>Dive deeper into <a href='https://www.eatingwiththeecosystem.org/' target='_blank'>Eating with the Ecosystem</a>"
                   >

            <input type="radio" 
                   cf-conditional-cfc-opening="{{ option.value }}" 
                   name="cfc-species-{{ option.value }}" 
                   id="species-{{ option.value }}-local" 
                   value="{{ option.value }}-local" 
                   cf-label="<img src='assets/img/action_bag.png' class='action-icon'/>Check <a href='https://www.thelocalcatch.com/' target='_blank'>the Local Catch Network</a> to locate your desired catch"
                   >
    </fieldset>
    {% endfor %}

</form>
