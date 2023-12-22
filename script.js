function downloadResume() {
    var element = document.getElementById('resume'); // Replace 'resume' with the ID of your resume container
    
    // Use html2pdf's promise-based API for better control
    html2pdf(element)
        .from(element)
        .outputPdf()
        .then(function(pdf) {
            // Trigger the download
            var blob = new Blob([pdf], { type: 'application/pdf' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'resume.pdf';
            link.click();
        });
}
