function handleClick(buttonName) {
    const copyText = document.getElementById("copyText");
    
    // Append the message to the existing value with a new line
    if (buttonName === 'verified_user') {
      copyText.value += "Verified User message\n";
    } else if (buttonName === 'rebooted_system') {
      copyText.value += "Rebooted System message\n";
    } else if (buttonName === 'cleared_cache_cookies') {
      copyText.value += "Cleared Cache Cookies message\n";
    } else if (buttonName === 'performed_browser_reset') {
      copyText.value += "Performed a Browser Reset message\n";
    } else if (buttonName === 'step_5') {
      copyText.value += "Still waiting for Sameer\n";
    } else if (buttonName === 'step_6') {
      copyText.value += "Still waiting for Sameer\n";
    }
  }
  
  function copyText() {
    const copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text copied!");
  }
  
  function resetText() {
    const copyText = document.getElementById("copyText");
    copyText.value = "";}