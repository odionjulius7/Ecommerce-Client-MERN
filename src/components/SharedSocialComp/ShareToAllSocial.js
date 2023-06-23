export const shareToSocialMedia = (url, socialMedia) => {
  let shareUrl;

  // Generate the share URL based on the selected social media platform
  switch (socialMedia) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
      break;
    case "pinterest":
      shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        url
      )}`;
      break;
    default:
      // Handle unsupported social media platforms or fallback to a default behavior
      console.warn(`Unsupported social media platform: ${socialMedia}`);
      return;
  }

  // Open a new window or tab to share the link
  window.open(shareUrl, "_blank");
};
