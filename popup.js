document.addEventListener('DOMContentLoaded', documentEvents  , false);


function openPage(input) { 
	window.open(`https://parcelsapp.com/en/tracking/${input.value}`, "_blank");
}

function documentEvents() {

  document.getElementById('submit').addEventListener('click', 
    function() { openPage(document.getElementById('search'));
  });

}