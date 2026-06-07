<script>
  import './app.css'
  import Navv1 from '$lib/vag/Navv1.svelte'

  let { children } = $props()

  // Favicon OG Section
  const SITE_URL = 'https://snyf.s.gy/piwljw'
  const SITE_TITLE = 'y2-2'
  const SITE_DESCRIPTION = 'y2'
  const BRAND_COLOR = '#FF2DD1'
  const TWITTER_HANDLE = '@ButyEatr'

  const FAVICON_URL =
    'https://res.cloudinary.com/dsec3pqkf/image/upload/v1780770348/3.webp'
  const OG_IMAGE_URL =
    'https://res.cloudinary.com/dsec3pqkf/image/upload/v1780770348/3.webp'
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Basic -->
  <title>{SITE_TITLE}</title>
  <meta name="description" content={SITE_DESCRIPTION} />
  <meta name="theme-color" content={BRAND_COLOR} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={SITE_URL} />

  <!-- Favicon -->
  <link rel="icon" type="image/webp" href={FAVICON_URL} />
  <link rel="apple-touch-icon" href={FAVICON_URL} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:title" content={SITE_TITLE} />
  <meta property="og:description" content={SITE_DESCRIPTION} />
  <meta property="og:image" content={OG_IMAGE_URL} />
  <meta property="og:image:alt" content={SITE_TITLE} />
  <meta property="og:site_name" content={SITE_TITLE} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={SITE_URL} />
  <meta name="twitter:title" content={SITE_TITLE} />
  <meta name="twitter:description" content={SITE_DESCRIPTION} />
  <meta name="twitter:image" content={OG_IMAGE_URL} />
  <meta name="twitter:image:alt" content={SITE_TITLE} />
  <meta name="twitter:site" content={TWITTER_HANDLE} />
  <meta name="twitter:creator" content={TWITTER_HANDLE} />
</svelte:head>

<Navv1 />

{@render children()}
