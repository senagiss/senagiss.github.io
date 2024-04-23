let goodCount = 0;
let badCount = 0;

document.getElementById('goodBtn').addEventListener('click', function() {
    goodCount++;
    document.getElementById('goodCount').innerText = goodCount;
});

document.getElementById('badBtn').addEventListener('click', function() {
    badCount++;
    document.getElementById('badCount').innerText = badCount;
});

