let index = 0;
const wrapper = document.getElementById('sliderWrapper');
const totalImages = wrapper.children.length;

setInterval(() => {
  index = (index + 1) % totalImages;
  wrapper.style.transform = `translateX(-${index * 300}px)`;
}, 3000); // ganti gambar tiap 3 detik
