function volumeSphere() {
    const radiusInput = document.getElementById("radius");
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").innerText = "NaN";
        return;
    }

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").innerText = volume.toFixed(4);
}