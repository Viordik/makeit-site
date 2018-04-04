const blogUploads = document.querySelectorAll('.file-upload .upload');


console.log(blogUploads);

[].forEach.call(blogUploads, function (blogUpload) {

  const fileInput = blogUpload.querySelector('input[type="file"]');
  const textElement = blogUpload.nextElementSibling;

  fileInput.addEventListener('change', function (evt) {

    textElement.textContent = this.value;

  });

});
