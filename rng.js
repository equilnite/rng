function randomSample(n, min, max, replacement) {
    if (!replacement && n > max - min + 1) {
      throw new Error('Cannot do without replacement when n > max - min + 1');
    }
  
    const sampled = [];
  
    while (sampled.length < n) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (!replacement) {
        // If sampling without replacement, ensure the value is unique
        if (!sampled.includes(randomValue)) {
          sampled.push(randomValue);
        }
      } else {
        // If sampling with replacement, simply add the random value
        sampled.push(randomValue);
      }
    }
  
    return sampled;
}

function generateRandomSample() {
  const sampleSize = parseInt(document.getElementById("sampleSize").value);
  const minValue = parseInt(document.getElementById("minValue").value);
  const maxValue = parseInt(document.getElementById("maxValue").value);
  const replacement = (document.getElementById("replacement").value === "true");

  try {
    const sampledNumbers = randomSample(sampleSize, minValue, maxValue, replacement);
    document.getElementById("sampleResult").innerHTML = `<p>${sampledNumbers.join(', ')}</p>`;
  } catch (error) {
    document.getElementById("sampleResult").innerHTML = `<p class="text-danger">${error.message}</p>`;
  }
}

  
  
  
  
  
  