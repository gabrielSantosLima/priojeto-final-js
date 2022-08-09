const uploadInput = document.getElementById("fileUpload");
const uploadButton = document.getElementById("buttonUpload")

uploadButton.addEventListener('click', startUpload)
uploadInput.addEventListener("change", handleUpload, false);

function startUpload(){
    uploadInput.click()
}

function handleUpload() {
    const [upload] = this.files;
    const reader = new FileReader();

    reader.addEventListener("load", parseFile, false);
    reader.readAsText(upload);
}

function parseFile(event) {
    const reader = event.target;
    const parts = reader.result.split(/\r?\n/);

    for(const part of parts) {
        const [key, value] = part.split("=");
        const input = document.querySelector(`[name="${key}"]`);

        if (input != null) {
            input.value = value;
        }
    }
}