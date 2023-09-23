---
title: See-food
layout: page

seafood-options:
  - value: ahi
    label: Ahi Tuna
    taste-img: assets/img/flavor_ahi_bluefin.png
  - value: bluefin
    label: Bluefin Tuna
    taste-img: assets/img/flavor_ahi_bluefin.png
  - value: cod
    label: Cod
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: clam
    label: Clam
    taste-img: assets/img/flavor_clam.png
  - value: cuttlefish
    label: Cuttlefish
    taste-img: assets/img/flavor_cuttlefish_octopus.png
  - value: haddock
    label: Haddock
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: halibut
    label: Halibut
    taste-img: assets/img/flavor_cod_haddock_halibut.png
  - value: lobster
    label: Lobster
    taste-img: assets/img/flavor_lobster.png
  - value: iham
    label: Mahi-mahi
    taste-img: assets/img/flavor_mahi_striped.png
  - value: octopus
    label: Octopus
    taste-img: assets/img/flavor_cuttlefish_octopus.png
  - value: scallop
    label: Scallop
    taste-img: assets/img/flavor_scallop.png
  - value: striped
    label: Striped Bass
    taste-img: assets/img/flavor_mahi_striped.png
  - value: stone
    label: Stone Crab
    taste-img: assets/img/flavor_stone.png

other-species-cod-haddock-halibut:
  - species: atlantic_pollock
    period: Year-round
  - species: fluke
    period: June - August
  - species: grey_sole
    period: Year-round
  - species: red_hake
    period: Year-round
  - species: spiny_dogfish
    period: Year-round
  - species: white_hake
    period: Year-round
  - species: whiting
    period: July - October
  - species: arcadian_redfish
    period: Year-round

other-species-ahi-bluefin:
  - species: atlantic_mackerel
    period: Year-round
  - species: ocean_bonito
    period: April - June
  - species: bluefish
    period: June - September
  - species: bigeye_tuna
    period: Year-round

other-species-cuttlefish-octopus:
  - species: longfin_inshore_squid
    period: Year-round
  - species: shortfin_inshore_squid
    period: Year-round

other-species-lobster:
  - species: monkfish
    period: Year-round
  - species: jonah_crab
    period: January - March

other-species-mahi-striped:
  - species: black_sea_bass
    period: May - August
  - species: scup
    period: May - September
  - species: cunner
    period: Year-round

other-species-clam:
  - species: atlantic_surf_clam
    period: Year-round
  - species: ocean_quahog
    period: Year-round
  - species: soft_shell_clam
    period: Year-round
  - species: slipper_limpet
    period: Year-round
  - species: cherrystone
    period: Year-round

other-species-scallop:
  - species: winter_skate
    period: Year-round

other-species-stone:
  - species: jonah_crab
    period: January - March

recipe-cod-haddock-halibut:
  time: 20
  ingredients: ["Any mild, flakey fish fillet", Butter, Lemon, Garlic, "Salt & Pepper"]
  steps:
    - title: Pat Dry
      description: Pat dry the fillets with paper towel.
    - title: Make Lemon Butter
      description: Melt butter in microwave (or sauce pan over stove), stir in fresh lemon juice.
    - title: Season
      description: Arrange fillets in a baking dish, pour butter mixture evenly over. Season with garlic cloves, salt and pepper.
    - title: Bake
      description: Bake for 10-15 minutes in a 400 °F oven
    - title: Serve
      description: Drizzle the fish with the lemon butter sauce from the pan, ready to go!
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
    <fieldset type="text" name="cfc-species-{{ option.value }}"
        cf-questions="If {{ option.label }} is your jam, chances are you're into seafood with the following flavor traits...&&<img src='{{ option.taste-img }}' style='margin: 0px'>&&Ask the friendly counter folks for these lively Massachusetts arrivals you might just love.&&{% case option.value %}{% when 'cod', 'haddock', 'halibut' %}{% include other_species.html species-list=page.other-species-cod-haddock-halibut %}{% when 'ahi', 'bluefin' %}{% include other_species.html species-list=page.other-species-ahi-bluefin %}{% when 'cuttlefish', 'octopus' %}{% include other_species.html species-list=page.other-species-cuttlefish-octopus %}{% when 'lobster' %}{% include other_species.html species-list=page.other-species-lobster %}{% when 'iham', 'striped' %}{% include other_species.html species-list=page.other-species-mahi-striped %}{% when 'clam' %}{% include other_species.html species-list=page.other-species-clam %}{% when 'scallop' %}{% include other_species.html species-list=page.other-species-scallop %}{% when 'stone' %}{% include other_species.html species-list=page.other-species-stone %}{% endcase %}"
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

    {% for option in page.seafood-options %}
    <input
      type="text"
      cf-questions="{% case option.value %}{% when 'cod', 'haddock', 'halibut' %}{% include recipe.html recipe=page.recipe-cod-haddock-halibut%}{% endcase %}"
      cf-conditional-cfc-species-{{ option.value }}="{{ option.value }}-recipe" />
    {% endfor %}

</form>
