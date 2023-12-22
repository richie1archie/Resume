function toggleDetails(id) {
    var details = document.getElementById(id);
    details.style.display = (details.style.display === 'none') ? 'block' : 'none';
    }
    function downloadResume() {
    var element = document.getElementById('resume');
    html2pdf(element);
    }
    
    