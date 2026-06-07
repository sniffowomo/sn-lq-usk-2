<script>
  // Replace with your actual external video link
  const videoUrl =
    'https://res.cloudinary.com/dsec3pqkf/video/upload/f_auto/q_auto//v1780806428/4.mp4'
</script>

<!-- 1. Wrap both elements in a container -->
<div class="video-wrapper">
  <!-- Actual Video -->
  <video
    src={videoUrl}
    autoplay
    muted
    playsinline
    loop
    class="responsive-video"
  >
    Your browser does not support the video tag.
  </video>

  <!-- Nav Element -->
  <a href="/" class="link-btn" style:padding="1.5rem">Home</a>
</div>

<style>
  /* 2. The wrapper acts as the anchor for the absolute positioning */
  .video-wrapper {
    position: relative;
    width: 10%; /* Moved from the video */
    max-width: 800px;
    display: inline-block; /* Ensures the wrapper tightly hugs the video */
  }

  .responsive-video {
    width: 100%; /* Fills the wrapper */
    height: auto;
    opacity: 0.7;
    border-radius: 18px;
    display: block; /* Removes the tiny gap that appears under videos by default */
  }

  /* 3. The link is pulled out of normal flow and placed on top */
  .link-btn {
    position: absolute;

    /* --- POSITIONING --- */
    /* This specific combination perfectly centers the link */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* --- STYLING --- */
    /* Added some basic styles so the text is readable over the moving video */
    color: white;
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    z-index: 10; /* Ensures it stays above the video layer */
  }
</style>
