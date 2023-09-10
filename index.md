---
title: See-food
layout: page
---

<div class="row w-100 h-100 justify-content-center m-0 p-0">
    <div class="col-11 col-md-5 h-100 m-0 p-0 align-items-center d-flex">
        <div id="cf-context" class="dark-theme" role="cf-context" cf-context></div>
    </div>
</div>

<form id="myform" cf-form>
    <fieldset cf-label="opening" name="cfc-opening" cf-input-placeholder="Select Seafood"
        cf-questions="Imagine a world<br><br>It'll be a long journey, but the first step isn't hard. It starts with trying an unfamiliar local seafood - perhaps something tastes similar to what you already know and like. Let's start right here!&&Find out more about place-based seafood sustainability information, visit Eating with the Ecosystem."
        />
        <input type="radio" name="cfc-opening" id="intro-ahi" value="ahi">
        <label for="intro-ahi">Ahi Tuna</label>

        <input type="radio" name="cfc-opening" id="intro-bluefin" value="bluefin">
        <label for="intro-bluefin">Bluefin Tuna</label>

        <input type="radio" name="cfc-opening" id="intro-cod" value="cod">
        <label for="intro-cod">Cod</label>

        <input type="radio" name="cfc-opening" id="intro-clam" value="clam">
        <label for="intro-clam">Clam</label>

        <input type="radio" name="cfc-opening" id="intro-cuttlefish" value="cuttlefish">
        <label for="intro-cuttlefish">Cuttlefish</label>

        <input type="radio" name="cfc-opening" id="intro-haddock" value="haddock">
        <label for="intro-haddock">Haddock</label>

        <input type="radio" name="cfc-opening" id="intro-halibut" value="halibut">
        <label for="intro-halibut">Halibut</label>

        <input type="radio" name="cfc-opening" id="intro-lobster" value="lobster">
        <label for="intro-lobster">Lobster</label>

        <input type="radio" name="cfc-opening" id="intro-mahi" value="mahi">
        <label for="intro-mahi">Mahi-mahi</label>

        <input type="radio" name="cfc-opening" id="intro-octopus" value="octopus">
        <label for="intro-octopus">Octopus</label>

        <input type="radio" name="cfc-opening" id="intro-scallop" value="scallop">
        <label for="intro-scallop">Scallop</label>

        <input type="radio" name="cfc-opening" id="intro-striped" value="striped">
        <label for="intro-striped">Striped Bass</label>

        <input type="radio" name="cfc-opening" id="intro-stone" value="stone">
        <label for="intro-stone">Stone Crab</label>
    </fieldset>

    <input type="text"
        cf-questions="If you like Ahi Tuna, you most likely like seafood that have the following taste features...&&<img src='/assets/img/pollock.png' width='500' height='600' style='margin: 0px 90px 0px 90px'>&&And you might like these species that are landing at Massachusetts&&<img src='/assets/img/pollock.png' width='500' height='600' style='margin: 0px 90px 0px 90px'>"
        cf-conditional-cfc-opening="ahi"
        cf-input-placeholder="Type anything to select another seafood"
    />
</form>
