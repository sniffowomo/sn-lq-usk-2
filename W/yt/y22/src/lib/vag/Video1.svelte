<script>
  // Replace with your actual external video link
  const videoUrl =
    'https://res.cloudinary.com/dsec3pqkf/video/upload/v1780806428/4.mp4'
</script>

<video src={videoUrl} autoplay muted playsinline loop class="responsive-video">
  Your browser does not support the video tag.
</video>

<style>
  .responsive-video {
    /* Makes the video resize responsively */
    width: 80%;
    max-width: 800px; /* Set your desired maximum width */
    height: auto;
    opacity: 0.7;

    /* Ensures it looks good if you force a specific height */
    /* object-fit: cover; */
    border-radius: 18px; /* Optional: adds rounded corners */
  }
</style>
