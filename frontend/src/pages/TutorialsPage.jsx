import {React, useEffect, useState} from 'react'
import WrapperComponent from '../component/WrapperComponent'
import NavBar from '../Component/NavBar'
import AnatomyMapComponent from '../component/AnatomyMapComponent'

export default function TutorialsPage() {
  const [vids, setVids] = useState([])
 
  const embeddedLinks = [
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y3mXKvJ3RPQ?si=avfscQWAqcyj5sdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="354" height="630" src="https://www.youtube.com/embed/GDyhrJQfN-s" title="We banned 15 top tiers this week on #umvc3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="354" height="630" src="https://www.youtube.com/embed/qVHaojBETbY" title="本田ステージには女湯がある！【マーヴルvsカプコン】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,

  ]
//   const embeddedLinks = [
//     "https://drive.google.com/file/d/105Otml961xaRLeecBu-xvALwo3Ii1awn/preview",
//     "https://drive.google.com/file/d/1Dx9H7HIi_75MH4XFm_fn35j1KGeI63hE/preview",
//     "https://drive.google.com/file/d/1-IE7fslDJ7fyWCBubLaxuL0NLr02GVfX/preview",
//     "https://drive.google.com/file/d/1hB9Uq3uXI4qHNYHW2tgeNy4pvAQcnAeb/preview",
//     "https://drive.google.com/file/d/19dw0LzZvPFuEAtYIgfMWSoD2wxamuMjv/preview",
//     "https://drive.google.com/file/d/1dyZpxZeiqWJtW94vAssea3a_HsyRt-c5/preview",
//     "https://drive.google.com/file/d/1hQqpVFQJQkvnF3ziCGkKwO37l0edPks5/preview",
//     "https://drive.google.com/file/d/16J2U6gxEsAQzf-RXbOJTjaXnt2fWaeqv/preview",
//     "https://drive.google.com/file/d/1sxPwuKaczNy8qdJqzPGzGTI4QVBRFE42/preview",
//     "https://drive.google.com/file/d/1jWGba8u-QfY3aK00sKT6WdqfRV2Hn4IR/preview",
//     "https://drive.google.com/file/d/1eIkCo7zg_uxqDjlcNJ2fUx-MI4hsqVR3/preview",
//     "https://drive.google.com/file/d/12tXqmPPvRdRW-ldOpumyoL-IvMi8yVnh/preview",
//     "https://drive.google.com/file/d/1xoye4fwcTgLWBhPIGUa1Gs9K6ddgU_lD/preview",
//     "https://drive.google.com/file/d/1_aGcPAJvaMdyLek6oqCKcqvUyXU8kTq5/preview"
// ];

  useEffect(()=>{
    const iframeElements = [...embeddedLinks]
    setVids(()=>[...iframeElements])
  },[])
  return (
    <>
      <NavBar />
      <WrapperComponent>
        <div className="pageMainTitle">Choose a 
        Muscle Group</div>
        <AnatomyMapComponent/>
        {vids}
      </WrapperComponent>

    </>
  )
}
