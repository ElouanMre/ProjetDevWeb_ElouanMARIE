<script>
  import { supabase } from "../../lib/supabaseClient";
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
  </header>

  <section id="CV">
    <div id="CV">
       <img src="https://tojnbtkjrogrxgzhdjdu.supabase.co/storage/v1/object/sign/image/CV.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9DVi5qcGciLCJpYXQiOjE2Njc5MDQ5NDIsImV4cCI6MTk4MzI2NDk0Mn0.O5iyqzarA--R1WKOCHyzLu2CMoCO49LgXOhnxQ4ib7I" alt="CV" >
    </div>
  </section>

 <section id="Contact">
    <div id="Contact">
    <h2> <a href="https://95nxq1.sse.codesandbox.io/Liens_sous_page/Contact" style="color: #064cce"> Contactez moi ici !</h2>
    </div>
  </section>

</body>
