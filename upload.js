const uploadInput = document.getElementById("fileUpload");
uploadInput.addEventListener("change", handleUpload, false);

function handleUpload() {
    const [upload] = this.files;
    const reader = new FileReader();

    reader.addEventListener("load", parseFile, false);
    reader.readAsText(upload);
}

function parseFile(e) {
    const reader = e.target;
    const parts = reader.result.split("\n");

    for(const part of parts) {
        const [key, value] = part.split("=");
        const input = document.querySelector(`[name="${key}"]`);

        if (input != null) {
            input.value = value;
        }
    }
}