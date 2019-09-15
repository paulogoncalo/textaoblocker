
// Saves options to chrome.storage
function save_options() {
  var maxCharQuantity = document.getElementById('character-quantity').value;
  chrome.storage.sync.set({
    'maxCharQuantityStored': maxCharQuantity
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Opção salva.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}


// Restores input state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    'maxCharQuantityStored': 300
  }, function(items) {
    document.getElementById('character-quantity').value = items.maxCharQuantityStored;

  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save-button').addEventListener('click',
    save_options);