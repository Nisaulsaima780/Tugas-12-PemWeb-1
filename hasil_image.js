function displayImage() {
    let selectElement = document.getElementById("imageSelect");
    let selectedValue = selectElement.value;

    let imageContainer = document.getElementById("imageContainer");
    let displayedImage = document.getElementById("displayedImage");

    // Update image source
    displayedImage.src = selectedValue;

    // Show alert with file name
    alert("Nama file gambar :  " + selectedValue);
}