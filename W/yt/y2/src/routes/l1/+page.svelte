<!-- This is the lesson1 route-->

<script>
  // --- Imoports for lines ---
  import Wvd2 from '$lib/panty/WaveDiv2.svelte'
  import Wvd3 from '$lib/panty/WaveDiv3.svelte'

  //    Work zone
  let title = 'Panty'
  let src_i1 =
    'https://res.cloudinary.com/dsec3pqkf/image/upload/v1780247397/giphy_zpuzto.gif'
  let alt_i1 = 'booty'

  // Spread Syntax
  let img_props_method = {
    src: 'https://res.cloudinary.com/dsec3pqkf/image/upload/v1780247397/giphy_zpuzto.gif',
    alt: 'pantybooty',
    width: '300',
  }
</script>

<div class="flex">
  <!-- nav zone -->
  <Wvd3
    thickness={1}
    bumpThickness={2}
    bumpWidth={240}
    glow={24}
    speed={6}
    breatheSpeed={12.5}
  />
  <a class="btn" href="/"> Home </a>
  <Wvd3
    thickness={1}
    bumpThickness={2}
    bumpWidth={240}
    glow={24}
    speed={6}
    breatheSpeed={2.5}
  />

  <h1>Lesson 1 - Route</h1>
  <Wvd2 />

  <!-- Work zone -->
  <p class="p2">Testing the templating</p>
  <h1>{title}</h1>

  <p class="p2">
    Testing standard image tags, note in this case we are using variable tags,
    that have been defined in the script section
  </p>
  <img src={src_i1} alt={alt_i1} width="200" />

  <p class="p2">
    Note below using the image props method , this is so much better, to reduce
    unncessary code
  </p>
  <img {...img_props_method} />
</div>
