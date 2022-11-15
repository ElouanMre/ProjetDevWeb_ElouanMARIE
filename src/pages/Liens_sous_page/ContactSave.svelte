<script>
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supabaseClient";

  onMount(async () => {
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", async event => {
      event.preventDefault();

      const formInputs = form.querySelectorAll("input, select, textarea");

      let submision = {};

      formInputs.forEach(element => {
        const { value, name } = element;
        if (value) {
          submision[name] = value;
        }
      });

      const { error } = await supabase
        .from("Entree")
        .insert([submision], { returning: "minimal" });

      if (error) {
        alert("Une erreur s'est produite, vous pouvez me contacter par LinkedIn");
      } else {
        alert("Merci !");
      }

      formInputs.forEach(element => (element.value = ""));
    });
  });
</script>

<svelte:head>
	<title> Elouan MARIE</title>

	<link rel="stylesheet" href="global.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

</svelte:head>

<body>
	<header>
		<nav>
			<ul>

				<li id="logo"> <a href="https://95nxq1.sse.codesandbox.io/"> Elouan MARIE </a> </li>
				<li> <a href="https://95nxq1.sse.codesandbox.io/Liens_sous_page/Mon_CV"> Mon CV </a> </li>
			</ul>
		</nav>
	</header>

	<section class="section container">
		<form name="contact" id="contact-form">
			<h2>Formulaire de contact</h2>
			<div class="field">
				<label class="label" for="name">Nom</label>
				<div class="control">
					<input required class="input" type="text" placeholder="Votre nom" name="name" />
				</div>
			</div>

			<div class="field">
				<label class="label" for="email">Email</label>
				<div class="control has-icons-left">
					<input class="input" type="email" required placeholder="Votre email" name="email" />
				</div>
			</div>

			<div class="field">
				<label class="label" for="subject">Vous me contactez pour :</label>
				<div class="control">
					<div class="select">
						<select name="subject">
							<option value="">Vous me contactez pour :</option>
							<option value="pro">Une offre professionnelle</option>
							<option value="contact">Entrer en contact</option>
							<option value="other">Autre</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field">
				<label class="label" for="message">Message</label>
				<div class="control">
					<textarea required class="textarea" placeholder="Votre message" name="message"></textarea>
				</div>
			</div>

			<div class="button">
				<div class="control">
					<button class="button is-primary" type="submit">Envoyer</button>
				</div>
			</div>
		</form>
	</section>

</body>



    
<style>
  form {
    margin: 0 auto;
    width: 550px;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 1em;
    text-align: center;
    background-color: #f5f5dc;
  }

  label {
    width: 200px;
    text-align: center;
    font-weight: bold;
  }

  input,
  textarea {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #999;
  }

  input:focus,
  textarea:focus {
    border-color: #000;
  }

  textarea {
    vertical-align: top;
    height: 5em;
  }
</style>

  
