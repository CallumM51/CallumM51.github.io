
function toggleLightMode(){
    console.log("Whoosh, dark mode")
}

document.addEventListener('DOMContentLoaded', function () {
    const tocLinks = 
          document.querySelectorAll('.content a');
    const sections = 
          document.querySelectorAll('.section');

    window.addEventListener('scroll', function () {
        const currentPos = window.scrollY + 3 *(window.innerHeight/4);
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
			
            if (currentPos >= sectionTop && 
                currentPos < sectionTop + sectionHeight) {
					tocLinks.forEach(function (tocLink) {
                    tocLink.classList.remove('active');
                });
			document.getElementById( sectionId + '-toc').children[0].classList.add('active')
            }
        });
    });
});

function goTo(id){
	sectionTop = document.getElementById(id).offsetTop + 50;
	dropPoint = sectionTop - 3 *(window.innerHeight/4);
	scrollTo(0,dropPoint)
}