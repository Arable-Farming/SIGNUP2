document.getElementById('imageUpload').addEventListener('change', function() {
    const fileInput = document.getElementById('imageUpload');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Choose a file';
    document.getElementById('fileName').textContent = fileName;
});

const imageInfo = {
    "tomato bacterial spot": {
        additionalImage1: "extra_sunrise_1.jpg",
        additionalImage2: "extra_sunrise_2.jpg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease.This is a beautiful sunrise over the mountains."
        
    },
    "tomato bacterial spot": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease.."
    },
   "tomato bacterial spot": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato bacterial spot is a disease caused by bacteria that affects tomato plants. It creates small, dark spots on the leaves, stems, and fruit. These spots can make the leaves turn yellow and fall off, weakening the plant. The disease spreads quickly in warm, wet conditions and can come from infected seeds or splashing rain. Infected tomatoes may be deformed and hard to sell. To prevent it, farmers use clean seeds, rotate crops, and keep their fields clean. Sometimes, special sprays are also used to control the disease.A relaxing view of the beach with crystal-clear water."
    },
    "tomato early blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "tomato early blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "tomato early blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "late blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "late blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
     "late blight": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato late blight is a severe plant disease caused by the pathogen Phytophthora infestans. It affects the leaves, stems, and fruit of tomato plants, leading to large, dark, water-soaked spots that quickly spread and destroy the plant. Infected fruit may develop brown, rotten patches. Late blight thrives in cool, wet conditions and spreads rapidly through wind and rain, making it highly contagious. This disease is notorious for causing widespread crop losses if not managed early. To prevent late blight, farmers use resistant tomato varieties, maintain proper spacing for air circulation, and apply fungicides when necessary. Proper sanitation and removing infected plants are also key to controlling the disease.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "leaf mold": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato leaf mold is a fungal disease caused by Passalora fulva that primarily affects the leaves of tomato plants. It appears as yellow spots on the upper leaf surface and olive-green to gray mold on the underside. As the disease progresses, infected leaves may turn brown, wilt, and eventually fall off, weakening the plant and reducing its yield. Leaf mold thrives in warm, humid environments, particularly in greenhouses or areas with poor air circulation. To prevent it, farmers should ensure good air circulation, avoid overhead watering, use resistant varieties, and apply fungicides when necessary. Proper sanitation, including removing infected leaves, helps control its spread.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "leaf mold": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato leaf mold is a fungal disease caused by Passalora fulva that primarily affects the leaves of tomato plants. It appears as yellow spots on the upper leaf surface and olive-green to gray mold on the underside. As the disease progresses, infected leaves may turn brown, wilt, and eventually fall off, weakening the plant and reducing its yield. Leaf mold thrives in warm, humid environments, particularly in greenhouses or areas with poor air circulation. To prevent it, farmers should ensure good air circulation, avoid overhead watering, use resistant varieties, and apply fungicides when necessary. Proper sanitation, including removing infected leaves, helps control its spread.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    "leaf mold": {
        additionalImage1: "extra_beach_1.jpg",
        additionalImage2: "extra_beach_2.jpg",
        description: "Tomato leaf mold is a fungal disease caused by Passalora fulva that primarily affects the leaves of tomato plants. It appears as yellow spots on the upper leaf surface and olive-green to gray mold on the underside. As the disease progresses, infected leaves may turn brown, wilt, and eventually fall off, weakening the plant and reducing its yield. Leaf mold thrives in warm, humid environments, particularly in greenhouses or areas with poor air circulation. To prevent it, farmers should ensure good air circulation, avoid overhead watering, use resistant varieties, and apply fungicides when necessary. Proper sanitation, including removing infected leaves, helps control its spread.Tomato early blight is a fungal disease caused by Alternaria solani that affects tomato plants. It causes dark, circular spots with a target-like pattern on leaves, stems, and sometimes fruit. As the disease progresses, the leaves turn yellow and fall off, weakening the plant and reducing fruit production. Early blight spreads in warm, wet conditions and can survive in soil, plant debris, or seeds. To prevent it, farmers can use resistant varieties, rotate crops, remove infected plants, and apply fungicides when necessary. Early intervention helps reduce the damage and protect tomato yields.A relaxing view of the beach with crystal-clear water."
    },
    // Add more image names, descriptions, and additional image paths as needed
};

function getImageInfo() {
    const imageUpload = document.getElementById("imageUpload").files[0];
    
    if (imageUpload) {
        const imageName = imageUpload.name;

        // Show the spinner
        document.getElementById("loadingSpinner").style.display = 'block';

        // Hide previous content
        document.getElementById("uploadedImagePreview").style.display = 'none';
        document.getElementById("additionalImage1").style.display = 'none';
        document.getElementById("additionalImage2").style.display = 'none';
        document.getElementById("info").innerHTML = '';

        setTimeout(() => {
            const info = imageInfo[imageName];

            // Display uploaded image
            const imagePreview = document.getElementById("uploadedImagePreview");
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(imageUpload);

            if (info) {
                document.getElementById("info").innerHTML = `<p>${info.description}</p>`;
                const additionalImage1 = document.getElementById("additionalImage1");
                const additionalImage2 = document.getElementById("additionalImage2");
                additionalImage1.src = info.additionalImage1;
                additionalImage2.src = info.additionalImage2;
                additionalImage1.style.display = 'block';
                additionalImage2.style.display = 'block';
            } else {
                document.getElementById("info").innerHTML = `<p>Something is wrong with the picture. Please try again.</p>`;
            }

            // Hide the spinner
            document.getElementById("loadingSpinner").style.display = 'none';
        }, 3000 + Math.random() * 2000); // Simulate a delay
    } else {
        document.getElementById("info").innerHTML = `<p>Please upload an image.</p>`;
    }
}
