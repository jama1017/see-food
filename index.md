---
title: See-food
layout: page

seafood-options:
  - value: ahi
    label: Ahi Tuna
    taste-img: pollock.png
  - value: bluefin
    label: Bluefin Tuna
  - value: cod
    label: Cod
  - value: clam
    label: Clam
  - value: cuttlefish
    label: Cuttlefish
  - value: haddock
    label: Haddock
  - value: halibut
    label: Halibut
  - value: lobster
    label: Lobster
  - value: mahi
    label: Mahi-mahi
  - value: octopus
    label: Octopus
  - value: scallop
    label: Scallop
  - value: striped
    label: Striped Bass
  - value: stone
    label: Stone Crab
---

<div class="row w-100 h-100 justify-content-center m-0 p-0">
    <div class="col-11 col-md-5 h-100 m-0 p-0 align-items-center d-flex">
        <div id="cf-context" class="dark-theme" role="cf-context" cf-context></div>
    </div>
</div>

<form id="myform" cf-form>
    <fieldset cf-label="opening" name="cfc-opening" cf-input-placeholder="Select Seafood"
        cf-questions="JEKYLL!! Imagine a world<br><br>It'll be a long journey, but the first step isn't hard. It starts with trying an unfamiliar local seafood - perhaps something tastes similar to what you already know and like. Let's start right here!&&Find out more about place-based seafood sustainability information, visit Eating with the Ecosystem."
        />
        {% for option in page.seafood-options %}
            <input type="radio" name="cfc-opening" id="intro-{{ option.value }}" value="{{ option.value }}">
            <label for="intro-{{ option.value }}">{{ option.label }}</label>
        {% endfor %}
    </fieldset>

    {% for option in page.seafood-options %}
    <input type="text"
        cf-questions="If you like {{ option. label }}, you most likely like seafood that have the following taste features...&&<img src='/assets/img/pollock.png' width='500' height='600' style='margin: 0px 20px 0px 20px'>&&And you might like these species that are landing at Massachusetts&&<img src='/assets/img/pollock.png' width='500' height='600' style='margin: 0px 20px 0px 20px'>"
        cf-conditional-cfc-opening="{{ option.value }}"
        cf-input-placeholder="Type anything to select another seafood"
    />
    {% endfor %}

</form>
