<script>
  import { supabase } from "../lib/supabaseClient";
  import { onMount } from "svelte";
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

    <div id="imagePrincipale">
    </div>
  </header>

  <section id="Moi">
    <div id="presentationMoi">
      <h2>Qui suis-je ?</h2>
      <p>Aprenti ingénieur méthodes chez GLASSVER, filliale du groupe Saint-Gobain dans le domaine de l'assemblage de vitrages isolants et étudiant à l'EISGI.</p>
         <div id="presentationMoi2">
          <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/saint-gobain.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9zYWludC1nb2JhaW4ucG5nIiwiaWF0IjoxNjY4NTA2MzY0LCJleHAiOjE5ODM4NjYzNjR9.1DZiAxCrax6Bh_E4pro3ilI4EOmsDx9qupMe-q0puLw" alt="Saint-Gobain" >
          <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/eigsi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9laWdzaS5wbmciLCJpYXQiOjE2Njg1MDY0MDYsImV4cCI6MTk4Mzg2NjQwNn0.yusjwSmpMSn2UrhJDLvNhomf7CfvYb3I8BQNTDWfmeo" alt="EIGSI" >
      </div>
    </div>
  </section>

  <section id="Passions">
    <div id="presentationPassions">
      <h2>Mes passions</h2>
      <p>Le sport : sportif depuis mon plus jeune age, escrimeur pendant 12 ans (arreté à cause de mes deplacements constants) je reste toujours en mouvement.</p>
      <p>La mécanique : j'aime apprendre et savoir faire les choses par moi-même. J'effectue toute les opérations d'entretient et de réparation sur ma voiture et je suis entrain de remettre en état un vieux moteur de 4L !</p>
      <p>L'informatique : joueur depuis de longues années, j'ai appris au fil du temps le fonctionnement des ordinateurs. La réparation et l'optimisation sont des passe temps pour moi.</p>
      <div id="presentationPassions2">
          <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/escrime.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9lc2NyaW1lLmpwZyIsImlhdCI6MTY2NzkwNDg0OSwiZXhwIjoxOTgzMjY0ODQ5fQ.s5TBD0VngSNTIN97onukNR3rc2tiYZ_zsSVenFstmSk" alt="escrime" >
          <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/moteur.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9tb3RldXIuanBnIiwiaWF0IjoxNjY3OTA0NzQyLCJleHAiOjE5ODMyNjQ3NDJ9.1gQ_B3gsTMuWKr-_8ZFfW6T4jYhPOHVGUmt3VlO_aIs" alt="moteur" >
          <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/ordinateur.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9vcmRpbmF0ZXVyLnBuZyIsImlhdCI6MTY2NzkwNDg3NiwiZXhwIjoxOTgzMjY0ODc2fQ.Mz9s58LT8XzknnOIgkUiwMffs-195IxKqW3kyr7Pfhc" alt="ordinateur" >
      </div>
    </div>
  </section>


 <section id="Contact">
    <div id="Contact">
    <h2> <a href="https://95nxq1.sse.codesandbox.io/Liens_sous_page/Contact" style="color: #064cce"> Contactez moi ici !</h2>
    </div>
  </section>

</body>
