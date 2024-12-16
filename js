  /* JavaSript structure of SceneSS */
function SceneSS(){
  Scene = document.querySelector('scene')
  /* start the animation */
    Scene.classList.add('i');
  /* start the animation */
  
  /* set timeout how much as you want your animation be shown */
            setTimeout(() => {
                Scene.classList.add('ii');
              
  /* you can remove scene element after being shown */
                setTimeout(() => {
                    Scene.remove();
                }, 1000);
              
            }, 1000 /* duration of animation */ );
}

  /* we dont want our animation ends before our user could be able to see it */
window.addEventListener("load", SceneSS);
